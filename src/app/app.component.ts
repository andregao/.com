import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from './core/layout.service';
import { HeaderComponent } from './core/header/header.component';
import { MatSidenav } from '@angular/material/sidenav';
import { GaService } from './core/ga.service';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(HeaderComponent, {read: ElementRef, static: true}) header: ElementRef;
  @ViewChild(MatSidenav, {static: true}) sidenav: MatSidenav;

  iconMap = {
    projects: 'build',
    education: 'school',
    experience: 'work',
    about: 'person',
  };

  constructor(
    public layoutService: LayoutService,
    public ga: GaService,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.layoutService.sidenav = this.sidenav;
    this.layoutService.registerElement('header', this.header);
  }

}
