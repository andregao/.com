import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { LayoutService } from '../core/layout.service';
import { PersonalComponent } from './components/personal/personal.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { DataService } from '../core/data.service';

@Component({
  selector: 'ag-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(HeroComponent, {read: ElementRef}) hero: ElementRef;
  @ViewChild(ProjectsComponent, {read: ElementRef}) projects: ElementRef;
  @ViewChild(EducationComponent, {read: ElementRef}) education: ElementRef;
  @ViewChild(ExperienceComponent, {read: ElementRef}) experience: ElementRef;
  @ViewChild(PersonalComponent, {read: ElementRef}) personal: ElementRef;

  constructor(
    private layoutService: LayoutService,
    public dataService: DataService,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.layoutService.registerElement('hero', this.hero);
    this.layoutService.registerElement('projects', this.projects, 'nav');
    this.layoutService.registerElement('education', this.education, 'nav');
    this.layoutService.registerElement('experience', this.experience, 'nav');
    this.layoutService.registerElement('about', this.personal, 'nav');

  }

}
