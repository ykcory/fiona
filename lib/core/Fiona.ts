import {InterceptorManager} from "./InterceptorManager";
import mergeConfig from "./mergeConfig";

export class Fiona {
    interceptors: {
        request: any;
        response: any;
    };

    constructor(public instanceConfig = undefined) {
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }

    getUri() {

    }

    request(url: string, config: any) {
        return fetch(url,{
            mode:'no-cors',
        })
    }

    private requestWithoutData(url: string, method: string, config: any) {
        return this.request(url, {
            method
        });
    }

    private requestWithData(url: string, method: string, data: any, config: any) {
        return this.request(url, {
            method,
        });
    }

    delete(url: string, config: any) {
        return this.requestWithoutData(url, 'delete', config);
    };

    get(url: string, config: any) {
        return this.requestWithoutData(url, 'get', config);
    };

    head(url: string, config: any) {
        return this.requestWithoutData(url, 'head', config);
    };

    options(url: string, config: any) {
        return this.requestWithoutData(url, 'options', config);
    };

    post(url: string, data: any, config: any) {
        return this.requestWithData(url, 'post', data, config);
    }

    put(url: string, data: any, config: any) {
        return this.requestWithData(url, 'put', data, config);
    }

    patch(url: string, data: any, config: any) {
        return this.requestWithData(url, 'patch', data, config);
    }

}