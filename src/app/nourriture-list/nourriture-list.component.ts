import { Component } from '@angular/core';
import {ObjetModel} from "../models/objet.model";
import {ObjetService} from "../services/objet.service";

@Component({
  selector: 'app-nourriture-list',
  templateUrl: './nourriture-list.component.html',
  styleUrls: ['./nourriture-list.component.scss']
})
export class NourritureListComponent {
  objets!: ObjetModel[];

  constructor(private objetService: ObjetService) {
  }

  ngOnInit(): void {
    this.objets = this.objetService.getAllObjets();
  }
}
