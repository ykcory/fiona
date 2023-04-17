import transitionalDefaults from "./transitional"

export default {
    // TODO: I don't know what this is for
    transitional: transitionalDefaults,
    transformRequest: [
        function transformRequest(data: any, headers: any): any {
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data: any): any {
            return data;
        }
    ],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,
    maxBodyLength: -1,

    validateStatus(status:number):boolean {
        return status >= 200 && status < 300;
    },

    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*'
        }
    }
}