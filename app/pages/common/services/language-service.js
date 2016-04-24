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

		'tweetTitle': '推特',

		'contactTitle':'通讯录',

		'settingTitle': '设置',
		'feedback': '意见反馈',
		'update': '检测更新',
		'switchLanguage': '切换语言',
		'about': '关于我们'
	},
	'en': {
		'tab1': 'Tweet',
		'tab2': 'Contacts',
		'tab3': 'Setting',

		'userName': 'UserName',
		'password': 'Password',
		'language': 'Language',
		'login': 'Login',

		'tweetTitle': 'Tweet',
		'contactTitle':'Contacts',

		'settingTitle': 'Setting',
		'feedback': 'Feekback',
		'update': 'Update',
		'switchLanguage': 'Switch Language',
		'about': 'About Us'
	}
};

var languagesUI = [
	{
		id: 'en',
		name: 'English'
	},
	{
		id: 'cn',
		name: '中文'
	}
];

var languagesService = {
	defaultKey: 'en',
	//languages: languages,
	languagesUI: languagesUI,
	init: init,
	getLanguageUIByKey: getLanguageUIByKey
};

function init(translate) {
	translate.translations('cn', languages.cn);
	translate.translations('en', languages.en);
}

function getLanguageUIByKey(lang) {
	let filter = languagesUI.filter(function (item) {
		return item.id === lang;
	});

	if (filter.length) {
		return filter[0];
	}

	return null;
}


exports.languagesService = languagesService;