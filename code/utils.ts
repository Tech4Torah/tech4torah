// numberToGematria(716) === "תשיז"
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
