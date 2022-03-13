const fs = require("fs");

async function moveFile(pathName, archivePath) {
  fs.promises.rename(pathName, archivePath, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("file succesfully moved");
    }
  });
}

module.exports = { moveFile };
