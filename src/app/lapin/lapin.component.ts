import {Component, Input} from '@angular/core';
import {LapinModel} from "../models/lapin.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lapin',
  templateUrl: './lapin.component.html',
  styleUrls: ['./lapin.component.scss']
})
export class LapinComponent {

  @Input() lapin!: LapinModel;

  constructor(private router: Router) {
  }

  detail() {
    this.router.navigateByUrl('lapin/'+this.lapin.id);
  }
}
