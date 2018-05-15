import { Authorities } from './authorities-mode';

export class UserModel {
    public id: number;
    public username: string;
    public phone: number;
    public email: string;
    public firstName: string;
    public lastName: string;
    public ville: string;
    public region: string;
    public type: string;
    public nomSociete: string;
    public numeroSiretSocite: string;
    public adresseSocite: string;
    public sitewebSocite: string;
    public password: string;
    public erreur: string;
    public authorities: Authorities [];
    public dateInscriptionString: string;

    constructor (id: number, username: string, email: string, phone: number, firstName: string,
        lastName: string, ville: string, region: string, type: string, nomSociete: string, numeroSiretSocite: string,
        adresseSocite: string, sitewebSocite: string, password: string, erreur: string, authorities: Authorities [],
        dateInscriptionString: string) {

        this.id = id;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ville = ville;
        this.region = region;
        this.type = type;
        this.nomSociete = nomSociete;
        this.numeroSiretSocite = numeroSiretSocite;
        this.adresseSocite = adresseSocite;
        this.sitewebSocite = sitewebSocite;
        this.password = password;
        this.erreur = erreur;
        this.authorities = authorities;
        this.dateInscriptionString = dateInscriptionString;
    }
}