import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss']
})
export class NicknameEditorComponent implements OnInit {
  nicknames = ["test 1", "test 2"];

  constructor() {
  }

  ngOnInit(): void {
  }
}
