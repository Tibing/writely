import { Injectable } from '@angular/core';
import { Doc } from 'codemirror';
import { animationFrameScheduler, from, interval, Observable, scheduled, zip } from 'rxjs';
import { map, scan } from 'rxjs/operators';

import { TEXT } from './text';


const DELAY = 20;

@Injectable({ providedIn: 'any' })
export class WelcomeWordsService {

  sayWelcomeWord(doc: Doc): void {
    const text$: Observable<string> = from(TEXT)
      .pipe(
        scan((acc, value) => acc + value, ''),
      );

    const scheduledText$: Observable<string> = scheduled(text$, animationFrameScheduler);
    const renderInterval$: Observable<number> = interval(DELAY);

    zip(scheduledText$, renderInterval$)
      .pipe(
        map(([text]) => text),
      )
      .subscribe((text: string) => {
        doc.setValue(text);
        doc.setCursor(text.length);
      });
  }
}
