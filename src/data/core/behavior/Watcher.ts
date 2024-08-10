import { Behavior } from "@/data/types";

export const WatcherBehavior: Behavior[] = [
  {
    condition: "Non-alert enemy within 2 squares?",
    icon: "watcher",
    id: "d3b3b8e9-7d8e-4e6b-8c9a-3e6e5b9d3f7c",
    leftPath: {
      actions: [
        "Move 1 towards closest non-alert enemy",
      ],
      condition: "yes",
    },
    machine: "Watcher",
    name: "Watcher",
    rightPath: {
      actions: [
        "Move 1 towards closest hunter",
        {
          damage: 4,
          range: 0,
        },
      ],
      condition: "no",
    },
  },
];
