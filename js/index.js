import {baseLinks} from "./baseLinks.js";

export const linksMarkup = baseLinks.map(baseForLink => {
    return`
        <li class="${baseForLink.class}">
        <a class="${baseForLink.classForLink}" href="${baseForLink.href}">${baseForLink.textContent}</a>
        </li>
`}).join('');

const navigationParagraphLIst = document.querySelector('.nav__paragraph-list');
navigationParagraphLIst.insertAdjacentHTML('beforeend', linksMarkup)
console.log(linksMarkup);