"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
/** Nested Component */
var friend_component_1 = require('app/friend.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [friend_component_1.FriendComponent],
            styles: ["\n  h1 {\n    color:#545454;\n    background:#02A8F4;\n    padding:15px;\n    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);\n  }\n  "],
            template: "\n  <div>\n  <h1>Hello from the {{componentName}}.</h1>\n  <my-friends></my-friends>\n  </div>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent);
