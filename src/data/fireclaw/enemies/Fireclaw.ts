import { Enemy, PLAYER_COUNT } from "@/data/types";

export const FireclawOneTwo: Enemy = {
  armor: 2,
  components: [
    {
      damageValue: 10,
      destroyedRules: "Disables A attacks.  This enemy suffers [[burn]].",
      location: "A",
      name: "Fire Unit",
      tearValue: 10,
    },
    {
      damageValue: 3,
      destroyedRules: "This enemy suffers [[shock]].",
      location: "B",
      name: "Power Cell",
      tearValue: 6,
    },
    {
      damageValue: 4,
      destroyedRules: "Remove [[burn]] from C attacks.  This enemy suffers [[burn]].",
      location: "C",
      name: "Fire Sac Left",
      tearValue: 8,
    },
    {
      damageValue: 4,
      destroyedRules: "Remove [[burn]] from D attacks.  This enemy suffers [[burn]].",
      location: "D",
      name: "Fire Sac Right",
      tearValue: 8,
    },
  ],
  encounterPoints: 10,
  glory: 4,
  hitPoints: 50,
  icon: "image.jpg",
  id: "6bf8676b-798d-41d1-afb8-ef9f8acd582b",
  name: "Fireclaw",
  playerCount: PLAYER_COUNT.OneTwo,
  salvage: 5,
  specialRules: [
    {
      description: "This enemy only suffers [[burn]] from its components being destroyed.",
      name: "Fire Immunity",
    },
    {
      description: "This enemy has two behavior decks.  When it activates, draw from the deck which matches the current face of its reference card.  At the start of the encounter the reference card should display the quadruped side.",
      name: "Attack Stances",
    },
  ],
  structureThresholds: [
    10,
    20,
    30,
    40,
    50,
  ],
};

export const FireclawThreeFour: Enemy = {
  armor: 2,
  components: [
    {
      damageValue: 10,
      destroyedRules: "Disables A attacks.  This enemy suffers [[burn]].",
      location: "A",
      name: "Fire Unit",
      tearValue: 10,
    },
    {
      damageValue: 3,
      destroyedRules: "This enemy suffers [[shock]].",
      location: "B",
      name: "Power Cell",
      tearValue: 6,
    },
    {
      damageValue: 4,
      destroyedRules: "Remove [[burn]] from C attacks.  This enemy suffers [[burn]].",
      location: "C",
      name: "Fire Sac Left",
      tearValue: 8,
    },
    {
      damageValue: 4,
      destroyedRules: "Remove [[burn]] from D attacks.  This enemy suffers [[burn]].",
      location: "D",
      name: "Fire Sac Right",
      tearValue: 8,
    },
  ],
  encounterPoints: 10,
  glory: 4,
  hitPoints: 60,
  icon: "image.jpg",
  id: "d4d01c87-ce43-41af-9a45-0e7de254bcc0",
  name: "Fireclaw",
  playerCount: PLAYER_COUNT.ThreeFour,
  salvage: 5,
  specialRules: [
    {
      description: "This enemy only suffers [[burn]] from its components being destroyed.",
      name: "Fire Immunity",
    },
    {
      description: "This enemy has two behavior decks.  When it activates, draw from the deck which matches the current face of its reference card.  At the start of the encounter the reference card should display the quadruped side.",
      name: "Attack Stances",
    },
  ],
  structureThresholds: [
    10,
    20,
    30,
    40,
    50,
    60,
  ],
};
