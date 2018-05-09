export class Recherche {

  public recherche: string;
  public categorie: string;
  public region: string;
  public ville: string;
  public typeAnnonce: string;
  public natureAnnonce: string;
  public prixMin: number;
  public prixMax: number;
  public surfaceMetreCarreMin: number;
  public surfaceMetreCarreMax: number;
  public nbPiecesMin: number;
  public nbPiecesMax: number;
  public modele: string;
  public anneeModeleMin: number;
  public anneeModeleMax: number;
  public carburant: string;
  public boiteDeVitesse: string;
  public marque: string;
  public cylindre: number;
  public longueurMin: number;
  public longueurMax: number;
  public largeurMin: number;
  public largeurMax: number;
  public immobilierMaison: boolean;
  public immobilierTerrain: boolean;
  public immobilierParking: boolean;
  public immoblierAppartement: boolean;
  public immobilierAutre: boolean;

  constructor (recherche: string, categorie: string, region: string, ville: string, typeAnnonce: string, natureAnnonce: string,
     prixMin: number, prixMax: number, surfaceMetreCarreMin: number, surfaceMetreCarreeMax: number, nbPiecesMin: number,
    nbPieceMax: number, modele: string, anneeModeleMin: number, anneeModeleMax: number, carburant: string, boiteDeVitesse: string,
    marque: string, cylindre: number, longueurMin: number, longueurMax: number, largeurMin: number, largeurMax: number,
    immobilierMaison: boolean, immobilierTerrain: boolean, immobilierParking: boolean, immobilierAppartement: boolean,
    immobilierAutre: boolean) {

      this.recherche = recherche;
      this.categorie = categorie;
      this.region = region;
      this.ville = ville;
      this.typeAnnonce = typeAnnonce;
      this.natureAnnonce = natureAnnonce;
      this.prixMin = prixMin;
      this.prixMax = prixMax;
      this.surfaceMetreCarreMin = surfaceMetreCarreMin;
      this.surfaceMetreCarreMax = surfaceMetreCarreeMax;
      this.modele = modele;
      this.anneeModeleMin = anneeModeleMin;
      this.carburant = carburant;
      this.boiteDeVitesse = boiteDeVitesse;
      this.marque = marque;
      this.cylindre = cylindre;
      this.longueurMin = longueurMin;
      this.longueurMax = longueurMax;
      this.largeurMin = largeurMin;
      this.largeurMax = largeurMin;
      this.immobilierMaison = immobilierMaison;
      this.immobilierTerrain = immobilierTerrain;
      this.immobilierParking = immobilierParking;
      this.immoblierAppartement = immobilierAppartement;
      this.immobilierAutre = immobilierAutre;

  }
}