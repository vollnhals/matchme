/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Beacon" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Beacons service manages creating instances of Beacon, so go ahead and rename
 * that something that fits your app as well.
 */
export class Beacon {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Beacon {
  [prop: string]: any;
}
