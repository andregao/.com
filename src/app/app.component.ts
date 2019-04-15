import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from './core/layout.service';
import { HeaderComponent } from './core/header/header.component';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(HeaderComponent, {read: ElementRef}) header: ElementRef;
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  iconMap = {
    projects: 'build',
    education: 'school',
    experience: 'work',
    about: 'person',
  };

  constructor(
    public layoutService: LayoutService,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.layoutService.sidenav = this.sidenav;
    this.layoutService.registerElement('header', this.header);
  }

}
