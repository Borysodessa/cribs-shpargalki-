const title = document.querySelector('title');
const link = document.querySelectorAll('a');
console.log(link.getAttribute('href'));
if(title.textContent === 'libraries' && link.getAttribute('href') === 'libraries'){
    link.classList.add('active');
}
console.log(title.textContent)

