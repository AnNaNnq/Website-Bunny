import { Component } from '@angular/core';
import {ObjetModel} from "../models/objet.model";
import {ObjetService} from "../services/objet.service";

@Component({
  selector: 'app-jouet-list',
  templateUrl: './jouet-list.component.html',
  styleUrls: ['./jouet-list.component.scss']
})
export class JouetListComponent {
  objets!: ObjetModel[];

  constructor(private objetService: ObjetService) {
  }

  ngOnInit(): void {
    this.objets = this.objetService.getAllObjets();
  }
}
