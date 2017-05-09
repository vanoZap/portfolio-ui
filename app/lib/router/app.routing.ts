import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './../../template/controllers/map/map.component';
import { ChartComponent } from './../../template/controllers/charts/chart.component';
import { ViewComponent } from './../../template/controllers/view/view.component';
import {ScheduleComponent} from "../../template/controllers/schedule/schedule.component";

const appRoutes: Routes = [
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'chart',
        component: ChartComponent
    },
    {
        path: 'view',
        component: ViewComponent
    },
    {
        path: 'sched',
        component: ScheduleComponent
    },
    {
        path: '',
        redirectTo: '/map',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);
