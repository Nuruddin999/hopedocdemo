
const HelpBoard = () => {
      return <React.Fragment>
            <div class="boardRow">
                  <div class="numberCol">
                        <span class="numbCol">1</span>
                        <span class="amountCol">СУММА</span>
                  </div>
                  <div class="boardGap"></div>
                  <div class="numberCol">
                        <span class="numbCol">2</span>
                        <span class="amountCol">КОНТАКТЫ</span>
                  </div>
                  <div class="boardGap"></div>
                  <div class="numberCol">
                        <span class="numbCol">3</span>
                        <span class="amountCol">ОПЛАТА</span>
                  </div>
            </div>
            <div class="periodblock">
                  <button>ЕЖЕМЕСЯНОЕ</button>
                  <button>РАЗОВОЕ</button>
            </div>
            <div class="sumblock">
                  <div class="sumRow">
                        <div class="item">

                              <div class="amountAndLogo"> <span> 100</span>
                                    <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

                              </div>
                        </div>
                        <div class="item">

                              <div class="amountAndLogo"> <span> 200</span>
                                    <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

                              </div>
                        </div>
                        <div class="item">

                              <div class="amountAndLogo"> <span> 500</span>
                                    <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

                              </div>
                        </div>
                        <div class="item">

                              <div class="amountAndLogo"> <span> 1500</span>
                                    <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

                              </div>
                        </div>
                        <div class="item">

                              <div class="amountAndLogo"> <span> 2000</span>
                                    <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

                              </div>
                        </div>
                        <div class="item">

                              <div class="amountAndLogo"> <span> 10000</span>
                                    <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

                              </div>
                        </div>
                        <div class="item">

                              <div class="amountAndLogo"> <span> 150000</span>
                                    <img src="./img/RubleIcon.png" width="14px" heigth="21px" />

                              </div>
                        </div>

                        <div class="item">
                              <input type="text" id="anothersumm" placeholder="Другая сумма"
                                    name="anothersumm" />

                        </div>
                  </div>
            </div>
            <div class="continuepay"> <button>ПРОДОЛЖИТЬ</button></div>
      </React.Fragment>
}