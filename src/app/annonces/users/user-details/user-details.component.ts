import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../../annonce-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserModel } from '../../models/user.model';
import { Annonce } from '../../models/annonce.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserModel;
  id: number;
  annonces: Annonce [];
  userResult: UserModel;
  sesAnnoncesValidees: Annonce [];
  sesAnnoncesSignalees: Annonce [];
  sesAnnoncesInvalidees: Annonce [];
  sesAnnoncesDepubliees: Annonce [];

  constructor(private annonceService: AnnonceServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.annonceService.getUser(this.id).subscribe(
          data => console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
          error => console.log(error)
        );
        this.annonceService.getMesAnnoncesId(this.id).subscribe(
          data => console.log(this.annonces = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
          error => console.log(error)
        );
      }
    );
  }

  onDisableCompte() {
    // console.log('suspendre le compte avec lid: ' + this.id);
    this.annonceService.suspendreCompte(this.id).subscribe(
      data => console.log(this.userResult = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
      error => console.log(error)
    );
  }
  onActivateCompte () {
    this.annonceService.activerCompte(this.id).subscribe(
      data => console.log(this.userResult = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
      error => console.log(error)
    );
  }
  onConsulterAnnonce(id: number) {
    this.router.navigate(['/annnonce-details-page/' + id + '']);
  }

}
