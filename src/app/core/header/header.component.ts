import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ag-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
