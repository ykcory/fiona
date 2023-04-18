import {describe, it, test, expect} from "vitest";
import {request} from "./index.http";

describe('main', () => {
    it('get', async function () {
        const response = await request.get("http://localhost:3000/api/get", {})
        const res = await response.json();
        expect(res).toStrictEqual({
            "name": "get",
        });
    });
})