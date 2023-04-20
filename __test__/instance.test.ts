import {describe, it, test, expect} from "vitest";
import {request} from "./instance.http";

describe("createInstance",()=>{
    it('custom headers on createInstance', async function () {
        const response = await request.get("/api/instance/headers", null, {mode: 'no-cors'})
        const res = await response.json();
        expect(res).toStrictEqual({
            authentication: "Bear auth"
        });
    });
})