'use strict'
var btn = document.querySelector(".hamburger")

$('.hamburger').click(function () {
      document.body.addEventListener('touchstart', function (e) { e.preventDefault(); });
      document.body.style.overflow = 'hidden';
      document.querySelector("body > div.navdrawr").style.transform = "translateX(0)";
})

$('.navdrawheader, img').click(function () {
      $('html, body').css('overflowY', 'auto');
      $('.navdrawr').css('transform', 'translateX(-100%)');
});
const Hello = () => {
      let names = ["Средний стаж 7 лет", "Вторая строчка 2", "Третья строчка 3"]
      return <React.Fragment>
            {
                  names.map(name => <li>
                        <div class='undernumslide'>
                              <div class='redstar'>
                                    <div class='redpoint'></div>
                              </div>
                              <div class="descr">
                                    <span class="helptitle">
                                          {name}
                                    </span>
                              </div>
                        </div>
                  </li>)}
      </React.Fragment>
}
ReactDOM.render(<Hello />, document.getElementById('selection-list'))
let names = [{ title: "Подробно изучаем каждый клинический случай", description: "Наша цель найти главную причину заболевания." }, { title: "Составляем план обследования", description: "С применением самых точных методов диагностики." }, { title: "Созываем консилиум Врачей", description: "Для постановки диагноза и оценки состояния пациента." }, { title: "Выдаём подробную карту лечения и смету", description: "Установленной причины заболевания." }, { title: "Находим медицинский центр", description: "С опытом излечения этой болезни – в России или за границей." }, { title: "Отправляем пациента лечиться", description: "В клинику, в которой его уже ждут и где ему действительно помогут." }]
const Lello = ({ names }) => {

      return <React.Fragment>
            {
                  names.map(name => <li>
                        <div class='undernumslide'>
                              <div class='redstar'>
                                    <div class='redpoint'></div>
                              </div>
                              <div class="descr">
                                    <span class="helptitle">
                                          {name.title}
                                    </span>
                                    <span class="helpdescr">{name.description}</span>
                              </div>
                        </div>
                  </li>)}
      </React.Fragment>
}
ReactDOM.render(<Lello names={names} />, document.getElementById('helplist'))
const AboutDoctor = () => {
      const [state, setState] = React.useState({
            doctors: [{
                  position: "Невропатолог",
                  fio: "Алиев Али Шамильевич",
                  opit: "Опыт работы: 10 лет",
                  education: "семантический разбор внешних противодействий создаёт предпосылки для поставленных обществом задач."
            }, {
                  position: "Уролог",
                  fio: "Алиев Али Шамильевич",
                  opit: "Опыт работы: 30 лет",
                  education: "медакадемия"
            }, {
                  position: "Терапевт",
                  fio: "Алиев Гусейн Шамильевич",
                  opit: "Опыт работы: 15 лет",
                  education: "дгу"
            }]
      })
      return <React.Fragment>
            {state.doctors.map(doctor => <div class="swiper-slide">
                  <div class="row">
                        <img src="./img/face.png" alt="" />
                        <div class="doctorinfo">
                              <span class="position">{doctor.position}</span>
                              <span class="fio">{doctor.fio}</span>
                              <span class="opit">{doctor.opit}</span>
                              <span class="education"><span>Образование:</span> {doctor.education}</span>
                        </div>

                  </div>
                  <span class="educationmob"><span>Образование:</span> {doctor.education}</span>
            </div>)}
      </React.Fragment>
}
ReactDOM.render(<AboutDoctor />, document.getElementById('doctorinfo'))
const NKOSlide = () => {
      let nkoWorkers = [{ name: "Гашимов Заур", descr: "Я являюсь волонтером “Врачей Надежды” уже два года, и рад быть полезным обществу и иметь возможность помогать" }, { name: "Кибирова Диана", descr: "Я являюсь волонтером “Врачей Надежды” уже два года, и рад быть полезным обществу и иметь возможность помогать " }, { name: "Османов Тамерлан", descr: "Я являюсь волонтером “Врачей Надежды” уже два года, и рад быть полезным обществу и иметь возможность помогать " },]
      return <React.Fragment>
            {nkoWorkers.map(volunteer => <div class="swiper-slide">
                  <div class="nko-worker">
                        <iframe src="https://www.youtube.com/embed/Dw-RIuz3_X8" frameborder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen width="360px" height="242px"></iframe>
                        <span class="nko-worker-name">{volunteer.name}</span>
                        <span class="nko-worker-description">{volunteer.descr}</span>
                  </div>
            </div>
            )}
      </React.Fragment>
}
ReactDOM.render(<NKOSlide />, document.getElementById('nko-slide'))
// const PatientsSlide = () => {
//       let nkoWorkers = [{ name: "Алиев Али", descr: "Невозможность найти специалистов,пройти обследование и собраться на операцию" }, { name: "Алиев Али", descr: "Невозможность найти специалистов,пройти обследование и собраться на операцию" }, { name: "Алиев Али", descr: "Невозможность найти специалистов,пройти обследование и собраться на операцию" },]
//       return <React.Fragment>
//             {nkoWorkers.map(volunteer => <div class="swiper-slide"><div class="nko-worker">
//                   <iframe src="https://www.youtube.com/embed/Dw-RIuz3_X8" frameborder="0"
//                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                         allowfullscreen width="360px" height="207px"></iframe>
//                   <span class="nko-worker-name">Проблема</span>
//                   <span class="nko-worker-description">{volunteer.descr}</span>
//                   <div class="patient-name">
//                         <img src="https://www.w3schools.com/howto/img_avatar.png" width="32px" height="32px" />
//                         <span>{volunteer.name}</span>
//                   </div>
//             </div></div>)}
//       </React.Fragment>

// }
// ReactDOM.render(<PatientsSlide />, document.getElementById('patient-slide'))
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
const InOurTeam = () => {
      let team = [{ img: "./img/neuro.png", position: "Хирург" }, { img: "./img/logoped.png", position: "Невропатолог" }, { img: "./img/hirurg.png", position: "Логопед" }, { img: "./img/neuro.png", position: "Отоларинголог", }, { img: "./img/logoped.png", position: "Нейрохирург", }, { img: "./img/hirurg.png", position: "Травматолог" }, { img: "./img/neuro.png", position: "Психолог" }, { img: "./img/logoped.png", position: "Уролог" }, { img: "./img/hirurg.png", position: "Рентгенолог" }]
      return <React.Fragment>
            {team.map(doctor => <div class="item">
                  <img
                        src={doctor.img}
                        alt=""
                        width="60px"
                        height="60px"
                  />
                  <span>{doctor.position}</span>
            </div>)}
      </React.Fragment>
}
ReactDOM.render(<InOurTeam />, document.getElementById('container'))
let list = ["Урологи", "Педиатры", "Ортопеды-травматологи", "Гинекологи", "Урологи", "Неврологи", "Отолорингологи", "Инфекционисты", "Ортопеды-травматологи"]
const WeNeedList = ({ names }) => {
      return <React.Fragment>
            {names.map(position => <div class='undernumslide'>
                  <div class='redstar'>
                        <div class='redpoint'></div>
                  </div>
                  <span class="helptitle">
                        {position}
                  </span>

            </div>
            )}
      </React.Fragment>
}
ReactDOM.render(<WeNeedList names={list} />, document.getElementById('we-need-list'))
const NKO = () => {
      let nkoWorkers = [{ name: "Гашимов Азамат", descr: "Я являюсь волонтером “Врачей Надежды” уже два года, и рад быть полезным обществу и иметь возможность помогать", src: "https://www.youtube.com/embed/2CpmlCkVHCQ" }, { name: "Кибирова Диана", descr: "Я являюсь волонтером “Врачей Надежды” уже два года, и рад быть полезным обществу и иметь возможность помогать ", src: "https://www.youtube.com/embed/sTswsrq-hLE" }, { name: "Османов Тамерлан", descr: "Я являюсь волонтером “Врачей Надежды” уже два года, и рад быть полезным обществу и иметь возможность помогать ", src: "https://www.youtube.com/embed/7KDwsCT7_6c" },]
      return <React.Fragment>
            {nkoWorkers.map(volunteer => <div class="nko-worker">
                  <iframe src={volunteer.src} frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen width="360px" height="242px"></iframe>
                  <span class="nko-worker-name">{volunteer.name}</span>
                  <span class="nko-worker-description">{volunteer.descr}</span>
            </div>)}
      </React.Fragment>
}
ReactDOM.render(<NKO />, document.getElementById('nko'))
// const OurPatients = () => {
//       let nkoWorkers = [{ name: "Алиев Али", descr: "Невозможность найти специалистов,пройти обследование и собраться на операцию" }, { name: "Алиев Али", descr: "Невозможность найти специалистов,пройти обследование и собраться на операцию" }, { name: "Алиев Али", descr: "Невозможность найти специалистов,пройти обследование и собраться на операцию" },]
//       return <React.Fragment>
//             {nkoWorkers.map(volunteer => <div class="nko-worker">
//                   <iframe src="https://www.youtube.com/embed/Dw-RIuz3_X8" frameborder="0"
//                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                         allowfullscreen width="360px" height="207px"></iframe>
//                   <span class="nko-worker-name">Проблема</span>
//                   <span class="nko-worker-description">{volunteer.descr}</span>
//                   <div class="patient-name">
//                         <img src="https://www.w3schools.com/howto/img_avatar.png" width="32px" height="32px" />
//                         <span>{volunteer.name}</span>
//                   </div>
//             </div>)}
//       </React.Fragment>
// }
// ReactDOM.render(<OurPatients />, document.getElementById('patients'))
let actions = ["Если вы – врач с Живым сердцем и готовы помогать людям.", "Если у вас достойная репутация и положительные отзывы.", "Если вы можете провести 3 консультации в неделю.", "Если вы пользуетесь смартфоном или планшетом.", "Если у вас есть регулярный доступ в интернет."]
let questions = [{
      q: "Как организован процесс помощи Врача Надежды?", a: ["Мы разработали удобное приложение HopeDoc (проводится тестирование).", <ul><li> До момента запуска приложения – специалист проводит заочную консультацию пациентов с помощью голосовых сообщений в мессенджере WhatsApp (для удобства и скорости ответа)</li><li> 	Если врач и пациент могут встретиться лично – то проводится очная консультация (по-возможности)</li></ul>
      ]
}, {
      q: "Какие функции в мобильном приложении HopeDoc?", a: ["Мобильное приложение HopeDoc поможет десяткам врачей организовывать дистанционные консилиумы с выбором любых специалистов (при минимальных затратах времени). Кроме удобной связи там вы сможете выполнять весь рабочий процесс:", <ol><li>Вести учет медицинских ресурсов.</li><li>Составлять Сметы на медицинскую помощь с учетом всех государственных программ (ОМС, квоты и прочие).</li><li>Составлять маршрутные карты по очередности получения подопечным медицинской помощи.</li><li>Контролировать этапы работы с заявкой.</li><li>Хранить всю историю работы с подопечным.
      </li><li>Хранить всю медицинскую информацию подопечного.</li><li>Получить доступ к базе медицинских центров, оказывающих помощь по ОМС.</li></ol>
      ]
}, { q: "Какая нагрузка ожидает врача при участии в проекте? ", a: ["Участие в проекте никак не отразится на вашей основной деятельности:", <ul><li>При заочном консультировании – врач проводит не более 3 консультаций в неделю.</li><li>При заочном консультировании – врач проводит не более 3 консультаций в неделю.</li><li>При очном приёме – не более 1 консультации в неделю.</li></ul>] }]
ReactDOM.render(<WeNeedList names={actions} />, document.getElementById('become-list'))
ReactDOM.render(<QAs questions={questions} />, document.getElementById('answers'))
