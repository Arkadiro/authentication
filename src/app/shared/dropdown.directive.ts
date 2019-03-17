import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')
  public isOpen = false;

  @HostListener('click')
    public toggleOpen(): void {
      this.isOpen = !this.isOpen;
  }
}
