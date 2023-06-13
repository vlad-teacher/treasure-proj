import styles from './index.module.scss';
import mapImg from '../assets/treasure-map.png';
import chestImg from '../assets/chest.png';
import TreasureClass from './treasure';
import Hint from './hint';
import GameController from './game-controller';
import Modal from './modal';

const map = document.getElementById('map');
const chest = document.getElementById('chest');
const hint = document.getElementById('hint');
const mapWrapper = document.getElementById('mapWrapper');
const chestWrapper = document.getElementById('chestWrapper');


map.src = mapImg;
chest.src = chestImg;

mapWrapper.classList.add(styles.mapWrapper);
chestWrapper.classList.add(styles.chestWrapper);
map.classList.add(styles.map);
chest.classList.add(styles.chest);
hint.classList.add(styles.hint);


const treasureInstance = new TreasureClass();
const hintInstance = new Hint(hint);
const gameController = new GameController();
const modal = new Modal();

chestWrapper.style.display = 'none';

window.addEventListener('load', () => {

    TreasureClass.hideTreasure(treasureInstance, map);

    map.addEventListener('click', ({offsetX, offsetY}) => {
        const userClickCoords = {
            x: offsetX,
            y: offsetY
        };

        const length = treasureInstance.getLengthTo(userClickCoords);

        hintInstance.showHint(length);
        gameController.increaseAttempt();

        if (gameController.isTreasureFound(length)) {
            modal.showModal(`
                You win!
                You've done ${gameController.getAttempts()} attempts
            `);

            // хорошо бы это вынести
            chestWrapper.style.left = userClickCoords.x + 'px';
            chestWrapper.style.top = userClickCoords.y + 'px';
            chestWrapper.style.display = 'block';
        }

    });
});



