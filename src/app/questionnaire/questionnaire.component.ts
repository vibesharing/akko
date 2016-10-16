import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import { QuestionnaireService } from './questionnaire.service';


@Component({
    selector: 'as-questionnaire',
    templateUrl: 'app/questionnaire/questionnaire.html',
})

export class QuestionnaireComponent implements OnInit {
    private _formBuilder: FormBuilder;
    private _registerForm: FormGroup;

    constructor( formBuilder: FormBuilder) {
        this._formBuilder = formBuilder;
    }

    public ngOnInit(): void {
        this._registerForm = this._formBuilder.group({
            firstname: ['', Validators.minLength(3)],
            lastname: ['', Validators.minLength(3)],
            /*address: this._formBuilder.group({
                street: '',
                zip: '',
                city: ''
            })*/
        });
    }
}
