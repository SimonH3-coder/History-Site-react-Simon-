import { parse } from "path";
import style from "./About.module.scss"

interface AboutProps {
    id: number;
    imageUrl: string;
    title: string;
    description?: string;
    eventes: Array<Event>;
    slug?: string;
}

export function About({ id, imageUrl, title, description, eventes, slug }: AboutProps) {
    return (
        <div key={id} className={style.aboutStyle}></div>
        <img src={imageUrl}></img>
        <div>
            <h4>{title}</h4>
            {description && <div>{parse(description)}</div>}
            <p>Event:</p>
            {eventes && eventes.map((eventes: Event) => {
                return <span key= {eventes.id}> {eventes.title}</span>
            </div>
        </div>
            )
        }
