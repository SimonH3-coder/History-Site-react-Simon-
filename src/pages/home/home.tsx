import billed1 from '../../assets/images/billed1.png';
import { Title } from '../../components/Title/Title';
import { About } from '../../components/About/ABOUT';
import style from './home.module.scss';
import { Grid } from '../../components/Title/Grid/Grid';

export function Home() {
    <>
    <img className={style.image} src={billed1} alt="Billed1" />
    <Title text={"ON THIS DAY"}/>
    <Grid gtc= "1fr 1fr" gap={32}>
        {data && data.map((item) => {
            return <About key={item.id} id={item.id} imageUrl={item.image} title={item.name} description={item.description} eventes={item.eventes} slug={item.slug}/>
        })}

    </Grid>
    </>
    )
}