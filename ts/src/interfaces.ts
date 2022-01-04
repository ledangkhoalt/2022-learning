interface IUser {
    name: string;
    age?: number;
    getMessage(): string;
}

const user1: IUser = {
    name: "Tom",
    age: 21,
    getMessage: function (): string {
       return this.name;
    }
};

const user2: IUser = {
    name: "Tom 2",
    getMessage: function (): string {
        return this.name;
    }
};

console.log(user1.getMessage())