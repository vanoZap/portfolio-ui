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
var profiler_service_1 = require("../../../lib/helpers/profiler/profiler.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, prof) {
        this.router = router;
        this.prof = prof;
        this.navStatus = 'out';
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
                        title: 'chart',
                        icon: 'fa fa-line-chart'
                    }
                ]
            },
            {
                title: 'prof',
                status: 'out',
                subMenu: [
                    {
                        name: 'view',
                        title: 'view',
                        icon: 'fa fa-eye'
                    },
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
            },
            {
                title: 'sched',
                status: 'out',
                subMenu: [
                    {
                        name: 'sched',
                        title: 'sched',
                        icon: 'fa fa-calendar'
                    }
                ]
            }
        ];
        this.profile = prof.getProfile();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.name = this.profile.info.shortName;
        this.profession = this.profile.info.profession;
        this.avatar = { background: 'url(../asset/img/man.jpg) center center no-repeat' };
    };
    DashboardComponent.prototype.onShowSubItems = function (item) {
        item.status = item.status === 'in' ? 'out' : 'in';
    };
    DashboardComponent.prototype.onShowItems = function () {
        this.navStatus = this.navStatus === 'in' ? 'out' : 'in';
    };
    DashboardComponent.prototype.goLink = function (e, name) {
        e.preventDefault();
        e.stopPropagation();
        var link = ['/' + name];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: 'app/template/dashboard.tp.html',
            animations: [
                core_1.trigger('acordion', [
                    core_1.state('in', core_1.style({ height: '*' })),
                    core_1.state('out', core_1.style({ height: 0 })),
                    core_1.transition('in => out', core_1.animate('400ms ease-in')),
                    core_1.transition('out => in', core_1.animate('400ms ease-in'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, profiler_service_1.ProfileService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map