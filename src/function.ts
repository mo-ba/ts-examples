console.log(this)
let that = this;

function func() {
    // @ts-ignore
    console.log('old function:', this, that, this == that);
}

const arrow = () => {
    // @ts-ignore
    console.log('arrow function:', this, that, this == that);
}

func();
arrow(); // use arrow if possible

