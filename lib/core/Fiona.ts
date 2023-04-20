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

    constructor(public initConfig: RequestConfig = {}) {
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }

    request(url: string, data?: Data, config?: RequestConfig) {
        const {newUrl, newConfig} = mergeConfig(url, data, this.initConfig, config)
        return fetch(newUrl, newConfig);
    }

    private requestWithData(url: string, method: string, data?: Data, config?: RequestConfig) {
        return this.request(url, data, Object.assign({method}, config));
    }

    delete(url: string, data?: Pick<Data, 'params' | 'query'>, config?: RequestConfig) {
        return this.requestWithData(url, 'delete', data, config);
    };

    get(url: string, data?: Pick<Data, 'params' | 'query'>, config?: RequestConfig) {
        return this.requestWithData(url, 'get', data, config);
    };

    head(url: string, data?: Pick<Data, 'params' | 'query'>, config?: RequestConfig) {
        return this.requestWithData(url, 'head', data, config);
    };

    options(url: string, data?: Pick<Data, 'params' | 'query'>, config?: RequestConfig) {
        return this.requestWithData(url, 'options', data, config);
    };

    post(url: string, data?: Data, config?: RequestConfig) {
        return this.requestWithData(url, 'post', data, config);
    };

    put(url: string, data?: Data, config?: RequestConfig) {
        return this.requestWithData(url, 'put', data, config);
    };

    patch(url: string, data?:Data, config?: RequestConfig) {
        return this.requestWithData(url, 'patch', data, config);
    };

}