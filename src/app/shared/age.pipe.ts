import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  notreAnnee: number = 2023;
  lapinAnnee!: number;

  transform(value: string) : string {
    value = value.substring(0, 4);
    this.lapinAnnee = Number(value);
    if (this.notreAnnee - this.lapinAnnee == 1) {
      return String(this.notreAnnee - this.lapinAnnee + " an");
    } else {
      return String(this.notreAnnee - this.lapinAnnee + " ans");
    }
  }
}
