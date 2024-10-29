import { Enemy, PLAYER_COUNT } from "@/data/types";

export const Scrapper: Enemy = {
  armor: 1,
  components: [
    {
      damageValue: 2,
      destroyedRules: "Disables A attacks",
      location: "A",
      name: "Power Cell",
      tearValue: 4,
    },
    {
      damageValue: 2,
      destroyedRules: "Disables Radar Sweep",
      location: "B",
      name: "Radar",
      tearValue: 2,
    },
  ],
  encounterPoints: 2,
  glory: 2,
  hitPoints: 8,
  icon: "scrapper",
  id: "f6b4c7d9-7c3e-4b6e-8e6b-1b2d5f2d1c7a",
  name: "Scrapper",
  playerCount: PLAYER_COUNT.All,
  salvage: 2,
  specialRules: [
    {
      description: "This enemy ignores tall grass",
      name: "Radar Sweep",
    },
  ],
};
