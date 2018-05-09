import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnonceServiceService } from '../annonce-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm} from '@angular/forms';


import { Annonce } from '../models/annonce.model';
import { Params } from '@angular/router/src/shared';
import { UserMessage } from '../models/user-message';


@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
  providers: [AnnonceServiceService]
})
export class SendMessageComponent implements OnInit {
  @ViewChild('f') singupForm: NgForm;
  annonce: Annonce;
  id: number;
  message: string;
  userMessage: UserMessage;
  usernameLogged = localStorage.getItem('username');

  constructor(private annonceService: AnnonceServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.
      subscribe(
        (param: Params) => {
          this.id = param['id'];
          this.annonceService.getAnnonceApi(param['id']).subscribe(
            data => console.log(this.annonce = JSON.parse(JSON.parse(JSON.stringify(data))._body) ),
            error => console.log(error)
          );
        }
      );
  }
  onSubmit (form: NgForm) {
    this.message = this.singupForm.value.message;

    const usernameLogged = localStorage.getItem('username');
    this.userMessage = new UserMessage(usernameLogged, this.message);
    console.log(this.userMessage.message + ' ' + this.userMessage.username);
    this.annonceService.sendMessageToSomeone(this.id, this.userMessage);
  }
  onConnect () {
    this.router.navigate(['/login']);
  }

}
