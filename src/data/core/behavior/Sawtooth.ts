import { Behavior } from "@/data/types";
export {};

export const SawtoothBehavior: Behavior = {
  condition: "If the player is within 10 feet of the Watcher.",
  icon: "watcher",
  id: "d3b3b8e9-7d8e-4e6b-8c9a-3e6e5b9d3f7c",
  leftPath: {
    actions: [ "Attack" ],
    condition: "yes",
  },
  machine: "Watcher",
  name: "Watcher",
  rightPath: {
    actions: [ "Scan" ],
    condition: "no",
  },
};
