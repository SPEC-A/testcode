"use strict"; // memory 확보

const certificate = artifacts.require("certificate");
const rewire = require("rewire");
const generateRandomCode = rewire("./generateRandomCode");
const randfunc = rewire("./randName"); //rewire 의존성 주입(random 값 매번 바꿔줘야 하므로)

// var web = new web(new web.providers.HttpProvider("http://localhost:9545"));
// const compiled_contract = require("../build/contracts/certificate.json");

// setInterval(randName, 10000);
// setInterval(generateRandomCode, 10000);

var stTime = new Date().getTime();
var count = 0;

describe("certificate", function () {
  while (new Date().getTime() < stTime + 10000) {
    // 10초 후에 반복
    count++;
    it("인증서 랜덤으로 등록", async () => {
      return certificate.deployed().then((instance) => {
        instance.issue(randfunc, generateRandomCode);
        return console.log(instance.getCertificate);
      });
    });
    if (count == 100) break; //인증서 100개 발급 시 break
  }
});
