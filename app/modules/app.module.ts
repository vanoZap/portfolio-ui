import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../app.component';
import { routing } from './../lib/router/app.routing';

import { HeaderComponent } from './../template/controllers/header/header.component';
import { DashboardComponent } from './../template/controllers/dashboard/dashboard.component';
import { MapComponent } from './../template/controllers/map/map.component';
import { ChartComponent } from './../template/controllers/charts/chart.component';
import { ViewComponent } from './../template/controllers/view/view.component';

import { ProfileService } from './../lib/helpers/profiler/profiler.service';

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        MapComponent,
        ChartComponent,
        ViewComponent
    ],
    providers: [ProfileService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }