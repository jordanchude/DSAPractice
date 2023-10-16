let karatsubaMultiply = (x, y) => {
    let xStr = x.toString();
    let yStr = y.toString();

    // base case
    if (xStr.length === 1 || yStr.length === 1) {
        return x * y;
    }

    // split numbers
    const n = Math.min(xStr.length, yStr.length);
    const half = BigInt(Math.floor(n / 2));

    const a = BigInt(xStr.substring(0, xStr.length - Number(half)));
    const b = BigInt(xStr.substring(xStr.length - Number(half)));
    const c = BigInt(yStr.substring(0, yStr.length - Number(half)));
    const d = BigInt(yStr.substring(yStr.length - Number(half)));

    // recursion
    let ac = karatsubaMultiply(a, c);
    let bd = karatsubaMultiply(b, d);
    let ab_cd = karatsubaMultiply(a + b, c + d) - ac - bd;

    // compute result
    const result = ac * (10n ** (2n * half)) + ab_cd * (10n ** half) + bd;

    return result;
}

let x = BigInt("3141592653589793238462643383279502884197169399375105820974944592");
let y = BigInt("2718281828459045235360287471352662497757247093699959574966967627");

let result = karatsubaMultiply(x, y);
console.log(result.toString());


module.exports = { karatsubaMultiply };

