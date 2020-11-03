import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NicknameService {
  constructor() {
  }

  isValidNickname(nickname: string): Observable<boolean> {
    const normalizedNickname = (nickname ?? '').toLowerCase();
    return normalizedNickname.startsWith('a') ? of(true) : of(false);
  }
}
