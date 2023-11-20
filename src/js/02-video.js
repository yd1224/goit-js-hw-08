import Player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
function onPlay (data) {
    const time = data.seconds;
console.log(time);
    }
    player.on('timeupdate', onPlay);




