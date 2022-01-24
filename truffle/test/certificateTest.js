const certificate = artifacts.require("certificate");

function generateRandomCode(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}

function randName() {
  let text = "";
  let first =
    "김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구";
  let last =
    "가강건경고관광구규근기길나남노누다단달담대덕도동두라래로루리마만명무문미민바박백범별병보사산상새서석선설섭성세소솔수숙순숭슬승시신아안애엄여연영예오옥완요용우원월위유윤율으은의이익인일자잔장재전정제조종주준중지진찬창채천철초춘충치탐태택판하한해혁현형혜호홍화환회효훈휘희운모배부림봉혼황량린을비솜공면탁온디항후려균묵송욱휴언들견추걸삼열웅분변양출타흥겸곤번식란더손술반빈실직악람권복심헌엽학개평늘랑향울련";

  for (var i = 0; i < 1; i++)
    text += first.charAt(Math.floor(Math.random() * first.length));
  for (var i = 0; i < 2; i++)
    text += last.charAt(Math.floor(Math.random() * last.length));

  return text;
}

// var web = new web(new web.providers.HttpProvider("http://localhost:9545"));
// const compiled_contract = require("../build/contracts/certificate.json");

// setInterval(randName, 10000);
// setInterval(generateRandomCode, 10000);

//var seconds = new Date().getSeconds(); // 초를 구하고

var value = 0;
var stTime = new Date().getTime();

describe("certificate", function () {
  while (new Date().getTime() < stTime + 10000) {
    // beforeEach(function (done) {
    //   setTimeout(done, 150);
    // });
    // afterEach(function (done) {
    //   setTimeout(done, 200);
    //   done();
    // });

    it("후보자 랜덤으로 등록", async () => {
      return certificate.deployed().then((instance) => {
        instance.issue(randName);
        return console.log(instance.getCertificate);
      });
    });
  }
});

// describe("test", function () {
//   before(() => alert("Testing started – before all tests"));
//   after(() => alert("Testing finished – after all tests"));

//   beforeEach(() => alert("Before a test – enter a test"));
//   afterEach(() => alert("After a test – exit a test"));

//   it("test 1", () => alert(1));
//   it("test 2", () => alert(2));
// });
