"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var FriendService = (function () {
    function FriendService() {
        this.friends = [
            { age: 40, name: 'Jordan Houston' },
            { age: 23, name: 'Josh Beh' },
            { age: 23, name: 'Joseph Canina' },
            { age: 24, name: 'Alexandra Wilkins' },
            { age: 22, name: 'Kiersten Costanzo' },
            { age: 23, name: 'Ku Sherwood' },
            { age: 25, name: 'Arta Halili' },
            { age: 21, name: 'Patrick Cooney' },
            { age: 21, name: 'Z.A. Perr' },
            { age: 18, name: 'Tyler Mulligan' },
            { age: 26, name: 'Dennis Dempsey' },
            { age: 32, name: 'Francis Yeager' },
            { age: 23, name: 'Phil Belardi' }
        ];
    }
    FriendService.prototype.getFriends = function () {
        return this.friends;
    };
    FriendService = __decorate([
        core_1.Injectable()
    ], FriendService);
    return FriendService;
}());
exports.FriendService = FriendService;
