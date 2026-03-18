export const problemLevels = [
  {
    id: 1,
    title: "Level 1: Sum of Two Numbers",
    description: "Return the sum of two numbers.",
    difficulty: "Easy",
    xp: 100,
    requiredXP: 0,
    starterCode: `function sum(a, b) {
  // write code here
}`,
    expectedOutput: "sum(5,3) → 8",
    testCases: [
      { input: "sum(5,3)", expected: 8 },
      { input: "sum(0,0)", expected: 0 }
    ]
  },
  {
    id: 2,
    title: "Level 2: Even or Odd",
    description: "Return 'Even' or 'Odd'.",
    difficulty: "Easy",
    xp: 120,
    requiredXP: 100,
    starterCode: `function evenOdd(n) {
  // write code here
}`,
    expectedOutput: "evenOdd(4) → Even",
    testCases: [
      { input: "evenOdd(4)", expected: "Even" },
      { input: "evenOdd(7)", expected: "Odd" }
    ]
  },
  {
    id: 3,
    title: "Level 3: Reverse String",
    description: "Reverse a string.",
    difficulty: "Easy",
    xp: 150,
    requiredXP: 220,
    starterCode: `function reverseStr(str) {
  // write code here
}`,
    expectedOutput: "reverseStr('abc') → 'cba'",
    testCases: [
      { input: "reverseStr('abc')", expected: "cba" }
    ]
  },
  {
    id: 4,
    title: "Level 4: Max Number",
    description: "Return the maximum number in array.",
    difficulty: "Easy",
    xp: 180,
    requiredXP: 370,
    starterCode: `function maxNum(arr) {
  // write code here
}`,
    expectedOutput: "maxNum([1,5,3]) → 5",
    testCases: [
      { input: "maxNum([1,5,3])", expected: 5 }
    ]
  }
];
