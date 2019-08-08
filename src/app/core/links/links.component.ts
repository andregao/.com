import { Component, Input, OnInit } from '@angular/core';
import { GaService } from '../ga.service';

@Component({
  selector: 'ag-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  @Input() theme: {color, margin};

  constructor(public ga: GaService) {
  }

  ngOnInit() {
  }

}
