const Media = require("../models/index");
const User = require("../models/Users");
const fs = require("fs");
const path = require("path");

function up() {
  const content = fs.readFileSync(path.join(__dirname, "data.json"));
  const data = JSON.parse(content);

  for (const media of data.media) {
    Media.create(media);
  }

  for (const user of data.users) {
    User.create(user);
  }
}

module.exports = { up };
