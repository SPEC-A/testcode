"use strict"; // memory 확보

const certificate = artifacts.require("certificate");
const rewire = require("rewire");
const generateRandomCode = rewire("./generateRandomCode");
const randfunc = rewire("./randName"); //rewire 의존성 주입(random 값 매번 바꿔줘야 하므로)

// var web = new web(new web.providers.HttpProvider("http://localhost:9545"));
// const compiled_contract = require("../build/contracts/certificate.json");

// setInterval(randName, 10000);
// setInterval(generateRandomCode, 10000);

//var seconds = new Date().getSeconds(); // 초를 구하고

var value = 0;
var stTime = new Date().getTime();

describe("certificate", function () {
  while (new Date().getTime() < stTime + 10000) {
    // 10초 후에 반복
    it("후보자 랜덤으로 등록", async () => {
      return certificate.deployed().then((instance) => {
        instance.issue(randfunc, generateRandomCode);
        return console.log(instance.getCertificate);
      });
    });
  }
});
