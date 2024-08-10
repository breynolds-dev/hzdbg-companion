export type UUID = string;

export enum CONDITION {
  FIRE = "fire",
  FREEZE = "freeze",
  SHOCK = "shock",
}

export interface Glory {
  value: number;
}

export interface Iconography {
  description: string,
  icon: string,
}
