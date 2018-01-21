import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Beacon } from '../../models/beacon';
import { Beacons } from '../../providers/providers';

import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentBeacons: any;

  constructor(public navCtrl: NavController, public beacons: Beacons, public modalCtrl: ModalController, public http: HttpClient) {
//    this.beacons.query().subscribe(data => {
//      this.currentBeacons = data;
//    });
    this.refresh();
  }

  /**
   * The view loaded, let's query our beacons for the list
   */
  ionViewDidLoad() {
  }

  refresh() {
    this.http.get("http://localhost:3000/beacons.json").subscribe(data => {
      this.currentBeacons = data;
    })
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addBeacon() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        console.log("onDidDismiss add beacon")
        this.http.post("http://localhost:3000/beacons.json", {beacon: item}).subscribe()
        this.refresh()
//        this.beacons.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of beacons.
   */
  deleteItem(item) {
    this.beacons.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(beacon: Beacon) {
    this.navCtrl.push('ItemDetailPage', {
      item: beacon
    });
  }
}
