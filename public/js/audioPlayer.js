
document.addEventListener('DOMContentLoaded', event => {
    const audio = document.getElementById('player__audio');
    const controls = document.getElementById('controls');
    let progressBar = document.getElementById('progress-bar');
    // const controlsImage = document.getElementById('play-pause');

    audio.addEventListener('loadedmetadata', e => {
        let duration = audio.duration;
        let currentTime = audio.currentTime;
        document.getElementById('duration').innerHTML = convertElapsedTime(duration);
        document.getElementById('current-time').innerHTML = convertElapsedTime(currentTime);
    });
    
    console.log(controls)

    // progressBar.addEventListener('load', playSong)
});




// console.log(convertElapsedTime(360));