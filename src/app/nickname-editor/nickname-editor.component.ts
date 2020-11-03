import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, ValidationErrors, Validators } from '@angular/forms';
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
  nicknamesChanged = new EventEmitter<{value: string[], valid: boolean}>();

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

  onClickDelete(index: number): void {
    this.nicknameFormArray.removeAt(index);
    this.notifyNicknamesChanged();
  }

  private buildForm(): void {
    this.nicknames.forEach(nickname => {
      this.addNickname(nickname);
    });
  }

  private addNickname(nickname: string): void {
    this.nicknameFormArray.push(new FormControl(nickname, Validators.required, this.validateNickname.bind(this)));
  }

  private registerFormListener(): void {
    this.subscriptions.push(this.nicknameFormArray.valueChanges.subscribe(_ => {
      this.notifyNicknamesChanged();
    }));
  }

  private notifyNicknamesChanged(): void {
    this.nicknamesChanged.emit({
      value: this.nicknameFormArray.value,
      valid: this.nicknameFormArray.valid
    });
  }

  private validateNickname(ctrl: FormControl) {
    return this.validator(ctrl.value).pipe(
      map(res => {
        return res ? null : {loginExist: true};
      })
    );
  }
}
