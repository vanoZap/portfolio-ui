import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/template/dashboard.tp.html',
    animations: [
        trigger('acordion', [
            state('in', style({height: '*', overflow: 'hidden'})),
            transition('in => out', animate('400ms ease-in')),
            transition('out => in', animate('400ms ease-in')),
            transition('* => void', [
                style({height: '*'}),
                animate(800, style({height: 0}))
            ]),
            state('out', style({height: 0, overflow: 'hidden'})),
            transition('* => void', [
                style({height: 0}),
                animate(800, style({height: '*'}))
            ])
        ])
    ]
})

export class DashboardComponent implements OnInit {

    public avatar: Object;
    public name: string;
    public profession: string;
    public navStatus: 'out';
    public menuItems = [
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

    constructor() { }

    ngOnInit() {
        this.name = 'IG';
        this.profession = 'Web Developer';
        this.avatar = {background: 'url(../asset/img/man.jpg) center center no-repeat'};
    }

    onShowSubItems(item: any) {
        item.status = item.status === 'in' ? 'out' : 'in';
    }

    onShowItems() {
        this.navStatus = this.navStatus === 'in' ? 'out' : 'in';
    }
}