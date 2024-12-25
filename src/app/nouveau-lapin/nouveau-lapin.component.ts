import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

import {LapinModel} from "../models/lapin.model";
import {LapinService} from "../services/lapin.service";

@Component({
  selector: 'app-nouveau-lapin',
  templateUrl: './nouveau-lapin.component.html',
  styleUrls: ['./nouveau-lapin.component.scss']
})

export class NouveauLapinComponent implements OnInit {
  nouveauLapinFormulaire!: FormGroup;
  nouveauLapinVue$!: Observable<LapinModel>;

  constructor(private formBuilder: FormBuilder,
              private lapinService: LapinService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.nouveauLapinFormulaire = this.formBuilder.group({
      nom: [null, [Validators.required]],
      photo: [null, [Validators.required]],
      sexe: [null, [Validators.required]],
      dateNaissance: [null, [Validators.required]],
      couleur: [null, [Validators.required]],
      caractere: [null, [Validators.required]],
    }, {
      updateOn: 'blur'
    });
    this.nouveauLapinVue$ = this.nouveauLapinFormulaire.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0,
      }))
    );
  }

  onSubmitForm() {
    this.lapinService.rajouterLapin(this.nouveauLapinFormulaire.value);
    this.router.navigateByUrl('/list-lapins');
  }

}
