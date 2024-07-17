import { Component, Signal, ViewEncapsulation, signal } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';
import { CharacterService } from '../../../../core/services/character.service';
import { SpotlightDirective } from '../../../home/components/character/directive/spotlight.directive';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  encapsulation: ViewEncapsulation.None,
  imports: [Icon, SpotlightDirective, NgFor, NgIf, RouterLink, NgClass],
  standalone: true,
  template: `
    <div style="display:flex; color: white; flex-direction:row;" *ngIf="_data">
      <div>
        <img
          src="{{ _data.image }}"
          alt=""
          style="border-radius: 10px; margin-right: 10px;"
        />
      </div>

      <div style="flex-direction: column;">
        <h1
          class="text-slate-900 dark:text-white text-xl lg:text-5xl font-semibold tracking-tight"
        >
          {{ _data.name }}
        </h1>

        <div class="flex items-center">
          <span
            *ngIf="_data.status == 'Alive'"
            class="w-3 h-3 me-3 bg-green-500 rounded-full"
          ></span>
          <span
            *ngIf="_data.status != 'Alive'"
            class="w-3 h-3 me-3 bg-red-500 rounded-full"
          ></span>
          <span class="text-gray-800 dark:text-gray-300"
            >{{ _data.status }}-{{ _data.species }}</span
          >
        </div>
        <div>
          <span class="text-gray-800 dark:text-gray-300">
            <a
              class="text-slate-900 dark:text-white font-semibold tracking-tight"
              >Location:</a
            >
            {{ _data.location.name }}</span
          >
        </div>
        <div>
          <span class="text-gray-800 dark:text-gray-300"
            ><a
              class="text-slate-900 dark:text-white font-semibold tracking-tight"
              >Gender:</a
            >
            {{ _data.gender }}</span
          >
        </div>
        <div>
          <h5
            class="text-slate-900 dark:text-white text-xl lg:text-2xl font-semibold tracking-tight"
          >
            Episodes:
          </h5>

          <div *ngFor="let item of _data.episode; let i = index">
            <a
              href="/episode/{{ getEpisodeNumber(item) }}"
              class="text-gray-800 dark:text-gray-300"
              >Episode {{ getEpisodeNumber(item) }}</a
            >
          </div>
        </div>

        <!-- <section class="mt-16">
      <p class="mb-8 text-2xl text-gray-900 dark:text-white inline-block">Characters</p>
      <div class="max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start group" spot-light>
        <div *ngIf="_data"
          class="border border-gray-200 dark:border-gray-700  relative h-full dark:bg-slate-800 
          bg-white rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 
          before:-top-40 before:bg-primary before:rounded-full before:opacity-0 before:pointer-events-none 
          before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
          before:group-hover:opacity-100  before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 
          after:bg-primary after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 
          after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:blur-[100px] overflow-hidden">
          <div class="relative h-full dark:bg-slate-900 bg-white p-6 pb-8 rounded-[inherit] overflow-hidden">
            <div
              class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div class="absolute inset-0  dark:bg-slate-800 bg-white rounded-full blur-[80px] translate-z-0"></div>
            </div>
            <div class="flex flex-col gap-3 text-center">
              
               <img src='{{_data.image}}' alt="">
              <span class="text-xl font-semibold dark:text-white">{{_data.name}}</span>
              <span class="text-gray-800 dark:text-gray-300">{{_data.status}}</span>
              <span class="text-gray-800 dark:text-gray-300">{{_data.species}}</span>
            </div>
          </div>
        </div>
    </div> -->
      </div>
    </div>
  `,
  providers: [HttpClient, CharacterService],
})
export class CharacterDetailArea {
  selectedCharacterId;
  _data: any;

  _episodes: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.selectedCharacterId = data['id'];
    });

    this.characterService.getCharacterById(this.selectedCharacterId).subscribe({
      next: (data: any) => {
        (this._data = data), (this._episodes = data.episode);
      },
      error: (error) => console.log(error),
    });
  }

  getEpisodeNumber(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 1], 10);
  }
}
