let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

// scroll sections

window.onscroll = () => {
    
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
           
        navlinks.forEach(links => {
           links.classList.remove('active');
           document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        // active section for animate on scroll
        // sections.classList.add('show-animate');
    }
    //   if want to useanimate that repeat on scroll use this
    //    else {
    //         sections.classList.remove('show-animate');
    //     }
    });

   

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}