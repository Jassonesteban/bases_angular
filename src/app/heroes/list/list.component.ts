import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Capitan america', 'Thor', 'Iron man'];
  public deleteHeroe?: string;

  borrarUltimo():void {
    this.deleteHeroe = this.heroNames.pop();
  }

}
