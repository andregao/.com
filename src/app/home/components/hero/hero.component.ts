import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroXs = {height: '60vh', 'background-position': '63% 60%'};
  heroSm = {height: '50vh', 'background-position': '40% 45%'};
  heroMd = {height: '40vh', 'background-position': '50% 30%'};
  heroLg = {height: '40vh', 'background-position': '20% 40%'};
  heroLtLg = {height: '40vh', 'background-position': '50% 35%'};

  constructor() {
  }

  ngOnInit() {
  }

}
