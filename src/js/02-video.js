import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//Pre-existing player (https://github.com/vimeo/player.js/#pre-existing-player)

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Разбери документацию метода (Methods on(event: string, callback: function): void)
player.on('play', function () {
  console.log('played the video!');
});

// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
const onPlay = function (data) {
  // data is an object containing properties specific to that event
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

// начни отслеживать событие timeupdate - обновление времени воспроизведения.
//Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
player.on('timeupdate', throttle(onPlay, 1000));

// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции. (setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>)

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

