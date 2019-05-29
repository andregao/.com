import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { SlideshowComponent } from '../shared/slideshow/slideshow.component';
import { DialogData } from '../shared/models/dialog-data';
import { auditTime, debounceTime, filter, map, startWith, takeUntil } from 'rxjs/operators';
import { fromEvent, Observable, Subject } from 'rxjs';
import { ViewportRuler } from '@angular/cdk/overlay';
import { tap } from 'rxjs/internal/operators/tap';
import { GaService } from './ga.service';

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class LayoutService implements OnDestroy {
  sidenav: MatSidenav;
  private _navItems: string[] = [];
  get navItems() {
    return this._navItems;
  }

  set navItems(value) {
    // asynchronously sets value to avoid change detection error in dev mode
    setTimeout(() => this._navItems = value);
  }

  manualScroll = true;
  viewportHeight: number;
  private elements: {[elementName: string]: ElementRef} = {};

  private headerIsShown = new Subject<boolean>();
  headerIsShown$ = this.headerIsShown.asObservable();
  private machineScroll = new Subject<null>();
  machineScroll$ = this.machineScroll.asObservable();
  private currentSection = new Subject<string>();
  currentSection$ = this.currentSection.asObservable();

  private unsubscribe = new Subject<null>();
  unsubscribe$ = this.unsubscribe.asObservable();

  constructor(
    private dialog: MatDialog,
    private viewport: ViewportRuler,
    private ga: GaService,
  ) {
    // monitor viewport change
    this.viewport.change().pipe(
      startWith(null),
      debounceTime(500),
      takeUntil(this.unsubscribe$),
    ).subscribe(() => this.onViewportChange());

    // debounce and switch back to manual scroll state
    this.machineScroll$.pipe(
      tap(() => this.manualScroll = false),
      debounceTime(1500),
      takeUntil(this.unsubscribe$),
    ).subscribe(() => this.manualScroll = true);

    this.controlHeaderDisplay();
    this.syncNavOnScroll();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  isInView(sectionName: string) {
    const sectionNative: HTMLElement = this.elements[sectionName].nativeElement;
    const bottom = sectionNative.getBoundingClientRect().bottom;
    const top = sectionNative.getBoundingClientRect().top;
    const positionThreshold = this.viewportHeight * .3;
    const topEdgeIsAboveThreshold = top <= positionThreshold;
    const bottomEdgeIsBelowThreshold = bottom > positionThreshold;
    return topEdgeIsAboveThreshold && bottomEdgeIsBelowThreshold;
  }

  syncNavOnScroll() {
    this.getScrollDirection().pipe(
      filter(() => this.manualScroll),
      takeUntil(this.unsubscribe$),
    ).subscribe(() => {
      this.navItems.some(sectionName => {
        if (this.isInView(sectionName)) {
          this.currentSection.next(sectionName);
          return true; // array.some() to stop iterating once returns true(loop break)
        } else {
          this.currentSection.next(null);
        }
      });
    });
  }

  onViewportChange() {
    this.viewportHeight = this.viewport.getViewportSize().height;
    // close sidenav if screen is xSmall
    if (this.viewport.getViewportSize().width >= 600) {
      this.sidenav.toggle(false);
    }
  }

  controlHeaderDisplay() {
    this.getScrollDirection().pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe(direction => {
      direction === 'up' && !this.isHeroPresent() && this.manualScroll
        ? this.headerIsShown.next(true)
        : this.headerIsShown.next(false);
    });
  }

  isHeroPresent() {
    const hero: DOMRect = this.elements.hero.nativeElement.getBoundingClientRect();
    return (hero.height + hero.top) >= 100;
  }

  getScrollDirection(): Observable<string> {
    let prevPosition = window.scrollY;
    return fromEvent(document, 'scroll').pipe(
      auditTime(400),
      filter(() => Math.abs(window.scrollY - prevPosition) > 20),
      map(() => {
        const direction = window.scrollY < prevPosition ? 'up' : 'down';
        prevPosition = window.scrollY;
        return direction;
      }),
    );
  }

  openSlideshow(data: DialogData) {
    gtag('event', this.ga.mapCaptionToTarget(data.items[0].caption));
    this.dialog.open(SlideshowComponent, {data});
  }

  registerElement(elementName: string, elementRef: ElementRef, type: string = '') {
    this.elements[elementName] = elementRef;
    if (type === 'nav') {
      this.navItems.push(elementName);
    }
  }

  scrollTo(sectionName: string) {
    sectionName = sectionName.toLowerCase();
    this.sidenav.toggle(false);
    this.machineScroll.next();
    this.currentSection.next(sectionName);
    this.elements[sectionName].nativeElement.scrollIntoView({behavior: 'smooth'});
  }

}
