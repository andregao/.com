import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Company } from '../../../shared/models/company';
import { LayoutService } from '../../../core/layout.service';

@Component({
  selector: 'ag-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit {
  @Input() sectionContent: Company[];

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
  }


}
