import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm} from '@angular/forms';


import { AnnonceServiceService } from '../../annonce-service.service';
import { Annonce } from '../../models/annonce.model';


@Component({
  selector: 'app-mes-annonces-edit',
  templateUrl: './mes-annonces-edit.component.html',
  styleUrls: ['./mes-annonces-edit.component.css'],
  providers: [AnnonceServiceService]
})
export class MesAnnoncesEditComponent implements OnInit {
  @ViewChild('f') singupForm: NgForm;

  annonce: Annonce;
  // id: number;
  categorieChoisie = '';
  voiture = 'voiture';
  typeDeLannonce = ['offre', 'demande'];
  vendeur = ['Particulier', 'Professionnel'];
  annonceFrom: FormGroup;

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
  public photos: string;

  photo1 = '';
  photo2 = '';
  photo3 = '';
  photo4 = '';

  url: any;
  url2: any;
  url3: any;
  url1: any;

  constructor(private route: ActivatedRoute,
              private annonceService: AnnonceServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onChange(valeur) {
    this.categorieChoisie = valeur;
  }
  private initForm() {
    this.annonceService.getAnnonceApi(this.id).subscribe(
      data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );

  }
  onSubmit(form: NgForm) {
    
    this.telephone = this.singupForm.value.telephone;
    this.telephoneVisible = this.singupForm.value.telephoneVisible;
    this.titre = this.singupForm.value.titre;
    this.telephone = this.singupForm.value.prix;
    this.prix = this.singupForm.value.prix; 
    this.categorie = this.singupForm.value.categorie;
    this.region = this.singupForm.value.region;
    this.ville = this.singupForm.value.ville;
    this.photos = this.singupForm.value.files;
    this.nbPieces = this.singupForm.value.nbPieces;
    this.anneeModele = this.singupForm.value.anneeModele;
    this.modele = this.singupForm.value.modele;
    this.carburant = this.singupForm.value.carburant;
    this.boiteDeVitesse = this.singupForm.value.boiteDeVitesse;
    this.cylindre = this.singupForm.value.cylindre;
    this.longueur = this.singupForm.value.longueur;
    this.largeur = this.singupForm.value.largeur;
    this.nomPhoto = this.singupForm.value.nomPhoto;
    this.description = this.singupForm.value.description;
    
    this.annonce = new Annonce(this.id, this.titre, this.description, this.region, this.ville, this.cheminImage, this.categorie, '', '',
                    this.typeAnnonce, this.natureAnnonce, this.prix, this.telephone, this.telephoneVisible, this.nbDeVues,
                    this.surfaceMetreCarre, this.nbPieces, this.modele, this.anneeModele, this.carburant, this.boiteDeVitesse,
                    this.cylindre, this.longueur, this.largeur, this.nomPhoto, false, '', '', '', '', false, '') ;

                      //  on appelle les methodes de chargement des photos dans la BDD que si la photo est selectionnée
                    if (this.photo1 !== '') {
                      console.log('photo1 a ete change');
                      this.annonceService.updatePhotoAnnonce();
                    }
                    if (this.photo2 !== '') {
                      console.log('photo2 a ete change');
                      this.annonceService.updatePhotoAnnonce1();
                    }
                    if (this.photo3 !== '') {
                      console.log('photo3 a ete change');
                      this.annonceService.updatePhotoAnnonce2();
                    }


                    // console.log('les infos de annonce ' + this.annonce.titre + ' ' + this.annonce.description);
                    // on attend 2 secondes pour être sur que les photos sont chanargées en BDD, car elles prennent du temps sinon on rique 
                    // de charger l'annonce avant les photos ce qui ne serait pas bon
                    setTimeout (() => {
                    console.log('le titre ' + this.singupForm.value.titre + ' description: ' + this.annonce.description + 
                    ' cheminImage' + this.annonce.cheminImage + 'le type: ' + this.annonce.typeAnnonce);
                      this.annonceService.updateAnnonce(this.annonce);
                     }, 2000);
 
 
                     this.photo1 = '';
                     this.photo2 = '';
                     this.photo3 = '';
                     this.photo4 = '';
                    //  this.singupForm.reset();

                    //  this.annonceService.updatePhotosAnnonce();
                    //  this.annonceService.updateAnnonce(this.annonce);

  }

  readUrl(event: any) {
    this.photo1 = 'photo1';
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  readUrl1(event: any) {
    this.photo2 = 'photo2';
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.url1 = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  readUrl2(event: any) {
    this.photo3 = 'photo3';
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.url2 = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  readUrl3(event: any) {
    this.photo4 = 'photo4';
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.url3 = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
