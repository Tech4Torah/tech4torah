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
