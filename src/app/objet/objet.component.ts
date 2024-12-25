import {Component, Input} from '@angular/core';
import {LapinModel} from "../models/lapin.model";
import {ObjetModel} from "../models/objet.model";

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.scss']
})
export class ObjetComponent {
  @Input() objet!: ObjetModel;
}
