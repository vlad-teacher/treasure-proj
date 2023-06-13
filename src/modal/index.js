import styles from './index.module.scss';





export default class Modal {
    constructor () {
        this.anchor = document.createElement('div');
        this.anchor.classList.add(styles.modal);
    }

    showModal (text) {
        this.anchor.textContent = text;

        setTimeout(() => {
            document.body.append(this.anchor);
        }, 700);
    }

    removeModal () {
        this.anchor.remove();
    }
}

