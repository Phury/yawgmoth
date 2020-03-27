export interface Card {
  name: string;
  amount: number;
  externalId?: string;
  cmc?: number;
  manaCost?: string;
  imgUrl?: string;
  oracle?: string;
  rarity?: string;
}
