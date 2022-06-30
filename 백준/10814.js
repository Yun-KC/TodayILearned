const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const members = input.slice(1);
members.sort((member1, member2) => {
  const mem1OfAge = Number(member1.split(" ")[0]);
  const mem2OfAge = Number(member2.split(" ")[0]);
  if (mem1OfAge === mem2OfAge) return 0;
  else if (mem1OfAge > mem2OfAge) return 1;
  else return -1;
});
console.log(members.join("\n"));
