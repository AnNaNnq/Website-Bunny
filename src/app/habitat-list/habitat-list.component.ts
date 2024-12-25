import {Component} from '@angular/core';
import {ObjetModel} from "../models/objet.model";
import {ObjetService} from "../services/objet.service";

@Component({
  selector: 'app-habitat-list',
  templateUrl: './habitat-list.component.html',
  styleUrls: ['./habitat-list.component.scss']
})
export class HabitatListComponent {
  objets!: ObjetModel[];

  constructor(private objetService: ObjetService) {
  }

  ngOnInit(): void {
    this.objets = this.objetService.getAllObjets();
  }
}
