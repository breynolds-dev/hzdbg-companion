import { Enemy, PLAYER_COUNT } from "@/data/types";

export const Sawtooth: Enemy = {
  armor: 2,
  components: [
    {
      damageValue: 3,
      destroyedRules: "Draw a salvage card.",
      location: "A",
      name: "Resource Container",
      tearValue: 4,
    },
    {
      damageValue: 3,
      destroyedRules: "This enemy suffers [[blaze]].",
      location: "B",
      name: "Blaze Canister",
      tearValue: 4,
    },
  ],
  encounterPoints: 5,
  glory: 4,
  hitPoints: 19,
  icon: "sawtooth",
  id: "fcd749df-90a4-4866-93a2-94f27e57b7b9",
  name: "Sawtooth",
  playerCount: PLAYER_COUNT.All,
  salvage: 2,
  specialRules: [
    {
      description: "After this enemy damages a hunter with a melee attack, move this enemy 1 square towards the hunter after they have made their dodge.",
      name: "Pursuit",
    },
  ],
};
