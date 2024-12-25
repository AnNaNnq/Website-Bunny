import { Component } from '@angular/core';
import {LapinModel} from "../models/lapin.model";
import {LapinService} from "../services/lapin.service";

@Component({
  selector: 'app-lapin-list',
  templateUrl: './lapin-list.component.html',
  styleUrls: ['./lapin-list.component.scss']
})
export class LapinListComponent {
  lapins!: LapinModel[];

  constructor(private lapinService: LapinService) { }

  ngOnInit(): void {
    this.lapins = this.lapinService.getAllLapins();
  }
}
