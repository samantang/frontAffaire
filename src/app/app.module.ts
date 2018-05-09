import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule} from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnonceDetailComponent } from './annonces/annonce-detail/annonce-detail.component';
import { AnnonceEditComponent } from './annonces/annonce-edit/annonce-edit.component';
import { AnnonceListeComponent } from './annonces/annonce-liste/annonce-liste.component';
import { AnnonceItemComponent } from './annonces/annonce-liste/annonce-item/annonce-item.component';
import { AnnonceStartComponent } from './annonces/annonce-start/annonce-start.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceDetailPageComponent } from './annonces/annonce-detail-page/annonce-detail-page.component';
import { SignalerAnnonceComponent } from './annonces/signaler-annonce/signaler-annonce.component';
import { AnnonceNewComponent } from './annonces/annonce-new/annonce-new.component';
import { AnnoncesAValiderComponent } from './annonces/annonces-a-valider/annonces-a-valider.component';
import { AValiderDetailsComponent } from './annonces/annonces-a-valider/a-valider-details/a-valider-details.component';
import { AnnoncesSinaleesComponent } from './annonces/annonces-sinalees/annonces-sinalees.component';
// tslint:disable-next-line:max-line-length
import { AnnoncesSignaleesDetailsComponent } from './annonces/annonces-sinalees/annonces-signalees-details/annonces-signalees-details.component';
import { ChoixTypePipePipe } from './annonces/choix-type-pipe.pipe';
import { AlertesComponent } from './annonces/alertes/alertes.component';
import { NewAlerteComponent } from './annonces/alertes/new-alerte/new-alerte.component';
import { MesAnnoncesComponent } from './annonces/mes-annonces/mes-annonces.component';
import { MesAnnoncesItemsComponent } from './annonces/mes-annonces/mes-annonces-items/mes-annonces-items.component';
import { MesAnnoncesDetailsComponent } from './annonces/mes-annonces/mes-annonces-details/mes-annonces-details.component';
import { MesAnnoncesEditComponent } from './annonces/mes-annonces/mes-annonces-edit/mes-annonces-edit.component';
import { ChoixPagePipePipe } from './annonces/choix-page-pipe.pipe';
import { MesFavorisComponent } from './annonces/mes-favoris/mes-favoris.component';
import { TriAnnoncePipe } from './annonces/tri-annonce.pipe';
import { LoginUserComponent } from './annonces/longin/login-user/login-user.component';
import { LoginServiceService } from './login/login-service.service';
import { LoginComponent } from './header/login/login.component';
import { SendMessageComponent } from './annonces/send-message/send-message.component';
import { MesInfosComponent } from './annonces/mes-infos/mes-infos.component';
import { MesActivitesComponent } from './annonces/mes-activites/mes-activites.component';
import { MesActivitesItemComponent } from './annonces/mes-activites/mes-activites-item/mes-activites-item.component';
import { AnnonceServiceService } from './annonces/annonce-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnnoncesComponent,
    AnnonceDetailComponent,
    AnnonceEditComponent,
    AnnonceListeComponent,
    AnnonceItemComponent,
    AnnonceStartComponent,
    AnnonceDetailPageComponent,
    SignalerAnnonceComponent,
    AnnonceNewComponent,
    AnnoncesAValiderComponent,
    AValiderDetailsComponent,
    AnnoncesSinaleesComponent,
    AnnoncesSignaleesDetailsComponent,
    ChoixTypePipePipe,
    AlertesComponent,
    NewAlerteComponent,
    MesAnnoncesComponent,
    MesAnnoncesItemsComponent,
    MesAnnoncesDetailsComponent,
    MesAnnoncesEditComponent,
    ChoixPagePipePipe,
    MesFavorisComponent,
    TriAnnoncePipe,
    LoginUserComponent,
    LoginComponent,
    SendMessageComponent,
    MesInfosComponent,
    MesActivitesComponent,
    MesActivitesItemComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [LoginServiceService, AnnonceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
