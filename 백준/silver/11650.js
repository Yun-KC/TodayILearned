const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const points = input.slice(1);

points.sort((a, b) => {
  const [ax, ay] = a.split(" ").map((el) => Number(el));
  const [bx, by] = b.split(" ").map((el) => Number(el));
  if (ax - bx > 0) return 1;
  else if (ax === bx) return ay - by;
  else return -1;
});

console.log(points.join("\n"));
