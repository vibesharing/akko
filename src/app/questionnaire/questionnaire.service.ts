import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class QuestionnaireService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    public searchMovie() {
        this._http.get('http://192.168.1.14:8000/todos')
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

