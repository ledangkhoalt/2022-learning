var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.goLogin = function () {
        return true;
    };
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return User;
}());
var us1 = new User("Tom", "Le");
console.log(us1.getFullName());
console.log(us1.lastName);
