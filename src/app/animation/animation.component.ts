import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  OnInit
} from '@angular/core';

import { AnimationService } from './animation.service';


@Component({
    selector: 'as-animation',
    templateUrl: 'app/animation/animation.html',
    animations: [
      trigger('heroState', [
        state('inactive', style({
          backgroundColor: '#666',
          transform: 'scale(1)'
        })),
        state('active',   style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
      ])
    ]
})

export class AnimationComponent implements OnInit {
  @Input() heroes: any;

  private _animationService: AnimationService;
  private _heroes = Array<any>();

    constructor(animationService: AnimationService) {
      this._animationService = animationService;
      this._heroes = [];
    }

    public ngOnInit(): void {
      this._heroes = this._animationService.hereos;
    }

    public toggleState(event: any, index: number) {
      console.log(index);
      this._heroes[index].state = 'inactive';
    }
}
