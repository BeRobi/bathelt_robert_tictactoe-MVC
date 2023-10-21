class TTTModel {
  #lepes;
  #ertek = "";
  //#ertek;

  constructor() {
    this.#lepes = 0;
    this.#ertek = "";
  }

  aktualisJatekos() {
    this.#lepes++;
    if (this.#lepes % 2 == 0) {
      this.#ertek = "X";
    } else {
      this.#ertek = "O";
    }
    return this.#ertek;
  }

  kovetkezoJatekos() {
    let kovjatekos = "";
    if (this.#lepes % 2 == 0) {
      kovjatekos = "O";
    } else {
      kovjatekos = "X";
    }
    return kovjatekos;
  }
}
export default TTTModel;
