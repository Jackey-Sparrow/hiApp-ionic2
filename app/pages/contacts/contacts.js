import {Page, Translate, NavController, Events} from 'ionic-angular';
import {ContactService} from './services/contact-service.js';
import {Http} from 'angular2/http';
import {ContactDetail} from './contact-detail';

@Page({
	templateUrl: 'build/pages/contacts/contacts.html'
})

export class Contacts {

	static get parameters() {
		return [[Translate], [Http], [NavController], [Events]];
	}

	constructor(translate, http, nav, events) {
		this.translate = translate;
		this.http = http;
		this.nav = nav;
		this.events = events;
		this.dataService = new ContactService(this.http);
		this.contacts = [];
		this.loadTranslation();
		this.loadData();
		this.onLanguageChanged();
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

	onLanguageChanged() {
		let that = this;
		this.events.subscribe('onLanguageChanged', (key)=> {
			that.loadTranslation();
		});
	}

	loadTranslation() {
		this.title = this.translate.translate('contactTitle');
	}

}
