import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Member } from '../../types/member';
import { Pet } from '../../types/pet';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  data=input.required<Member|Pet>();

}
