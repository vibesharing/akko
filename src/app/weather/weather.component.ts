import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'as-weather',
    templateUrl: 'app/weather/weather.html',
})

export class WeatherComponent {
    private _weatherService: WeatherService;

    private _city: string;

    constructor(weatherService: WeatherService) {
        this._weatherService = weatherService;
        this._city = 'Rio';
    }

    public searchWeather(): void {
        this._weatherService.getWeatherInCity(this._city);
    }
}
