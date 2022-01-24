const certificate = artifacts.require("certificate.sol");

module.exports = function (deployer) {
  deployer.deploy(certificate); // 이더리움 가상머신에 배포
};
