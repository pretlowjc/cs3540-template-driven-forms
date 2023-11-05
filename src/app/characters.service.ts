import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Character } from './character'; // Import your Character class

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = [];
  private charactersListener = new Subject<Character[]>();

  saveCharacter(character: Character) {
    this.characters.push(character);
    localStorage.setItem('characters', JSON.stringify(this.characters));
    this.charactersListener.next(this.characters);
  }

  getCharacters(): Character[] {
    return this.characters;
  }

  getCharactersListener(): Observable<Character[]> {
    return this.charactersListener.asObservable();
  }

  retrieveCharacters() {
    const charactersString = localStorage.getItem('characters');
    if (charactersString !== null) {
      this.characters = JSON.parse(charactersString);
      this.charactersListener.next(this.characters);
    }
  }
}
