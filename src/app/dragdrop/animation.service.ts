import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable()

export class AnimationService {
    private _heroes: Array<Hero>;

    constructor() {
        this._heroes = [{
            name: 'jhon',
            state: 'active',
        }, {
            name: 'Patrick',
            state: 'active',
        }];
    }
    public get heroes(): Array<Hero> {
        return this._heroes;
    }

    public set heroes(value: Array<Hero>){
        this._heroes = value ;
    }
}
