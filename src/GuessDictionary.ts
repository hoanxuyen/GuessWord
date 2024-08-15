import words from "./Words.json";
export const fourLetter = words.filter((word) => word.length === 4);
export const fiveLetter = words.filter((word) => word.length === 5);
export const sixLetter = words.filter((word) => word.length === 6);
