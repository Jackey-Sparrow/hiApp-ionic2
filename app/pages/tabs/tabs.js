import {Page, Translate, Events} from 'ionic-angular';
import {Tweet} from '../tweet/tweet';
import {Contacts} from '../contacts/contacts';
import {Setting} from '../setting/setting';

@Page({
	templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
	static get parameters() {
		return [[Translate], [Events]];
	}

	constructor(translate, events) {
		// this tells the tabs component which Pages
		// should be each tab's root Page
		this.tab1Root = Tweet;
		this.tab2Root = Contacts;
		this.tab3Root = Setting;
		this.events = events;

		this.translate = translate;
		this.loadTranslation();

		this.onLanguageChanged();
	}

	loadTranslation() {
		this.tab = {
			'tab1': this.translate.translate('tab1'),
			'tab2': this.translate.translate('tab2'),
			'tab3': this.translate.translate('tab3')
		}
	}

	onLanguageChanged() {
		let that = this;
		this.events.subscribe('onLanguageChanged', (key)=> {
			that.loadTranslation();
		});
	}
}
