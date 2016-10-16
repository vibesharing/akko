import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './index';
import { AnimationService } from './animation.service';

@NgModule({
    declarations: [
        AnimationComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AnimationComponent
    ],
    providers: [
        AnimationService,
    ],
})
export class AnimationModule {
}
