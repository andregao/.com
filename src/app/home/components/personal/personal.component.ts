import { Component, Input, OnInit } from '@angular/core';
import { DialogData } from '../../../shared/models/dialog-data';
import { LayoutService } from '../../../core/layout.service';
import { Personal } from '../../../shared/models/personal';

@Component({
  selector: 'ag-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  @Input() sectionContent: Personal;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
    // setTimeout(() => this.layoutService.openSlideshow(this.sections[2].dialog));
  }

}
