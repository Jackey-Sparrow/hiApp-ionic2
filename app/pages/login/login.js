/**
 * Created by Jackey Li on 2016/4/17.
 */
import {Page, NavController, Loading, TranslatePipe, Translate} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {UserLocalStorage} from './userLocalStorage';

@Page({
	templateUrl: 'build/pages/login/login.html',
	pipes: [TranslatePipe]
})

export class Login {

	static get parameters() {
		return [[NavController], [Translate]];
	}

	constructor(nav, translate) {
		this.name = 'Login';
		this.nav = nav;
		this.localStorage = new UserLocalStorage();

		this.user = {
			userName: null,
			password: null
		};

		this.translate = translate;

		this.languages = [
			{
				id: 'en',
				name: 'English'
			},
			{
				id: 'cn',
				name: '中文'
			}
		];

		this.restoreUserLocalStorage(function (lang) {
			this.loadTranslation(lang);
		});

	}

	changeLanguage(languageKey) {
		console.log(languageKey);
		this.loadTranslation(languageKey);
	}

	loadTranslation(lang) {
		this.login = {
			userName: this.translate.translate('userName', lang),
			password: this.translate.translate('password', lang),
			language: this.translate.translate('language', lang),
			loginBtn: this.translate.translate('login', lang)
		};
	}

	onLogin() {
		this.storeUserLocalStorage();
		this.showLoading();
	}

	showLoading() {

		let loading = Loading.create({
			content: 'Login',
			duration: 3000,
			dismissOnPageChange: true
		});

		this.nav.present(loading);

		setTimeout(() => {
			loading.dismiss();
			this.nav.push(TabsPage);
		}, 1000);
	}

	storeUserLocalStorage() {
		this.localStorage.setUser(this.user);
	}

	restoreUserLocalStorage(callback) {
		var that = this;
		this.localStorage.getUser().then(function (user) {
			if (user) {
				user = JSON.parse(user);
				that.user.userName = user.userName;
				that.user.password = user.password;
				that.user.languageKey = user.languageKey;
				that.translate.setLanguage(that.user.languageKey);
				callback && callback.apply(that, [that.user.languageKey]);
			}
		});

	}
}