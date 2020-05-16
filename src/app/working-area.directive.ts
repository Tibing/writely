import { Directive, ElementRef } from '@angular/core';
import { Doc, Editor } from 'codemirror';

import { CodeMirrorService } from './code-mirror';
import { WelcomeWordsService } from './welcome-words/welcome-words.service';


@Directive({ selector: '[appWorkingArea]' })
export class WorkingAreaDirective {

  constructor(elementRef: ElementRef,
              codeMirror: CodeMirrorService,
              welcomeWords: WelcomeWordsService) {
    const textArea: HTMLTextAreaElement = elementRef.nativeElement;
    const editor: Editor = codeMirror.createEditor(textArea);
    const doc: Doc = editor.getDoc();

    welcomeWords.sayWelcomeWord(doc);
  }
}
