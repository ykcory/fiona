import {Data, RequestConfig} from "./Fiona";

interface MergeConfig {

}

export default function mergeConfig(url: string, data?: Data, defaultConfig?: RequestConfig, config?: RequestConfig): {
    newUrl: string,
    newConfig: RequestInit
} {
    console.log(defaultConfig, "defaultConfig")

    let newUrl = url;

    if (defaultConfig?.baseURL) {
        newUrl = defaultConfig?.baseURL + url;
    }

    console.log(newUrl,"newUrl")

    return {
        newUrl,
        newConfig: config || {}
    }
}