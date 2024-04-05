import {AuthModel} from "../AuthModel";
import {UserModel} from "../UserModel";

export class ResponseUserModel {
    status: string | null;
    data: UserModel;
    message: string | undefined;

    constructor() {
        this.status = null;
        this.data = new UserModel();
        this.message = undefined;
    }
}