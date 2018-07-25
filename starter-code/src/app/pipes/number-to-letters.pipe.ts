import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToLetters'
})
export class NumberToLettersPipe implements PipeTransform {

  transform(num: any, args?: any): any {

    let unitsInLetters: string;
    let tensInLetters: string;
    let hundredsInLetters: string;
    let units: number;
    let tens: number;
    let hundreds: number;

    if (num < 10) {
      units = num;
      tens = 0;
      hundreds = 0;
    }

    if (num > 9 && num < 100) {
      units = num % 10;
      tens = Math.floor(num / 10);
      hundreds = 0;
    }

    if (num > 99 && num < 1000) {
      units = num % 10;
      tens = Math.floor((num % 100 / 10));
      hundreds = Math.floor(num / 100);
    }

    switch (true) {
      case (num === 10):
        console.log("Ten");
        break;
      case (num === 11):
        console.log("Eleven");
        break;
      case (num === 12):
        console.log("Twelve");
        break;
      case (num === 13):
        console.log("Thirteen");
        break;
      case (num === 14):
        console.log("Fourteen");
        break;
      case (num === 15):
        console.log("Fifteen");
        break;
      case (num === 16):
        console.log("Sixteen");
        break;
      case (num === 17):
        console.log("Seventeen");
        break;
      case (num === 18):
        console.log("Eighteen");
        break;
      case (num === 19):
        console.log("Nineteen");
        break;
      default:

        switch (hundreds) {
          case 0:
            hundredsInLetters = ""
            break;
          case 1:
            hundredsInLetters = "One Hundred";
            break;
          case 2:
            hundredsInLetters = "Two Hundred";
            break;
          case 3:
            hundredsInLetters = "Three Hundred";
            break;
          case 4:
            hundredsInLetters = "Four Hundred";
            break;
          case 5:
            hundredsInLetters = "Five Hundred";
            break;
          case 6:
            hundredsInLetters = "Six Hundred";
            break;
          case 7:
            hundredsInLetters = "Seven Hundred";
            break;
          case 8:
            hundredsInLetters = "Eight Hundred";
            break;
          case 9:
            hundredsInLetters = "Nine Hundred";
            break;
        }

        switch (tens) {
          case 0:
            tensInLetters = ""
            break;
          case 1:
            tensInLetters = "Ten";
            break;
          case 2:
            tensInLetters = "Twenty";
            break;
          case 3:
            tensInLetters = "Thirty";
            break;
          case 4:
            tensInLetters = "Forty";
            break;
          case 5:
            tensInLetters = "Fifty";
            break;
          case 6:
            tensInLetters = "Sixty";
            break;
          case 7:
            tensInLetters = "Seventy";
            break;
          case 8:
            tensInLetters = "Eighty";
            break;
          case 9:
            tensInLetters = "Ninety";
            break;
        }

        switch (units) {
          case 0:
            unitsInLetters = "Zero";
            break;
          case 1:
            unitsInLetters = "One";
            break;
          case 2:
            unitsInLetters = "Two";
            break;
          case 3:
            unitsInLetters = "Three";
            break;
          case 4:
            unitsInLetters = "Four";
            break;
          case 5:
            unitsInLetters = "Five";
            break;
          case 6:
            unitsInLetters = "Six";
            break;
          case 7:
            unitsInLetters = "Seven";
            break;
          case 8:
            unitsInLetters = "Eight";
            break;
          case 9:
            unitsInLetters = "Nine";
            break;
        }
    }

    if (num < 10) {
      return `${unitsInLetters}`
    }

    if (num < 100) {
      return `${hundredsInLetters} ${tensInLetters} ${unitsInLetters}`
    }

    if (num > 99) {
      return `${hundredsInLetters} ${tensInLetters} ${unitsInLetters}`
    }
  }
}
