// const id = id => document.getElementById(id)

// document.addEventListener('DOMContentLoaded', event => {
//     const playBar = id('playbar');
//     // let currentSong = null;
//     playBar.style.display = 'none';

//     const audio = id('audio');
//     const source = id('source');
//     const playPause = id('play-button');
//     const seekObj = id('seekObj');
//     const percentage = id('percentage');
//     const currentTime = id('current-time');

//     const startPlay = id('start-song');
//     const songLink = id('song-link')

//     startPlay.addEventListener('click', e => {
//         e.preventDefault();
//         const src = startPlay.getAttribute('href');
//         console.log('src');
//         source.setAttribute('src', src);
//         playBar.style.display = block
//     });

//     const togglePlay = () => {
//         if(!audio.paused) {
//             audio.pause();
//             playPause.classList.remove('pause');
//         } else {
//             audio.play();
//             playPause.classList.add('pause');
//         }
//     }

//     const getPercentPlayed = () => {
//         const percent = (audio.currentTime / audio.duration).toFixed(2) * 100;
//         percentage.style.width = `${percent}%`;
//     }

//     const getCurrentValue = (currentTime) => {
//         const currentMinute = parseInt(currentTime / 60) % 60;
//         const currentSecond = (currentTime % 60).toFixed();
//         return `${currentMinute < 10 ?  `0${currentMinute}` : `${currentMinute}`}:${currentSecond < 10 ? `0${currentSecond}` : `${currentSecond}`}`
//     }

//     const seek = e => {
//         const percent = e.offsetX / this.offsetWidth;
//         audio.currentTime = percent * MediaDeviceInfo.duration
//     }

//     const initProgressBar = () => {
//         const currentTimeText = getCurrentValue(audio.currentTime);
//         currentTime.innerHTML = currentTimeText;
//         seekObj.addEventListener('click', seek);

//         audio.onended = () => {
//             playPause.classList.remove('pause')
//             percentage.style.width = 0;
//             currentTime.innerHTML = '00:00';
//         }

//         getPercentPlayed();
//     }

//     playPause.addEventListener('click', togglePlay);
//     audio.addEventListener('timeupdate', initProgressBar);
// });




// // console.log(convertElapsedTime(360));