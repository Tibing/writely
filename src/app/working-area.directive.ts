import { Directive, ElementRef } from '@angular/core';


declare var CodeMirror: any;

@Directive({ selector: '[appWorkingArea]' })
export class WorkingAreaDirective {

  constructor(private elementRef: ElementRef) {
    const editor: HTMLTextAreaElement = this.elementRef.nativeElement;
    const mirror = CodeMirror.fromTextArea(editor, {
      mode: 'gfm',
      keyMap: 'vim',
    });
    mirror.getDoc().setValue('### Type some markdown here....');
  }
}
