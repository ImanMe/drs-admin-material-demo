import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer-fees',
  templateUrl: './dealer-fees.component.html',
  styleUrls: ['./dealer-fees.component.css']
})
export class DealerFeesComponent implements OnInit {
  headerText = 'PaymentDriver - Dealer Fees';
  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {
  }

}
