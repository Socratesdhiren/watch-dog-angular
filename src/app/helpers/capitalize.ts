import {Directive, Input, Output, EventEmitter, OnInit} from '@angular/core';
@Directive({
    selector: '[capital]',
    host: {
        '[value]': 'capital',
        '(input)': 'capitalFormat($event.target.value)'
    }
})
export class Capitalize implements OnInit {

    @Input() capital: string;
    @Output() capitalChange: EventEmitter<string> = new EventEmitter<string>();
    

    constructor() {
    }

    ngOnInit() {

        this.capital = this.capital || "";        
       setTimeout(() =>this.capitalFormat(this.capital));
    }

    capitalFormat(value) {
        console.log("GOT VALUE" +value);
        value = value.toUpperCase()         //value=value[0].tocapital();
      
     this.capitalChange.next(value);
          
         
        
        
    }
}