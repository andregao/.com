import {
  AfterViewInit,
  Component,
  EmbeddedViewRef,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData, DialogDataItem } from '../models/dialog-data';
import { CdkScrollable, Overlay, OverlayRef, ScrollDispatcher, ViewportRuler } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { debounceTime, filter, skip, takeUntil } from 'rxjs/operators';
import { GaService } from '../../core/ga.service';

@Component({
  selector: 'ag-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnDestroy, AfterViewInit, OnInit {
  @ViewChild('scroller', { read: CdkScrollable, static: true }) scroller: CdkScrollable;
  @ViewChild('imageOverlay', { read: TemplateRef, static: true }) imageOverlay: TemplateRef<any>;
  imageOverlayView: EmbeddedViewRef<any>;
  overlayRef: OverlayRef;

  private _currentIndex: number = 0;
  set currentIndex(index) {
    this._currentIndex = index;
    this.machineScroll();
    this.scrollTo(index);
  }

  get currentIndex() {
    return this._currentIndex;
  }

  scrollerWidth: number;
  contentWidth: number;

  unsubscribe = new Subject<null>();
  manualScroll: boolean = true;
  switchBackToManualScroll = new Subject<null>();
  switchBackToManualScroll$ = this.switchBackToManualScroll.asObservable();

  constructor(
    public dialogRef: MatDialogRef<SlideshowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private scrollDispatcher: ScrollDispatcher,
    private viewport: ViewportRuler,
    private ngZone: NgZone,
    public ga: GaService,
  ) {
  }

  ngOnInit(): void {
    this.overlayRef = this.overlay.create(
      {scrollStrategy: this.overlay.scrollStrategies.block()}
    );
    this.updateScrollerParams();
    if (this.data.initialIndex) {
      this.currentIndex = this.data.initialIndex;
    }

    // monitor if scrolling is manual
    this.switchBackToManualScroll$.pipe(
      debounceTime(800),
      takeUntil(this.unsubscribe),
    ).subscribe(() => this.manualScroll = true);

    // monitor manual scrolling and update current index
    this.scrollDispatcher.scrolled(200).pipe(
      skip(1),
      debounceTime(300),
      filter(() => this.manualScroll),
      takeUntil(this.unsubscribe),
    ).subscribe((scroll: CdkScrollable) => {
      this.manualScrollSetIndex(scroll);
    });

    // react to browser resize
    this.viewport.change().pipe(
      debounceTime(300),
      takeUntil(this.unsubscribe),
    ).subscribe(() => this.onViewportChange());
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.overlayRef.dispose();
    // console.log('slideshow destroyed');
  }

  machineScroll() {
    this.manualScroll = false;
    this.switchBackToManualScroll.next();
  }

  onViewportChange() {
    // const fromStart = this.scrollerFrame.measureScrollOffset('start');
    // this.calculateIndex(fromStart);
    this.updateScrollerParams();
    this.scrollTo(this.currentIndex);
  }

  scrollTo(index: number) {
    this.scroller.scrollTo({left: this.contentWidth * index});
  }

  updateScrollerParams() {
    const scrollerNative: HTMLElement = this.scroller.getElementRef().nativeElement;
    this.contentWidth = scrollerNative.getBoundingClientRect().width;
    this.scrollerWidth = this.contentWidth * this.data.items.length;
  }

  calculateIndex(fromStart: number) {
    this.currentIndex = Math.round(
      (fromStart / this.scrollerWidth) * this.data.items.length
    );
  }

  manualScrollSetIndex(scroll: CdkScrollable) {
    const fromStart = scroll.measureScrollOffset('start');
    this.ngZone.run(() => {
      this._currentIndex = Math.round(
        (fromStart / this.scrollerWidth) * this.data.items.length
      );
    });
  }

  openOverlay({url, caption}: DialogDataItem) {
    const imageOverlayPortal = new TemplatePortal(
      this.imageOverlay, this.viewContainerRef, {$implicit: url, caption}
    );
    this.overlayRef.attach(imageOverlayPortal);
  }

  closeImageOverlay() {
    this.overlayRef.detach();
  }

  getYoutubeIframe(vid: string): string {
    return this.contentWidth ? `
      <iframe width="${this.contentWidth - 60}" height="${(this.contentWidth - 60) / 16 * 9}"
          src="https://www.youtube.com/embed/${vid}" frameborder="0"
          allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
     ` : '';
  }

  isIosSafari() {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    return iOSSafari;
  }
}
