import { Component} from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  model = new Character('', '', '', '');

}


