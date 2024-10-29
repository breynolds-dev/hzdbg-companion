export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface Glory {
  value: number;
}

export interface Iconography {
  description: string,
  icon: string,
}

export enum PLAYER_COUNT {
  All = "All",
  OneTwo = "1-2",
  ThreeFour = "3-4",
}
