// document.addEventListener("DOMContentLoaded", () => {
//   const jwt = require("jsonwebtoken");
//   const { secret } = require("../config").jwtConfig;

//   console.log("in who is logged in script");
//   const token = localStorage.getItem("NOISEWAVE_ACCESS_TOKEN");
//   console.log("url", window.location.href);
//   if (token !== null) {
//     jwt.verify(token, secret, null, async (err, jwtPayload) => {
//       if (err) {
//         throw err;
//       }

//       const { id } = jwtPayload.data;
//       let user;

//       try {
//         user = await User.findByPk(id);
//       } catch (err) {
//         throw err;
//       }

//       console.log(user);
//     });
//   }
// });
