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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AboutContainerComponent = (function () {
    function AboutContainerComponent() {
    }
    AboutContainerComponent = __decorate([
        core_1.Component({
            selector: 'about-home',
            template: "<h3>About Container</h3>"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutContainerComponent);
    return AboutContainerComponent;
}());
exports.AboutContainerComponent = AboutContainerComponent;
var AboutItemComponent = (function () {
    function AboutItemComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    AboutItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = parseInt(params['id'], 10); });
    };
    AboutItemComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    AboutItemComponent = __decorate([
        core_1.Component({
            selector: 'about-item',
            template: "<h3>About Item Id: {{id}}</h3>"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AboutItemComponent);
    return AboutItemComponent;
}());
exports.AboutItemComponent = AboutItemComponent;
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: "<h2>About</h2>\n    <div class=\"inner-nav\">\n    <a [routerLink]=\"['/about']\">Container</a>\n    <a [routerLink]=\"['/about/item', 1]\">Item 1</a>\n    <a [routerLink]=\"['/about/item', 2]\">Item 2</a>\n    </div>\n    <div class=\"inner-container\">\n    <router-outlet></router-outlet>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map