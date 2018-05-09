import { UserAnnonceValidee } from './user-annonce-validee';
import { AnnonceSignalee } from './user-annonce-signalee';
import { UserAnnonceFavorite } from './user-annonce-favorite';
import { UserAnnoncePosteeEtValidee } from './user-annonce-postee-validee.model';
import { UserAnnoncePostee } from './user-annonce-postee.model';
import { UserAnnoncePartagee } from './user-annonces-partagees.model';

export class Annonce {
  public id: number;
  public titre: string;
  public description: string;
  public region: string;
  public ville: string;
  public cheminImage: string;
  public categorie: string;
  public dateDepot: string;
  public dateValidation: string;
  public typeAnnonce: string;
  public natureAnnonce: string;
  public prix: number;
  public telephone: number;
  public telephoneVisible: boolean;
  public nbDeVues: number;
  public userAnnonceValidee: UserAnnonceValidee;
  public userAnnonceSignalee: AnnonceSignalee [];
  public userAnnonceFavorite: UserAnnonceFavorite [];
  public surfaceMetreCarre: number;
  public nbPieces: number;
  public modele: string;
  public anneeModele: number;
  public carburant: string;
  public boiteDeVitesse: string;
  public cylindre: number;
  public longueur: number;
  public largeur: number;
  public photosAnnonce: File [];
  public nomPhoto: string;
  public annonceSignalee: boolean;
  public motifSignalement: string;
  public messageSignalement: string;
  public publie: boolean;

  public etatPublication: string;

  public dateStringDepot: string;
  public dateStringValidation: string;

  public user_annoncesPosteeEtValidees: UserAnnoncePosteeEtValidee;
  public user_annoncesPostes: UserAnnoncePostee;
  public user_annoncesSignalees: AnnonceSignalee;
  public user_annoncesValidees: UserAnnonceValidee;
  public user_annoncesFavorites: UserAnnonceFavorite;
  public user_annoncesPartagees: UserAnnoncePartagee;

  constructor(id: number, titre: string, description: string, region: string, ville: string, cheminImage: string,
      categorie: string, dateDepot: string,  dateValidation: string, typeAnnonce: string, natureAnnonce: string, prix: number,
       telephone: number, telephoneVisible: boolean, nbVues: number, surfaceMetreCarre: number, nbPieces: number,
       modele: string, anneModele: number, carburant: string, boiteDeVitesse: string, cylindre: number, longueur: number,
        largeur: number, nomPhoto: string, annonceSignalee: boolean, motifSignalement: string, messageSignalement: string,
        dateStringDepot: string, dateStringValidation: string, publie: boolean, etatPublication: string) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.region = region;
    this.ville = ville;
    this.cheminImage = cheminImage;
    this.categorie = categorie;
    this.dateDepot = dateDepot;
    this.dateValidation = dateValidation;
    this.typeAnnonce = typeAnnonce;
    this.natureAnnonce = natureAnnonce;
    this.prix = prix;
    this.telephone = telephone;
    this.telephoneVisible = telephoneVisible;
    this.nbDeVues = nbVues;
    this.surfaceMetreCarre = surfaceMetreCarre;
    this.nbPieces = nbPieces;
    this.modele = modele;
    this.anneeModele = anneModele;
    this.carburant = carburant;
    this.boiteDeVitesse = boiteDeVitesse;
    this.cylindre = cylindre;
    this.longueur = longueur;
    this.largeur = largeur;
    this.nomPhoto = nomPhoto;
    this.dateStringDepot = dateStringDepot;
    this.dateStringValidation = dateStringValidation;
    this.publie = publie;
    this.etatPublication = etatPublication;
  }
}
