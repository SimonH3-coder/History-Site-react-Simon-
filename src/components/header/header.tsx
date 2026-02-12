import billed1 from "../../assets/images/billed1.avif";
import { Title } from "../Title/Title";
import style from "./header.module.scss";
import { Header } from "../header/header";

interface HeaderInterface {
  textValue: string;
}

export function Header (props: HeaderInterface) {
  return (
    <button
    className={style.headerStyle}

      {props.textValue}
      >
    </button>

    <>
      <div>
        <img className={style.image1} src={billed1} alt="Billed1" />
        <Title text={"ON THIS DAY"} />
        <p>What happend on this day - historical events, deaths and births thoughout time</p>
      </div>

    <ButtonComponent textValue="Detaljer" />
    <ButtonComponent textValue="Forside" />
    <ButtonComponent textValue="Køb nu" />


    </>
  );
}
