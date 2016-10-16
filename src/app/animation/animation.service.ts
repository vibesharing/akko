import { Injectable } from '@angular/core';

@Injectable()

export class AnimationService {
    private _hereos: Array<any>;

    constructor() {
        this._hereos = [
            {
                name: 'jhon',
                age: '28',
                state: 'active',
            },
            {
                name: 'Phil',
                age: '45',
                state: 'active',
            },
            {
                name: 'Patrick',
                age: '35',
                state: 'active',
            }
        ];
    }
    public get hereos(): Array<any> {
        return this._hereos;
    }

    public set hereos(value: Array<any>){
        this._hereos = value ;
    }
}
