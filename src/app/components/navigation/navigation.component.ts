import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { routes as AppRoutes } from '../../modules/app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
