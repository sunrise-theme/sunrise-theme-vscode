'use strict'
const fs = require("fs");
const js_yaml = require("js-yaml");

const colors = js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/colors.yaml"));
const colors_template = JSON.stringify(js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/colors.yaml")));
const template = JSON.stringify(js_yaml.safeLoad(fs.readFileSync("./assets/yaml/dark/template.yaml")));
