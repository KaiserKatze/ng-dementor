import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.css']
})
export class NavigationListComponent implements OnInit {

  navItems: NavItem[];
  selectedIndex: number = 0;

  constructor() {
    this.navItems = [new NavItem('home', 0)].concat([
      NavItem.createRootNavItem('futures', ['shfe']),
      NavItem.createRootNavItem('currencies'),
    ]);
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
  static createRootNavItem(
    text: string,
    menu: string[] = null,
  ): NavItem {
    const nimenu: NavItem[] = menu ? menu.map((entry: string) => {
      const link = text + '/' + entry;
      return new NavItem(entry, 0, null, link);
    }) : null;
    return new NavItem(text, 1, nimenu);
  }

}
