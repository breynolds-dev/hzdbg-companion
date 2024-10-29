import { Enemy, PLAYER_COUNT } from "@/data/types";

export const Grazer: Enemy = {
  armor: 1,
  components: [
    {
      damageValue: 2,
      destroyedRules: "Reduces damage from A attacks by 2.",
      location: "A",
      name: "Rotor Blades",
      tearValue: 2,
    },
    {
      damageValue: 2,
      destroyedRules: "This enemy suffers [[blaze]]",
      location: "B",
      name: "Blaze Canister",
      tearValue: 2,
    },
  ],
  encounterPoints: 2,
  glory: 2,
  hitPoints: 7,
  icon: "grazer",
  id: "683b1135-2e5d-4b6d-a5e8-1f3bf2ad3824",
  name: "Grazer",
  playerCount: PLAYER_COUNT.All,
  salvage: 1,
  specialRules: [],
};
