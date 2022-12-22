"use strict";
exports.__esModule = true;
exports.StudentManage = void 0;
var StudentManage = /** @class */ (function () {
    function StudentManage() {
        this.listStudent = [];
    }
    StudentManage.prototype.add = function (t) {
        this.listStudent.push(t);
    };
    StudentManage.prototype.edit = function (code, t) {
        var index = this.findByCode(code);
        if (index === -1) {
            console.log("---------khong co---------");
        }
        else {
            this.listStudent[index] = t;
            console.log('---------sua thanh cong---------');
        }
    };
    StudentManage.prototype["delete"] = function (code) {
        var index = this.findByCode(code);
        if (index === -1) {
            console.log("---------khong co---------");
        }
        else {
            this.listStudent.splice(index, 1);
            console.log('---------xoa thanh cong---------');
        }
    };
    StudentManage.prototype.findByCode = function (code) {
        for (var i = 0; i < this.listStudent.length; i++) {
            if (code === this.listStudent[i].getcode()) {
                return i;
            }
        }
        return -1;
    };
    StudentManage.prototype.display = function () {
        return this.listStudent;
    };
    return StudentManage;
}());
exports.StudentManage = StudentManage;
