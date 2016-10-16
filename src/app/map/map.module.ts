import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './index';
import { MapService } from './map.service';
import { AgmCoreModule } from 'angular2-google-maps/core/index';


@NgModule({
    declarations: [
        MapComponent,
    ],
    imports: [
        CommonModule,
        AgmCoreModule,
    ],
    exports: [
        MapComponent
    ],
    providers: [
        MapService,
    ],
})
export class MapModule {
}
