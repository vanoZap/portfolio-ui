import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/template/dashboard.tp.html'
})

export class DashboardComponent implements OnInit {

    public avatar: Object;
    public name: string;
    public profession: string;

    constructor() { }

    ngOnInit() {
        this.name = 'IG';
        this.profession = 'Web Developer';
        this.avatar = {background: 'url(../asset/img/man.jpg) center center no-repeat'};
    }
}