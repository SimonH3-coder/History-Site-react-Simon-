import billed1 from "../../assets/images/billed1.avif";
import { Title } from "../../components/Title/Title";
import style from "./home.module.scss";

export function Home() {
  return (
    <>
      <div>
        <img className={style.image1} src={billed1} alt="Billed1" />
        <Title text={"ON THIS DAY"} />
        <p>What happend on this day - historical events, deaths and births thoughout time</p>
      </div>
    </>
  );
}
