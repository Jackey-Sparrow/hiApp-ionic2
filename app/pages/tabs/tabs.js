import {Page} from 'ionic-angular';
import {Tweet} from '../tweet/tweet';
import {Contacts} from '../contacts/contacts';
import {Setting} from '../setting/setting';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Tweet;
    this.tab2Root = Contacts;
    this.tab3Root = Setting;
  }
}
