import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const dummyValidator = (nickname: string) => {
  return of(true);
};

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss']
})
export class NicknameEditorComponent implements OnInit, OnDestroy {
  @Input()
  nicknames: string[] = [];

  @Input()
  validator: (nickname: string) => Observable<boolean> = dummyValidator;

  @Output()
  nicknamesChanged = new EventEmitter<string[]>();

  subscriptions: Subscription[] = [];
  nicknameFormArray = new FormArray([]);

  constructor() {
  }

  ngOnInit(): void {
    this.buildForm();
    this.registerFormListener();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onClickAddNickname(): void {
    this.addNickname('');
  }

  private buildForm(): void {
    this.nicknames.forEach(nickname => {
      this.addNickname(nickname);
    });
  }

  private addNickname(nickname: string): void {
    this.nicknameFormArray.push(new FormControl(nickname, this.validateNickname));
  }

  private registerFormListener(): void {
    this.subscriptions.push(this.nicknameFormArray.valueChanges.subscribe(_ => {
      this.notifyNicknamesChanged();
    }));
  }

  private notifyNicknamesChanged(): void {
    console.log(this.nicknameFormArray);
    this.nicknamesChanged.emit(this.nicknameFormArray.value);
  }

  private validateNickname(formControl: FormControl): Observable<any> {
    return this.validator(formControl.value).pipe(map(valid => {
      illegalValue: valid
    }));
  }
}
