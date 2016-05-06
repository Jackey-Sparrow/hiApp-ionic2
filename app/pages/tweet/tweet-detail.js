/**
 * Created by lja on 2016-4-21.
 */
import {Page, Loading, Translate, NavParams, Events} from 'ionic-angular';
import {Http} from 'angular2/http';
import {TweetDetailService} from './services/tweet-detail-service';

@Page({
	templateUrl: 'build/pages/tweet/tweet-detail.html'
})

export class TweetDetail {

	static get parameters() {
		return [[Http], [NavParams], [Translate], [Events]];
	}

	constructor(http, navParams, translate, events) {
		this.http = http;
		this.navParams = navParams;
		this.translate = translate;
		this.events = events;
		this.tweet = this.navParams.data.tweet;

		this.dataService = new TweetDetailService(this.http);

		this.comments = [];

		this.loadTranslation();

		this.loadComments();

		this.onLanguageChanged();
	}

	loadTranslation() {
		this.tweetDetail = {
			likes: this.translate.translate('likes'),
			comments: this.translate.translate('comments')
		}
	}

	loadComments() {
		let that = this;
		this.dataService.loadDataById(this.tweet.id).then((comments)=> {
			that.comments = comments;
		});
	}

	onLanguageChanged() {
		let that = this;
		this.events.subscribe('onLanguageChanged', (key)=> {
			that.loadTranslation();
		});
	}

}
