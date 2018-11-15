import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Target } from '../models/target.model';
import { TargetCollectorService } from './target-collector.service';

@Injectable({
  providedIn: 'root'
})
export class TargetResolverService implements Resolve<Target> {

  constructor(
    private collector: TargetCollectorService,
    private router: Router,
  ) {}

  navigate(): void {
    const url = '/';
    this.router.navigate([url]);
  }

  resolve(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<Target> | Observable<never> {
    const name = route.paramMap.get('name');

    return this.collector.getTarget(name).pipe(

      mergeMap(target => {
        if (target) {
          return of(target);
        } else {
          // name not found
          this.navigate();
          return EMPTY;
        }
      }),

    );
  }

}
