import {InterceptorManager} from "./InterceptorManager";

export class Feionas {
    interceptors:{
        request: any;
        response: any;
    };
    constructor(public instanceConfig = undefined) {
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }

    request(){

    }

    getUri(){

    }
}