import { Component, OnInit } from '@angular/core';

import { TargetComponent } from '../target.component';

@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent extends TargetComponent implements OnInit {

  scrapystate = 0;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
