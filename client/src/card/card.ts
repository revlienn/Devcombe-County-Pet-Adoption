import { Component, input } from '@angular/core';
import { Member } from '../types/member';
import { Pet } from '../types/pet';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  data=input.required<Member|Pet>();

}
