import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[anu]'  //directive name
})

export class CustomDirective{
    //Dependency injection
    constructor(el:ElementRef){
        el.nativeElement.style.background="red";
        el.nativeElement.style.color="white";
        el.nativeElement.style.padding="10px";
        el.nativeElement.style.borderRadius="10px";
        el.nativeElement.style.border="1px solid #111";

    }
}