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

const adBlocks = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genreTitle = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');


delAdBlock();
changeGenre('драма');
changeBg();


function delAdBlock() {
    adBlocks.forEach(item => {
        item.remove();
    });
}

function changeGenre(genre) {
    genreTitle.textContent = `${genre}`;
}

function changeBg() {
    poster.style.backgroundImage = `url("./img/bg.jpg")`;
}

// list movies output
movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}: ${film}
        <div class="delete"></div>
    </li>
    `;
});
