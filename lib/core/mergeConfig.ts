import {Data, RequestConfig} from "./Fiona";

export default function mergeConfig(url: string, data?: Data, initConfig?: RequestConfig, config?: RequestConfig): {
    newUrl: string,
    newConfig: RequestInit
} {
    let newUrl = url;

    if (initConfig?.baseURL) {
        newUrl = initConfig.baseURL + url;
    }

    if (data?.params) {
        Object.keys(data.params).forEach(key => {
            if (newUrl.includes(`:${key}`) && data.params?.[key]) {
                newUrl = newUrl.replace(`:${key}`, `${data.params[key]}`)
            }
        })
    }

    // TODO: query type maybe not string | number
    if (data?.query) {
        const query = Object.keys(data.query).map(key => `${key}=${data.query[key]}`).join('&');
        newUrl = newUrl.includes('?') ? `${newUrl}&${query}` : `${newUrl}?${query}`;
    }

    const newRequestConfig = Object.assign({}, initConfig, config, {
        body: data?.body
    })

    const filterFields = ['baseURL'];

    const newConfig: RequestInit = Object.keys(newRequestConfig).reduce((acc: Record<string, any>, key) => {
        if (!filterFields.includes(key)) {
            acc[key] = newRequestConfig[key as keyof RequestConfig];
        }
        return acc as RequestInit
    }, {});

    return {
        newUrl,
        newConfig
    }
}