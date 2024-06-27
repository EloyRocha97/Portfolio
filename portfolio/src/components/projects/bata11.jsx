import React from "react";
import style from "./projects.module.css";
import bata11 from "./imgProjects/Bata11.jpg";

export default function Bata11() {
  return (
    <section className={style.project2}>
      <div className={style.projectImgDiv}>
        <a
          href="https://batallon11cordoba.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={bata11}
            alt="countdown_timer"
            className={style.projectImg}
          />
        </a>
      </div>
      <div className={style.textAndBtnR}>
        <div className={style.projectTextCont}>
          <h5 className={style.dev}>Frontend</h5>
          <div className={style.titleDiv}>
            <h1 className={style.projectTitle}>Agrupacion Juvenil</h1>
            <h5>(Aun en desarrollo)</h5>
          </div>
          <p className={style.projectText}>
            Este sitio web fue creado para el grupo "Exploradores Argentinos de
            Don Bosco", una organización dedicada a formar buenos cristianos y
            honorables ciudadanos. El proyecto se desarrolló en colaboración con
            Julian Llop, otro miembro del grupo, con el objetivo de mostrar las
            actividades realizadas, contar la historia del grupo y agregar una
            sección de registro para nuevos miembros.
          </p>
        </div>
        <div className={style.projectButtons}>
          <a
            href="https://github.com/EloyRocha97/Batallon11/tree/Rama-Eloy-Front"
            className={style.code}
            target="_blank"
            rel="noreferrer"
          >
            Ver Codigo
          </a>
          <a
            href="https://batallon11cordoba.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className={style.site}
          >
            Ver pagina
          </a>
        </div>
      </div>
    </section>
  );
}
