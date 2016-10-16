import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { TodolistModule } from './todolist/todolist.module';
import { WeatherModule } from './weather/weather.module';
import { YoutubeModule } from './youtube/youtube.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { MapModule } from './map/map.module';
import { AnimationModule } from './animation/animation.module';
import { AgmCoreModule } from 'angular2-google-maps/core/index';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AnimationModule,
        NavbarModule,
        BrowserModule,
        CommonModule,
        HomeModule,
        TodolistModule,
        WeatherModule,
        YoutubeModule,
        HttpModule,
        JsonpModule,
        QuestionnaireModule,
        MapModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCQUsAs_aBPoJ0ogbE2BQm6VgR7-HOVcZ8',
        }),
        routing
    ],
    exports: [ AgmCoreModule ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
