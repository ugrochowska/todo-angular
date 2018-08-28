import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
      const input: HTMLInputElement = this.el.nativeElement as HTMLInputElement;
      input.focus();
      input.select();
  }
}
