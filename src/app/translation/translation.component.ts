import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import { TranslationService } from './translation.service';


@Component({
    selector: 'as-translation',
    templateUrl: 'app/translation/translation.html',
})

export class TranslationComponent implements OnInit {
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
