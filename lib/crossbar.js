const request = require('request-promise-native');
const mustache = require('mustache');
const fs = require('fs');

class Crossbar {
    constructor(options) {
        this.url = options.url || "http://127.0.0.1";
        this.port = options.port || "8000";
        this.version = options.version || "v2";
        this.api = {};
    }

    initialize() {
        const path = __dirname + "/apis";
        const filesName = fs.readdirSync(path);

        filesName.forEach((fileName) => {
            var name = fileName.replace('.json', ''),
                apis = require(path + '/' + fileName);

            this.api[name] = {};

            for (var api in apis) {
                var apiData = apis[api];

                this.initApi(name, api, apiData);
            }
        });
    }

    initApi(name, api, apiData) {
        this.api[name][api] = async (data) => {
            const options = {
                url: this.buildUrl(apiData.url, data),
                method: apiData.method,
                json: {
                    data: data.data
                },
                headers: {
                    'Content-Type': "application/json"
                }
            };

            if (apiData.auth_required) {
                options['headers']['X-Auth-Token'] = this.auth_token || data.auth_token;
            }

            if (apiData.method == "GET") delete options.json;

            return await request(options);
        };
    }

    buildUrl(path, data) {
        let url = `${this.url}:${this.port}/${this.version}`;

        if (path) {
            url = `${url}${path}`;
        }

        if (data.query_string) {
            url = `${url}${data.query_string}`;
        }

        return mustache.render(uri, data.url_params);
    }
}

//TODO build a factory function to new up Crossbar and call init for the user
module.exports = Crossbar;
