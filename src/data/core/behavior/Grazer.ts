import { Behavior } from "@/data/types";

export const GrazerBehavior: Behavior = {
  condition: "Hunter within 1 square?",
  icon: "watcher",
  id: "d3b3b8e9-7d8e-4e6b-8c9a-3e6e5b9d3f7c",
  leftPath: {
    actions: [
      "Move 1 towards closest hunter",
      {
        component: "A",
        damage: 6,
        range: 0,
      },
      "Move 1 away from closest hunter",
    ],
    condition: "yes",
  },
  machine: "Watcher",
  name: "Watcher",
  rightPath: {
    actions: [
      "Move 1 towards nearest board edge",
      "Remove this enemy from the playing area",
    ],
    condition: "no",
  },
};
