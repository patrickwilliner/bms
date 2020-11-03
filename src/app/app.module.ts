import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingEditorComponent } from './building-editor/building-editor.component';

import { MatCardModule } from '@angular/material/card';
import { NicknameEditorComponent } from './nickname-editor/nickname-editor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { NicknameService } from './nickname.service';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
];

const declarations = [
  AppComponent,
  BuildingEditorComponent,
  NicknameEditorComponent
];

const services = [
  NicknameService
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
