import { UserAnnonceValidee } from './user-annonce-validee';
import { AnnonceSignalee } from './user-annonce-signalee';
import { UserAnnonceFavorite } from './user-annonce-favorite';
import { UserAnnoncePosteeEtValidee } from './user-annonce-postee-validee.model';
import { UserAnnoncePostee } from './user-annonce-postee.model';
import { UserAnnoncePartagee } from './user-annonces-partagees.model';

export class AnnonceDetailModel {
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

  public dateStringDepot: string;
  public dateStringValidation: string;
  public cheminImage1: string;
  public cheminImage2: string;
  public cheminImage3: string;
  public cheminImage4: string;
  public nbImages: number;

  public user_annoncesPosteesEtValidees: UserAnnoncePosteeEtValidee;
  public user_annoncesPostees: UserAnnoncePostee;
  public user_annoncesSignalees: AnnonceSignalee;
  public user_annoncesValidees: UserAnnonceValidee;
  public user_annoncesFavorites: UserAnnonceFavorite;
  public user_annoncesPartagees: UserAnnoncePartagee;

  constructor(id: number, titre: string, description: string, region: string, ville: string, cheminImage: string,
      categorie: string, dateDepot: string,  dateValidation: string, typeAnnonce: string, natureAnnonce: string, prix: number,
       telephone: number, telephoneVisible: boolean, nbVues: number, surfaceMetreCarre: number, nbPieces: number,
       modele: string, anneModele: number, carburant: string, boiteDeVitesse: string, cylindre: number, longueur: number,
        largeur: number, nomPhoto: string, annonceSignalee: boolean, motifSignalement: string, messageSignalement: string,
        dateStringDepot: string, dateStringValidation: string, user_annoncesPosteesEtValidees: UserAnnoncePosteeEtValidee,
        user_annoncesPostees: UserAnnoncePostee, user_annoncesSignalees: AnnonceSignalee, user_annoncesValidees: UserAnnonceValidee,
        user_annoncesFavorites: UserAnnonceFavorite, user_annoncesPartagees: UserAnnoncePartagee, cheminImage1: string,
        cheminImage2: string, cheminImage3: string, cheminImage4: string, nbImages: number) {
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
    this.user_annoncesPosteesEtValidees = user_annoncesPosteesEtValidees;
    this.user_annoncesPostees = user_annoncesPostees;
    this.user_annoncesSignalees = user_annoncesSignalees;
    this.user_annoncesValidees = user_annoncesValidees;
    this.user_annoncesFavorites = user_annoncesFavorites;
    this.user_annoncesPartagees = user_annoncesPartagees;
    this.cheminImage1 = cheminImage1;
    this.cheminImage2 = cheminImage2;
    this.cheminImage3 = cheminImage3;
    this.cheminImage4 = cheminImage4;
    this.nbImages = nbImages;
  }
}
