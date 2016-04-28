import {Page, Translate} from 'ionic-angular';
import {ContactService} from './services/contact-service.js';
import {Http} from 'angular2/http';

@Page({
    templateUrl: 'build/pages/contacts/contacts.html'
})

export class Contacts {

    static get parameters() {
        return [[Translate], [Http]];
    }

    constructor(translate, http) {
        this.translate = translate;
        this.http = http;

        this.title = this.translate.translate('contactTitle');

        this.dataService = new ContactService(this.http);
    }
}
