interface IUserGo {
    goLogin(): boolean;
}

class User implements IUserGo{
    private firstName: string
    public lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    goLogin(): boolean {
        return true
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

const us1 = new User("Tom", "Le");

console.log(us1.getFullName())
console.log(us1.lastName)