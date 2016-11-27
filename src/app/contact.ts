export class Contact {
  firstName: string;
  lastName: string;
  address: string;
  Phone: number;
  Email: string;
  constructor(fname:string, lname:string, add:string, ph:number, email:string){
  this.firstName = fname;
  this.lastName = lname;
  this.address = add;
  this.Phone = ph;
  this.Email = email;
  }

}
