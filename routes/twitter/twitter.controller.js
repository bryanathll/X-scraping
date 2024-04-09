const {res200} = require("../../helpers/response") 
const {scrapingX} = require("../../src/tweet")

const getTweets = (req, res) =>{
     scrapingX(req, (data)=>{
        res200("success get data", data, res)
     });
};

const postTweets = (req, res)=>{
   const {keyword} = req.body
    scrapingX(keyword, (data)=>{
        res200("success get data", data, res)
     });
}

// const postTweets = (req, res)=>{
//     const {keyword} = req.body
//     const search = keyword;
//     console.log(search)
//     res200("success get keyword", keyword, res)
// }

module.exports = {getTweets, postTweets}