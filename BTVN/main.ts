import {StudentManage} from "./service/studentManage";
import {Student} from "./model/student";

let input = require('readline-sync')
let manage = new StudentManage()

function studentAdd() {
    let id = +input.question("Enter Id: ");
    let name = input.question("Enter Name: ");
    let email = input.question("Enter Email: ");
    let password = input.question("Enter Password: ");
    let address = input.question("Enter Address: ");
    let group = input.question("Enter Group: ");
    let gpa = +input.question("Enter Gpa: ");
    let code = +input.question("Enter Code: ");
    let storage = new Student(id, name, email, password, address, group, gpa, code);
    manage.add(storage)
}

function studentDisplay() {
    console.table(manage.display())
}

function studentEdit() {
    let idEdit = +input.question("Enter Id Edit: ");
    let id = +input.question("Enter Id: ");
    let name = input.question("Enter Name: ");
    let email = input.question("Enter Email: ");
    let password = input.question("Enter Password: ");
    let address = input.question("Enter Address: ");
    let group = input.question("Enter Group: ");
    let gpa = +input.question("Enter Gpa: ");
    let code = +input.question("Enter Code: ");
    let storage2 = new Student(id, name, email, password, address, group, gpa, code);
    manage.edit(idEdit, storage2)
}

function studentDelete() {
    let idDelete = +input.question("Enter Id Delete: ")
    manage.delete(idDelete)
}

function main() {
    let menu = `
    1. THEM HOC SINH
    2. HIEN THI HOC SINH
    3. SUA THONG TIN HOC SINH
    4. XOA MOT HOC SINH
    5. THONG KE
    0. THOAT
    `
    let choice = -1;
    do {
        console.log(menu);
        choice = +input.question("Enter Choice: ");
        switch (choice) {
            case 1:
                studentAdd()
                break;
            case 2:
                studentDisplay()
                break;
            case 3:
                studentEdit()
                break;
            case 4:
                studentDelete()
                break;
            case 5:
                break;
            case 0:
                break;
        }
    } while (choice !== 0)
}
main()