import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ygm-spinner-card',
  templateUrl: './spinner-card.component.html',
})
export class SpinnerCardComponent implements OnInit {
  @Input() card: Observable<string>;
  spinnerCard: string;

  constructor() { }

  ngOnInit(): void {
    this.spinnerCard = this.randomSpinner();
  }

  private randomSpinner() {
    const spinners = ["angel", "embalmed", "exerted", "goat", "knight ally", "soldier", "squirrel", "thopter", "angel"];
    return "assets/tokens/" + spinners[Math.floor(Math.random()*spinners.length)] + ".gif";
  }

}
