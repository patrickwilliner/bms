import { Injectable } from '@angular/core';
import { Building } from './models/building.model';

const TEST_DATA: Building[] = [{
  id: 0,
  address: '30 St Mary Axe, London',
  description: 'headquarter',
  nicknames: ['aaa', 'Aa bbcc']
}];

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  constructor() {
  }

  getBuilding(buildingId: number): Building {
    return TEST_DATA[buildingId];
  }
}
