import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../app.component';
import { routing } from './../lib/router/app.routing';

import { HeaderComponent } from './../template/controllers/header/header.component';
import { DashboardComponent } from './../template/controllers/dashboard/dashboard.component';
import { MapComponent } from './../template/controllers/map/map.component';

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        MapComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }