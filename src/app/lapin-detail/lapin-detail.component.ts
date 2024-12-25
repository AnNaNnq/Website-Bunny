import {Component, Input} from '@angular/core';
import {LapinModel} from "../models/lapin.model";
import {LapinService} from "../services/lapin.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-lapin-detail',
  templateUrl: './lapin-detail.component.html',
  styleUrls: ['./lapin-detail.component.scss']
})
export class LapinDetailComponent {
  @Input() lapin!: LapinModel;

  constructor(private lapinService: LapinService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const lapinID = +this.route.snapshot.params['id'];
    this.lapin = this.lapinService.getId(lapinID);
  }
}
