import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from "../../../lib/helpers/profiler/profiler.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/template/dashboard.tp.html',
    animations: [
        trigger('acordion', [
            state('in', style({height: '*', overflow: 'hidden'})),
            state('out', style({height: 0, overflow: 'hidden'})),
            transition('in => out', animate('400ms ease-in')),
            transition('out => in', animate('400ms ease-in'))
        ])
    ]
})

export class DashboardComponent implements OnInit {

    public avatar: Object;
    public name: string;
    public profession: string;
    public navStatus = 'out';
    public profile: any;
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
        }
    ];

    constructor(
        private router: Router,
        private profile: ProfileService) {
        this.profile = profile.getProfile();
    }

    ngOnInit() {
        this.name = this.profile.info.shortName;
        this.profession = this.profile.info.profession;
        this.avatar = {background: 'url(../asset/img/man.jpg) center center no-repeat'};
    }

    onShowSubItems(item: any) {
        item.status = item.status === 'in' ? 'out' : 'in';
    }

    onShowItems() {
        this.navStatus = this.navStatus === 'in' ? 'out' : 'in';
    }

    goLink(e, name) {
        e.preventDefault();
        e.stopPropagation();
        let link = ['/'+name];
        this.router.navigate(link);
    }
}