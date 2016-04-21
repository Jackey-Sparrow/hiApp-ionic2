import {Page, Translate} from 'ionic-angular';
import {UserLocalStorage} from './../common/services/user-local-storage';
import {languagesService} from './../common/services/language-service';

@Page({
	templateUrl: 'build/pages/setting/setting.html'
})

export class Setting {

	static get parameters() {
		return [[Translate]]
	}

	constructor(translate) {
		this.translate = translate;
		this.userLocalStorage = new UserLocalStorage();

		this.loadTranslation();
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
		}, function (error) {
			console.log(error);
		});
	}

}
