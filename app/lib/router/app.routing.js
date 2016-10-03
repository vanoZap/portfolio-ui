"use strict";
var router_1 = require('@angular/router');
var map_component_1 = require('./../../template/controllers/map/map.component');
var chart_component_1 = require('./../../template/controllers/charts/chart.component');
var view_component_1 = require('./../../template/controllers/view/view.component');
var appRoutes = [
    {
        path: 'map',
        component: map_component_1.MapComponent
    },
    {
        path: 'chart',
        component: chart_component_1.ChartComponent
    },
    {
        path: 'view',
        component: view_component_1.ViewComponent
    },
    {
        path: '',
        redirectTo: '/map',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map