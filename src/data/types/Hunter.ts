import { UUID } from "./Common";

export type HunterDeck = Hunter[];
export interface Hunter {
  icon: string;
  id: UUID;
  name: string;
  skillTree: SkillTree;
}

export interface SkillTree {
  id: UUID;
  "level0": SkillTreeLevel;
  "level1": SkillTreeLevel;
  "level2": SkillTreeLevel;
  "level3": SkillTreeLevel;
}
export interface SkillTreeLevel {
  handSize: number;
  id: UUID;
  skillNodes: string[];
}
