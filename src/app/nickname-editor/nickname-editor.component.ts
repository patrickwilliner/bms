import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss']
})
export class NicknameEditorComponent implements OnInit {
  @Input()
  nicknames: string[] = [];

  @Output()
  nicknamesChanged = new EventEmitter<string[]>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
