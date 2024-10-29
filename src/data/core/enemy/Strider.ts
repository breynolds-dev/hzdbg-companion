import { Enemy, PLAYER_COUNT } from "@/data/types";

export const Strider: Enemy = {
  armor: 1,
  components: [
    {
      damageValue: 2,
      destroyedRules: "This enemy suffers [[blaze]]",
      location: "A",
      name: "Blaze Canisters",
      tearValue: 2,
    },
  ],
  encounterPoints: 1,
  glory: 1,
  hitPoints: 6,
  icon: "strider",
  id: "6f10fcb3-3c1a-469f-9981-a6cea0b517ff",
  name: "Strider",
  playerCount: PLAYER_COUNT.All,
  salvage: 1,
  specialRules: [
    {
      description: "While this enemy becomes alert it moves 1 square towards the closest enemy.",
      name: "Herd Instincts",
    },
  ],
};
