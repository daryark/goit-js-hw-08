import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);
player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(e) {
  localStorage.setItem(CURRENT_TIME_KEY, e.seconds);
}
