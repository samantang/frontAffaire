import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnonceStartComponent } from './annonces/annonce-start/annonce-start.component';
import { AnnonceDetailComponent } from './annonces/annonce-detail/annonce-detail.component';
import { AnnonceDetailPageComponent } from './annonces/annonce-detail-page/annonce-detail-page.component';
import { SignalerAnnonceComponent } from './annonces/signaler-annonce/signaler-annonce.component';
import { AnnonceNewComponent } from './annonces/annonce-new/annonce-new.component';
import { AnnoncesAValiderComponent } from './annonces/annonces-a-valider/annonces-a-valider.component';
import { AValiderDetailsComponent } from './annonces/annonces-a-valider/a-valider-details/a-valider-details.component';
import { AnnoncesSinaleesComponent } from './annonces/annonces-sinalees/annonces-sinalees.component';
// tslint:disable-next-line:max-line-length
import { AnnoncesSignaleesDetailsComponent } from './annonces/annonces-sinalees/annonces-signalees-details/annonces-signalees-details.component';
import { NewAlerteComponent } from './annonces/alertes/new-alerte/new-alerte.component';
import { AlertesComponent } from './annonces/alertes/alertes.component';
import { MesAnnoncesComponent } from './annonces/mes-annonces/mes-annonces.component';
import { MesAnnoncesDetailsComponent } from './annonces/mes-annonces/mes-annonces-details/mes-annonces-details.component';
import { MesAnnoncesEditComponent } from './annonces/mes-annonces/mes-annonces-edit/mes-annonces-edit.component';
import { MesFavorisComponent } from './annonces/mes-favoris/mes-favoris.component';
import { LoginUserComponent } from './annonces/longin/login-user/login-user.component';
import { LoginComponent } from './header/login/login.component';
import { SendMessageComponent } from './annonces/send-message/send-message.component';
import { MesInfosComponent } from './annonces/mes-infos/mes-infos.component';
import { MesActivitesComponent } from './annonces/mes-activites/mes-activites.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/annonces', pathMatch: 'full'},
  {path: 'annonces', component: AnnoncesComponent, children: [
    {path: '', component: AnnonceStartComponent},
    {path: ':id', component: AnnonceDetailComponent}
  ]},
  {path: 'annonce-details-page/:id', component: AnnonceDetailPageComponent},
  {path: 'signaler-annonce/:id', component: SignalerAnnonceComponent},
  {path: 'new', component: AnnonceNewComponent},
  {path: 'annonces-a-valider', component: AnnoncesAValiderComponent, children: [
    {path: ':id', component: AValiderDetailsComponent}
  ]},
  {path: 'annonces-signalees', component: AnnoncesSinaleesComponent, children: [
    {path: ':id', component: AnnoncesSignaleesDetailsComponent}
  ] },
  {path: 'new-alerte', component: NewAlerteComponent},
  {path: 'mes-alertes', component: AlertesComponent},
  {path: 'mes-annonces', component: MesAnnoncesComponent, children: [
    {path: ':id', component: MesAnnoncesDetailsComponent},
    {path: ':id/edit', component: MesAnnoncesEditComponent}
  ]},
  {path: 'mes-favoris', component: MesFavorisComponent},
  {path: 'login', component: LoginComponent},
  {path: 'send-message/:id', component: SendMessageComponent},
  {path: 'mes-infos', component: MesInfosComponent},
  {path: 'mes-activites', component: MesActivitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
