import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCoinComponent } from './person-coin/person-coin.component';
import { EpisodeHeroComponent } from './episode-hero/episode-hero.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PersonCoinComponent, EpisodeHeroComponent]
})
export class CommonUiModule {}
