export class ResponseStringModel {
    status: string | null;
    data: string | null;
    message: string | undefined;
    
    constructor() {
        this.status = null;
        this.data = null;
        this.message = undefined;
    }
    
}