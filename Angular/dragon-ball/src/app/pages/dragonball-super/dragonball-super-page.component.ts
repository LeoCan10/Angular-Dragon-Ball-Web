import { NgClass } from "@angular/common";
import { Component, computed, inject, Inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/shared/navbar/dragonball/character-list/character-list.component";
import { CharacterAppComponent } from "../../components/shared/navbar/dragonball/character-add/character-add.component";
import { DragonBallService } from "../../services/dragonaball.service";

interface Character {
  id: number;
  name: string;
  power: string;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAppComponent]
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonBallService);
}
