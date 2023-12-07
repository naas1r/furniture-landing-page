'use strict'

const abtLink = document.querySelector('.link-about-us');
const aboutUs = document.querySelector('.about-us');

abtLink.addEventListener('click', function(e) {
    e.preventDefault();
    const aboutUsCords = aboutUs.getBoundingClientRect();

    // console.log(aboutUsCords);

    // window.scrollTo({
    //     left: aboutUsCords.left,
    //     top: aboutUsCords.top,
    //     behavior: 'smooth'
    // });

    aboutUs.scrollIntoView({ behavior: 'smooth'});
})

const collectionLink = document.querySelector('.link-collection');
const interiorDesign = document.querySelector('.interior-design');

collectionLink.addEventListener('click', function(e) {
    e.preventDefault();
    const interiorCoords = interiorDesign.getBoundingClientRect();

    // window.scrollTo({
    //     left: interiorCoords.left,
    //     top: interiorCoords.top,
    //     behavior: 'smooth'
    // });

    interiorDesign.scrollIntoView({ behavior: 'smooth'});
})