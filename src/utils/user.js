const User = require("../models/User");

async function saveUser(user) {
  const userDb = new User({
    email: user.email,
    name: user.name,
    job: user.job,
    phone: user.phone,
    bio: user.bio,
  });
  await userDb.save();
}

function validateUser(user) {
  if (user.email === "") {
    return false;
  }
  if (user.name === "") {
    return false;
  }
  if (user.job === "") {
    return false;
  }
  return true;
}

module.exports = { saveUser, validateUser };
