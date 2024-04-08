const express = require("express")

const router = express.Router()

const {getTweets, postTweets} = require("./twitter.controller")

router.route("/tweets").get(getTweets)
router.route("/tweets").post(postTweets)

module.exports = router