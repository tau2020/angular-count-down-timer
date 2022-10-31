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
