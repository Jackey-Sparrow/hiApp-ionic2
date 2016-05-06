/**
 * Created by Jackey Li on 2016/5/5.
 */
import {Page, Translate, NavParams, Events} from 'ionic-angular';
import {languagesService} from '../common/services/language-service';
import {UserLocalStorage} from './../common/services/user-local-storage';

@Page({
	templateUrl: 'build/pages/setting/change-language.html'
})

export class ChangeLanguage {

	static get parameters() {
		return [[Translate], [NavParams], [Events]];
	}

	constructor(translate, navParams, events) {
		this.translate = translate;
		this.selectedLanguage = navParams.data.languageKey;
		this.languageUI = languagesService.languagesUI;
		this.events = events;
		this.localStorage = new UserLocalStorage();
	}

	loadTranslation() {
		this.title = this.translate.translate('switchLanguage');
	}

	changeLanguage() {
		this.translate.setLanguage(this.selectedLanguage);
		this.loadTranslation();
		let that = this;
		this.storeLanguage(this.selectedLanguage)
	}

	storeLanguage(key) {
		var that = this;
		this.localStorage.getUser().then(function (user) {
			if (user) {
				user = JSON.parse(user);
				user.languageKey = key;
				that.localStorage.setUser(user).then(function () {
					that.events.publish('onLanguageChanged', that.selectedLanguage);
				});

			}
		});
	}
}