import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class YoutubeService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }
}

