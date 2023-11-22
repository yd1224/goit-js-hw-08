
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoTime = "videoplayer-current-time";
function currentTime() {
    const throttleFunc = throttle((event) => {
        localStorage.setItem(videoTime, JSON.stringify(event.seconds))
    }, 1000);

    player.on('timeupdate', (event) => {
        throttleFunc(event);
    });
}

currentTime();
const timeUpdate = JSON.parse(localStorage.getItem(videoTime));
player.setCurrentTime(timeUpdate);




