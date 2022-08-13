const title = document.querySelector('title');
const link = document.querySelectorAll('a')

link.forEach(linkEl => {
    if(linkEl.getAttribute('href') === '../libraries/libraries.html'){
        linkEl.classList.add('active');
        console.log(linkEl.getAttribute('href'))
    }}
)



