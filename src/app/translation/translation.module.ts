import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationComponent } from './index';
import { TranslationService } from './translation.service';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        TranslationComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],
    exports: [
        TranslationComponent
    ],
    providers: [
        TranslationService,
    ],
})
export class TranslationModule {
}
