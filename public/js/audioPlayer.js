const canvasWidth = window.innerWidth - (window.innerWidth * 0.3),  canvasHeight = 120 ;

// AUDIO CONTEXT
window.AudioContext = (window.AudioContext || 
    window.webkitAudioContext || 
    window.mozAudioContext || 
    window.oAudioContext || 
    window.msAudioContext);
    
    if (!AudioContext) alert('This site cannot be run in your Browser. Try a recent Chrome or Firefox. ');
    
    var audioContext = new AudioContext();
    var currentBuffer  = null;
    
    // CANVAS
    var newCanvas   = createCanvas (canvasWidth, canvasHeight);
    var context     = null;
    
    window.onload = appendCanvas;
    function appendCanvas() { document.body.appendChild(newCanvas);
                          context = newCanvas.getContext('2d'); }
    
    // MUSIC LOADER + DECODE
    function loadMusic(url) {   
    var req = new XMLHttpRequest();
    req.open( "GET", url, true );
    req.responseType = "arraybuffer";    
    req.onreadystatechange = function (e) {
          if (req.readyState == 4) {
             if(req.status == 200)
                  audioContext.decodeAudioData(req.response, 
                    function(buffer) {
                             currentBuffer = buffer;
                             displayBuffer(buffer);
                    }, onDecodeError);
             else
                  alert('error during the load.Wrong url or cross origin issue');
          }
    } ;
    req.send();
    }
    
    function onDecodeError() {  alert('error while decoding your file.');  }
    
    // MUSIC DISPLAY
    function displayBuffer(buff /* is an AudioBuffer */) {
    
    var drawLines = 500;
    var leftChannel = buff.getChannelData(0); // Float32Array describing left channel     
    var lineOpacity = canvasWidth / leftChannel.length  ;      
    context.save();
    context.fillStyle = '#555555' ;
    context.fillRect(0,0,canvasWidth,canvasHeight );
    context.strokeStyle = '#FF3300';
    context.globalCompositeOperation = 'lighter';
    context.translate(0,canvasHeight / 2);
    //context.globalAlpha = 0.6 ; // lineOpacity ;
    context.lineWidth=1;
    var totallength = leftChannel.length;
    var eachBlock = Math.floor(totallength / drawLines);
    var lineGap = (canvasWidth/drawLines);
    
    context.beginPath();
    for(var i=0;i<=drawLines;i++){
      var audioBuffKey = Math.floor(eachBlock * i);
       var x = i*lineGap;
       var y = leftChannel[audioBuffKey] * canvasHeight / 2;
       context.moveTo( x, y );
       context.lineTo( x, (y*-1) );
    }
    context.stroke();
    context.restore();
    }
    
    function createCanvas ( w, h ) {
        var newCanvas = document.createElement('canvas');
        newCanvas.width  = w;     newCanvas.height = h;
        newCanvas.setAttribute('id', 'progress-bar');
        return newCanvas;
    };
    
    const source = document.getElementById('player__audio').getAttribute('src')
    
    loadMusic(source);

document.addEventListener('DOMContentLoaded', event => {
    const audio = document.getElementById('player__audio');
    const controls = document.getElementById('player__control');
    const progressBar = document.getElementById('progress-bar');
    const controlsImage = document.getElementById('play-pause');

    audio.addEventListener('loadedmetadata', e => {
        let duration = audio.duration;
        let currentTime = audio.currentTime;
        document.getElementById('duration').innerText = convertElapsedTime(duration);
        document.getElementById('current-time').innerText = convertElapsedTime(currentTime);
    });

    controls.addEventListener('click', e => {
        if(controls.classList.contains('paused')) {
            controls.classList.remove('paused');
            controlsImage.setAttribute('src', '../images/pause.png');
            audio[play]();
        } else {
            controls.classList.add('paused');
            controlsImage.setAttribute('src', '../images/play.png');
            audio[pause]();
        }
    });

    audio.addEventListener('timeupdate', e => {
        progressBar.clearRect(0, 0, canvasWidth, canvasHeight);
        progressBar.fillStyle = '#555';
        progressBar.fillRect(0, 0, canvasWidth, canvasHeight);

        const currentTime = audio.currentTime;
        const duration = audio.duration;

        if(currentTime === duration) {
            controls.classList.add('paused');
            controlsImage.setAttribute('src', '../images/play.png');
            audio[pause]();
        }

        document.getElementById('current-time').innerText = convertElapsedTime(currentTime);

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