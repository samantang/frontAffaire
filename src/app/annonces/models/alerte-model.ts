export class AlerteModel {

    public titre: string;
    public particuliers: boolean;
    public professionnels: boolean;
    public offre: boolean;
    public demande: boolean;
    public categorie: string;
    public region: string;
    public ville: string;

    constructor(titre: string, particuliers: boolean, professionnels: boolean, offre: boolean, demande: boolean, categorie: string,
                region: string, ville: string) {
    this.titre = titre;
    this.particuliers = particuliers;
    this.professionnels = professionnels;
    this.offre = offre;
    this.demande = demande;
    this.categorie = categorie;
    this.region = region;
    this.ville = ville;
    }
}