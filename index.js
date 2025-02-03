import { model } from './model.js';
import { templates } from './templates.js';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach(block => {
    const toHTML = templates[block.type];
    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block));
    }
});