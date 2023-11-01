import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {



  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public heroeBorrado?: string;


  public borrarHeroe(): void {
    this.heroeBorrado = this.heroesNames.pop();
  }


}
