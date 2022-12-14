import { Component } from '@angular/core';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { TimeComponents } from './count-down/time-components';
import { DatediffServiceTsService } from './count-down/datediff.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  public timeLeft$: Observable<TimeComponents>;
  constructor(
    private dateDiff: DatediffServiceTsService
  ) {
    this.timeLeft$ = interval(1000).pipe(
      map(x => dateDiff.calcDateDiff()),
      shareReplay(1)
    );
  }


}
