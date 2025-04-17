import { Component, effect, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from "../card/card.component";
import { Digimon } from '../../model/digimon-model';
import { DigimonService } from '../../services/digi.service';
import { NgFor } from '@angular/common';




@Component({
  selector: 'app-home',
  imports: [MatGridListModule, CardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  digimons?:Digimon[] = [];
@Input() coverDigimon: string | null = null; 
@Input() digimon!: Digimon; 
@Input() name?: string;     
@Input() id?: number;   

constructor( public digimonService:DigimonService){
  effect(() => {
    this.digimons = this.digimonService.digimons()
  });
}
}
