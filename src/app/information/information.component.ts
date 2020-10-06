import { Component, OnInit } from '@angular/core';
import { HasGuidedTour, TourStep, ElementTourStep } from 'telemachy';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, HasGuidedTour {

  constructor() { }
  tourAutoStart() {return true;}

  getTour(): TourStep[] {
    return [
      new ElementTourStep('#startResearch', 'testandooooooooo')
    ];
  }

  ngOnInit() {
  }

  public scroll(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
