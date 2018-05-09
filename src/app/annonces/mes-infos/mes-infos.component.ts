import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AnnonceServiceService } from '../annonce-service.service';

@Component({
  selector: 'app-mes-infos',
  templateUrl: './mes-infos.component.html',
  styleUrls: ['./mes-infos.component.css'],
  providers: [AnnonceServiceService]
})
export class MesInfosComponent implements OnInit {

  userLogged: UserModel;
  usernameLogged = localStorage.getItem('username');

  constructor(private annonceService: AnnonceServiceService) { }

  ngOnInit() {
    this.annonceService.getMesInfos().subscribe(
      data => console.log(this.userLogged = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

}
