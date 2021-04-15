import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-enterprise/inappbrowser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private iab: InAppBrowser, private platform: Platform) {}

  async ngOnInit() {
    await this.platform.ready();
    const browser = this.iab.create(
      'https://www.parsippanysbestpizza.com/',
      '_blank'
    );
    browser.show();
  }
}
