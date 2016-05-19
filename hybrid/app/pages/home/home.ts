import {Page} from 'ionic-angular';

@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title>
        Hybrid with 5,000 items
      </ion-title>
    </ion-navbar>

    <ion-content>
      <ion-list>
        <ion-item *ngFor="#item of items">
          {{ item.title }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class HomePage {
  items = [];
  constructor() {
    for (var i = 0; i < 5000; i++) {
      this.items.push({ title: i });
    }
  }
}
