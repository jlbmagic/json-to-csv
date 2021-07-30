import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";

const json2csv = require("csvjson-json2csv");

window.getAndProcessJSON = (json, params) => {
  console.log(JSON.parse(params));
  const csv = json2csv(JSON.parse(json), { flatten: true });
  const obj = btoa(csv);
  FileMaker.PerformScript("Return Data", obj);
};
