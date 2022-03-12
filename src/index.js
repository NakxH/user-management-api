const express = require("express");
const mongoose = require("mongoose");
const { readFile } = require("./utils/file");
const { mapByHeadings } = require("./utils/csv");
const { saveUser, validateUser } = require("./utils/user");

mongoose
  .connect("mongodb://localhost:27017/user-database", {
    useNewUrlParser: true,
  })
  .then(async () => {
    const app = express();

    try {
      const contents = await readFile(__dirname + "/data/users.csv");
      const users = mapByHeadings(contents, [
        "email",
        "name",
        "job",
        "phone",
        "bio",
      ]);

      for (let i = 0; i < users.length; i++) {
        if (validateUser(users[i])) {
          await saveUser(users[i]);
        }
      }
    } catch (err) {
      console.error(err);
    }

    app.listen(3000, () => {
      console.log("Server has started!");
    });
  });
