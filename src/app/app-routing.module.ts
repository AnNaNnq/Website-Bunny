import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationsComponent } from "./informations/informations.component";
import {LapinListComponent} from "./lapin-list/lapin-list.component";
import {NouveauLapinComponent} from "./nouveau-lapin/nouveau-lapin.component";
import {HabitatListComponent} from "./habitat-list/habitat-list.component";
import {NourritureListComponent} from "./nourriture-list/nourriture-list.component";
import {JouetListComponent} from "./jouet-list/jouet-list.component";
import {NouvelleDemandeComponent} from "./nouvelle-demande/nouvelle-demande.component";
import {AccessoireListComponent} from "./accessoire-list/accessoire-list.component";
import {LapinDetailComponent} from "./lapin-detail/lapin-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: InformationsComponent},
  {path: 'list-lapins', component: LapinListComponent},
  {path: 'lapin/:id', component: LapinDetailComponent},
  {path: 'nouveau-lapin', component: NouveauLapinComponent},
  {path: 'list-habitats', component: HabitatListComponent},
  {path: 'list-nourriture', component: NourritureListComponent},
  {path: 'list-jouet', component: JouetListComponent},
  {path: 'list-accessoire', component: AccessoireListComponent},
  {path: 'nouvelle-demande', component: NouvelleDemandeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
