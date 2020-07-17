const { Song } = require("../db/models");
const { getS3Url } = require("../utils");

async function getSong() {
  const song = await Song.findByPk(1);
  const fromS3 = await getS3Url(song.songUrl);
  return fromS3;
}

getSong().then((res) => console.log(res));
