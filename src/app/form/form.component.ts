import { Component } from '@angular/core';
import { Character } from '../character';
import { Router } from '@angular/router';
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

  submitted = false;

  constructor(public router: Router) { }

  submittedFormData: Character | null = null;
  
  onSubmit(characterCreation: NgForm) {
    this.submitted = true;
    this.onSubmit(characterCreation.value["background"]);
  }
}
