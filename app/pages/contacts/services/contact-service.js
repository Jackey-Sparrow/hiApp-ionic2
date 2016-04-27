/**
 * Created by Jackey Li on 2016/4/26.
 */
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ContactService {

    //todo: not working
    //static get parameters() {
    //	return [[Http]];
    //}

    constructor(http) {
        this.http = http;
    }

    loadData(http) {
        let that = this;
        var promise = new Promise(function (resolve, reject) {
            that.http.get('data/contacts.json').subscribe(res => {
                resolve(res.json());
            });
        });

        return promise;
    }
}