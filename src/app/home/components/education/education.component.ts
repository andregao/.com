import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../../core/layout.service';
import { DialogData } from '../../../shared/models/dialog-data';

@Component({
  selector: 'ag-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationDialog: DialogData = {
    items: [
      {type: 'image', url: './assets/education/diploma-1.jpg', caption: 'Degree'},
      {type: 'image', url: './assets/education/diploma-2.jpg', caption: 'Transcript'},
    ],
    // initialIndex: 0,
  };
  @Input() sectionContent;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
    // setTimeout(() => this.layoutService.openSlideshow(this.educationDialog), 500);
  }


  openDiplomaDialog() {
    this.layoutService.openSlideshow(this.educationDialog);
  }

}
