export type Dice = ( BlackDie | BlueDie | OrangeDie )[];

export type BlackDie = DieSide[];
export type OrangeDie = DieSide[];
export type BlueDie = DieSide[];

export type DieSide = BlankSide | CritSide | SuccessSide;
export interface CritSide {
  type: "crit";
}
export interface SuccessSide {
  number: number;
  type: "success";
}
export interface BlankSide {
  type: "blank";
}
