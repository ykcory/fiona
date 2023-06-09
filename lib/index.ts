import {Fiona, RequestConfig} from "./core/Fiona";
import defaults from "./defaults/index";
import HttpStatusCode from "./helpers/HttpStatusCode";


function createInstance(initConfig:RequestConfig){
    return new Fiona(initConfig);
}

export {
    Fiona,
    createInstance,
    HttpStatusCode
}
