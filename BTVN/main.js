"use strict";
exports.__esModule = true;
var studentManage_1 = require("./service/studentManage");
var student_1 = require("./model/student");
var input = require('readline-sync');
var manage = new studentManage_1.StudentManage();
function studentAdd() {
    var id = +input.question("Enter Id: ");
    var name = input.question("Enter Name: ");
    var email = input.question("Enter Email: ");
    var password = input.question("Enter Password: ");
    var address = input.question("Enter Address: ");
    var group = input.question("Enter Group: ");
    var gpa = +input.question("Enter Gpa: ");
    var code = +input.question("Enter Code: ");
    var storage = new student_1.Student(id, name, email, password, address, group, gpa, code);
    manage.add(storage);
}
function studentDisplay() {
    console.table(manage.display());
}
function studentEdit() {
    var idEdit = +input.question("Enter Id Edit: ");
    var id = +input.question("Enter Id: ");
    var name = input.question("Enter Name: ");
    var email = input.question("Enter Email: ");
    var password = input.question("Enter Password: ");
    var address = input.question("Enter Address: ");
    var group = input.question("Enter Group: ");
    var gpa = +input.question("Enter Gpa: ");
    var code = +input.question("Enter Code: ");
    var storage2 = new student_1.Student(id, name, email, password, address, group, gpa, code);
    manage.edit(idEdit, storage2);
}
function studentDelete() {
    var idDelete = +input.question("Enter Id Delete: ");
    manage["delete"](idDelete);
}
function main() {
    var menu = "\n    1. THEM HOC SINH\n    2. HIEN THI HOC SINH\n    3. SUA THONG TIN HOC SINH\n    4. XOA MOT HOC SINH\n    5. THONG KE\n    0. THOAT\n    ";
    var choice = -1;
    do {
        console.log(menu);
        choice = +input.question("Enter Choice: ");
        switch (choice) {
            case 1:
                studentAdd();
                break;
            case 2:
                studentDisplay();
                break;
            case 3:
                studentEdit();
                break;
            case 4:
                studentDelete();
                break;
            case 5:
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}
main();
