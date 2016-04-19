/**
 * Created by Jackey Li on 2016/4/17.
 */
import {Page, NavController, Loading} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {UserLocalStorage} from './userLocalStorage';

@Page({
	templateUrl: 'build/pages/login/login.html'
})

export class Login {

	static get parameters() {
		return [[NavController]];
	}

	constructor(nav) {
		this.name = 'Login';
		this.nav = nav;
		this.localStorage = new UserLocalStorage();

		this.user = {
			userName: null,
			password: null
		};

		this.restoreUserLocalStorage();
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

	restoreUserLocalStorage() {
		var that = this;
		this.localStorage.getUser().then(function (user) {
			if (user) {
				user = JSON.parse(user);
				that.user.userName = user.userName;
				that.user.password = user.password;
			}
		});

	}
}