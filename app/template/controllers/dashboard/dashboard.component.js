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
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.menuItems = [
            {
                title: 'stat',
                status: 'out',
                subMenu: [
                    {
                        name: 'map',
                        title: 'map',
                        icon: 'fa fa-map-o'
                    },
                    {
                        name: 'chart',
                        title: 'map',
                        icon: 'fa fa-line-chart'
                    }
                ]
            },
            {
                title: 'prof',
                status: 'out',
                subMenu: [
                    {
                        name: 'new',
                        title: 'new',
                        icon: 'fa fa-plus'
                    },
                    {
                        name: 'edit',
                        title: 'edit',
                        icon: 'fa fa-pencil'
                    }
                ]
            }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.name = 'IG';
        this.profession = 'Web Developer';
        this.avatar = { background: 'url(../asset/img/man.jpg) center center no-repeat' };
    };
    DashboardComponent.prototype.onShowSubItems = function (item) {
        item.status = item.status === 'in' ? 'out' : 'in';
    };
    DashboardComponent.prototype.onShowItems = function () {
        this.navStatus = this.navStatus === 'in' ? 'out' : 'in';
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: 'app/template/dashboard.tp.html',
            animations: [
                core_1.trigger('acordion', [
                    core_1.state('in', core_1.style({ height: '*', overflow: 'hidden' })),
                    core_1.transition('in => out', core_1.animate('400ms ease-in')),
                    core_1.transition('out => in', core_1.animate('400ms ease-in')),
                    core_1.transition('* => void', [
                        core_1.style({ height: '*' }),
                        core_1.animate(800, core_1.style({ height: 0 }))
                    ]),
                    core_1.state('out', core_1.style({ height: 0, overflow: 'hidden' })),
                    core_1.transition('* => void', [
                        core_1.style({ height: 0 }),
                        core_1.animate(800, core_1.style({ height: '*' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map