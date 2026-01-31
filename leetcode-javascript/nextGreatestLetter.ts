/**
 * 744. 寻找比目标字母大的最小字母
 * @param letters
 * @param target
 * @returns
 */
export function nextGreatestLetter(letters: string[], target: string): string {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }

  return letters[0];
}
