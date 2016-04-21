/**
 * Created by lja on 2016-4-21.
 */
var languages = {
	'cn': {
		'tab1': '推特',
		'tab2': '通讯录',
		'tab3': '设置',
		'userName': '用户名',
		'password': '密码',
		'language': '语言',
		'login': '登陆',
		'tweetTitle': '推特'
	},
	'en': {
		'tab1': 'Tweet',
		'tab2': 'Contacts',
		'tab3': 'Setting',
		'userName': 'UserName',
		'password': 'Password',
		'language': 'Language',
		'login': 'Login',
		'tweetTitle': 'Tweet'
	}
};

var languagesService = {
	defaultKey: 'en',
	languages: languages,
	init: init
};

function init(translate) {
	translate.translations('cn', languagesService.languages.cn);
	translate.translations('en', languagesService.languages.en);
}


exports.languagesService = languagesService;