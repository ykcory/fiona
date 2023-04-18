import {describe, it, test, expect} from "vitest";
import {request} from "./index.http";

describe('main', () => {
    it('get', async function () {
        const response = await request.get("/api/get/params", null, {mode: 'no-cors'})
        const res = await response.json();
        expect(res).toStrictEqual({
            "name": "get"
        });
    });
    it('get with query', async function () {
        const response = await request.get("/api/get/query", {
            query: {
                name: 'get-query'
            }
        })
        const res = await response.json();
        expect(res).toStrictEqual({
            name: 'get-query'
        });
    });
    it('get with params', async function () {
        const response = await request.get("/api/get/:name", {
            params: {
                name: 'get-params'
            }
        })
        const res = await response.json();
        expect(res).toStrictEqual({
            name: 'get-params',
        });
    });
})