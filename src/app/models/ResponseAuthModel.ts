import {AuthModel} from "./AuthModel";

export class ResponseAuthModel {
    status: string | null;
    data: AuthModel;
    message: string | undefined;

    constructor() {
        this.status = null;
        this.data = new AuthModel();
        this.message = undefined;
    }
}