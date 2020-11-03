import { Component, Input, OnInit } from '@angular/core';
import { Building } from '../models/building.model';

@Component({
  selector: 'app-building-editor',
  templateUrl: './building-editor.component.html',
  styleUrls: ['./building-editor.component.scss']
})
export class BuildingEditorComponent {
  @Input()
  building: Building;

  constructor() {
  }
}
