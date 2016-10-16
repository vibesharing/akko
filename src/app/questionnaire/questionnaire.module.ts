import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './index';
import { QuestionnaireService } from './questionnaire.service';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        QuestionnaireComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],
    exports: [
        QuestionnaireComponent
    ],
    providers: [
        QuestionnaireService,
    ],
})
export class QuestionnaireModule {
}
