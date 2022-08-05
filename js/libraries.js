const baseForLinks = [
    {class: 'paragraph', href: 'libraries/libraries.html', textContent: 'libraries',},
    {class: 'paragraph', href: 'libraries/libraries.html', textContent: 'libraries',}
];



export const linksMarkup = baseForLinks.map(baseForLink => {
    return`
        <li class="${baseForLink.class}"><a href="${baseForLink.href}" >${baseForLink.textContent}</a><li>
`
}).join('');



