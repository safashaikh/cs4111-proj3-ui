export class Customer {
  cid: Number;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;

  constructor(cid: Number,
    username: string,
    password: string,
    name: string,
    email: string,
    phone: string) {
    this.cid      = cid     
    this.username = username
    this.password = password
    this.name     = name    
    this.email    = email   
    this.phone    = phone   
  }
}

export class Address {
  ID: Number;
  streetNo: string;
  streetName1: string; 
  streetName2: string;
  region: string; 
  countryCode: string;
  postalCode: string;

  constructor(ID: Number,
    streetNo: string,
    streetName1: string, 
    streetName2: string,
    region: string, 
    countryCode: string,
    postalCode: string,){
      this.ID = ID
      this.streetNo = streetNo
      this.streetName1 = streetName1
      this.streetName2 = streetName2
      this.region = region
      this.countryCode = countryCode
      this.postalCode  = postalCode 
  }
}