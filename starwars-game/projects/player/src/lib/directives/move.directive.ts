import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[starwarsMove]'
})
export class MovePlayerDirective {
  private lastXPosition = 0;

  constructor(private element: ElementRef) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.info('event ?', event.code);

    let currentX = 0;
    if (event.code == 'ArrowLeft') {
      currentX = -1;
    } else if (event.code == 'ArrowRight') {
      currentX = 1;
    }
    this.lastXPosition += currentX;

    this.element.nativeElement.style.left = this.lastXPosition + 'px';
  }
}
