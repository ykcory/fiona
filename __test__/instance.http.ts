import {createInstance} from "../lib";

export const request = createInstance({
    baseURL: "http://localhost:3000",
    headers: {
        Authentication: "Bear auth"
    }
})