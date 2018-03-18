import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'episode-hero',
  templateUrl: './episode-hero.component.html',
  styleUrls: ['./episode-hero.component.scss']
})
export class EpisodeHeroComponent implements OnInit {
  @Input() episode;

  constructor() { }

  ngOnInit() {
  }

}
