'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adBlocks = document.querySelectorAll('.promo__adv > img'),
    genreTitle = document.querySelector('.promo__genre'),
    bgPromo = document.querySelector('.promo__bg'),
    interactiveList = document.querySelectorAll('.promo__interactive-item');


    delAdBlock();
    changeGenre('драма');
    changeBg();


function delAdBlock(){
    adBlocks.forEach(item => {
        item.remove();
    });
}

function changeGenre(genre){
    genreTitle.textContent = `${genre}`;
}

function changeBg(){
    bgPromo.style.cssText = `background: url(../img/bg.jpg) center center/cover no-repeat;`;
}

// list movies output
movieDB.movies.forEach((item, i) => {
    interactiveList[i].textContent = `${i + 1}: ${item}`;
});
