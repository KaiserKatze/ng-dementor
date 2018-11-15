import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';

import { Observable, EMPTY }  from 'rxjs';

import { Target } from '../models/target.model';

@Injectable({
  providedIn: 'root'
})
export class TargetCollectorService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getTarget(name: string): Observable<Target> {
    return EMPTY;
  }

}
