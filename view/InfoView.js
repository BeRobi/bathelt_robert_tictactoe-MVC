

class InfoView {
  constructor(szuloElem) {
    // ha rákattintunk a gombra, a p tag-ben írja ki a kapott szöveget
    this.szuloElem = szuloElem;
    this.#htmlosszeAllit();
    this.pElem = $(".info p");
   

  }
  setPelem(ertek) {
    this.pElem.html(ertek + " következik! ");
  }
  #htmlosszeAllit(){
    let txt= ` <div class="info">
    <p>
        Ide:
    </p>`
    this.szuloElem.append(txt)
  }
  }


export default InfoView;
