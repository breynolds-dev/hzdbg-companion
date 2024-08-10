import { UUID } from "./Common";
import { Dice } from "./Dice";
import { Resource } from "./Resource";

export enum ACTION_DECK_TYPE {
  ABILITY = "ability",
  AMMUNITION = "ammunition",
  INTERRUPT = "interrupt",
}

export enum EQUIPMENT_DECK_TYPE {
  ARMOR = "armor",
  MISCELLANEOUS = "miscellaneous",
  MODIFICATION = "modification",
  WEAPON = "weapon",
}

export enum ITEM_UPGRADE_TYPE {
  COIL = "coil",
  WEAVE = "weave",
}

export enum WEAPON_TYPE {
  BLAST_SLING = "Blast Sling",
  HUNTER_BOW = "Hunter Bow",
  MELEE = "Melee",
  ROPECASTER = "Ropecaster",
  SHARPSHOT_BOW = "Sharpshot Bow",
  TRIPCASTER = "Tripcaster",
  WAR_BOW = "War Bow",
}

export type CriticalEffect = ( number | string )[];

export interface ItemBase {
  cost: Resource[];
  icon: string;
  id: UUID;
  level: number;
  name: string;
}

export interface Ability extends ItemBase {
  effect: string[];
  type: ACTION_DECK_TYPE.ABILITY;
}

export interface Ammunition extends ItemBase {
  ammunitionType: WEAPON_TYPE;
  attackDice: Dice;
  criticalHit: CriticalEffect;
  description: string;
  specialRules: string[];
  type: ACTION_DECK_TYPE.AMMUNITION;
}

export interface Armor extends ItemBase {
  criticalHit: CriticalEffect;
  evadeDice: Dice;
  modificationSlots: number;
  type: EQUIPMENT_DECK_TYPE.ARMOR;
}

export interface CoilModification extends ItemBase {
  effect: string[];
  modificationType: ITEM_UPGRADE_TYPE.COIL;
  type: EQUIPMENT_DECK_TYPE.MODIFICATION;
}

export interface Miscellaneous extends ItemBase {
  effect: string[];
  type: EQUIPMENT_DECK_TYPE.MISCELLANEOUS;
}

export interface WeaveModification extends ItemBase {
  effect: string[];
  modificationType: ITEM_UPGRADE_TYPE.WEAVE;
  type: EQUIPMENT_DECK_TYPE.MODIFICATION;
}

export interface Weapon extends ItemBase {
  attackDice: Dice;
  criticalHit: CriticalEffect;
  modificationSlots: number;
  range: number;
  type: EQUIPMENT_DECK_TYPE.WEAPON;
  weaponType: WEAPON_TYPE;
}
