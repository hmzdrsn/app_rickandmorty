import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EpisodeService } from '@app/core/services/episode.service';
import { SpotlightDirective } from '@pages/home/components/character/directive/spotlight.directive';
import { Icon } from '@shared/components/icon/icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-episode',
  standalone: true,
  imports:[Icon, SpotlightDirective, NgFor, NgIf, RouterLink, NgTemplateOutlet, NgxPaginationModule,LazyLoadImageModule],
  template:`
  
<form class="max-w-sm mx-auto">
  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
  <select (change)="onSelectChange($event)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option  *ngFor="let item of options; let i = index" [value]="i + 1">{{ item }}</option>
  </select>
</form>

  
    <section class="mt-16">
      <div class="max-w-screen-xl grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start group" spot-light>
    <div *ngFor="let item of selectedEpisodes">
@defer(){
  <div routerLink="{{item.id}}" 
          class="border border-gray-200 dark:border-gray-700  relative h-full dark:bg-slate-800 bg-white rounded-3xl 
          p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-primary before:rounded-full 
          before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] s
          before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100  before:blur-[100px] after:absolute after:w-96 after:h-96 
          after:-left-48 after:-top-48 after:bg-primary after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity 
          after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:blur-[100px] overflow-hidden">
          <div class="relative h-full dark:bg-slate-900 bg-white p-6 pb-8 rounded-[inherit] overflow-hidden cursor-pointer">
            <div
              class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div class="absolute inset-0  dark:bg-slate-800 bg-white rounded-full blur-[80px] translate-z-0"></div>
            </div>
            <div class="flex flex-col gap-3 text-center">
               <img [lazyLoad]="item.image" alt="">
              <span class="text-xl font-semibold dark:text-white">{{item.name}}</span>
              
              <!-- <div class="flex items-center">
                <span class="w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                <span class="text-gray-800 dark:text-gray-300 ">{{item.status}}</span>
              </div> -->
                <span class="text-gray-800 dark:text-gray-300 ">{{item.episode}}</span>
              
              <span class="text-gray-800 dark:text-gray-300">{{item.air_date}}</span>
              
            </div>
          </div>
        </div>
}
        @loading {
          <a class="dark:text-white">Loading...</a>
        }
    </div>
  
  
  `,
  providers:[EpisodeService]
})
export class EpisodeArea {
  episodes: any[] = [];
  selectedEpisodes: any[] = [];
  selectedSeason: number = 1; // Başlangıçta varsayılan sezonu belirleyebilirsiniz

  options: string[] = ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"];

  constructor(private episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.getAllEpisodes();
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedSeason = parseInt(target.value, 10);
    this.setEpisodesOfSeason(this.selectedSeason);
    
  }

  numbers: number[] = Array.from({ length: 51 }, (_, i) => i + 1);
  getAllEpisodes() {
    this.episodeService.getMultipleEpisodes(this.numbers).subscribe({
      next: (data) => {
        this.episodes = data;
        this.setEpisodesOfSeason(this.selectedSeason);
      },
      error: error => console.log(error)
    });

  }


  setEpisodesOfSeason(season: number) {
    this.selectedEpisodes = [];
    this.episodes.forEach(item => {
      //parseInt(item.episode.substring(1, 3), 10);
        const episodeSeason = parseInt(item.episode.substring(1, 3), 10)
        if (episodeSeason === season) {
          this.selectedEpisodes.push(item);
        }
    });
  }

}
