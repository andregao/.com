import { Component, OnInit } from '@angular/core';
import { GaService } from '../ga.service';

@Component({
  selector: 'ag-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public ga: GaService) {
  }

  ngOnInit() {
  }

}
