
var summ = 0;
$('.amountAndLogo').click(function () {
      var t = $(this).text();
      summ = t;
});
let buttonPressed = true;
let timeIsChecked = false;
let monthisChecked = true;
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
})
