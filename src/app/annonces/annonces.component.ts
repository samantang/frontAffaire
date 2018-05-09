import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AnnonceServiceService } from './annonce-service.service';
import { Annonce } from './models/annonce.model';
import { Recherche } from './models/recherche-model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnoncesComponent implements OnInit, OnDestroy {
  @ViewChild('f') singupForm: NgForm;
  typeAnnonce = ['Tous', 'Particulier', 'Professionnel'];
  typeChoisiPaticulier = '';
  typeChoisiProfessionnel = '';
  typeChoisiTous = '';
  infoRecherche: string;

  natureAnnonce = ['offre', 'demande'];
  natureChoisiOffre = '';
  natureChoisiDemande = '';

  categorieChoisie: '';

  tri = '';
  // pour le champs ville
  groupSelected: string;
  villes: any[] = [
    { id: 1, name: 'Mamou', region: 'MAMOU' },
    { id: 2, name: 'Dalaba', region: 'MAMOU' },
    { id: 3, name: 'Pita', region: 'MAMOU' },
    { id: 4, name: 'Labé', region: 'LABE' },
    { id: 5, name: 'Mali', region: 'LABE' },
    { id: 6, name: 'Tougué', region: 'LABE' },
    { id: 7, name: 'Lélouma', region: 'LABE' },
    { id: 8, name: 'Koubia', region: 'LABE' },
    { id: 9, name: 'Koundara', region: 'BOKE' },
    { id: 10, name: 'Conakry', region: 'CONAKRY' },
    { id: 11, name: 'Kaloum', region: 'CONAKRY' },
    { id: 12, name: 'Dixin', region: 'CONAKRY' },
    { id: 13, name: 'Ratoma', region: 'CONAKRY' },
    { id: 14, name: 'Matoto', region: 'CONAKRY' },
    { id: 15, name: 'Coyah', region: 'KINDIA' },
    { id: 16, name: 'Dubréka', region: 'KINDIA' },
    { id: 17, name: 'Kindia', region: 'KINDIA' },
    { id: 18, name: 'Forécariah', region: 'KINDIA' },
    { id: 19, name: 'Boké', region: 'BOKE' },
    { id: 21, name: 'Télémelé', region: 'BOKE' },
    { id: 22, name: 'Faranah', region: 'FARANAH' },
    { id: 23, name: 'Macenta', region: 'FARANAH' },
    { id: 24, name: 'Kissidougou', region: 'FARANAH' },
    { id: 25, name: 'Kankan', region: 'KANKAN' },
    { id: 26, name: 'Siguiri', region: 'KANKAN' },
    { id: 27, name: 'Mandiana', region: 'KANKAN' },
    { id: 28, name: 'Kérouané', region: 'KANKAN' },
    { id: 29, name: 'Gueckedou', region: 'NZEREKORE' },
    { id: 30, name: 'Nzérékoré', region: 'NZEREKORE' },
    { id: 31, name: 'Lola', region: 'NZEREKORE' },
    { id: 32, name: 'Beyla', region: 'NZEREKORE' },
    { id: 33, name: 'Yomou', region: 'NZEREKORE' }
  ];
  // public titre: string;
  // public categorie: string;
  public natureAnnonceForm: string;
  // public region: string;
  // public ville: string;
  annonce: Annonce;
  rechercheModele: Recherche;

  public recherche: string;
  public categorie: string;
  public region: string;
  public ville: string;
  // public typeAnnonce: string;
  // public natureAnnonce: string;
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
  public typeAnnonceRecherche: string;
  public natureAnnonceRecherche: string;

  annoncesRecherche: Annonce [];

  // message: any;
  // subscription: Subscription;

  constructor(private anonceService: AnnonceServiceService,
              private router: Router) {
    // subscribe to home component messages
    // this.subscription = this.anonceService.getMessage().subscribe(message => { this.message = message; });
   }

  ngOnInit() {
    this.typeChoisiTous = 'TOUS';
    this.natureChoisiOffre = 'offre';
  }

  onselectionTypeAnnonce(typeannonce) {
    if (typeannonce === 'Particulier') {
      this.typeChoisiPaticulier = typeannonce;
      this.typeChoisiProfessionnel = '';
      this.typeChoisiTous = '';
    }
    if (typeannonce === 'Professionnel') {
      this.typeChoisiProfessionnel = typeannonce;
      this.typeChoisiPaticulier = '';
      this.typeChoisiTous = '';
    }
    if (typeannonce === 'Tous') {
      this.typeChoisiTous = typeannonce;
      this.typeChoisiPaticulier = '';
      this.typeChoisiProfessionnel = '';
    }
  }
  trierSelection(tri: string) {
    this.tri = tri;
  }
  onSubmit(form: NgForm) {
      console.log(this.singupForm.value.recherche);

      this.recherche = this.singupForm.value.recherche;
      this.categorie = this.singupForm.value.categorie;
      this.region = this.singupForm.value.region;
      this.ville = this.singupForm.value.ville;
      this.typeAnnonceRecherche = this.singupForm.value.typeAnnonce;
      this.natureAnnonceRecherche = this.singupForm.value.natureannonce;
      this.prixMin = this.singupForm.value.prixMin;
      this.prixMax = this.singupForm.value.prixMax;
      this.surfaceMetreCarreMin = this.singupForm.value.surfaceMetreCarreMin;
      this.surfaceMetreCarreMax = this.singupForm.value.surfaceMetreCarreeMax;
      this.modele = this.singupForm.value.modele;
      this.anneeModeleMin = this.singupForm.value.anneeModeleMin;
      this.carburant = this.singupForm.value.carburant;
      this.boiteDeVitesse = this.singupForm.value.boiteDeVitesse;
      this.marque = this.singupForm.value.marque;
      this.cylindre = this.singupForm.value.cylindre;
      this.longueurMin = this.singupForm.value.longueurMin;
      this.longueurMax = this.singupForm.value.longueurMax;
      this.largeurMin = this.singupForm.value.largeurMin;
      this.largeurMax = this.singupForm.value.largeurMin;
      this.immobilierMaison = this.singupForm.value.immobilierMaison;
      this.immobilierTerrain = this.singupForm.value.immobilierTerrain;
      this.immobilierParking = this.singupForm.value.immobilierParking;
      this.immoblierAppartement = this.singupForm.value.immobilierAppartement;
      this.immobilierAutre = this.singupForm.value.immobilierAutre;

      if (this.marque === undefined) {
        this.marque = 'null';
      }
      if (this.carburant === undefined) {
        this.carburant = 'null';
      }
      if (this.boiteDeVitesse === undefined) {
        this.boiteDeVitesse = 'null';
      }
      if (this.natureAnnonceRecherche === '') {
        this.natureAnnonceRecherche = 'null';
      }
      // on n'affiche les résultats d'une recherche que si au moins une catégorie est sélectionnée
      // (seul champ obligatoire dans la recherche)

      if (this.categorie === '') {
        this.infoRecherche = 'Pour faire une recherche, merci de selectionner au moins une catégorie';
      }else {
        this.infoRecherche = '';
        this.rechercheModele = new Recherche(this.recherche, this.categorie, this.region, this.ville, this.typeAnnonceRecherche,
          this.natureAnnonceRecherche, this.prixMin, this.prixMax, this.surfaceMetreCarreMin, this.surfaceMetreCarreMax, this.nbPiecesMin,
        this.nbPiecesMax, this.modele, this.anneeModeleMin, this.anneeModeleMax, this.carburant, this.boiteDeVitesse, this.marque,
       this.cylindre, this.longueurMin, this.longueurMax, this.largeurMin, this.largeurMax, this.immobilierMaison, this.immobilierTerrain,
      this.immobilierParking, this.immoblierAppartement, this.immobilierAutre);
  
      this.anonceService.chercherAnnonces(this.rechercheModele).subscribe(
        data => console.log(this.annoncesRecherche = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
        error => console.log(error)
      );
      }

  }
  onSelectCategorie(selection: any) {
    this.categorieChoisie = selection;
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
}
}
