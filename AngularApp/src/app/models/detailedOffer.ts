import { Offer } from './offer';
import { Product } from './products';
import { User } from './user';

export interface DetailedOffer {
  offer: Offer;
  product: Product;
  user: User;
}
