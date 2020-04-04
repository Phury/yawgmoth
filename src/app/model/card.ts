export interface Card {
  name: string;
  typeLine?: string;
  oracleText?: string;
  externalId?: string;
  cmc?: number;
  manaCost?: string;
  imgUrl?: string;
  imgArtUrl?: string;
  rarity?: string;
  /*ui */
  amount?: number;
  showContent?: boolean;
}
