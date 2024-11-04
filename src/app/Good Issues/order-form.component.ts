import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent {

  currentDate!: string

  constructor() {
    const date = new Date();
    this.currentDate = date.toISOString().substring(0, 10)
  }

  data = [
    { id: 1, name: 'Small Fan' },
    { id: 2, name: 'Pedestal Fan' },
    { id: 3, name: 'Stand Fan', },
  ];
  nextdata = [
    { id: 1, name: 'SBC250Ls' },
    { id: 2, name: 'BC250Ls' },
    { id: 3, name: 'LSD150', },
  ];

  finalResults = [
    {
      id: 1,

      code: 'DRPW1S047',
      description: 'OVER RING',
      price: 50.00,
      discount: 0.00,
      tax: 0.00,
      availability: 'Not Available',
      date: '2024-09-01'
    },
    // Add more objects here for additional rows
    {
      id: 2,
    
      code: 'XYZ123',
      description: 'UNDER RING',
      price: 70.00,
      discount: 5.00,
      tax: 3.50,
      availability: 'Available',
      date: '2024-10-15'
    },
    {
      id: 3,
    
      code: 'XYZ13',
      description: 'UNDER RING',
      price: 70.00,
      discount: 5.00,
      tax: 3.50,
      availability: 'Available',
      date: '2024-10-15'
    }

  ];

  fourthTable = [
    {
      id: 1,

      code: 'DRPW1S047',
      description: 'OVER RING',
      price: 50.00,
      qty:10.00,
      ammount:250.00

    },
    // Add more objects here for additional rows
    {
      id: 2,
    
      code: 'XYZ123',
      description: 'UNDER RING',
      price: 70.00,
      qty:10.00,
      ammount:250.00
    },
    {
      id: 3,
    
      code: 'XYZ13',
      description: 'UNDER RING',
      price: 70.00,
      qty:10.00,
      ammount:250.00
    }

  ];

  orderForm:number=0.00
  totalBillValue:number=0.00
}
