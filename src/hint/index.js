import styles from './index.module.scss';
import {RANGES} from '../contants';

const AVAILABLE_CLASSNAMES = Object.values(styles);

export default class Hint {
    constructor (anchor) { // div element node
        this.anchor = anchor;
    }

    setClassName (className) {
        this.anchor.classList.forEach((cn) => {
            const isClassAlreadySet = AVAILABLE_CLASSNAMES.includes(cn);

            if (isClassAlreadySet) {
                this.anchor.classList.remove(cn);
            }
            

        })

        this.anchor.classList.add(className);
    }

    showHint (length) {        
        if (length <= RANGES.FIND) {
            this.anchor.textContent = 'TREASURE FOUND';
            this.setClassName(styles.hintFound);
        } else if (length <= RANGES.HOT) {
            this.anchor.textContent = 'HOT';
            this.setClassName(styles.hintHot);
        } else if (length <= RANGES.WARM) {
            this.anchor.textContent = 'WARM';
            this.setClassName(styles.hintWarm);
        } else if (length <= RANGES.COOL) {
            this.anchor.textContent = 'COOL';
            this.setClassName(styles.hintCool);
        } else {
            this.anchor.textContent = 'COLD';
            this.setClassName(styles.hintCold);
        }
    }

}


