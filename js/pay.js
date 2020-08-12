'use strict'
// const Calculator = () => {
//       return <React.Fragment>
//             <div class="boardRow">
//                   <div class="numberCol">
//                         <span class="numbCol">1</span>
//                         <span class="amountCol">СУММА</span>
//                   </div>
//                   <div class="boardGap"></div>
//                   <div class="numberCol">
//                         <span class="numbCol">2</span>
//                         <span class="amountCol">КОНТАКТЫ</span>
//                   </div>
//                   <div class="boardGap"></div>
//                   <div class="numberCol">
//                         <span class="numbCol">3</span>
//                         <span class="amountCol">ОПЛАТА</span>
//                   </div>
//             </div>
//             <div class="periodblock">
//                   <button id="monthly">ЕЖЕМЕСЯНОЕ</button>
//                   <button id="onetime">РАЗОВОЕ</button>
//             </div>
//             <div class="sumblock">
//                   <div class="sumRow">
//                         <div class="item">
//                               <div class="amountAndLogo"> <span> 100</span>
//                                     <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

//                               </div>
//                         </div>
//                         <div class="item">

//                               <div class="amountAndLogo"> <span> 200</span>
//                                     <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

//                               </div>
//                         </div>
//                         <div class="item">

//                               <div class="amountAndLogo"> <span> 500</span>
//                                     <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

//                               </div>
//                         </div>
//                         <div class="item">

//                               <div class="amountAndLogo"> <span> 1500</span>
//                                     <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

//                               </div>
//                         </div>
//                         <div class="item">

//                               <div class="amountAndLogo"> <span> 2000</span>
//                                     <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

//                               </div>
//                         </div>
//                         <div class="item">

//                               <div class="amountAndLogo"> <span> 10000</span>
//                                     <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

//                               </div>
//                         </div>
//                         <div class="item">
//                               <div class="amountAndLogo"> <span> 150000</span>
//                                     <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

//                               </div>
//                         </div>

//                         <div class="item">
//                               <input type="text" id="anothersumm" placeholder="Другая сумма"
//                                     name="anothersumm" />

//                         </div>
//                   </div>
//             </div>
//             <div class="continuepay"> <button>ПРОДОЛЖИТЬ</button></div>

//       </React.Fragment>
// }
// ReactDOM.render(<Calculator />, document.getElementById('board'))
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
let buttonPressed = true;
let timeIsChecked = false;
let monthisChecked = true;
var summ = 0;
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
