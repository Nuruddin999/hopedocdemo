'use strict'
$('.hamburger').click(function () {
    document.body.addEventListener('touchstart', function (e) { e.preventDefault(); });
    document.body.style.overflow = 'hidden';
    document.querySelector("body > div.navdrawr").style.transform = "translateX(0)";
})
$('.navdrawheader, img').click(function () {
    $('html, body').css('overflowY', 'auto');
    $('.navdrawr').css('transform', 'translateX(-100%)');
});
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
let fioname = document.getElementById("fioform")
let nkoname = document.getElementById("nko-name-form")
let nkophone = document.getElementById("phone-form")
let nkoemail = document.getElementById("email-form")
let anyname = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("eml")
let anyagree = document.getElementById('agree')
let nkowarning = document.getElementById("warning")
let agree = document.getElementById('agr-check')
let button = document.getElementById("send-button")
let warning = document.getElementById("warning")
const getConsultation = (event) => {
    event.preventDefault();
    if (fioname.value === "" || nkophone.value === "" || nkophone.value === "") return
    if (!agree.checked) {
        warning.style.display = "block"
        setTimeout(() => { warning.style.display = "none"; }, 1000)
        return
    }
    let data = {
        name, phone, eml,
        from: "main"
    }
    console.log(data)
    axios.post('sendForm.php', {
        name: fioname.value,
        phone: nkophone.value,
        email: nkoemail.value,
        nkoname: nkoname.value,
        from: "nko"

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}
let form = document.getElementById("myForm");
form.addEventListener('submit', getConsultation);
const sendQuestion = (event) => {
    debugger
    event.preventDefault();
    if (anyname.value === "" || phone.value === "" || email.value === "") return
    if (!anyagree.checked) {
        warning.style.display = "block"
        setTimeout(() => { warning.style.display = "none"; }, 1000)
        return
    }
    let data = {
        name, phone, eml,
        from: "main"
    }
    console.log(data)
    axios.post('sendForm.php', {
        name: anyname.value,
        phone: phone.value,
        email: email.value,
        from: "nko-any-questions-form"

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}
let anyquestionform = document.getElementById("anyquestionsForm");
anyquestionform.addEventListener('submit', sendQuestion);
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
