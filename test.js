const chaine = '97.98.25444';

// 0110001101100100

let chaineTab = chaine.split('.');
if (chaineTab.length === 3) {
  const finalPart = chaineTab[2];
  const finalPartBin = Number(finalPart).toString(2);
  console.log(finalPartBin);
  const part1 = finalPartBin.slice(0, -8);
  console.log(part1);
  const part2 = finalPartBin.slice(-8);
  console.log(part2);
  chaineTab = [chaineTab[0], chaineTab[1], convert(part1), convert(part2)];
  console.log(chaineTab);
}
if (chaineTab.length === 2) {
  const finalPart = chaineTab[1];
  const finalPartBin = Number(finalPart).toString(2);
  console.log(finalPartBin);

  const part2 = finalPartBin.slice(-16, -8);
  const part1 = finalPartBin.slice(0, -16);
  const part3 = finalPartBin.slice(-8);
  chaineTab = [chaineTab[0], convert(part1), convert(part2), convert(part3)];
  console.log(chaineTab);
}
const finalChaine = chaineTab
  .map((c) => String.fromCharCode(Number(c)))
  .join('');

console.log(finalChaine.toLocaleLowerCase() + '.com');

// const nb = 26721;

// const binString = `${nb.toString(2)}`;
// const b1 = binString.slice(0, -8);
// const b2 = binString.slice(7);
// console.log(binString);
// console.log(b1);
// console.log(b2);

function convert(str) {
  let r = 0;
  let puiss = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    r = Math.pow(2, puiss) * Number(str[i]) + r;
    puiss = puiss + 1;
  }
  return r;
}
console.log(parseInt('00110', 2));
// console.log(convert(b1));
