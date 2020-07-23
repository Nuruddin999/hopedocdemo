'use strict'
var summ = 0;
$('.amountAndLogo').click(function () {
    var t = $(this).text();
    summ = t;
});
let buttonPressed = true;
let timeIsChecked = false;
let monthisChecked = true;
console.log(`month  ` + monthisChecked)
console.log(`once  ` + timeIsChecked)
var summ = 0;
$('.amountAndLogo').click(function () {
    var t = $(this).text();
    summ = t;
    console.log(summ)
});
$('#monthly').click(function name(params) {
    if (monthisChecked) {
        return
    }
    monthisChecked = true;
    if (monthisChecked) {
        $('#monthly').css({
            background: "#367bf5",
            color: "white"
        })
        $('#onetime').css({
            background: "white",
            color: "#367bf5"
        })

    } else {
        $('#monthly').css({
            background: "white",
            color: "#367bf5"
        })
        $('#onetime').css({
            background: "#367bf5",
            color: "white"
        })
    }

    timeIsChecked = false
})
$('#onetime').click(function name(params) {
    if (timeIsChecked) {
        return
    }
    timeIsChecked = true
    if (timeIsChecked) {
        $('#onetime').css({
            background: "#367bf5",
            color: "white"
        })
        $('#monthly').css({
            background: "white",
            color: "#367bf5"
        })
    } else {
        $('#onetime').css({
            background: "red",
            color: "white"
        })
        $('#monthly').css({
            background: "#367bf5",
            color: "white"
        })
    }
    monthisChecked = false
    console.log(`month  ` + monthisChecked)
    console.log(`once  ` + timeIsChecked)
})
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    watchOverflow: true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
let ansq = "После обсуждения всех деталей будущего сотрудничества – заключаем официальный договор с Некоммерческой Организацией" +
    "Затем вводим куратора от НКО в нюансы работы, предоставляем рабочее место (онлайн) и обучаем его работе в нашем приложении Diagnost" +
    `Куратор всегда имеет доступ к онлайн платформе: там он в реальном времени получает все данные по пациентам и общается с командой ВН`
var foo = ["*После обсуждения всех деталей будущего сотрудничества – заключаем официальный договор с Некоммерческой Организацией", <br />, "*Затем вводим куратора от НКО в нюансы работы, предоставляем рабочее место (онлайн) и обучаем его работе в нашем приложении Diagnost", <br />, `*Куратор всегда имеет доступ к онлайн платформе: там он в реальном времени получает все данные по пациентам и общается с командой ВН`]
let questions = [{
    q: "Как организовано взаимодействие НКО и Врачей Надежды?", a: foo
}, {
    q: "Почему НКО доверяют Врачам Надежды?", a: ["*Все специалисты ВН – это действующие доктора доказательной медицины, работающие в настоящее время в системе здравоохранения РФ", <br />,
        "*Перед принятием в команду – мы тщательно проверяем репутацию каждого врача, а также все дипломы и сертификаты соответствия.", <br />, "*Мы не только сами работаем безвозмездно, но и стараемся находить БЕСПЛАТНЫЕ решения медицинских вопросов посредством ОМС и Квот", <br />, "*Мы берём на себя ответственность и избавляем НКО от поиска клиник для качественной диагностики и лечения для их пациентов.", <br />,
        "*Работая с 2017 года – мы помогли уже более чем 2700 пациентов и не получили ни одного негативного отзыва", <br />, "*Врачи Надежды обладают высокими моральными и этическими принципами.", <br />, "*Наша основная задача – найти причину болезни и лучшее лечение"
    ]
}]
ReactDOM.render(<QAs questions={questions} />, document.getElementById('answers'))
ReactDOM.render(helpboard, document.getElementById('board'))