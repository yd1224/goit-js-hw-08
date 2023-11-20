import Player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
function currentTime(){
    player.on('timeupdate', function () {
        let value = 0;
        value += event.data.data.seconds;
console.log(value);
    });
    }
currentTime();



