import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  parse(csv: string): any[] {
    const csvFull = csv.split(/\r\n|\n/);
    const csvHeader = csvFull[0].split(/\t/);
    const csvData = csvFull.splice(1);    

    return csvData.filter(row => '' !== row).reduce((acc, row) => {
      const cells = row.split(/\t/);
      const obj = {};
      csvHeader.forEach((el, i) => {
        obj[el] = cells[i];
      });
      acc.push(obj);
      //console.log(acc);
      return acc;
    }, []);
  }
}
