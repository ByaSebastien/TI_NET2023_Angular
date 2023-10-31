import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, unit: string): string {
    switch (unit.toLowerCase()) {
      case 'c':
        return Math.round((value - 32) / 1.8) + ' °C'
      case 'f':
        return Math.round((value * 1.8) + 32) + ' °F'
      default:
        return 'Error'
    }
  }

}
