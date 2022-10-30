let x = 140, y = 700, z = 30;

let biggestnum = x > y ? (x > z ? x : (z > y ? z : y)) : y > z ? y : z;
console.log(biggestnum);


