export class Hero {
    public name: string;
    public state: string;

    static clone(hero: Hero): Hero {
        return new Hero(hero.name, hero.state);
    }

    constructor(name: string, state: string) {
        this.name = name;
        this.state = state;
    }
}
