import {Component, Input} from '@angular/core';
import {DemandeModel} from "../models/demande.model";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent {

  @Input() demande!: DemandeModel;
}
