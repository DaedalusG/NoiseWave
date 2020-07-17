const { Song, User } = require("../db/models");
const { getS3Url } = require("../utils");

async function getSong() {
  const song = await User.findByPk(2);
  const fromS3 = await getS3Url(song.profilePicUrl);
  return fromS3;
}

getSong().then((res) => console.log(res));
