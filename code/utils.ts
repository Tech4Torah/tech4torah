// numberToGematria(716) === "תשיז"
// numberToGematria(285) === "ערה" (one of a few traditional exceptions, to avoid unpleasant words)
function numberToGematria(num: number) {
  const inner = (x: number) =>
    x > 400 ? "ת" + inner(x - 400) :
    x >= 100 ? " קרשת"[Math.trunc(x / 100)] + inner(x % 100) :
    x === 15 ? "טו" :
    x === 16 ? "טז" :
    x >= 10 ? " יכלמנסעפצ"[Math.trunc(x / 10)] + inner(x % 10) :
    !x ? "" :
    " אבגדהוזחט"[x]
  return num === 270 ? "ער" : num === 272 ? "ערב" : num === 275 ? "ערה" : inner(num)
}

// Returns perek & mishna numbers for a given mishna index.
// Example: mishnaByIndex(7, [7, 5]) === [0, 7] === פרק א משנה ז
// Example: mishnaByIndex(8, [7, 5]) === [1, 0] === פרק ב משנה א
// If the index is out of bounds, returns null.
function mishnaByIndex(zeroBasedInd: number, perekLengths: number[], _carry = 0): [number, number] | null {  
  return zeroBasedInd < perekLengths[0] ? [_carry, zeroBasedInd] :
    perekLengths.length <= 1 ? null :
    mishnaByIndex(zeroBasedInd - perekLengths[0], perekLengths.slice(1), _carry + 1)
}

// Simple gematria calculator
const gematriaMap = {
  'א': 1,
  'ב': 2,
  'ג': 3,
  'ד': 4,
  'ה': 5,
  'ו': 6,
  'ז': 7,
  'ח': 8,
  'ט': 9,
  'י': 10,
  'כ': 20,
  'ך': 20,
  'ל': 30,
  'מ': 40,
  'ם': 40,
  'נ': 50,
  'ן': 50,
  'ס': 60,
  'ע': 70,
  'פ': 80,
  'ף': 80,
  'צ': 90,
  'ץ': 90,
  'ק': 100,
  'ר': 200,
  'ש': 300,
  'ת': 400,
}
function gematria(str: string) {
  return str.split('').reduce((acc, char) => acc + (gematriaMap[char] || 0), 0)
}