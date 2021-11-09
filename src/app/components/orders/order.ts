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


  constructor(oid: Number,
              odate: string,
              discount: string,
              tax: string,
              customer: Number,
              card: Number,
              address: Number,
              subtotal: string,
              total: string) {
    this.oid        = oid     
    this.odate      = odate   
    this.discount   = discount
    this.tax        = tax     
    this.customer   = customer
    this.card       = card    
    this.address    = address
    this.subtotal = subtotal
    this.total = total 
  }
}