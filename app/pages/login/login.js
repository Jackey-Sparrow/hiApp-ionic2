/**
 * Created by Jackey Li on 2016/4/17.
 */
import {Page, NavController, Loading, Translate} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {UserLocalStorage} from './../common/services/user-local-storage';
import {languagesService} from './../common/services/language-service';

@Page({
	templateUrl: 'build/pages/login/login.html'
})

export class Login {

	static get parameters() {
		return [[NavController], [Translate]];
	}

	constructor(nav, translate) {

		this.nav = nav;
		this.localStorage = new UserLocalStorage();

		this.user = {
			userName: null,
			password: null
		};

		this.translate = translate;

		this.languages = languagesService.languagesUI;

		this.restoreUserLocalStorage();

	}

	changeLanguage(languageKey) {
		this.translate.setLanguage(languageKey);
		this.loadTranslation(languageKey);
	}

	loadTranslation(lang) {
		this.login = {
			userName: this.translate.translate('userName', lang),
			password: this.translate.translate('password', lang),
			language: this.translate.translate('language', lang),
			loginBtn: this.translate.translate('login', lang),
			logining: this.translate.translate('logining', lang)
		};
	}

	onLogin() {
		this.storeUserLocalStorage();
		this.showLoading();
	}

	showLoading() {

		let loading = Loading.create({
			content: this.login.logining,
			duration: 3000,
			dismissOnPageChange: true
		});

		this.nav.present(loading);

		setTimeout(() => {
			this.nav.push(TabsPage);
		}, 1000);
	}

	storeUserLocalStorage() {
		this.localStorage.setUser(this.user);
	}

	restoreUserLocalStorage() {
		var that = this;
		this.localStorage.getUser().then(function (user) {
			if (user) {
				user = JSON.parse(user);
				that.user.userName = user.userName;
				that.user.password = user.password;
				that.user.languageKey = user.languageKey;
				that.changeLanguage(that.user.languageKey);
			} else {
				that.user.languageKey = languagesService.defaultKey;
				that.changeLanguage(that.user.languageKey);
			}
		});
	}
}