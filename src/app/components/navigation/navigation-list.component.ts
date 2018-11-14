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
    this.navItems = AppRoutes.map((value: Route) => {
      return {
        text: value.path,
      };
    });
  }

  ngOnInit() {
  }

}
