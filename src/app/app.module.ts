import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingEditorComponent } from './building-editor/building-editor.component';

import {MatCardModule} from '@angular/material/card';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  MatCardModule
];

const declarations = [
  AppComponent,
  BuildingEditorComponent
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
