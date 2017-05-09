"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ScheduleComponent = (function () {
    function ScheduleComponent() {
    }
    ScheduleComponent.prototype.ngOnInit = function () { };
    ScheduleComponent.prototype.addTask = function (parent, input) {
        var label = document.createElement('label');
        if (input.value !== '') {
            label.innerHTML = input.value;
            input.value = '';
            parent.insertBefore(label, input);
        }
    };
    ScheduleComponent.prototype.onClickAddTask = function (event) {
        var parent = event.target.parentElement, input = parent.querySelector('input');
        this.addTask(parent, input);
        input.focus();
    };
    ScheduleComponent.prototype.onKeyEnterAddTask = function (event) {
        var parent = event.target.parentElement, input = event.target;
        if (event.keyCode === 13) {
            this.addTask(parent, input);
        }
    };
    ScheduleComponent.prototype.onAddNewRecord = function () {
        //var sItems = document.querySelector( '.schedule-items' ),
        //    newRow = document.querySelector( '.new' ),
        //    item = document.createElement('div');
        //
        //item.className = 'item clearfix';
        //item.innerHTML = this.getNewRecord();
        //
        //sItems.insertBefore( item, newRow );
        console.log('adding');
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'app-schedule',
            templateUrl: 'app/template/schedule.tp.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map