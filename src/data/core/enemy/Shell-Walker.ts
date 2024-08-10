import { Enemy } from "@/data/types";

export const ShellWalker: Enemy = {
  armor: 2,
  components: [
    {
      damageValue: 2,
      destroyedRules: "Draw three salvage cards.  Reduce this enemy's salvage value to 0",
      location: "A",
      name: "Cargo Holder",
      tearValue: 4,
    },
    {
      damageValue: 3,
      destroyedRules: "Disable B attacks.  This enemy suffers [[shock]]",
      location: "B",
      name: "Lightning Gun",
      tearValue: 4,
    },
    {
      damageValue: 1,
      destroyedRules: "Reduce this enemy's armour value to 1.",
      location: "C",
      name: "Shield Claw",
      tearValue: 2,
    },
  ],
  encounterPoints: 4,
  glory: 3,
  hitPoints: 11,
  icon: "shellWalker",
  id: "4b555f33-bf81-4011-b5f9-9ce521e99dc3",
  name: "Shell-Walker",
  salvage: 3,
  specialRules: [
    {
      description: "If its Cargo Holder has been destroyed, increases all damage this enemy inflicts by 1.",
      name: "Cargo Defender",
    },
  ],
};
