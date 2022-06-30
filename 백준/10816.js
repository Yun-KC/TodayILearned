const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const N = input[0];
const cardsInHand = input[1].split(" ");
const M = input[2];
const cardSToCheck = input[3].split(" ");

const map = {};
for (let i = 0; i < cardsInHand.length; i++) {
  if (!map[cardsInHand[i]]) {
    map[cardsInHand[i]] = 1;
  } else {
    map[cardsInHand[i]]++;
  }
}

console.log(cardSToCheck.map((el) => map[el] || 0).join(" "));
