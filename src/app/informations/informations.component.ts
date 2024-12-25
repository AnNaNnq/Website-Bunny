import { Component } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  bunnyIntroduction : String = "../../assets/images/bunny1.jpg";
  bunnyCage : String = "../../assets/images/enclos.jpg";
}
