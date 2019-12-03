'use strict'
const fs = require("fs");
const js_yaml = require("js-yaml");
const path = require("path");
const mustache = require("mustache");

const colors = js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/colors.yaml"));
const colors_template = JSON.stringify(js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/colors.yaml")));
const template = JSON.stringify(js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/template.yaml")));
const ui_and_synatx = JSON.parse(mustache.render(colors_template, { ...colors }));

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
mkdirsSync("./dists/dark");

const themeNames = ["sunrise-dark", "sunrise-dark-bold", "sunrise-dark-italic"];
for (let themeName of themeNames) {
    const header = js_yaml.safeLoad(fs.readFileSync(`./assets/yaml/dark/${themeName}.yaml`));
    const theme = mustache.render(template, { ...header, ...ui_and_synatx });
    fs.writeFileSync(`./dists/dark/${themeName}.json`, theme);
}