import { Component } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../characters.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  model = new Character('', '', '', '');
  weapon = ['Lightsaber', 'Blaster Rifle', 'Blaster Pistol', 'Flamethrower', 'Thermal Detonator'];
  race = ['Human', 'Togruta', "Twi'lek", 'Zabrak', 'Mirialan'];
  background = ['Jedi', 'Sith', 'Bounty Hunter', 'Smuggler', 'Trooper'];

  constructor(private characterService: CharacterService) { }
  
  onSubmit(characterCreation: NgForm) {
    const { name, weapon, race, background } = characterCreation.value;
    const newCharacter = new Character(name, weapon, race, background);
    this.characterService.saveCharacter(newCharacter);
    characterCreation.resetForm();
  }
}
