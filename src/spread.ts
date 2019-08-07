export {};

const spread = (...values: string[]) => {
    // @ts-ignore
    return values
}

const arr = spread('a', 'b', 'c')

console.log('spread:', arr);
console.log('destruct again:', ...arr)
const [a, b, ...tail] = arr;

console.log('a:', a);
console.log('b:', b);
console.log('tail:', tail);


// objects

// @ts-ignore
const original = {
    hitchhiker: 42,
    elite: 1337,
}

const constructed = {...original, taxicab: 1729}

console.log(constructed)


const {hitchhiker, ...z} = constructed;
const {elite, taxicab} = z;

console.log('hitchhiker:', hitchhiker);
console.log('taxicab:', taxicab);
console.log('elite:', elite);
console.log('z:', z);
