import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerText = '';
  foods = [
    { value: 'none', viewValue: 'AutoFi' },
    { value: 'interest rate', viewValue: 'Dealer.com' },
    { value: 'interest rate', viewValue: 'Dealertrack' },
    { value: 'interest rate', viewValue: 'eDealer' },
    { value: 'interest rate', viewValue: 'Kijiji' },
    { value: 'interest rate', viewValue: 'Strathcom' },
    { value: 'interest rate', viewValue: 'Unhaggle' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
