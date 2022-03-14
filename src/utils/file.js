const fs = require("fs");

async function readFile(filePath) {
  return await fs.promises.readFile(filePath).then((data) => data.toString());
}

async function moveFile(currentFile, archiveDes) {
  await fs.promises.rename(currentFile, archiveDes, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("file succesfully moved");
    }
  });
}

module.exports = { readFile, moveFile };
