const fetch = require("node-fetch");
const needle = require("needle");
const axios = require("axios").default;
const superagent = require("superagent");
const got = require("got").default;
const https = require("https");

const URL = "https://api.apis.guru/v2/list.json";

async function useNodeFetch() {
  const result = await fetch(URL);
  const parsedResult = await result.json();
  console.log(parsedResult);
}

async function useNeedle() {
  const result = await needle("get", URL);
  console.log(result.body);
}

async function useAxios() {
  const result = await axios(URL);
  console.log(result.data);
}

async function useSuperagent() {
  const result = await superagent("get", URL);
  console.log(result.body);
}

async function useGot() {
  const result = await got(URL);
  console.log(JSON.parse(result.body));
}

function useNodeHttps() {
  https.get(URL, function (result) {
    let body = "";

    result.on("data", function (data) {
      body = body + data;
    });

    result.on("end", function () {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
    });
  });
}

useNodeHttps();
