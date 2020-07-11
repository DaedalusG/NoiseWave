const bcrypt = require("bcryptjs");
async function generateHashedPw() {
  return await bcrypt.hash("password", 10);
}

generateHashedPw().then((res) => console.log(res));
