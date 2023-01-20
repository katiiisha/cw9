// находим переменные в html документе
const body = document.createElement('body');
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const img = document.querySelector('img');
const div = document.querySelector('.block');

//функция которая будет являться фетч(будет ей обращаться к серверу)
// 1 шаг - общанение к серверу по ссылке 
// 2 шаг - обратка ответа
// 3 шаг - поиск картинки/данные 
// 4 шаг - обратывает запрос 
// 5 шаг - добавление картинки в htmml
 
const getPok = function (name) {
    // в полученной ссылке от сайта есть дитто, то мы удалем его, ставим косые стрелочки и вставляем в конец ссылки переменную для того чтобы потом к ней общаться 
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // так как мы общаемся к серверу, то мы ему говорим как только ты получишь дату, сразу конвертируй его в формат бд(так как с сервера поступает промис)
        .then((data) => data.json())
        // вставляем кэтч, чтобы код не лег
        .then(data => { 
            // переменная для 
            const newImg = document.createElement('img')
            //нам чтобы в html в img src встала ссылка с полученных данных
            newImg.src = data.sprites.front_default;
            // к диву добавляем новую картинку
            div.append(newImg)
            
        })
        .catch(() => {
            console.log('error');
            })
}
//этот метод возвращает два события 1- клик, кейап, кейпдаун, 2 функция 
btn.addEventListener("click", () => { 
    // переменная хранит данные введенные в инпут
    const name = inp.value; 
    // name хранит в себе данные, и мы с полученными данными общаемся к функции
    getPok(name)

})
// getPok("charmander")