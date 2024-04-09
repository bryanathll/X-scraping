const express = require("express");
const { exec } =  require("child_process");
const fs = require('fs');
const csv = require('csv-parser');
const app = express();


const scrapingX = (keyword, callback) => {
  // const search = 'putusan MK';
  const searchKeyword = keyword;
  const filename = `${searchKeyword.replace(/\s/g, '_')}.csv`;
  const lang = 'id';
  const limit = 100;
  const token = "cb5d39370489c17c2f9f62436cac53bca347ea22";

  const command = `npx --yes tweet-harvest@2.6.0 -o "${filename}" -s "${searchKeyword}" -l ${limit} --token "${token}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Terjadi kesalahan: ${error}`);
      callback(null)
      return
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    
    const tweetsData = [];
    fs.createReadStream(`tweets-data/${filename}`)
      .pipe(csv())
      .on('data', (data) => tweetsData.push(data))
      .on('end', () => {
        callback(tweetsData); 
      });
  });
};

// app.listen(3000, () => {
//   console.log('Server berjalan pada http://localhost:3000');
// });

module.exports = {scrapingX}