export class UserModel {
    username: string | null;
    fullname: string | null;
    phone: string | null;
    birthday: Date | null;
    address: string | null;
    email: string | null;
    password: string | null;
    imgUser: string | null;

    constructor() {
        this.username = null;
        this.fullname = null;
        this.phone = null;
        this.birthday = null;
        this.address = null;
        this.email = null;
        this.password = null;
        this.imgUser = null;
    }
}