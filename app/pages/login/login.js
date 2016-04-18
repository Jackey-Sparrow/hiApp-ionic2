/**
 * Created by Jackey Li on 2016/4/17.
 */
import {Page, NavController, Loading} from 'ionic-angular';
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

        let loading = Loading.create({
            content: 'Login',
            duration: 3000,
            dismissOnPageChange: true
        });

        this.nav.present(loading);
        
        setTimeout(() => {
            loading.dismiss();
            this.nav.push(TabsPage);
        }, 1000);
    }
}