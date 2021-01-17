
export interface Collectible {
  /*
  cardName: string;
  amount?: number;
  set?: string;
  card?: Card;
  */
  quantity: number;
  cardName: string;
  setNumber?: number;
  lang?: string;
  condition?: string;
  set?: string;
  foil?: boolean;
  price?: string;
}

export interface CardWithAmout {
  name: string;
  quantity: number;
}
