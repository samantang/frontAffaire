import { Component } from '@angular/core';
import { LoginServiceService } from './login/login-service.service';

// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'annonce';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  // ngOnInit() {
  //   $('button').click(function(){
  //     alert('Bonjour Monsieur');
  //   });
  // }
}
