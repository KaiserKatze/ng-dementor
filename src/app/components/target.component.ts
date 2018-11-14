import { Component, Input } from '@angular/core';

import { Target } from '../models/target.model';

@Component({})
export abstract class TargetComponent {

  @Input()
  protected target: Target;

  constructor() { }

}
