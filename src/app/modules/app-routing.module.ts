import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuturesComponent } from '../components/futures/futures.component';
import { CurrenciesComponent } from '../components/currencies/currencies.component';
import { TargetResolverService } from '../services/target-resolver.service';

export const routes: Routes = [{
  path: 'futures',
  component: FuturesComponent,
  resolve: TargetResolverService,
  children: [{
    path: 'shfe',
    component: FuturesComponent,
    resolve: TargetResolverService,
  }],
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
