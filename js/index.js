var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      watchOverflow: true,
      slidesPerView: "auto",

      // If we need pagination
      pagination: {
            el: '.swiper-pagination',
      }
})
var btn = document.querySelector(".hamburger")
btn.addEventListener('click', () => {

      $('html, body').css('overflowY', 'hidden');
      document.querySelector("body > div.navdrawr").style.transform = "translateX(0)";
})

$('.navdrawheader, img').click(function () {
      $('html, body').css('overflowY', 'auto');
      $('.navdrawr').css('transform', 'translateX(-100%)');
});
function scrollTo(name) {
      $('html, body').css('overflowY', 'auto');
      $('.navdrawr').css('transform', 'translateX(-100%)');
      document.querySelector("body").scrollTo(0, document.querySelector(name).offsetTop - 100)
}

$("#helpNavBtn").click(function (event) {
      $('html, body').css('overflowY', 'auto');
      $('.navdrawr').css('transform', 'translateX(-100%)');
      document.querySelector("#calculator").scrollIntoView({ block: "center" })
})
$("#whoweBtn").click(function (event) {
      scrollTo(".underNavBlock")
})
$("#howhelpBtn").click(function (event) {
      scrollTo("#howhelpsec")
})
$("#contactsBtn").click(function (event) {
      scrollTo(".anyQstnsBlock")
})
$("#resultsBtn").click(function (event) {
      scrollTo(".numbs")
})
$("#charityBtn").click(function (event) {

      scrollTo(".whyHelpBlock")
})


var summ = 0;
$('.item').click(function () {
      $('.item').css({ "background": "white" });
      $('.item').find("span").css({ color: "#0b1635" })
      var t = $(this).text();
      summ = t;
      console.log(summ)
      $(this).css({ "background": "#367bf5" });
      $(this).find("span").css({ color: "white" })
});
$(".helpBtn").click(function () {
      if (window.innerWidth <= 480) {
            $('html, body').animate({ scrollTop: $(`.helpTohelp`).offset().top - 100 }, 500)
      } else {
            $('html, body').animate({ scrollTop: $(`.rowToWork`).offset().top - 100 }, 500)
      }
})
let buttonPressed = true;
let timeIsChecked = false;
let monthisChecked = true;
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
})
let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("eml")
let agree = document.getElementById('agree')
let button = document.getElementById("send-button")
let warning = document.getElementById("warning")
const getConsultation = (event) => {
      event.preventDefault();
      if (name.value === "" || phone.value === "" || email.value === "") return
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
            name: name.value,
            phone: phone.value,
            email: email.value,
            from: "main"

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