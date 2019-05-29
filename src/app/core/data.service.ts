import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { TEXTCONTENT } from '../shared/text-content.data';
import { Company } from '../shared/models/company';
import { Personal } from '../shared/models/personal';
import { Project } from '../shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private text = new BehaviorSubject({});
  text$ = this.text.asObservable();
  projects$: Observable<Project[]> = this.text$.pipe(pluck('projects'));
  education$ = this.text$.pipe(pluck('education'));
  experience$: Observable<Company[]> = this.text$.pipe(pluck('experience'));
  personal$: Observable<Personal> = this.text$.pipe(pluck('personal'));

  constructor() {
    this.text.next(TEXTCONTENT);
  }

}
