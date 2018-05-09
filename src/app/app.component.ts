import { Component } from '@angular/core';
import { LoginServiceService } from './login/login-service.service';

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
}
