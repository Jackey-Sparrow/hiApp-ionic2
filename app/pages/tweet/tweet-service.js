/**
 * Created by Jackey Li on 2016/4/18.
 */
//todo: http inject
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class TweetService {

	//todo: not working
	static get parameters() {
		return [[Http]];
	}

	constructor(http) {
		this.http = http;
	}

	loadData(curPage, pageSize, http) {
		var promise = new Promise(function (resolve, reject) {
			http.get('data/comments.json').subscribe(res => {
				let result = res.json();
				result = result.slice(pageSize * (curPage - 1), pageSize * curPage);
				resolve(result);
			});
		});

		return promise;
	}
}