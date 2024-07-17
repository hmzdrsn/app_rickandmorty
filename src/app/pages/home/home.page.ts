import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CountUpDirective } from '@pages/home/components/count-up.directive';

import { NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
interface DataItem {
  name: string;
  count: number;
}
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [NgFor, FormsModule, CountUpDirective],
  template: `
    <!-- <div class="dark:text-white">
  <div>
    <label>Count: </label>
    <input type="number" [(ngModel)]="count" />
  </div>

  <div>
    <label>Duration: </label>
    <input type="number" [(ngModel)]="duration" />
  </div>
</div> -->

    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Welcome to the
        </h1>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
        >
          Rick and Morty Universe!
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Explore our portal into the vibrant and whimsical universe of Rick and
          Morty, where every corner holds a new adventure and laughter awaits at
          every turn.
        </p>
      </div>
    </section>
    <div
      class="p-4 bg-white rounded-lg md:p-2 dark:bg-gray-800 border-solid border-2 border-sky-500	"
    >
      <dl
        class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-1"
      >
        <div
          class="flex flex-col items-center justify-center"
          *ngFor="let item of dataList"
        >
          <dt
            class="mb-2 text-3xl font-extrabold"
            [countUp]="item.count"
            [duration]="duration"
          ></dt>
          <dd class="text-gray-500 dark:text-gray-400">{{ item.name }}</dd>
        </div>
      </dl>
    </div>
  `,
})
export class HomePage {
  duration = 3000;

  dataList: DataItem[] = [
    { name: 'Characters', count: 826 },
    { name: 'Locations', count: 126 },
    { name: 'Episodes', count: 51 },
  ];
}
