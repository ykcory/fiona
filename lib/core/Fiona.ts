import {InterceptorManager} from "./InterceptorManager";
import mergeConfig from "./mergeConfig";

export interface Data {
    params?: Record<string, string | number>;
    query?: any;
    body?: BodyInit | null;
}

export interface RequestConfig extends RequestInit {
    baseURL?: string;
}

export class Fiona {
    interceptors: {
        request: any;
        response: any;
    };

    constructor(public instanceConfig: RequestConfig = {}) {
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }

    request(url: string, data?: Data, config?: RequestConfig) {
        const {newUrl, newConfig} = mergeConfig(url, data, this.instanceConfig, config)
        return fetch(newUrl, newConfig);
    }

    private requestWithoutData(url: string, method: string, data?: Data, config?: RequestConfig) {
        return this.request(url, data, Object.assign({method}, config));
    }

    // private requestWithData(url: string, method: string, init?: RequestInit) {
    //     return this.request(url, {
    //         method,
    //     });
    // }

    // delete(url: string, init?: RequestInit) {
    //     return this.requestWithoutData(url, 'delete', init);
    // };

    get(url: string, data?: Pick<Data, 'params' | 'query'>, config?: RequestInit) {
        return this.requestWithoutData(url, 'get', data, config);
    };

    // head(url: string, init?: RequestInit) {
    //     return this.requestWithoutData(url, 'head', init);
    // };

    // options(url: string, init?: RequestInit) {
    //     return this.requestWithoutData(url, 'options', init);
    // };
    //
    // post(url: string, data: any, init?: RequestInit) {
    //     return this.requestWithData(url, 'post', init);
    // }
    //
    // put(url: string, data: any, init?: RequestInit) {
    //     return this.requestWithData(url, 'put', init);
    // }
    //
    // patch(url: string, data: any, init?: RequestInit) {
    //     return this.requestWithData(url, 'patch', init);
    // }

}