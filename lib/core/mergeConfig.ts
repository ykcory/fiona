import {Data} from "./Fiona";

interface MergeConfig {

}

export default function mergeConfig(url: string, defaultInit: RequestInit, data?: Data, init?: RequestInit): {
    newUrl: string,
    newConfig: RequestInit
} {
    return {
        newUrl: url,
        newConfig: {}
    }
}