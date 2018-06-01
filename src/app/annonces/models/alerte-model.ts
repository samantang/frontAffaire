export class AlerteModel {

    public titre: string;
    public particuliers: boolean;
    public professionnels: boolean;
    public offre: boolean;
    public demande: boolean;
    public categorie: string;
    public region: string;
    public ville: string;
    public id: number;

    constructor(titre: string, particuliers: boolean, professionnels: boolean, offre: boolean, demande: boolean, categorie: string,
                region: string, ville: string, id: number) {
    this.titre = titre;
    this.particuliers = particuliers;
    this.professionnels = professionnels;
    this.offre = offre;
    this.demande = demande;
    this.categorie = categorie;
    this.region = region;
    this.ville = ville;
    this.id = id;
    }
}