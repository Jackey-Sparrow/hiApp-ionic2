import {Page, Loading, NavController, Translate} from 'ionic-angular';
import {Http} from 'angular2/http';
import {TweetService} from './tweet-service';

@Page({
	templateUrl: 'build/pages/tweet/tweet.html'
})

export class Tweet {

	static get parameters() {
		return [[Http], [NavController], [Translate]];
	}

	constructor(http, nav, translate) {
		this.http = http;
		this.nav = nav;
		this.loading;
		this.dataSource = [];
		this.dataService = new TweetService(this.http);
		this.curPage = 1;
		this.pageSize = 2;
		this.moreTweet = true;

		this.translate = translate;

		this.loadTranslation();
	}

	loadTranslation() {
		this.tweets={
			title:this.translate.translate('tweetTitle')
		}
	}

	loadTweet() {
		this.presentLoading();

		var that = this;
		this.dataService.loadData(this.curPage, this.pageSize, this.http).then(function (tweets) {
			setTimeout(()=> {
				that.closeLoading();
				that.dataSource = tweets;
			}, 2000);
		});
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

			if (tweets.length) {
				that.dataSource = that.dataSource.concat(tweets);
			} else {
				that.moreTweet = false;
			}
			infiniteScroll.complete();
		});

	}

	presentLoading() {
		this.loading = Loading.create({
			content: 'Loading...',
			duration: 3000,
			dismissOnPageChange: true
		});

		this.nav.present(this.loading);
	}

	closeLoading() {
		this.loading.destroy();
	}

	onPageLoaded() {
		//todo: refactor
		setTimeout(()=> {
			this.loadTweet();
		}, 500);
	}
}
