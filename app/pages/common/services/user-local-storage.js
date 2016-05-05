/**
 * Created by lja on 2016-4-19.
 */
import {Storage, LocalStorage} from 'ionic-angular';

var UserLocalStorage = (function () {

	function UserLocalStorage() {
		this.localStorage = new Storage(LocalStorage);
		this.key = 'hiApp-ionic2-userInfo';
	}

	UserLocalStorage.prototype.setUser = function (user) {
		return this.localStorage.set(this.key, JSON.stringify(user));
	};

	UserLocalStorage.prototype.getUser = function () {
		return this.localStorage.get(this.key);
	};

	return UserLocalStorage;
}());

exports.UserLocalStorage = UserLocalStorage;

