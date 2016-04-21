/**
 * Created by lja on 2016-4-21.
 */
import {Page, Loading, Translate, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';
import {TweetService} from './services/tweet-service';

@Page({
	templateUrl: 'build/pages/tweet/tweet-detail.html'
})

export class TweetDetail {

	static get parameters() {
		return [[Http], [NavParams], [Translate]];
	}

	constructor(http, navParams, translate) {
		this.http = http;
		this.navParams = navParams;
		this.translate = translate;
		this.tweet = this.navParams.data.tweet;
	}
}
