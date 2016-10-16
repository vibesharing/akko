import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './index';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        WeatherComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    exports: [
        WeatherComponent
    ],
    providers: [
        WeatherService,
    ],
})
export class WeatherModule {
}
