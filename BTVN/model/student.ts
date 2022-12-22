import {User} from "./user";

export class Student extends User{
    private _group: string;
    private _gpa: number;
    private _code: number;

    constructor(id, name, email, password, address, group, gpa, code) {
        super(id, name, email, password, address);
        this._group = group;
        this._gpa = gpa;
        this._code = code;
    }

    getgroup(): string {
        return this._group;
    }

    setgroup(value: string) {
        this._group = value;
    }

    getgpa(): number {
        return this._gpa;
    }

    setgpa(value: number) {
        this._gpa = value;
    }

    getcode(): number {
        return this._code;
    }

    setcode(value: number) {
        this._code = value;
    }
}
