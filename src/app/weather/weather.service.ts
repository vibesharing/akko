import { Injectable } from '@angular/core';
import { OpenWeatherMap } from '../shared/constant/OpenWeatherMap';
import { Http, Response } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class WeatherService {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    public getWeatherInCity(param: string): any {
        console.log(param);
        console.log(OpenWeatherMap.api.weather + param + OpenWeatherMap.api.key + OpenWeatherMap.api.unit);
        return this._http.get(OpenWeatherMap.api.weather + param + OpenWeatherMap.api.key + OpenWeatherMap.api.unit)
            .map(response => response.json())
            .subscribe(response => this.handleResponse(response));
     }
    public handleResponse(res: Response) {
        console.log(res);
    }
}

