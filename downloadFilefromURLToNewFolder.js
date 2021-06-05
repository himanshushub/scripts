//  link or the code https://www.codegrepper.com/code-examples/javascript/node.js+download+file+from+url

const https = require("https");
const fs = require("fs");

// url will have https url. If you want to use http url just replace https with http everywhere
// dest will have filepath in whihc you wanna write the file e.g --> ./src/assets/img.png
// cb is callback funtion

let download = function (url, dest, cb) {
  let file = fs.createWriteStream(dest);
  let request = https
    .get(url, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close(cb); // close() is async, call cb after close completes.
      });
    })
    .on("error", function (err) {
      // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (cb) cb(err.message);
    });
};

const eachModelDest = `../../src/assets/new-folder-name`;
// create that new folder
fs.mkdirSync(eachModelDest);
// pass that new folder path along with the file name and extension
download("https://can-create-new-folder", `${eachModelDest}/img.png`, () => {});
