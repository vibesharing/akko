"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var http_1 = require("@angular/http");
var shared_1 = require("./shared");
var home_module_1 = require("./home/home.module");
var todolist_module_1 = require("./todolist/todolist.module");
var weather_module_1 = require("./weather/weather.module");
var youtube_module_1 = require("./youtube/youtube.module");
var questionnaire_module_1 = require("./questionnaire/questionnaire.module");
var map_module_1 = require("./map/map.module");
var animation_module_1 = require("./animation/animation.module");
var index_1 = require("angular2-google-maps/core/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            animation_module_1.AnimationModule,
            shared_1.NavbarModule,
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            home_module_1.HomeModule,
            todolist_module_1.TodolistModule,
            weather_module_1.WeatherModule,
            youtube_module_1.YoutubeModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            questionnaire_module_1.QuestionnaireModule,
            map_module_1.MapModule,
            index_1.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCQUsAs_aBPoJ0ogbE2BQm6VgR7-HOVcZ8',
            }),
            app_routing_1.routing
        ],
        exports: [index_1.AgmCoreModule],
        providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map