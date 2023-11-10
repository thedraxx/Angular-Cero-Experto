import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzComponent{

  constructor(private DbzService: DbzService) {}

  public get characters(): Character[] {
    return [...this.DbzService.characters];
  }


  public onNewCharacter(character: Character): void {
    this.DbzService.addCharacter(character);
  }

  public deleteCharacterById(id: string): void {
    this.DbzService.deleteCharacterById(id);
  }

}
