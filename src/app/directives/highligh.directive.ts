import { AfterViewInit, Directive, ElementRef, Input, Output, Renderer2 } from "@angular/core";

@Directive({
    selector:'[highlight]'
})

export class HighlightDirective implements AfterViewInit{
    @Input() color = 'red'
    ngAfterViewInit(): void {
        this.setBackgroundColor(this.color)
    }
    constructor(private el: ElementRef,private renderer:Renderer2){}

    setBackgroundColor(color:string){
        this.renderer.setStyle(this.el.nativeElement,'background-color',color)
    }
}