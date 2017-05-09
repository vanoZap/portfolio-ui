import { ComponentRef, Injectable, Component, Injector, ViewContainerRef, ViewChild, OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

declare var initMap: any;

@Component({
    selector: 'app-schedule',
    templateUrl: 'app/template/schedule.tp.html'
})

export class ScheduleComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

    addTask( parent : HTMLInputElement, input : HTMLInputElement ) {
        var label = document.createElement( 'label' );

        if (input.value !== '') {
            label.innerHTML = input.value;
            input.value = '';
            parent.insertBefore( label, input );
        }
    }

    onClickAddTask( event: any ) {
        var parent = event.target.parentElement,
            input = parent.querySelector( 'input' );

        this.addTask( parent, input );

        input.focus();
    }

    onKeyEnterAddTask( event: any ) {
        var parent = event.target.parentElement,
            input = event.target;

        if (event.keyCode === 13) {
            this.addTask(parent, input);
        }
    }



    onAddNewRecord() {
        //var sItems = document.querySelector( '.schedule-items' ),
        //    newRow = document.querySelector( '.new' ),
        //    item = document.createElement('div');
        //
        //item.className = 'item clearfix';
        //item.innerHTML = this.getNewRecord();
        //
        //sItems.insertBefore( item, newRow );

        console.log('adding');
    }
}
