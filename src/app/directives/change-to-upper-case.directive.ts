import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appChangeToUpperCase]'
})
export class ChangeToUpperCaseDirective {

  constructor( private renderer: Renderer,
               private el: ElementRef) { }

  @HostListener('textchange') onKeyUp() {

    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    console.log(this.el.nativeElement.value);
  }

}
