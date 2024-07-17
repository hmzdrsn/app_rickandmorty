import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '@core/services/character.service';
import { LocationService } from '@core/services/location.service';
import { log } from 'node:console';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  template: `

<div class="w-full max-w-6xl px-4" *ngIf="_data">
  <div class="border rounded-lg border pb-6 border-gray-200 dark:border-gray-700">
    <div class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700 justify-center px-6 py-3">
      <p tabindex="0" class="focus:outline-none hover:text-red-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
      Location: {{ _data.name }}
      </p>
      <p tabindex="0" class="focus:outline-none hover:text-blue-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
      Type: {{ _data.type }}
      </p>
      <p tabindex="0" class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
      Dimension: {{ _data.dimension }}
      </p>
    </div>
    <div class="flex flex-col items-center border-b border-gray-200 dark:border-gray-700 justify-center px-6 py-3">
      <p tabindex="0" class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white">
        Characters
      </p>
    </div>
    <div class="px-6 pt-6" *ngIf="_residents">
      <div class="flex flex-wrap">
        <div
          *ngFor="let item of _residents"
          tabindex="0"
          class="focus:outline-none transition-transform duration-300 transform hover:scale-95 cursor-pointer w-full md:w-1/2 lg:w-1/3 p-2"
        >
          <div class="flex flex-col items-center border-solid border-2 border-gray-700 hover:border-gray-500" routerLink="/character/{{ item.id }}">
            <div class="bg-gray-100 dark:bg-gray-800 rounded-sm p-2.5">
              <img class="w-full h-auto" src="{{ item.image }}" alt="{{item.name}}_img" />
            </div>
            <div class="pl-3 w-full text-center">
              <p class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                {{ item.name }}
              </p>
              <p class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200 mt-2">
                {{ item.species }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- 
    <div class="w-full max-w-6xl sm:px-40" *ngIf="_data">
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
            Location: {{ _data.name }}
          </p>
          <p
            tabindex="0"
            class="focus:outline-none hover:text-blue-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white "
          >
            Type: {{ _data.type }}
          </p>
          <p
            tabindex="0"
            class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white "
          >
            Dimension: {{ _data.dimension }}
          </p>
        </div>
        <div
          class="flex flex-col items-center border-b border-gray-200 dark:border-gray-500  justify-center px-6 py-3"
        >
          <p
            tabindex="0"
            class="focus:outline-none hover:text-purple-500 text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white "
          >
            Residents
          </p>
        </div>
        <div class="px-6 pt-6 overflow-x-auto " *ngIf="_residents">
          <table class="w-full whitespace-nowrap ">
            <tbody >
              <tr
                *ngFor="let item of _residents"
                tabindex="0"
                class="focus:outline-none transition-transform duration-300 transform hover:scale-95 cursor-pointer"
              >
                <td class="">
                  <div
                    class="flex flex-col md:flex-row items-center border-solid border-2 border-gray-700 hover:border-gray-500 "
                    routerLink="/character/{{ item.id }}"
                  >
                    <div
                      class="bg-gray-100 dark:bg-gray-800 rounded-sm p-2.5 mb-4 md:mb-0 md:mr-4"
                    >
                      <img
                        class="w-full md:w-40 md:h-40"
                        src="{{ item.image }}"
                        alt="character"
                      />
                    </div>
                    <div class="pl-3">
                      <div
                        class="flex flex-col items-start text-sm leading-none"
                      >
                        <p
                          class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white"
                        >
                          {{ item.name }}
                        </p>
                      </div>
                      <p
                        class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200 mt-2"
                      >
                        {{ item.species }}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->

        <!-- <div class="px-6 pt-6 overflow-x-auto" *ngIf="_residents">
          <table class="w-full whitespace-nowrap ">
            <tbody>
              <tr
                *ngFor="let item of _residents"
                tabindex="0"
                class="focus:outline-none transition-transform duration-300 transform hover:scale-95 cursor-pointer"
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
                        {{ item.species }}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->
      <!-- </div>
    </div> -->
  `,
  imports: [NgIf, NgFor, RouterLink],
  providers: [LocationService, CharacterService],
})
export class LocationDetailArea implements OnInit {
  selectedLocationID: any;
  _data: any;
  _residentUrls: string[];

  _residents: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private locationService: LocationService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.selectedLocationID = data['id'];
      this.fetchLocationData();
    });
  }

  fetchLocationData(): void {
    this.locationService.getLocationById(this.selectedLocationID).subscribe({
      next: (data: any) => {
        this._data = data;
        this._residentUrls = data.residents;
        this.fetchResidents();
      },
      error: (error) => console.log(error),
    });
  }

  fetchResidents(): void {
    if (this._residentUrls && this._residentUrls.length > 0) {
      for (let item of this._residentUrls) {
        let id = this.getLocationNumber(item);
        this.characterService.getCharacterById(id).subscribe({
          next: (data: any) => {
            this._residents.push(data);
          },
          error: (error) => console.log(error),
        });
      }
    }
  }

  getLocationNumber(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 1], 10);
  }
}
