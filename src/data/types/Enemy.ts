import { UUID } from "./Common";

export interface Component {
  damageValue: number,
  destroyedRules: string,
  location: string,
  name: string,
  tearValue: number
}

export interface SpecialRules {
  description: string,
  name: string
}

export interface Enemy {
  armor: number;
  components: Component[],
  encounterPoints: number;
  glory: number;
  hitPoints: number;
  icon: string;
  id: UUID;
  name: string;
  salvage: number;
  specialRules: SpecialRules[];
}
