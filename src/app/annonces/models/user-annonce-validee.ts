export class UserAnnonceValidee {
    public id: number;
    public username: string;
    public phone: number;
    public email: string;
    public firstName: string;
    public lastName: string;
    public ville: string;
    public region: string;

    constructor (id: number, username: string, email: string, phone: number, firstName: string,
        lastName: string, ville: string, region: string) {

        this.id = id;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ville = ville;
        this.region = region;
    }
}