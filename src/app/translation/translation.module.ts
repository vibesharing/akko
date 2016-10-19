import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationComponent } from './index';
import { TranslationService } from './translation.service';
import { TranslationPipe } from './translation.pipe';
import { HttpModule } from '@angular/http';
import { TRANSLATION_PROVIDERS } from './translation';


@NgModule({
    declarations: [
        TranslationComponent, TranslationPipe
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
        TranslationService, TRANSLATION_PROVIDERS
    ],
})
export class TranslationModule {
}
