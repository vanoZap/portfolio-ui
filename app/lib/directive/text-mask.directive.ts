import { Directive, ElementRef, Input } from '@angular/core';

declare var VMasker: any;

@Directive({ selector: '[text-mask]' })

export class TextMaskDirective {

    constructor(el: ElementRef) {
        VMasker(el.nativeElement).maskPattern("99:99");
    }
}