export interface Offer {
  id: string;
  price: {
    $numberDecimal: number;
  };
  readyToBurgain: boolean;
  publicateDate: Date;
}
