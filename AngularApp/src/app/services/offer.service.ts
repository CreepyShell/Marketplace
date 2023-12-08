import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { DetailedOffer } from '../models/detailedOffer';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/api/';
  public getOffers(): Observable<DetailedOffer[]> {
    return this.http
      .get<DetailedOffer[]>(`${this.baseUrl}offersWithDetails`)
      .pipe(catchError((err) => this.errorHandler(err)));
  }

  public errorHandler(err: HttpErrorResponse | any) {
    return throwError(
      () => `${err.status} - ${err.statusText || ''}  ${err.error}`
    );
  }
}
