import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @Input('appHightlight') highlightStyle: string;
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(`3px 3px 10px ${this.highlightStyle || 'gray'}`);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(highlightStyle: string) {
    this.el.nativeElement.style.boxShadow = highlightStyle;
  }
}
