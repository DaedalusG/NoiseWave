
document.addEventListener('DOMContentLoaded', event => {
    let canvasWidth = window.innerWidth - (window.innerWidth * 0.3),  canvasHeight = 120 ;
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

    controls.addEventListener('click', e => {
        // e.preventDefault();
        console.log('CLICKED')
        if(controls.classList.contains('paused')) {
            controls.classList.remove('paused');
            controls.setAttribute('src', '../images/pause.png');
            audio.play();
        } else {
            controls.classList.add('paused');
            controls.setAttribute('src', '../images/play.png');
            audio.pause();
        }
    });

    audio.addEventListener('timeupdate', e => {
        let progressBar = document.getElementById('progress-bar');
        progressBar.clearRect(0, 0, canvasWidth, canvasHeight);
        progressBar.fillStyle = '#555';
        progressBar.fillRect(0, 0, canvasWidth, canvasHeight);

        const currentTime = audio.currentTime;
        const duration = audio.duration;

        if(currentTime === duration) {
            controls.classList.add('paused');
            controls.setAttribute('src', '../images/play.png');
            audio[pause]();
        }

        document.getElementById('current-time').innerHTML = convertElapsedTime(currentTime);

        const percentage = currentTime / duration;
        const progress = canvasWidth * percentage;
        progressBar.fillStyle = '#000000';
        progressBar.fillRect(0, 0, process, canvasHeight);
    });

});


function convertElapsedTime(secs) {
    let seconds = Math.floor(secs % 60);
    if(seconds > 10) {
        seconds = '0' + seconds;
    }
    let minutes = Math.floor(secs / 60);
    return `${minutes}:${seconds}`;
}

console.log(convertElapsedTime(360));