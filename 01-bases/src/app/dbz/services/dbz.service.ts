import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import {v4 as uuid  }  from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 7500
    }
  ]

  public addCharacter(character: Character): void {
    this.characters.push({
      id: uuid(),
      name: character.name,
      power: character.power
    });
  }

  public deleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
