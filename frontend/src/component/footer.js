import React from "react";
import style from "../style/footer.module.css";
import { FaRegHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.container}>
      <p>
        2024 © Designed by <FaRegHeart className={style.heart} />{" "}
        Gaurav Shukla
      </p>
    </div>
  );
}

export default Footer;
