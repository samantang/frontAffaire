import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../../login/login-service.service';
import { Annonce } from '../../models/annonce.model';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [LoginServiceService]
})
export class LoginUserComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;

  user: UserModel;

  valueSetByA = 42;

	constructor (private loginService: LoginServiceService, private router: Router) {
    if(localStorage.getItem('userLoggedIn') === '' || localStorage.getItem('userLoggedIn') === null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  onSubmit() {
  	this.loginService.sendCredential(this.username, this.password).subscribe(
      res => {
        this.loggedIn = true;
        localStorage.setItem('userLoggedIn', 'true');
        // localStorage.setItem('user', JSON.stringify({}));
         console.log(this.user = JSON.parse(JSON.parse(JSON.stringify(res))._body) );
          // this.loginService.setUserLogin(JSON.parse(JSON.parse(JSON.stringify(res))._body));
          // this.loginService.changeValeurUser(JSON.parse(JSON.parse(JSON.stringify(res))._body));
          // setInterval(() => this.loginService.changeValueFromA(++this.valueSetByA), 1000)
        // location.reload();
      },
      err => console.log(err)
    );
  }

  logout() {
		this.loginService.logout().subscribe(
        res => {
          localStorage.setItem('userLoggedIn', '');
        },
        err => console.log(err)
        );
      location.reload();
      this.router.navigate(['/login']);
    }

  ngOnInit() {}

}
