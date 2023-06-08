import styles from './index.module.scss';
import mapImg from '../assets/treasure-map.png';
import chestImg from '../assets/chest.png';
// import {modal} from './modal';
import TreasureClass from './treasure';

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

const tr = new TreasureClass();


TreasureClass.hideTreasure(tr);

console.log(tr);