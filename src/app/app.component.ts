import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  copyright = {
    from: 2018,
    period: '',
    claimant: 'KaiserKatze',
  };

  constructor() {
    let from: number = this.copyright.from;
    let now: Date = new Date();
    let toyear: number = now.getFullYear();
    if (toyear > from) {
      this.copyright.period = `${from}-${toyear}`;
    } else {
      this.copyright.period = from.toString();
    }
  }
}
