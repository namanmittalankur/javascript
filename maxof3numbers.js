let x = 10, y = 20, z = 30;
let big = 0;
let biggest = 0;
if (x < y) {
    big = y;

    if (big < z) {
        biggest = z;
        console.log(`${z} is the biggest num`);
    }

    else {
        biggest = big;
        console.log(`${big} is the biggest num`);
    }

}
else {
    big = x;

    if (x > z) {
        biggest = x;
        console.log(`${x} is the biggest num`);

    }
    else {
        biggest = z;
        console.log(`${z} is the biggest num`);
    }
}
console.log(biggest);