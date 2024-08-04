import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '@core/services/character.service';
import { EpisodeService } from '@core/services/episode.service';
import { error } from 'console';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  template: `


<div class="w-full max-w-6xl px-4" *ngIf="episodeData">
  <div class="border rounded-lg border pb-6 border-gray-200 dark:border-gray-700">
    <div class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700 justify-center px-6 py-3">
      <p tabindex="0" class="focus:outline-none hover:text-red-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        Name: {{ episodeData.name }}
      </p>
      <p tabindex="0" class="focus:outline-none hover:text-blue-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        Air Date: {{ episodeData.air_date }}
      </p>
      <p tabindex="0" class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        {{ episodeData.episode }}
      </p>
    </div>
    <div class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700 justify-center px-6 py-3">
      <p tabindex="0" class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        Characters
      </p>
    </div>
    <div class="px-6 pt-6" *ngIf="episodeCharacters">
      <div class="flex flex-wrap">
        <div
          *ngFor="let item of episodeCharacters"
          tabindex="0"
          class="focus:outline-none transition-transform duration-300 transform hover:scale-95 cursor-pointer w-full md:w-1/2 lg:w-1/3 p-2"
        >
          <div class="flex flex-col items-center border-solid border-2 border-gray-700 hover:border-gray-500" routerLink="/character/{{ item.id }}">
            <div class="bg-gray-100 dark:bg-gray-800 rounded-sm p-2.5">
              <img class="w-full h-auto" [lazyLoad]="item.image" alt="character" />
            </div>
            <div class="pl-3 w-full text-center">
              <p class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                {{ item.name }}
              </p>
              <p class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200 mt-2">
                {{ item.gender }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  <!-- <div class="w-full max-w-6xl px-4" *ngIf="episodeData">
  <div class="border rounded-lg border pb-6 border-gray-200 dark:border-gray-700">
    <div class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700 justify-center px-6 py-3">
      <p tabindex="0" class="focus:outline-none hover:text-red-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        Name: {{ episodeData.name }}
      </p>
      <p tabindex="0" class="focus:outline-none hover:text-blue-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        Air Date: {{ episodeData.air_date }}
      </p>
      <p tabindex="0" class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        {{ episodeData.episode }}
      </p>
    </div>
    <div class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700 justify-center px-6 py-3">
      <p tabindex="0" class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        Characters
      </p>
    </div>
    <div class="px-6 pt-6 overflow-x-auto" *ngIf="episodeCharacters">
      <table class="w-full whitespace-nowrap">
        <tbody class="space-y-4 md:space-y-0">
          <tr *ngFor="let item of episodeCharacters" tabindex="0" class="focus:outline-none transition-transform duration-300 transform hover:scale-95 cursor-pointer">
            <td>
              <div class="flex flex-col md:flex-row items-center border-solid border-2 border-gray-700 hover:border-gray-500" routerLink="/character/{{ item.id }}">
                <div class="bg-gray-100 dark:bg-gray-800 rounded-sm p-2.5 mb-4 md:mb-0 md:mr-4">
                  <img class="w-full md:w-40 md:h-40" src="{{ item.image }}" alt="character" />
                </div>
                <div class="pl-3">
                  <div class="flex flex-col items-start text-sm leading-none">
                    <p class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                      {{ item.name }}
                    </p>
                  </div>
                  <p class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200 mt-2">
                    {{ item.gender }}
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div> -->

    <!-- <div class="w-full max-w-6xl px-4" *ngIf="episodeData">
      <div
        class="border rounded-lg border pb-6 border-gray-200 dark:border-gray-700 "
      >
        <div
          class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700  justify-center px-6 py-3"
        >
          <p
            tabindex="0"
            class="focus:outline-none hover:text-red-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white "
          >
            Name: {{ episodeData.name }}
          </p>
          <p
            tabindex="0"
            class="focus:outline-none hover:text-blue-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white "
          >
            Air Date:{{ episodeData.air_date }}
          </p>
          <p
            tabindex="0"
            class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white "
          >
            {{ episodeData.episode }}
          </p>
        </div>
        <div
          class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700  justify-center px-6 py-3"
        >
          <p
            tabindex="0"
            class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white "
          >
            Characters
          </p>
        </div>
        <div class="px-6 pt-6 overflow-x-auto" *ngIf="episodeCharacters">
          <table class="w-full whitespace-nowrap ">
            <tbody>
              <tr
                *ngFor="let item of episodeCharacters"
                tabindex="0"
                class="focus:ou tline-none transition-transform duration-300 transform hover:scale-95 cursor-pointer"
              >
                <td>
                  <div
                    class="flex items-center"
                    routerLink="/character/{{ item.id }}"
                  >
                    <div class="bg-gray-100 dark:bg-gray-800  rounded-sm p-2.5">
                      <img
                        style="width: 150px;height:150px"
                        src="{{ item.image }}"
                        alt="apple"
                      />
                    </div>
                    <div class="pl-3 ">
                      <div class="flex items-center text-sm leading-none">
                        <p
                          class="text-2xl font-semibold text-gray-800 dark:text-white "
                        >
                          {{ item.name }}
                        </p>
                      </div>
                      <p
                        class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200  mt-2"
                      >
                        {{ item.gender }}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> -->
  `,
  imports: [NgIf, NgFor, RouterLink,LazyLoadImageModule],
  providers: [EpisodeService, CharacterService],
})
export class EpisodeDetailArea implements OnInit {
  selectedEpisode: number;
  episodeData: any;
  episodeCharacters: any[] = [];
  _characterUrls: string[];

  constructor(
    private episodeService: EpisodeService,
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (data) => {
        this.selectedEpisode = data['id'];
        this.fetchEpisodeData();
        console.log('ng on init fetchEpisodeData çalıştı!');
      },
      error: (error) => console.log(error),
    });
  }

  fetchEpisodeData() {
    this.episodeService.getEpisodeById(this.selectedEpisode).subscribe({
      next: (data) => {
        this.episodeData = data;
        this._characterUrls = data.characters;
        this.fetchCharacters();
        console.log('fetchEpisodeData fetchCharacters çalıştı');
      },
      error: (error) => console.log(error),
    });
  }

  fetchCharacters(): void {
    if (this._characterUrls && this._characterUrls.length > 0) {
      for (let item of this._characterUrls) {
        let id = this.getCharacterNumber(item);
        this.characterService.getCharacterById(id).subscribe({
          next: (data: any) => {
            this.episodeCharacters.push(data);
          },
          error: (error) => console.log(error),
        });
      }
    }
  }

  getCharacterNumber(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 1], 10);
  }
}
