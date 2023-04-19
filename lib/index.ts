import {Fiona, RequestConfig} from "./core/Fiona";
import defaults from "./defaults/index";
import HttpStatusCode from "./helpers/HttpStatusCode";


function createInstance(defaultConfig:RequestConfig){
    return new Fiona(defaultConfig);
}

export {
    Fiona,
    createInstance,
    HttpStatusCode
}
