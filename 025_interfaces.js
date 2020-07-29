var Admin = /** @class */ (function () {
    function Admin(email) {
        this.email = email;
        this.role = "Admin";
    }
    return Admin;
}());
function profile(user) {
    return "Welcome, " + user.email;
}
var joe = new Admin("joe@example.com");
console.log(joe.role);
//# sourceMappingURL=025_interfaces.js.map