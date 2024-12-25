import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LapinComponent } from './lapin/lapin.component';
import { InformationsComponent } from './informations/informations.component';
import { LapinListComponent } from './lapin-list/lapin-list.component';
import { FooterComponent } from './footer/footer.component';
import { NouveauLapinComponent } from './nouveau-lapin/nouveau-lapin.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AgePipe } from './shared/age.pipe';
import { ObjetComponent } from './objet/objet.component';
import { HabitatListComponent } from './habitat-list/habitat-list.component';
import { NourritureListComponent } from './nourriture-list/nourriture-list.component';
import { JouetListComponent } from './jouet-list/jouet-list.component';
import { DemandeComponent } from './demande/demande.component';
import { NouvelleDemandeComponent } from './nouvelle-demande/nouvelle-demande.component';
import { AccessoireListComponent } from './accessoire-list/accessoire-list.component';
import { LapinDetailComponent } from './lapin-detail/lapin-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LapinComponent,
    InformationsComponent,
    LapinListComponent,
    FooterComponent,
    NouveauLapinComponent,
    AgePipe,
    ObjetComponent,
    HabitatListComponent,
    NourritureListComponent,
    JouetListComponent,
    DemandeComponent,
    NouvelleDemandeComponent,
    AccessoireListComponent,
    LapinDetailComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
