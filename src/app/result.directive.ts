import { Directive, ElementRef, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appResult]'
})
export class ResultDirective {

  constructor(private ref: ElementRef) { }
  @Input() appResult: any;
  ngOnChanges() {
    if (this.appResult < 350)
      this.ref.nativeElement.style.color = "red"
    else
      this.ref.nativeElement.style.color = "green"
  }
}
