const nav_links = document.querySelectorAll('.link')
// handbugger click event
const handbugger = document.querySelector('.handbugger')

let count = 0
handbugger.addEventListener('click', ()=>{

    document.querySelector('.nav_links').classList.toggle('active')
    if (document.querySelector('.nav_links').classList.contains('active')) {
        document.querySelector('.icon').innerText = 'close'
    }else{
         document.querySelector('.icon').innerText = 'menu';
         nav_links.forEach(item => item.lastElementChild.classList.remove('active'));
    }

})


// navlink click event

nav_links.forEach(link => {
    link.addEventListener('click', ()=>{
        nav_links.forEach(item => item.lastElementChild.classList.remove('active'));
        link.lastElementChild.classList.toggle('active')
    })
})
