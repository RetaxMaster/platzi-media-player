import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('video');
const player = new MediaPlayer({

    el: video, 
    
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ] 

});

const togglePlay = document.querySelector('#togglePlay');
const toggleMuteButton = document.querySelector('#toggleMute');

togglePlay.onclick = () => player.togglePlay();
toggleMuteButton.onclick = () => player.toggleMute();