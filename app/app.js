import 'es6-shim';
import {App, Platform, Translate, TranslatePipe} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Login} from './pages/login/login';

//template: '<ion-nav [root]="rootPage"></ion-nav>',
@App({
	template: '<ion-nav [root]="login"></ion-nav>',
	config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
	pipes: [TranslatePipe]
})
export class MyApp {
	static get parameters() {
		return [[Platform], [Translate]];
	}

	constructor(platform, Translate) {
		this.rootPage = TabsPage;

		this.login = Login;

		this.translate = Translate;
		this.translate.translations('cn', {
			'userName': '用户名',
			'password': '密码',
			'language': '语言',
			'login': '登陆'
		});

		this.translate.translations('en', {
			'userName': 'UserName',
			'password': 'Password',
			'language': 'Language',
			'login': 'Login'
		});

		this.translate.setLanguage('en');

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
		});
	}
}
