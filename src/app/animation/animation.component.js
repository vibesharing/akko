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
var animation_service_1 = require("./animation.service");
var AnimationComponent = (function () {
    function AnimationComponent(animationService) {
        this._heroes = Array();
        this._animationService = animationService;
        this._heroes = [];
    }
    AnimationComponent.prototype.ngOnInit = function () {
        this._heroes = this._animationService.hereos;
    };
    AnimationComponent.prototype.toggleState = function (event, index) {
        console.log(index);
        this._heroes[index].state = 'inactive';
    };
    return AnimationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AnimationComponent.prototype, "heroes", void 0);
AnimationComponent = __decorate([
    core_1.Component({
        selector: 'as-animation',
        templateUrl: 'app/animation/animation.html',
        animations: [
            core_1.trigger('heroState', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#666',
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [animation_service_1.AnimationService])
], AnimationComponent);
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=animation.component.js.map