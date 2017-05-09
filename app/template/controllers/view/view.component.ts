import {Component, OnInit} from "@angular/core";
import {ProfileService} from "../../../lib/helpers/profiler/profiler.service";

@Component ({
    selector: 'app-view',
    templateUrl: 'app/template/view-profile.tp.html'
})

export class ViewComponent implements OnInit {

    private profile: any;
    constructor(public prof: ProfileService) {
        this.profile = prof.getProfile();
    }

    ngOnInit() {

    }
}