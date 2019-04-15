import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { LayoutService } from '../../../core/layout.service';

@Component({
  selector: 'ag-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() sectionContent: Project[];

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
  }

}
