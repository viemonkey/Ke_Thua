import {Student} from "../model/student";


export class StudentManage {
    listStudent: Student[] = [];

    add(t: Student): void {
            this.listStudent.push(t)
    }

    edit(code: number, t: Student): void {
        let index = this.findByCode(code);
        if (index === -1) {
            console.log("---------khong co---------")
        } else {
            this.listStudent[index] = t
            console.log('---------sua thanh cong---------')
        }
    }
    delete(code: number): void {
        let index = this.findByCode(code)
        if (index === -1) {
            console.log("---------khong co---------")
        } else {
            this.listStudent.splice(index, 1)
            console.log('---------xoa thanh cong---------')
        }
    }
    findByCode(code: number): number {
        for (let i = 0; i < this.listStudent.length; i++) {
            if (code === this.listStudent[i].getcode()) {
                return i;
            }
        }
        return -1;
    }
    display(): Student[] {
        return this.listStudent
    }
}