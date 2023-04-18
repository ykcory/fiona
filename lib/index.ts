import {Fiona} from "./core/Fiona";
import defaults from "./defaults/index";
import HttpStatusCode from "./helpers/HttpStatusCode";


function createInstance(defaultConfig:any){
    return new Fiona(defaultConfig);
}

export {
    Fiona,
    createInstance,
    HttpStatusCode
}
