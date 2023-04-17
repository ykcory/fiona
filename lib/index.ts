import {Feionas} from "./core/Feionas";
import defaults from "./defaults/index";
import HttpStatusCode from "./helpers/HttpStatusCode";


function createInstance(defaultConfig:any){
    const context = new Feionas(defaultConfig);
    return context;
}

const feionas = createInstance(defaults);


export {
    Feionas,
    HttpStatusCode
}
export default feionas;