import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DemandeService} from "../services/demande.service";
import {DemandeModel} from "../models/demande.model";

@Component({
  selector: 'app-nouvelle-demande',
  templateUrl: './nouvelle-demande.component.html',
  styleUrls: ['./nouvelle-demande.component.scss']
})
export class NouvelleDemandeComponent implements OnInit {
  nouvelleDemandeFormulaire!: FormGroup;
  demandes!: DemandeModel[];

  constructor(private formBuilder: FormBuilder,
              private demandeService: DemandeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.nouvelleDemandeFormulaire = this.formBuilder.group({
      pseudo: [null, [Validators.required]],
      commentaire: [null, [Validators.required]]
    }, {
      updateOn: 'blur'
    });
    this.demandes = this.demandeService.getAllDemande();
  }

  onSubmitForm() {
    this.demandeService.rajouterDemande(this.nouvelleDemandeFormulaire.value);
    this.router.navigateByUrl('/nouvelle-demande');
  }
}
