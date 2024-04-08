const { forExample } = require("../../helpers/forExample");
const response = require("./../../helpers/response")
const { exec } = require("child_process");
const fs = require('fs');
const csv = require('csv-parser');
const tweetScraper = require('../../src/tweet');


const helloIndex = (req, res) => {
  forExample();

  response.res200("Success fetching the API!", null, res)
};

// const getTweetData = (req, res) => {
//   tweetScraper.app();

//   response.res200("Success fetching the API!", null, res)
// };

// exports.getTweetData = (req, res) => {
//   tweetScraper(req, res);
// };

const getTweetData = async (req, res) => {
  tweetScraper.app()
  try {
    let result = 'Testing '.repeat(10000)

    response.resCustom(200, "Success fetching data", result, res)

  } catch (error) {
    console.log(error.message)
    response.res500(res)
  }
};


const helloPost = (req, res) => {
  const inputData = req.body;
  console.log(inputData);
  if (Object.keys(inputData).length !== 0) {
    response.res201("Success create data", inputData, res)
  } else {
    response.res400(res)
  }
};


const getData = async (req, res) => {
  try {
    let result = 'Testing '.repeat(10000)

    response.resCustom(200, "Success fetching data", result, res)

  } catch (error) {
    console.log(error.message)
    response.res500(res)
  }
};




module.exports = { helloIndex, helloPost, getData, getTweetData };
