import {Page, Translate} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/contacts/contacts.html'
})

export class Contacts {

    static get parameters() {
        return [[Translate]];
    }

    constructor(translate) {
        this.translate = translate;
    }
}
