import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing } from './lib/router/app.routing';
import { HttpModule }     from '@angular/http';

import { HeaderComponent } from './template/controllers/header/header.component';
import { DashboardComponent } from './template/controllers/dashboard/dashboard.component';
import { MapComponent } from './template/controllers/map/map.component';
import { ChartComponent } from './template/controllers/charts/chart.component';
import { ViewComponent } from './template/controllers/view/view.component';
import { ScheduleComponent } from './template/controllers/schedule/schedule.component';

import { ProfileService } from './lib/helpers/profiler/profiler.service';

import { TextMaskDirective } from './lib/directive/text-mask.directive';

@NgModule({
    imports:      [
        BrowserModule,
        routing,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        MapComponent,
        ChartComponent,
        ViewComponent,
        ScheduleComponent,
        TextMaskDirective
    ],
    providers: [ProfileService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }