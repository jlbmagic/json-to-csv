import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";

const json2csv = require("csvjson-json2csv");

window.getAndProcessJSON = (json, params) => {
  // alert("Get");

  const csv = json2csv(json, JSON.parse(params));
  const obj = btoa(csv);
  FileMaker.PerformScript("Return Data", obj);
};
