import { UUID } from "@/data/types";

export interface Attack {
  component?: string;
  damage: number;
  range: number;
}

export interface Behavior {
  condition: string;
  icon: string;
  id: UUID;
  leftPath: {
    actions: ( Attack | string )[];
    condition: "no" | "yes";
  };
  machine: string;
  name: string;
  rightPath: {
    actions: ( Attack | string )[];
    condition: "no" | "yes";
  };
}
