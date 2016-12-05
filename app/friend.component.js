"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var friend_service_1 = require('app/friend.service');
var FriendComponent = (function () {
    //Assign 
    function FriendComponent(_friendService) {
        this.friends = _friendService.getFriends();
    }
    FriendComponent = __decorate([
        core_1.Component({
            selector: 'my-friends',
            providers: [friend_service_1.FriendService],
            styles: ["\n  div { \n     background-color:#EFEFEF;\n     margin-bottom:15px;\n     padding:15px;\n     border:1px solid #DDD;\n     box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);\n    border-radius:3px;\n  }\n  h2 { \n    text-align: center;\n  }\n  "],
            template: "\n  <h2>Hello from the {{componentName}}!</h2>\n  <div *ngFor=\"#f of friends\">\n   <h4> Name : {{f.name}} </h4> <h4>Age: {{f.age}}</h4> \n  </div>\n  "
        })
    ], FriendComponent);
    return FriendComponent;
}());
exports.FriendComponent = FriendComponent;
