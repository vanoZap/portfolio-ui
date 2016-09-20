import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: 'app/template/map.tp.html'
})

export class MapComponent implements OnInit {
    ngOnInit() {
        // locate in vendor
        initMap();
    }
}
