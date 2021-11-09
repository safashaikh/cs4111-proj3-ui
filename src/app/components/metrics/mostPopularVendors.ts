export class MostPopularVendors {
    vid: Number;
    name: string;
    num_purchases: Number;
  
    constructor(vid: Number, name: string, num_purchases: Number) {
      this.vid = vid;
      this.name = name;
      this.num_purchases = num_purchases;
    }
  
  }