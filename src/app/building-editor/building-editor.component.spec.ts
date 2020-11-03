import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { BuildingEditorComponent } from './building-editor.component';

describe('BuildingEditorComponent', () => {
  let component: BuildingEditorComponent;
  let fixture: ComponentFixture<BuildingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MatCardModule],
      declarations: [ BuildingEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
