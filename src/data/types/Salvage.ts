import { UUID } from "./Common";

export type SalvageDeck = Salvage[];
export interface Salvage {
  description: string;
  id: UUID;
  image: string;
  name: string;
}
