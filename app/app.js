import 'es6-shim';
import {App, Platform, Translate} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Login} from './pages/login/login';
import {languagesService} from './pages/common/services/language-service';

//template: '<ion-nav [root]="rootPage"></ion-nav>',
@App({
	template: '<ion-nav [root]="login"></ion-nav>',
	config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
	static get parameters() {
		return [[Platform], [Translate]];
	}

	constructor(platform, Translate) {
		this.login = Login;

		this.translate = Translate;
		languagesService.init(this.translate);

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
		});
	}
}
