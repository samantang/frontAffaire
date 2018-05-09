import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import '../file-image.js';
import { AnnonceServiceService } from '../annonce-service.service';
import { Annonce } from '../models/annonce.model';



@Component({
  selector: 'app-annonce-new',
  templateUrl: './annonce-new.component.html',
  styleUrls: ['./annonce-new.component.css'],
  providers: [AnnonceServiceService]
})
export class AnnonceNewComponent implements OnInit {
  @ViewChild('f') singupForm: NgForm;
  usernameLogged = localStorage.getItem('username');

  modalRef: BsModalRef;
  categorieChoisie = '';
  annonceForm: FormGroup;
  annonce: Annonce;
  annonceRetour: Annonce;
  // pour les radios bouttons
  natureAnnonce = ['offre', 'demande'];
  typeAnnonce = ['Particulier', 'Professionnel'];

  url: any;
  url2: any;
  url3: any;
  url1: any;

  photo1 = '';
  photo2 = '';
  photo3 = '';
  photo4 = '';

  public id: number;
  public titre: string;
  public description: string;
  public region: string;
  public ville: string;
  public cheminImage: string;
  public categorie: string;
  public dateDepot: string;
  public dateValidation: string;
  public typeAnnonceModel: string;
  public natureAnnonceModel: string;
  public prix: number;
  public phone: number;
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
  

  public photos  = new FormData();

  constructor(public annonceService: AnnonceServiceService,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit() {
  }
  onChange(valeur) {
    this.categorieChoisie = valeur;
  }
  onSubmit(form: NgForm) {
    
    this.phone = this.singupForm.value.telephone;
    this.telephoneVisible = this.singupForm.value.numerovisible;
    this.titre = this.singupForm.value.titre;
    // this.telephone = this.singupForm.value.telephone;
    this.prix = this.singupForm.value.prix;
    this.categorie = this.singupForm.value.categorie;
    this.region = this.singupForm.value.region;
    this.ville = this.singupForm.value.ville;
    this.photos = this.singupForm.value.files;
    this.nbPieces = this.singupForm.value.nbpieces; 
    this.anneeModele = this.singupForm.value.anneemodele;
    this.modele = this.singupForm.value.modele;
    this.carburant = this.singupForm.value.carburant;
    this.boiteDeVitesse = this.singupForm.value.boitedevitesse;
    this.cylindre = this.singupForm.value.cylindre;
    this.longueur = this.singupForm.value.longueur;
    this.largeur = this.singupForm.value.largeur;
    this.nomPhoto = this.singupForm.value.nomPhoto;
    this.description = this.singupForm.value.description;
    this.typeAnnonceModel = this.singupForm.value.typeannonce;
    this.natureAnnonceModel = this.singupForm.value.natureannonce;
    // typeLocation a faire
    
    this.annonce = new Annonce(this.id, this.titre, this.description, this.region, this.ville, this.cheminImage, this.categorie, '', '',
                    this.typeAnnonceModel, this.natureAnnonceModel, this.prix, this.phone, this.telephoneVisible, this.nbDeVues,
                     this.surfaceMetreCarre, this.nbPieces, this.modele, this.anneeModele, this.carburant, this.boiteDeVitesse,
                     this.cylindre, this.longueur, this.largeur, this.nomPhoto, false, '', '', '', '', false, '') ;

                    //  on appelle les methodes de chargement des photos dans la BDD que si la photo est selectionnée
                    if (this.photo1 !== '') {
                      this.annonceService.sauverPhotoAnnonce();
                    }
                    if (this.photo2 !== '') {
                      this.annonceService.sauverPhotoAnnonce1();
                    }
                    if (this.photo3 !== '') {
                      this.annonceService.sauverPhotoAnnonce2();
                    }
                    if (this.photo4 !== '') {
                      this.annonceService.sauverPhotoAnnonce3();
                    }
                    // on attend 2 secondes pour être sur que les photos sont chanargées en BDD, car elles prennent du temps sinon on rique 
                    // de charger l'annonce avant les photos ce qui ne serait pas bon
                    setTimeout (() => {
                     this.annonceService.sauverAnnonce(this.annonce);
                    }, 2000);


                    this.photo1 = '';
                    this.photo2 = '';
                    this.photo3 = '';
                    this.photo4 = '';
                    this.singupForm.reset();
                    this.router.navigate(['/annonces']);
  }

  onClear() {
    this.singupForm.reset();
  }

  onCancel() {
    this.router.navigate(['/annonces']);
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onConnect () {
    this.router.navigate(['/login']);
  }
}
