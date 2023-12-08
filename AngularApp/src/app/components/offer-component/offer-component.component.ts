import { Component, Input } from '@angular/core';
import { Offer } from '../../models/offer';
import { User } from '../../models/user';
import { Product } from '../../models/products';
import { MainpageComponent } from '../mainpage-component/mainpage.componen';

@Component({
  selector: 'app-offer-component',
  standalone: true,
  imports: [MainpageComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
})
export class OfferComponent {
  ngOnInit() {
  }

  @Input()
  offer!: Offer;

  @Input()
  user!: User;

  @Input()
  product!: Product;
}
