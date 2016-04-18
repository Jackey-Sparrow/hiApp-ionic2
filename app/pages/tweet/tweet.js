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

        //todo: not well, may use onPageLoaded
        //setTimeout(()=> {
        //    this.loadTweet();
        //}, 500);
    }

    loadTweet() {
        this.presentLoading();
        this.http.get('data/comments.json').subscribe(res => {
            console.log(res.json());
            setTimeout(()=> {
                this.closeLoading();
                this.tweets = res.json();
            }, 2000);
        });
    }

    refresh() {
        this.loadTweet();
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
        this.loading.dismiss();
    }

    onPageLoaded() {
        setTimeout(()=> {
            this.loadTweet();
        }, 500);
    }
}
