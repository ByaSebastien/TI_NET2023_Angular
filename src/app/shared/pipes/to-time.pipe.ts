import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: number): string {

    let hour = Math.floor(value / 3600);
    let min = Math.floor((value % 3600) / 60);
    let sec = value % 60;

    let result = "";
    result += (hour < 10 ? "0" : "") + hour + " : ";
    result += (min < 10 ? "0" : "") + min + " : ";
    result += (sec < 10 ? "0" : "") + sec;

    return result;
  }

}
