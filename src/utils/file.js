const fs = require("fs");

async function readFile(filePath) {
  return await fs.promises.readFile(filePath).then((data) => data.toString());
}

module.exports = { readFile };
