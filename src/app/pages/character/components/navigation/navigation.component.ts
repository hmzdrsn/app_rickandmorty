import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectedLightDirective} from '@pages/character/components/navigation/directive/selectedLight.directive'
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgFor,NgIf,SelectedLightDirective,RouterLink],
  template:`
  <nav aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-8 text-sm">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li *ngFor="let item of getArray(resultCount/3);let i = index">
      <button (click)="sendDataToParent(i+1)" 
      class="flex items-center justify-center px-3 h-8 
      leading-tight text-gray-500 bg-white border border-gray-300 
      hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 
      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{i+1}}</button>
    </li>

    <li>
      <a href="#" class="flex items-center justify-center px-3 
      h-8 leading-tight text-gray-500 bg-white border border-gray-300 
      rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 
      dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
  
  `
})
export class NavigationComponent {

  @Input() resultCount:number=0;
  @Output() currentPageEvent = new EventEmitter<number>();
  sendDataToParent(currentPage:number) {
    this.currentPageEvent.emit(currentPage);
  }
  getArray(count: number): any[] {
    return new Array(count);
  }
  
}
