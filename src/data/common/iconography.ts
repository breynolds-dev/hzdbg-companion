import { CONDITION, Iconography } from "../types";

export const MAIN_ICONOGRAPHY: Record<string, Iconography> = {
  "aoe": {
    description: "AOE hits enemies in same square as target and all adjacent enemies with effects in box",
    icon: "🎯",
  },
  [CONDITION.FIRE]: {
    description: "Inflicts the Fire condition (suffer 1 damage at he end of activation, see p.15 or p.18 of core rulebook)",
    icon: "🔥",
  },
  [CONDITION.FREEZE]: {
    description: "Inflicts the Freeze condition (Hunters discard critical hits in their first evade roll, see p.15 of core rulebook, Ignore enemy armour value for first attack, see p.18 of core rulebook)",
    icon: "❄️",
  },
  [CONDITION.SHOCK]: {
    description: "Inflicts the shock condition (Hunters cannot play interrupt cards, see p.15 of core rulebook, Enemies resolve only one action, see p.18 of core rulebook)",
    icon: "⚡",
  },
  "evade": {
    description: "Hunter moves 1 square",
    icon: "🏃",
  },
  "push": {
    description: "Push target 1 square",
    icon: "🔼",
  },
};

export const ENEMY_ATTACK_TYPE: Record<string, Iconography> = {
  "melee": {
    description: "Enemy melee attack, top number is range, bottom number is damage (see p.37 of core rulebook)",
    icon: "🗡️",
  },
  "pulse": {
    description: "Enemy pulse attack against all hunters in range, top number is range, bottom number is damage (see p.37 of core rulebook)",
    icon: "🔊",
  },
  "ranged": {
    description: "Enemy ranged attack, top number is range, bottom number is damage (see p.37 of core rulebook)",
    icon: "🏹",
  },
};
