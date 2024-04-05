export class UserModel {
    id: number | null;
    username: string | null;
    fullName: string | null;
    phone: string | null;
    birthday: Date | null;
    address: string | null;
    email: string | null;
    password: string | null;
    imgUser: string | null;

    constructor() {
        this.id = null;
        this.username = null;
        this.fullName = null;
        this.phone = null;
        this.birthday = null;
        this.address = null;
        this.email = null;
        this.password = null;
        this.imgUser = null;
    }
}