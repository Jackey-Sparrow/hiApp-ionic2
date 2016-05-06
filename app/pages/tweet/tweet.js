import {Page, Loading, NavController, Translate, Events} from 'ionic-angular';
import {Http} from 'angular2/http';
import {TweetService} from './services/tweet-service';
import {TweetDetail} from './tweet-detail';

@Page({
	templateUrl: 'build/pages/tweet/tweet.html'
})

export class Tweet {

	static get parameters() {
		return [[Http], [NavController], [Translate], [Events]];
	}

	constructor(http, nav, translate, events) {
		this.http = http;
		this.nav = nav;
		this.loading;
		this.events = events;
		this.dataSource = [];
		this.dataService = new TweetService(this.http);
		this.curPage = 1;
		this.pageSize = 2;
		this.moreTweet = true;

		this.translate = translate;

		this.loadTranslation();

		this.onLanguageChanged();
	}

	loadTranslation() {
		this.tweets = {
			title: this.translate.translate('tweetTitle'),
			likes: this.translate.translate('likes'),
			comments: this.translate.translate('comments'),
			loading: this.translate.translate('loading'),
			loadMore: this.translate.translate('loadMore')
		}
	}

	loadTweet() {
		var that = this;
		setTimeout(function () {
			that.presentLoading();
			that.dataService.loadData(that.curPage, that.pageSize, that.http).then(function (tweets) {
				setTimeout(()=> {
					that.closeLoading();
					that.dataSource = tweets;
				}, 2000);
			});
		}, 300);
	}

	refresh() {
		this.curPage = 1;
		this.pageSize = 2;
		this.dataSource = [];
		this.loadTweet();
		this.moreTweet = true;
	}

	loadMore(infiniteScroll) {

		this.curPage++;
		let that = this;
		this.dataService.loadData(this.curPage, this.pageSize, this.http).then(function (tweets) {
			//fake delay loading
			setTimeout(function () {
				if (tweets.length) {
					that.dataSource = that.dataSource.concat(tweets);
				} else {
					that.moreTweet = false;
				}
				infiniteScroll.complete();
			}, 4000);

		});
	}

	presentLoading() {
		this.loading = Loading.create({
			content: this.tweets.loading,
			duration: 3000,
			dismissOnPageChange: true
		});

		this.nav.present(this.loading);
	}

	closeLoading() {
		this.loading.destroy();
	}

	openTweetDetail(item) {
		this.nav.push(TweetDetail, {tweet: item});
	}

	onPageLoaded() {
		this.loadTweet();
	}

	onLanguageChanged() {
		let that = this;
		this.events.subscribe('onLanguageChanged', (key)=> {
			that.loadTranslation();
		});
	}
}
