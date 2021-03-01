# NoiseWave
[Visit NoiseWave](https://noisewave.herokuapp.com/)

**Table of Contents**
* [NoiseWave at a Glance](#noisewave-at-a-glance)
* [Application Technologies Used](#application-technologies) 
* [Conclusion](#conclusion)

## NoiseWave at a Glance
NoiseWave is a fullstack app for uploading, finding and playing music, inspired by soundcloud.com. It features a persistent audio player that continues playing music while you navigate.

##### Studying Flashcards
![NoiseWave gameplay](/readme-resources/noisewave-demo.gif)

## Application Technologies
### Frontend Technologies Used:
#### Pug
I took the opportunity to implement what I had learned about Pug.

Pug code for audio player
```javascript
div#jquery_jplayer_1.jp-jplayer
        div#jp_container_1.jp-audio(role='application' aria-label='media player')
            div.jp-type-single
                div.jp-gui.jp-interface
                    div.jp-volume-controls
                        button.jp-mute(role='button' tabindex='0') mute
                        button.jp-volume-max(role='button' tabindex='0') max volume
                        div.jp-volume-bar
                            .jp-volume-bar-value
                    .jp-controls-holder
                        .jp-controls
                            button.jp-play(role='button' tabindex='0') play
                            button.jp-stop(role='button' tabindex='0') stop
                        .jp-progress
                            .jp-seek-bar
                                .jp-play-bar
                        .jp-current-time(role='timer' aria-label='time') &nbsp;
                        .jp-duration(role='timer' aria-label='duration') &nbsp;
                        .jp-toggles
                            button.jp-repeat(role='button' tabindex='0') repeat
            .jp-details#jp-details
                .jp-title(aria-label='title')
            .jp-no-solution
                span Update Required
                |       To play the media you will need to either update your browser to a recent version or update your
                a(href='https://get.adobe.com/flashplayer/' target='_blank') Flash plugin
                | .
        include footer.pug

        script(src="js/modal-popup.js")

        script(type="text/javascript").
            $(document).ready(function(){
            $("#jquery_jplayer_1").jPlayer({
                ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "REMIX TO IGNITION",
                    mp3: "/sample.mp3",
                });
                },
                cssSelectorAncestor: "#jp_container_1",
                swfPath: "/js",
                supplied: "mp3",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true,
                remainingDuration: true,
                toggleDuration: true
            });
            });


        script(type="text/javascript").
            document.addEventListener("DOMContentLoaded", () => {

                const observer = new MutationObserver(()=> {
                    console.log('change')
                    let playSongs= document.querySelectorAll('.playSong')

                    playSongs.forEach(song=>{
                        song.addEventListener('click', async (event)=> {
                            const songUrl= event.target.id;
                            const songTitle= event.target.getAttribute('data-title');
                            const songArtist = event.target.getAttribute('data-artist');
                            console.log('data', songTitle, songArtist);
                            $("#jquery_jplayer_1").jPlayer('destroy');
                            $("#jquery_jplayer_1").jPlayer({
                                ready: function () {
                                $(this).jPlayer("setMedia", {
                                    title: `${songArtist} - ${songTitle}`,
                                    mp3: songUrl,
                                });
                                $(this).jPlayer("play");
                                },
                                cssSelectorAncestor: "#jp_container_1",
                                swfPath: "/js",
                                supplied: "mp3,flac,m4a",
                                useStateClassSkin: true,
                                autoBlur: false,
                                smoothPlayBar: true,
                                keyEnabled: true,
                                remainingDuration: true,
                                toggleDuration: true,
                                autoPlay:true
                            });

                        })
                    })

                })

                const content = document.getElementById('page-specific-content');
                observer.observe(content, {childList: true})

            });
```

### Backend Technologies Used
#### ExpressJS
The minimalism of Express lent itself to the very light-weight responsibilities of NoiseWave's server.
#### Sequelize
A natural ORM for showcasing my knowledge of Node.js and Postgres.
#### CORS Middleware
#### Express Bearer Token
My choice for token authentication.
#### CSURF
My middleware choice for CSRF token creation and validation.

## Conclusion
Developing NoiseWave introduced me to Pug and its music player challenged me to develop a highly custom feature.
