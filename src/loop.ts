//while
let i = 0;
while (i++ < 3) {
    console.log('(while) i', i);
}
//do-while

let j = 0
do {
    console.log('(do-while) j', j);
} while (j++ < 3);

let h = 0
do {
    console.log('(do-while) h', h);
} while (++h < 3);

let list = [10, 11, 12];

//for-in
for (let key in list) {

    console.log('(in) ikey', key);
}

//for-of
for (let item of list) {

    console.log('(of) item', item);
}
