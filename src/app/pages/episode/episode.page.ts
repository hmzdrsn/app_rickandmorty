import { Component } from '@angular/core';
import { EpisodeArea } from "./components/episode.ts/episodes";

@Component({
  selector: 'page-episode',
  standalone: true,
  imports: [EpisodeArea],
  template:`
  <app-episode></app-episode>
  `
})
export class EpisodePage {

}
