import { Component } from '@angular/core';
import { Offer } from '../../models/offer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
})
export class MainpageComponent {
  offers: Offer[] = [];

  constructor() {}

  ngOnInit() {}
}
