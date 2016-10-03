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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('../app.component');
var app_routing_1 = require('./../lib/router/app.routing');
var header_component_1 = require('./../template/controllers/header/header.component');
var dashboard_component_1 = require('./../template/controllers/dashboard/dashboard.component');
var map_component_1 = require('./../template/controllers/map/map.component');
var chart_component_1 = require('./../template/controllers/charts/chart.component');
var view_component_1 = require('./../template/controllers/view/view.component');
var profiler_service_1 = require('./../lib/helpers/profiler/profiler.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                dashboard_component_1.DashboardComponent,
                map_component_1.MapComponent,
                chart_component_1.ChartComponent,
                view_component_1.ViewComponent
            ],
            providers: [profiler_service_1.ProfileService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map