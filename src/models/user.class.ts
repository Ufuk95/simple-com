export class User {
    firstName!: string;
    lastname!: string;
    email!: string;
    birthDate!: number;
    street!: string;
    zipCode!: number;
    city!: string; 


    constructor(obj?: any){
        this.firstName = obj ? obj.firstName: "";
        this.lastname = obj ? obj.lastname: "";
        this.email = obj ? obj.email: "";
        this.birthDate = obj ? obj.birthDate: "";
        this.street = obj ? obj.street: "";
        this.zipCode = obj ? obj.zipCode: "";
        this.city = obj ? obj.city: "";
  
    }
}