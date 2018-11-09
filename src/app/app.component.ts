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
    const from: number = this.copyright.from;
    const now = new Date();
    const toyear = now.getFullYear();
    this.copyright.period = from + (toyear > from ? `-${toyear}` : '');
  }
}
