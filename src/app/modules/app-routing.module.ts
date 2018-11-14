import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuturesComponent } from '../components/futures/futures.component';
import { CurrenciesComponent } from '../components/currencies/currencies.component';


export const routes: Routes = [{
  path: 'futures',
  component: FuturesComponent,
}, {
  path: 'currencies',
  component: CurrenciesComponent,
}];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false, }
    ),
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ],
})
export class AppRoutingModule { }
