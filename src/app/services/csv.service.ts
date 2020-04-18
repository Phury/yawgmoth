import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  sperator: RegExp = /;/;///\t/;

  constructor() { }

  parse(csv: string): any[] {
    const csvFull = csv.split(/\r\n|\n/);
    const csvHeader = csvFull[0].split(this.sperator);
    const csvData = csvFull.splice(1);

    return csvData.filter(row => '' !== row).reduce((acc, row) => {
      const cells = row.split(this.sperator);
      const obj = {};
      csvHeader.forEach((el, i) => {
        obj[el] = cells[i];
      });
      acc.push(obj);
      return acc;
    }, []);
  }
}
