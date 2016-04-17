/**
 * Created by Jackey Li on 2016/4/17.
 */
import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Page({
    templateUrl: 'build/pages/login/login.html'
})

export class Login {

    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.name = 'Login';
        this.nav = nav;
    }

    onLogin() {
        this.nav.push(TabsPage);
    }
}