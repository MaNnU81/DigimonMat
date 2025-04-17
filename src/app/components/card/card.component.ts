import { Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Digimon } from '../../model/digimon-model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatCardModule, MatIcon],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() coverDigimon!: string;
  @Input() name!: string;
  @Input() id!: number;
  @Input() digimon!: Digimon;
}
