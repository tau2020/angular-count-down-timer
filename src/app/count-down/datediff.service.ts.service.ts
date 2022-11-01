
import { Injectable } from '@angular/core';
import { TimeComponents } from './time-components';

@Injectable({
  providedIn: 'root'
})
export class DatediffServiceTsService {

  constructor(
  
  ) { }
/* 

3:05pm
  new Date('Nov 11 2022 15:05:00 GMT+2')
or

new Date('Feb 28 2013 19:00:00 GMT-0500') */



  calcDateDiff(endDay: Date = new Date('Nov 5 2022 15:05:00 GMT+2')): TimeComponents {
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = Math.floor(
      timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    );

    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    );

    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }
}
