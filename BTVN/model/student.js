"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = void 0;
var user_1 = require("./user");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, email, password, address, group, gpa, code) {
        var _this = _super.call(this, id, name, email, password, address) || this;
        _this._group = group;
        _this._gpa = gpa;
        _this._code = code;
        return _this;
    }
    Student.prototype.getgroup = function () {
        return this._group;
    };
    Student.prototype.setgroup = function (value) {
        this._group = value;
    };
    Student.prototype.getgpa = function () {
        return this._gpa;
    };
    Student.prototype.setgpa = function (value) {
        this._gpa = value;
    };
    Student.prototype.getcode = function () {
        return this._code;
    };
    Student.prototype.setcode = function (value) {
        this._code = value;
    };
    return Student;
}(user_1.User));
exports.Student = Student;
