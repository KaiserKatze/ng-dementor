import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { routes as AppRoutes } from '../../modules/app-routing.module';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.css']
})
export class NavigationListComponent implements OnInit {

  navItems: {}[];

  constructor() {
    // Data structure:
    // `type`:  0 represents item
    //          1 represents dropdown menu
    const navItems = AppRoutes.map((value: Route) => {
      return {
        text: value.path,
        type: 1,
      };
    });
    this.navItems = [{
      text: 'home',
      type: 0,
    }].concat(navItems);
  }

  ngOnInit() {
  }

}
