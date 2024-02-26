import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private rendeded: Renderer2) {}

  ngOnInit(): void {
    this.rendeded.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}
