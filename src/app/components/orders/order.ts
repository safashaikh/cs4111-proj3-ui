export class Order {
  oid: Number;
  odate: string;
  discount: string;
  tax: string;
  customer: Number;
  card: Number;
  address: Number;
  subtotal: string;
  total: string;
  shipper: string;
  tn: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;


  constructor(oid: Number,
              odate: string,
              discount: string,
              tax: string,
              customer: Number,
              card: Number,
              address: Number,
              subtotal: string,
              total: string,
              shipper: string,
              tn: string,
              street_address: string,
              city: string,
              state: string,
              zip: string) {
    this.oid        = oid     
    this.odate      = odate   
    this.discount   = discount
    this.tax        = tax     
    this.customer   = customer
    this.card       = card    
    this.address    = address
    this.subtotal = subtotal
    this.total = total 
    this.shipper = shipper
    this.tn = tn
    this.street_address = street_address
    this.city = city
    this.state = state
    this.zip = zip
  }
}