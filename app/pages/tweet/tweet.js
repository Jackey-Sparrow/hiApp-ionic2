import {Page, Loading, NavController} from 'ionic-angular';
import {Http} from 'angular2/http';

@Page({
    templateUrl: 'build/pages/tweet/tweet.html'
})
export class Tweet {

    static get parameters() {
        return [[Http], [NavController]];
    }

    constructor(http, nav) {
        this.http = http;
        this.nav = nav;
        this.loading;
        this.tweets = [];

        this.curPage = 0;
        this.pageSize = 5;

        //todo: not well, may use onPageLoaded
        //setTimeout(()=> {
        //    this.loadTweet();
        //}, 500);
    }

    loadTweet() {
        this.presentLoading();
        this.http.get('data/comments.json').subscribe(res => {
            setTimeout(()=> {
                this.closeLoading();
                this.tweets = res.json();
            }, 2000);
        });
    }

    refresh() {
        this.tweets = [];
        this.loadTweet();
    }

    loadMore(infiniteScroll) {
        console.log('load more');

        setTimeout(()=> {
            console.log('load more2');
            infiniteScroll.complete();
        }, 2000);
    }

    //getTweets(curPage,pageSize){
    //    this.http.get('data/comments.json').subscribe(res => {
    //        let result = res.json();
    //        result.
    //    });
    //}

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
        setTimeout(()=> {
            this.loadTweet();
        }, 500);
    }
}
