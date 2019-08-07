if (1 == 1) {
    console.log('1 == 1');
} else {
    console.log('1 != 1');
}

let x = 1;
switch (x) {
    case 1:
        console.log('1');
    case 2:
        console.log('fallthrough');
        break;
    default:
        console.log('default');
}
