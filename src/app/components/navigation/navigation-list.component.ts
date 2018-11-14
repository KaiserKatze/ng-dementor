import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import { routes as AppRoutes } from '../../modules/app-routing.module';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.css']
})
export class NavigationListComponent implements OnInit {

  navItems: NavItem[];
  selectedIndex: number = 0;

  constructor() {
    const navItems = AppRoutes.map((value: Route) => new NavItem(value.path, 1));
    this.navItems = [new NavItem('home', 0)].concat(navItems);
  }

  ngOnInit() {
  }

  get selectedItem() {
    return this.navItems[this.selectedIndex];
  }

}

class NavItem {

  constructor(
    // `text`:  used in template.
    public text: string,
    // `type`:  0 represents item;
    //          1 represents dropdown menu.
    public type: number,
  ) {}

}
