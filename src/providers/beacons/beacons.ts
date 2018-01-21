import { Injectable } from '@angular/core';

import { Beacon } from '../../models/beacon';
import { Api } from '../api/api';

@Injectable()
export class Beacons {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/beacons.json', params);
  }

  add(beacon: Beacon) {
    console.log(JSON.stringify(beacon))
    return this.api.post('/beacons.json', JSON.stringify(beacon))
  }

  delete(beacon: Beacon) {
  }

}
