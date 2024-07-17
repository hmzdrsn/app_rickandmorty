import { Component, OnInit } from '@angular/core';
import { InWork } from '@pages/home/components/in-work/in-work';
import { Intro } from "../home/components/intro/intro";
import { LanguageTools } from "../home/components/language-tools/language-tools";
@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [InWork, Intro, LanguageTools],
  template:`
  <intro/> 
  <language-tools/>
  <in-work></in-work>
  `
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
