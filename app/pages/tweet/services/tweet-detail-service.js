/**
 * Created by Jackey Li on 2016/4/18.
 */
//todo: http inject
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class TweetDetailService {

	//todo: not working
	//static get parameters() {
	//	return [[Http]];
	//}

	constructor(http) {
		this.http = http;
	}

	loadDataById(tweetId) {
		let that = this;
		var promise = new Promise(function (resolve, reject) {
			that.http.get('data/comments.json').subscribe(res => {
				resolve(res.json().filter((item)=> {
					return item.tweetId === tweetId;
				}));
			});
		});

		return promise;
	}
}