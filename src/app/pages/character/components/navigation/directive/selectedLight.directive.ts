import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[selected-light]',
    standalone: true
})
export class SelectedLightDirective implements OnInit {
    @Input('selected-light') selectedLight: number;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        if (this.selectedLight == 3) {
            this.renderer.setAttribute(this.el.nativeElement, 'aria-current', 'page');
        }
    }

}