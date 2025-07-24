import { UpperCasePipe } from "@angular/common";
import { computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} is ${this.age()} years old`;
    return description;
  });

  capitalizeName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }


}
import { Component, ChangeDetectionStrategy } from "@angular/core";
