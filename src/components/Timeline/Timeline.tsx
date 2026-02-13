import style from "./Timeline.module.css";

export function Timeline() {
  return (
    <div className={style.timeline}>
      <div className={style.containerleft}>
        <div className={style.content}>
          <h2>1929</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi doloribus iste id voluptatibus ducimus nobis ipsa excepturi eaque quibusdam, at atque iure deserunt dolorum libero, ut quod sed nesciunt?</p>
        </div>
      </div>
      <div className={style.containerright}>
        <div className={style.content}>
          <h2>2010</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ab minus unde aspernatur perferendis alias tempore non nulla. Voluptatum blanditiis corrupti nulla officiis suscipit ab voluptates, quia expedita quasi odit.</p>
        </div>
      </div>
    </div>
  );
}
