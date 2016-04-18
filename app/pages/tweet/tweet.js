import {Page, Http} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/tweet/tweet.html'
})
export class Tweet {

  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;

    this.http.get('data/comments.json').toRx().subscribe((res:Response) => {
      this.status = res.status;
    });
  }
}
