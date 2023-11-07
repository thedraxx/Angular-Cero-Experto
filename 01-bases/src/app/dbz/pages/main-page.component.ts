import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzComponent{

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 8500
    },
    {
      name: 'Krillin',
      power: 7500
    }
  ]

  public onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

}
