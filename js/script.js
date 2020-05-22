/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const movieDB = {
        movies: [
            "логан",
            "лига справедливости",
            "ла-ла лэнд",
            "одержимость",
            "скотт Пилигрим против..."
        ]
    };

    /* ------------------------------ get Elements ------------------------------ */

    const adBlocks = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genreTitle = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector(`[type="checkbox"]`);

    /* ------------------------------ function call ----------------------------- */

    delAdBlock(adBlocks);
    makeChanges('драма', 'url("./img/bg.jpg")');
    createMoviesList(movieDB.movies, movieList);

    /* ---------------------------------- function declaration --------------------------------- */

    function delAdBlock(block) {
        block.forEach(item => {
            item.remove();
        });
    }

    function makeChanges(genre, bgUrl) {
        genreTitle.textContent = `${genre}`;
        poster.style.backgroundImage = bgUrl;
    }

    function sortArr(arr) {
        arr.sort();
    }

    function createMoviesList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
            <div class="delete"></div>
        </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMoviesList(films, parent);
            });
        });
    }

    /* --------------------------------- Events --------------------------------- */

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value.toLocaleLowerCase();
        const favorite = checkBox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);

            createMoviesList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    /* ---------------------------------- delim --------------------------------- */


});
