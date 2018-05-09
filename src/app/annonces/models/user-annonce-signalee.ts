export class AnnonceSignalee {
    public id: number;
    public motifSignalement: string;
    public messageSignalement: string;

    constructor (id: number, motifSignalement: string, messageSignalement: string) {
        this.id = id;
        this.motifSignalement = motifSignalement;
        this.messageSignalement = messageSignalement;
    }
}