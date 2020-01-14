import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appChangedom]'
})
export class ChangedomDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { 
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
  }

}
