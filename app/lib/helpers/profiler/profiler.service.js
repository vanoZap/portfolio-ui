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
var ProfileService = (function () {
    function ProfileService() {
        this.profile = {
            info: {
                style: {
                    photo: { background: 'url(../asset/img/man.jpg) center center no-repeat' },
                    canvas: { background: 'url(../asset/img/priroda_10.jpg) center center no-repeat' }
                },
                firstName: 'Artem',
                lastName: 'Ivanov',
                shortName: '',
                profession: 'Web Developer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad asperiores ' +
                    'aspernatur corporis, earum ex explicabo harum hic ipsa ipsam maxime minima nihil numquam quibusdam ' +
                    'quisquam quod reprehenderit sed, soluta?',
                relations: 103
            },
            settings: [
                { name: 'Schedule Meeting', status: null },
                { name: 'Call clients for follow-up', status: null },
                { name: 'Book flight for holiday', status: null },
                { name: 'Forward important tasks', status: true },
                { name: 'Recieve shipment', status: null },
                { name: 'Important tasks', status: null }
            ],
            relations: {}
        };
        this.profile.info.shortName = this.getShortName(this.profile.info.firstName, this.profile.info.lastName);
    }
    ProfileService.prototype.getProfile = function () {
        return this.profile;
    };
    ProfileService.prototype.getShortName = function (fN, lN) {
        return fN.charAt(0) + lN.charAt(0);
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profiler.service.js.map