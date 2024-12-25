import { Component } from '@angular/core';
import {ObjetModel} from "../models/objet.model";
import {ObjetService} from "../services/objet.service";

@Component({
  selector: 'app-accessoire-list',
  templateUrl: './accessoire-list.component.html',
  styleUrls: ['./accessoire-list.component.scss']
})
export class AccessoireListComponent {
  objets!: ObjetModel[];

  constructor(private objetService: ObjetService) {
  }

  ngOnInit(): void {
    this.objets = this.objetService.getAllObjets();
  }
}
