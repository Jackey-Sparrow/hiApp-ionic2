import {Page, Translate, NavController, Events, Alert} from 'ionic-angular';
import {UserLocalStorage} from './../common/services/user-local-storage';
import {languagesService} from './../common/services/language-service';
import {ChangeLanguage} from './change-language';


@Page({
	templateUrl: 'build/pages/setting/setting.html'
})

export class Setting {

	static get parameters() {
		return [[Translate], [NavController], [Events]]
	}

	constructor(translate, nav, events) {
		this.translate = translate;
		this.userLocalStorage = new UserLocalStorage();
		this.nav = nav;
		this.events = events;
		this.loadTranslation();
		this.onLanguageChanged();
	}

	loadTranslation() {
		this.setting = {
			title: this.translate.translate('settingTitle'),
			feedback: this.translate.translate('feedback'),
			update: this.translate.translate('update'),
			switchLanguage: this.translate.translate('switchLanguage'),
			about: this.translate.translate('about')
		};

		this.loadLanguageUI();
	}

	loadLanguageUI() {
		let that = this;
		this.userLocalStorage.getUser().then(function (user) {
			user = JSON.parse(user);
			that.setting.language = languagesService.getLanguageUIByKey(user.languageKey).name;
			that.languageKey = user.languageKey;
		}, function (error) {
			console.log(error);
		});
	}

	changeLanguage() {
		this.nav.push(ChangeLanguage, {languageKey: this.languageKey});
	}

	onLanguageChanged() {
		let that = this;
		this.events.subscribe('onLanguageChanged', (key)=> {
			that.loadTranslation();
		});
	}

	aboutUs() {
		let alert = Alert.create({
			title: 'HiApp-ionic2',
			message: 'Author : Jackey Sparrow',
			buttons: ['OK']
		});

		this.nav.present(alert);

	}


}
