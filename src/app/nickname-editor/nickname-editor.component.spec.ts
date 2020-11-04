import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameEditorComponent } from './nickname-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NicknameEditorComponent', () => {
  let component: NicknameEditorComponent;
  let fixture: ComponentFixture<NicknameEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicknameEditorComponent ],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add empty nickname when clicking add button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button.add');
    button.click();
    fixture.detectChanges();

    expect(component.nicknameFormArray.length).toBe(1);
  });

  it('should add nickname', () => {
    fixture.whenStable().then(() => {
      const button = fixture.debugElement.nativeElement.querySelector('button.add');
      button.click();
      fixture.detectChanges();

      const inputField = fixture.debugElement.nativeElement.querySelectorAll('input.nickname')[0];
      inputField.value = 'a nickname';
      inputField.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      
      expect(component.nicknameFormArray.value[0]).toBe('a nickname');
    });
  });

  it('should remove nickname', () => {
    fixture.whenStable().then(() => {
      const button = fixture.debugElement.nativeElement.querySelector('button.add');
      button.click();
      fixture.detectChanges();

      const deleteButton = fixture.debugElement.nativeElement.querySelectorAll('button.delete')[0];
      deleteButton.click();
      fixture.detectChanges();

      expect(component.nicknameFormArray.length).toBe(0);
    });
  });
});
