import {Page, Translate, NavController} from 'ionic-angular';
import {ContactService} from './services/contact-service.js';
import {Http} from 'angular2/http';
import {ContactDetail} from './contact-detail';

@Page({
    templateUrl: 'build/pages/contacts/contacts.html'
})

export class Contacts {

    static get parameters() {
        return [[Translate], [Http], [NavController]];
    }

    constructor(translate, http, nav) {
        this.translate = translate;
        this.http = http;

        this.title = this.translate.translate('contactTitle');

        this.nav = nav;

        this.dataService = new ContactService(this.http);

        this.contacts = [];

        this.loadData();
    }

    loadData() {
        let that = this;
        this.dataService.loadData().then(function (data) {
            that.contacts = data;
        });
    }

    openContactDetail(item) {
        this.nav.push(ContactDetail, {contact: item});
    }

}
