import { Component, input } from '@angular/core';
import { Member } from '../types/member';
import { Pet } from '../types/pet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  data=input.required<Member|Pet>();

}
