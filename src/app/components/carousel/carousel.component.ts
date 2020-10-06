import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('450ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('450ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() items: string | any[];
  @Output() selectItem = new EventEmitter();
  currentSlide = 0;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.items.length - 1 : previous;
    this.selectItem.emit(this.items[this.currentSlide]);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.items.length ? 0 : next;
    this.selectItem.emit(this.items[this.currentSlide]);
  }
}
