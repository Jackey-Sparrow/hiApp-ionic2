/**
 * Created by lja on 2016-4-19.
 */
import {Storage, LocalStorage} from 'ionic-angular';

//export class UserLocalStorage {
//	constructor() {
//		this.localStorage = new Storage(LocalStorage);
//		this.key = 'hiApp-ionic2-userInfo';
//	}
//
//	setUser(user) {
//		this.localStorage.set(this.key, JSON.stringify(user));
//	}
//
//	getUser() {
//		return this.localStorage.get(this.key);
//	}
//}

var UserLocalStorage = (function () {

	function UserLocalStorage () {
		this.localStorage = new Storage(LocalStorage);
		this.key = 'hiApp-ionic2-userInfo';
	}

	UserLocalStorage.prototype.setUser = function (user) {
		this.localStorage.set(this.key, JSON.stringify(user));
	};

	UserLocalStorage.prototype.getUser = function () {
		return this.localStorage.get(this.key);
	};

	return UserLocalStorage;
}());

exports.UserLocalStorage = UserLocalStorage;

