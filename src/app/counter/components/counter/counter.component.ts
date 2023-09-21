import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <button (click)="aumentar(2)">+1</button>
    <h3>Counter: {{counter}}</h3>
    <button (click)="decrementar(2)">-1</button>
    
    <button (click)="resetear()">RESET</button>
    `
})

export class CounterComponent {
    public counter: number = 10;
  
    aumentar( value:number):void{
      this.counter += value;
    }
  
    decrementar(value:number):void{
      this.counter -=value;
    }
  
    resetear():void{
      this.counter=10;
    }
}