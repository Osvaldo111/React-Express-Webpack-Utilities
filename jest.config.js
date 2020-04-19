// // jest.config.js
const { defaults } = require("jest-config");
module.exports = {
  //
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  typeAcquisition: { include: ["jest"] },
};
