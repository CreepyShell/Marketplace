import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferService } from '../../services/offer.service';
import { HttpClientModule } from '@angular/common/http';
import { OfferComponent } from '../offer-component/offer-component.component';
import { DetailedOffer } from '../../models/detailedOffer';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  providers: [OfferService],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
  imports: [CommonModule, HttpClientModule, OfferComponent],
})
export class MainpageComponent {
  detailedOffers: DetailedOffer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.offerService.getOffers().subscribe({
      next: (offers) => {
        this.detailedOffers = offers;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
