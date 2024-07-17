import { Component } from '@angular/core';
import {CharacterArea} from '../character/components/character/characters'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'page-character',
  standalone: true,
  imports: [CharacterArea,RouterOutlet],
  template:`
  
  <router-outlet></router-outlet>
  `
})
export class CharacterPage {

}
