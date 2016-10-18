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
var forms_1 = require("@angular/forms");
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { TranslationService } from './translation.service';
var TranslationComponent = (function () {
    function TranslationComponent(formBuilder) {
        this._formBuilder = formBuilder;
    }
    TranslationComponent.prototype.ngOnInit = function () {
        this._registerForm = this._formBuilder.group({
            firstname: ['', forms_1.Validators.minLength(3)],
            lastname: ['', forms_1.Validators.minLength(3)],
        });
    };
    return TranslationComponent;
}());
TranslationComponent = __decorate([
    core_1.Component({
        selector: 'as-translation',
        templateUrl: 'app/translation/translation.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], TranslationComponent);
exports.TranslationComponent = TranslationComponent;
//# sourceMappingURL=translation.component.js.map