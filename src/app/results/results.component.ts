import { Component, OnDestroy, OnInit} from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../characters.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit{
  
  characters: Character[] = [];
  // charactersSub: Subscription = new Subscription;
  charactersSub!: Subscription;  

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characters = this.characterService.getCharacters();
    this.charactersSub = this.characterService.getCharactersListener().subscribe((updatedCharacters: Character[]) => {
      this.characters = updatedCharacters;
    })
  }

  ngOnDestroy() {
    this.charactersSub.unsubscribe();
  }
}


