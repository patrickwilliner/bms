import { Component } from '@angular/core';
import { BuildingService } from './building.service';
import { Building } from './models/building.model';
import { NicknameService } from './nickname.service';

const ID_TEST_BUILDING = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  building: Building;

  constructor(buildingService: BuildingService) {
    this.building = buildingService.getBuilding(ID_TEST_BUILDING);
  }
}
