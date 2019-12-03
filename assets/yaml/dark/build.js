'use strict'
const fs = require("fs");
const js_yaml = require("js-yaml");
const path = require("path");

const colors = js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/colors.yaml"));
const colors_template = JSON.stringify(js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/colors.yaml")));
const template = JSON.stringify(js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/template.yaml")));

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

mkdirsSync("./assets/json/dark");