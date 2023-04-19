import {Data, RequestConfig} from "./Fiona";

export default function mergeConfig(url: string, data?: Data, defaultConfig?: RequestConfig, config?: RequestConfig): {
    newUrl: string,
    newConfig: RequestInit
} {
    let newUrl = url;

    if (defaultConfig?.baseURL) {
        newUrl = defaultConfig.baseURL + url;
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

    console.log(newUrl, "newUrl")

    return {
        newUrl,
        newConfig: config || {}
    }
}