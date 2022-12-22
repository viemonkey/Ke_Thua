"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, email, password, address) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._address = address;
    }
    User.prototype.getid = function () {
        return this._id;
    };
    User.prototype.setid = function (value) {
        this._id = value;
    };
    User.prototype.getname = function () {
        return this._name;
    };
    User.prototype.setname = function (value) {
        this._name = value;
    };
    User.prototype.getemail = function () {
        return this._email;
    };
    User.prototype.setemail = function (value) {
        this._email = value;
    };
    User.prototype.getpassword = function () {
        return this._password;
    };
    User.prototype.setpassword = function (value) {
        this._password = value;
    };
    User.prototype.getaddress = function () {
        return this._address;
    };
    User.prototype.setaddress = function (value) {
        this._address = value;
    };
    return User;
}());
exports.User = User;
