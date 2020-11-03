import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
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

  saveButtonDisabled = true;

  nicknameValidator: (nickname: string) => Observable<boolean>;

  constructor(nicknameService: NicknameService) {
    this.nicknameValidator = nicknameService.isValidNickname;
  }

  onNicknamesChanged(change: {value: string[], valid: boolean}): void {
    this.saveButtonDisabled = !change.valid;

    if (change.valid) {
      this.building.nicknames = change.value;
    }
  }

  onClickSave(): void {
    console.log('saving', this.building);
    this.saveButtonDisabled = true;
  }
}
