"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./todolist/index");
var index_3 = require("./weather/index");
var index_4 = require("./youtube/index");
var index_5 = require("./questionnaire/index");
var index_6 = require("./map/index");
var index_7 = require("./animation/index");
var index_8 = require("./translation/index");
var appRoutes = index_1.HomeRoutes.concat(index_2.TodolistRoutes, index_3.WeatherRoutes, index_4.YoutubeRoutes, index_5.QuestionnaireRoutes, index_6.MapRoutes, index_7.AnimationRoutes, index_8.TranslationRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map