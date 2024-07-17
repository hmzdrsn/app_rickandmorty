import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  standalone: true,
  imports: [NgFor],
  template:`
  
  <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-sm">
    <li>
      <a href="#" (click)="previousPage()" [class.disabled]="isFirstPage()" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li *ngFor="let page of pages">
      <a href="#" (click)="setPage(page)" [class.current]="page === currentPage" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</a>
    </li>
    <li>
      <a href="#" (click)="nextPage()" [class.disabled]="isLastPage()" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

  
  `
})
export class CustomPaginationComponent {
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  public currentPage: number = 1;
  public pages: number[] = [];

  ngOnInit() {
    this.setPages();
  }

  setPages() {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.pages.length;
  }

  setPage(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  previousPage() {
    if (!this.isFirstPage()) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    if (!this.isLastPage()) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }
}
