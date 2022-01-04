var user1 = {
    name: "Tom",
    age: 21,
    getMessage: function () {
        return this.name;
    }
};
var user2 = {
    name: "Tom 2",
    getMessage: function () {
        return this.name;
    }
};
console.log(user1.getMessage());
