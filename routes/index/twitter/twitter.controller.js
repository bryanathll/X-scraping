const {res200} = require("../../helpers/response") 
const {scrapingX} = require("../../src/tweet")



const getTweets = (req, res) =>{
    res200("success getting tweets",
     scrapingX,
     res)
}

const postTweets = (req, res)=>{
    const {keyword} = req.body
    const search = keyword;
    console.log(search)
    res200("success get keyword", keyword, res)
}

module.exports = {getTweets, postTweets}