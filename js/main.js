
let $breadCrumbs = document.querySelector('.ba-dreadcrumbs');
$breadCrumbs.appendChild(($breadCrumbs.lastElementChild).cloneNode(true));
($breadCrumbs.lastElementChild).querySelector('.ba-breadcrumbs__link').innerHTML = 'company';


let $benefits = document.querySelectorAll('.ba-benefit__title');
let i = 0;
while(i<3) {
    $benefits[i].style.color = 'rgb(255,0,0)';
    i++;
}

let $img = document.querySelectorAll('.ba-team-member__img');
for(let i = 0; i<$img.length; i++) {
    $img[i].src = 'img/cat.jpg';
    $img[i].style.objectFit = 'cover';
}
