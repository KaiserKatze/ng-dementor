import { Component, OnInit } from '@angular/core';
import { Route, Routes } from '@angular/router';

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
    const navItems = NavItem.convert(AppRoutes);
    this.navItems = [new NavItem('home', 0)].concat(navItems);
  }

  ngOnInit() {
  }

  get selectedItem() {
    return this.navItems[this.selectedIndex];
  }

  set selectedItem(navItem: NavItem) {
    if (navItem) {
      const index = this.navItems.indexOf(navItem);
      if (index >= 0) {
        this.selectedIndex = index;
      }
    }
  }

}

class NavItem {

  constructor(
    // `text`:  used in template.
    public text: string,
    // `type`:  0 represents item;
    //          1 represents dropdown menu.
    public type: number,
    // `menu`:  used in template.
    public menu: NavItem[] = null,
    // `link`:  used in template.
    public link: string = null,
    // `id`:    used in template.
    public id: string = text,
  ) {
  }

  /**
  Convert a Route array into a NavItem array.
  */
  static convert(routes: Routes, link: string = ''): NavItem[] {
    return routes.map((value: Route) => {
      const path = value.path;
      const type = 1;
      const menu = value.children ? NavItem.convert(value.children, link) : null;
      link += path;
      return new NavItem(path, type, menu, link);
    });
  }

}
