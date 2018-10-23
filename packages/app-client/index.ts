export class Sample {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    public sayHello(): string {
        return `Hello my friend ${this._name}`;
    }

    public sayFuck(): string {
        return `Fuck you ${this._name}`;
    }

    public dada(): string {
        return `Fuck you dada`;
    }
}

export default Sample;