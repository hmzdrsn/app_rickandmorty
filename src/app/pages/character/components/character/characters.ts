import { Component, EventEmitter, Input, OnChanges, Output, Signal, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, signal } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';
import { CharacterService } from '@app/core/services/character.service';
import { SpotlightDirective } from '../../../home/components/character/directive/spotlight.directive'
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '@pages/character/components/navigation/navigation.component';
import { CustomPaginationComponent } from '@pages/character/components/custom-pagination/custom-pagination.component';

import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-character',
  encapsulation: ViewEncapsulation.None,
  imports: [Icon, SpotlightDirective, NgFor, NgIf, RouterLink, NgxPaginationModule],
  standalone: true,
  styleUrls:["character.style.scss"],
  template: `

<pagination-template #p="paginationApi"(pageChange)="pageNumber = $event">
<nav aria-label="Page navigation example" class="flex items-center justify-center">
  <ul class="inline-flex -space-x-px text-sm">

    <li class="pagination-previous" [class.disabled]="p.isFirstPage()">
      <a  (click)="p.previous()" class="flex items-center justify-center 
      px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 
      border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 
      dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
      dark:hover:text-white"><span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg></a>
    </li>

    <li *ngFor="let page of p.pages" [class.current]="p.getCurrent() === page.value">
      <a (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value" class="flex items-center justify-center px-3  
      h-8 leading-tight text-gray-500 bg-white border 
      border-gray-300 hover:bg-gray-100 hover:text-gray-700 
      dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
      dark:hover:bg-gray-700 dark:hover:text-white"><span>{{ page.label }}</span></a>
      <div *ngIf="p.getCurrent() === page.value" aria-current="page" class="flex items-center justify-center px-3 
      h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 
      dark:bg-gray-700 dark:text-white">
                <span>{{ page.label }}</span>
            </div>
    </li>
    

    <li class="pagination-next" [class.disabled]="p.isLastPage()">
      <a (click)="p.next()" class="flex items-center justify-center px-3 h-8 
      leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg 
      hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 
      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg></a>
    </li>
  </ul>
</nav>
</pagination-template>


    <section class="mt-16">
      <!-- <p class="mb-8 text-2xl text-gray-900 dark:text-white inline-block">Characters</p> -->
      <div class="max-w-screen-xl grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start group" spot-light>
    <div *ngFor="let item of character | paginate: { itemsPerPage: 9, currentPage: pageNumber }">

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
               <img src='{{item.image}}' alt="">
              <span class="text-xl font-semibold dark:text-white">{{item.name}}</span>
              
              <!-- <div class="flex items-center">
                <span class="w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                <span class="text-gray-800 dark:text-gray-300 ">{{item.status}}</span>
              </div> -->
                <span class="text-gray-800 dark:text-gray-300 ">{{item.status}}</span>
              
              <span class="text-gray-800 dark:text-gray-300">{{item.species}}</span>
              
            </div>
          </div>
        </div>
    </div>
`,
  providers: [HttpClient, CharacterService]
})
export class CharacterArea implements OnChanges {
  pageNumber: number = 1;
  character: any[] = [];

  currentPage: number = 1;
  pageSize: number = 10;

  idList: number[] = [];

  _resultCount: number = 100;
  characterIds: number[] = Array.from({ length: this._resultCount }, (_, i) => i + 1);

  private _characterService: CharacterService
  constructor(private characterService: CharacterService) {
    this._characterService = characterService;
    //this.getCurrentPageData();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this._characterService.getMultipleCharacters(this.characterIds).subscribe(data => {
      this.character = data;
    })
  }

  getCurrentPageData() {
    const startIndex = (this.receivedData - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.setCharacterID(startIndex, endIndex);//id list Set edildi
    this._characterService.getMultipleCharacters(this.idList).subscribe(data => {
      this.character = data;
    })
    // return this.character.slice(startIndex, endIndex);
  }
  setCharacterID(start: number, end: number) {
    if (start == 0) {
      start = 1;
    }
    for (start; start < end; start++) {
      this.idList.push(start);
    }
  }
  receivedData: number = 1;
  receiveDataFromChild(data: number) {
    this.receivedData = data;
    this.getCurrentPageData();
    console.log(this.receivedData);

  }
  private currentAdIndex = 0;
  displayNextAd() {
    this.currentAdIndex++;
  }

}
