// XP given per difficulty
export const XP_TABLE = {
  easy: 50,
  medium: 100,
  hard: 200
};

// XP thresholds for levels
export const LEVEL_THRESHOLDS = [
  { level: 1, xp: 0 },
  { level: 2, xp: 200 },
  { level: 3, xp: 500 },
  { level: 4, xp: 900 },
  { level: 5, xp: 1400 },
  { level: 6, xp: 2000 },
  { level: 7, xp: 2700 },
  { level: 8, xp: 3500 },
  { level: 9, xp: 4400 },
  { level: 10, xp: 5400 }
];

// Calculate level from XP
export function calculateLevel(totalXP) {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (totalXP >= LEVEL_THRESHOLDS[i].xp) {
      level = LEVEL_THRESHOLDS[i].level;
    }
  }
  return level;
}
