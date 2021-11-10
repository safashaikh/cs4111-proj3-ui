export class ItemOrder {
    oid: Number;
    product: Number;
    quantity: Number;
    vendor: Number;
    product_name: string;
    vendor_name: string;
    price: string;
  
  
    constructor(oid: Number,
                product: Number,
                quantity: Number,
                vendor: Number,
                product_name: string,
                vendor_name: string,
                price: string
                ) {
        this.oid = oid
        this.product = product
        this.quantity = quantity
        this.vendor = vendor
        this.product_name = product_name
        this.vendor_name = vendor_name
        this.price = price
    }
  }