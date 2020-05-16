import { Injectable } from '@angular/core';
import { Editor } from 'codemirror';

declare var CodeMirror: any;

@Injectable({ providedIn: 'any' })
export class CodeMirrorService {

  createEditor(textArea: HTMLTextAreaElement): Editor {
    return CodeMirror.fromTextArea(textArea, {
      mode: 'gfm',
      // keyMap: 'vim',
      showMarkdownLineBreaks: true,
      lineWrapping: true,
    });
  }
}
