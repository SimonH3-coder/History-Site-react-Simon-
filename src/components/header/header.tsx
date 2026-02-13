import billed1 from "../../assets/images/billed1.avif";

import style from "./header.module.scss";

export function Header() {
  return (
    <>
      <div>
        <img className={style.image1} src={billed1} alt="Billed1" />
      </div>
    </>
  );
}
