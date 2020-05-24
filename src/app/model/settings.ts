import { Item } from '../core/item';


export interface Settings {
  viewModes: Item[];
  selectedViewMode: string;
  connectors: any[];
}