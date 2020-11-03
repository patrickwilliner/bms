import { Component, Input } from '@angular/core';
import { Building } from '../models/building.model';
import { NicknameService } from '../nickname.service';

@Component({
  selector: 'app-building-editor',
  templateUrl: './building-editor.component.html',
  styleUrls: ['./building-editor.component.scss']
})
export class BuildingEditorComponent {
  @Input()
  building: Building;

  constructor(nicknameService: NicknameService) {
  }

  onNicknamesChanged(nicknames: string[]): void {
    console.log(nicknames);
  }
}
