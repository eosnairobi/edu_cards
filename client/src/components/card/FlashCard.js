import React from "react";

import "./FlashCard.css";
import EosNairobi from "./../../images/logo_EOS-Nairobi.png";
import Kotani from "./../../images/logo_Kotani.png";

const FlashCard = ({ nextStep }) => {
  return (
    <div class="card-body my-card">
      <h4 className="my-card__number">1</h4>
      <div className="my-card__section">
        <h5 class="my-card__title">Blockchain</h5>
        <p class="my-card__desc">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="my-card__footer">
        <img src={Kotani} className="my-card__footer-logo" alt="kotani logo" />
        <img
          src={EosNairobi}
          className="my-card__footer-logo"
          alt="eosnairobi logo"
        />
      </div>
    </div>
  );
};
export default FlashCard;
