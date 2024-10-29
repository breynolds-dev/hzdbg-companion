import { Enemy, PLAYER_COUNT } from "@/data/types";

export const Watcher: Enemy = {
  armor: 1,
  components: [],
  encounterPoints: 1,
  glory: 1,
  hitPoints: 4,
  icon: "watcher",
  id: "7db012c0-2c36-42e6-9865-6f08950531e7",
  name: "Watcher",
  playerCount: PLAYER_COUNT.All,
  salvage: 1,
  specialRules: [
    {
      description: "While this enemy is alert, any non-alert enemies in an adjacent square become alert at the of its activation.  Enemies alerted in this way do not activate this turn.",
      name: "Warning Call",
    },
  ],
};
