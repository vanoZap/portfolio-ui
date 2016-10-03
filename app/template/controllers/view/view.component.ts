import {Component, OnInit} from "@angular/core";
import {ProfileService} from "../../../lib/helpers/profiler/profiler.service";

@Component ({
    selector: 'app-view',
    templateUrl: 'app/template/view-profile.tp.html'
})

export class ViewComponent implements OnInit {

    private profile: any;
    constructor(public profile: ProfileService) {
        this.profile = profile.getProfile();
    }

    ngOnInit() {

    }
}