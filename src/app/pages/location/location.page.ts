import { Component } from '@angular/core';
import { ProjectPage } from "../project/project.page";

@Component({
  selector: 'page-location',
  standalone: true,
  imports: [ProjectPage],
  template:`
  <app-location></app-location>
  `
})
export class LocationPage {

}
