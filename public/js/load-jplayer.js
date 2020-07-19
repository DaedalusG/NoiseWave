document.addEventListener("DOMContentLoaded", () => {
  const jplayer = document.getElementById("jquery_jplayer_1");
  jplayer.jPlayer({
    ready: function () {
      jplayer.jplayer("setMedia", {
        title: "Bubble",
        m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
        oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
      });
    },
    cssSelectorAncestor: "#jp_container_1",
    swfPath: "/js",
    supplied: "m4a, oga",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true,
  });
});
//   $("#jquery_jplayer_1").jPlayer({
//     ready: function () {
//       $(this).jPlayer("setMedia", {
//         title: "Bubble",
//         m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
//         oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
//       });
//     },
//     cssSelectorAncestor: "#jp_container_1",
//     swfPath: "/js",
//     supplied: "m4a, oga",
//     useStateClassSkin: true,
//     autoBlur: false,
//     smoothPlayBar: true,
//     keyEnabled: true,
//     remainingDuration: true,
//     toggleDuration: true,
//   });
// });
