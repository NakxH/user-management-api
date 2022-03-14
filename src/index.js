const express = require("express");
const mongoose = require("mongoose");
const { readFile } = require("./utils/file");
const { mapByHeadings } = require("./utils/csv");
const { saveUser, validateUser } = require("./utils/user");
const { moveFile } = require("./utils/archive.js");
const User = require("./models/User");

// mongoose
//   .connect("mongodb://localhost:27017/user-database", {
//     useNewUrlParser: true,
//   })
//   .then(async () => {
//     const app = express();

//     try {
//       const contents = await readFile(__dirname + "/data/users.csv");
//       const users = mapByHeadings(contents, [
//         "email",
//         "name",
//         "job",
//         "phone",
//         "bio",
//       ]);

//       for (let i = 0; i < users.length; i++) {
//         if (validateUser(users[i])) {
//           await saveUser(users[i]);
//         }
//       }
//     } catch (err) {
//       console.error(err);
//     }

//     app.listen(3000, () => {
//       console.log("Server has started!");
//     });
//   });

mongoose
  .connect("mongodb://localhost:27017/user-database", {
    useNewUrlParser: true,
  })
  .then(async () => {
    const app = express();

    try {
      const archivePath = __dirname + "/archive/users.csv";
      console.log(archivePath);
      const pathName = __dirname + "/data/users.csv";
      const contents = await readFile(pathName);
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

      await moveFile(pathName, archivePath);
    } catch (err) {
      console.error(err);
    }

    app.get("/", async (req, res) => {
      const users = await User.find();
      res.send(users);
    });

    app.listen(3000, () => {
      console.log("Server has started!");
    });
  });
