import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { Building } from '../models/building.model';
import { NicknameEditorComponent } from '../nickname-editor/nickname-editor.component';

import { BuildingEditorComponent } from './building-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const buildingMock: Building = {
  id: 0,
  address: '',
  description: '',
  nicknames: []
};

describe('BuildingEditorComponent', () => {
  let component: BuildingEditorComponent;
  let fixture: ComponentFixture<BuildingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MatCardModule],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
      ],
      declarations: [ BuildingEditorComponent, NicknameEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingEditorComponent);
    component = fixture.componentInstance;
    component.building = buildingMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
