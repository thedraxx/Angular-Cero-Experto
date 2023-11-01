import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent{
  constructor() { }
  public title:string = 'Hola Mundo';
  public counter:number = 10;

  public increment(value:number = 1) {
    this.counter+= value;
  }

  public decrement(value:number = 1) {
    this.counter-= value;
  }

  public reset() {
    this.counter = 10;
  }

}
