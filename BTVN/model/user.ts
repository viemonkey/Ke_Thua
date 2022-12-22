export class User {
    protected _id: number;
    protected _name: string;
    protected _email: string;
    private _password: string;
    protected _address: string;


    constructor(id: number, name: string, email: string, password: string, address: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._address = address;
    }

    getid(): number {
        return this._id;
    }

    setid(value: number) {
        this._id = value;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string) {
        this._name = value;
    }

    getemail(): string {
        return this._email;
    }

    setemail(value: string) {
        this._email = value;
    }


    getpassword(): string {
        return this._password;
    }

    setpassword(value: string) {
        this._password = value;
    }

    getaddress(): string {
        return this._address;
    }

    setaddress(value: string) {
        this._address = value;
    }
}