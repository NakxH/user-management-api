const fs = require("fs");

async function moveFile(currentFile, archiveDes) {
  fs.promises.rename(currentFile, archiveDes, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("file succesfully moved");
    }
  });
}

module.exports = { moveFile };
