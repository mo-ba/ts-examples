interface InterfaceA {
    field: string
}

abstract class ClassAbstract {
    public field: string


    constructor(field: string) {
        this.field = field;
    }
}

class ClassBase<E> extends ClassAbstract implements InterfaceA {

    constructor(
        field: string,
        readonly readonly: E // declare, init, final
    ) {
        super(field)
    }
}

class ClassConcrete<E> extends ClassBase<E> {

    public method(): string {
        return "hello method"
    }

    set x(value: string) {
        this.field = value
    }
}

const obj = new ClassConcrete<string>("field", "readonly")

console.log(obj)
console.log(obj.method())
console.log(obj.x = "some value")
console.log(obj)
