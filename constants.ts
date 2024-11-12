export const POINTS_TO_REFILL = 100;

export const quests = [
  {
    title: "Earn 20 XP",
    value: 20,
  },
  {
    title: "Earn 50 XP",
    value: 50,
  },
  {
    title: "Earn 100 XP",
    value: 100,
  },
  {
    title: "Earn 500 XP",
    value: 500,
  },
  {
    title: "Earn 1000 XP",
    value: 1000,
  },
];

export const ELO_TIERS = [
  {
    tier: "Bronze",
    minValue: 0,
    maxValue: 9999,
    icon: "/bronze.svg",
  },
  {
    tier: "Silver",
    minValue: 10000,
    maxValue: 49999,
    icon: "/silver.svg",
  },
  {
    tier: "Gold",
    minValue: 50000,
    maxValue: 199999,
    icon: "/gold.svg",
  },
  {
    tier: "Platinum",
    minValue: 200000,
    maxValue: 999999,
    icon: "/platinum.svg",
  },
  {
    tier: "Diamond",
    minValue: 1000000,
    maxValue: 4999999,
    icon: "/diamond.svg",
  },
  {
    tier: "Master",
    minValue: 5000000,
    maxValue: 19999999,
    icon: "/master.svg",
  },
  {
    tier: "Grandmaster",
    minValue: 20000000,
    maxValue: 99999999,
    icon: "/grandmaster.svg",
  },
  {
    tier: "Challenger",
    minValue: 100000000,
    maxValue: 200000000,
    icon: "/challenger.svg",
  },
];