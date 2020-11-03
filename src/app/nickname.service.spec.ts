import { TestBed, waitForAsync } from '@angular/core/testing';
import { first } from 'rxjs/operators';

import { NicknameService } from './nickname.service';

describe('NicknameService', () => {
  let service: NicknameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NicknameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate nicknames starting with letter "a"', waitForAsync(_ => {
    service.isValidNickname('a').pipe(first()).subscribe(result => {
      expect(result).toBeTrue();
    });
    service.isValidNickname('A').pipe(first()).subscribe(result => {
      expect(result).toBeTrue();
    });
    service.isValidNickname('abc').pipe(first()).subscribe(result => {
      expect(result).toBeTrue();
    });
    service.isValidNickname(' ').pipe(first()).subscribe(result => {
      expect(result).toBeFalse();
    });
    service.isValidNickname(undefined).pipe(first()).subscribe(result => {
      expect(result).toBeFalse();
    });
  }));
});
