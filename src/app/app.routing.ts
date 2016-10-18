import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { WeatherRoutes } from './weather/index';
import { YoutubeRoutes } from './youtube/index';
import { QuestionnaireRoutes } from './questionnaire/index';
import { MapRoutes } from './map/index';
import { AnimationRoutes } from './animation/index';
import { TranslationRoutes } from './translation/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...WeatherRoutes,
    ...YoutubeRoutes,
    ...QuestionnaireRoutes,
    ...MapRoutes,
    ...AnimationRoutes,
    ...TranslationRoutes,
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
