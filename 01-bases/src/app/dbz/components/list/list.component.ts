import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteiD:EventEmitter <string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
  ];

  public onDeleteCharacter(i?: string):void {
    if (!i) return;

    this.onDeleteiD.emit(i);
  }

}
