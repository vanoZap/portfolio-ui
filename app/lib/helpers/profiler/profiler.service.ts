import { Injectable } from '@angular/core';

@Injectable()

export class ProfileService {
    private profile = {
        info: {
            style: {
                photo: {background: 'url(../asset/img/man.jpg) center center no-repeat'},
                canvas: {background: 'url(../asset/img/priroda_10.jpg) center center no-repeat'}
            },
            firstName: 'Artem',
            lastName: 'Ivanov',
            shortName: '',
            profession: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad asperiores ' +
            'aspernatur corporis, earum ex explicabo harum hic ipsa ipsam maxime minima nihil numquam quibusdam ' +
            'quisquam quod reprehenderit sed, soluta?',
            relations: 103

        },
        settings: [
            {name: 'Schedule Meeting', status: null},
            {name: 'Call clients for follow-up', status: null},
            {name: 'Book flight for holiday', status: null},
            {name: 'Forward important tasks', status: true},
            {name: 'Recieve shipment', status: null},
            {name: 'Important tasks', status: null}
        ],
        relations: {

        }
    };

    constructor() {
        this.profile.info.shortName = this.getShortName(
            this.profile.info.firstName,
            this.profile.info.lastName
        );
    }

    getProfile(): any {
        return this.profile;
    }

    getShortName(fN, lN) {
        return fN.charAt(0) + lN.charAt(0);
    }
}
