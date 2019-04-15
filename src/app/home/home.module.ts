import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PersonalComponent } from './components/personal/personal.component';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    PersonalComponent,
  ],
  imports: [
    SharedModule,
    CoreModule
  ]
})
export class HomeModule {
}
