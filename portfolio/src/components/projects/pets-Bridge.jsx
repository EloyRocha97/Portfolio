import React from "react";
import style from "./projects.module.css";
import Pets from "./imgProjects/Pets.png";

export default function PetsBridge() {
  return (
    <section className={style.project2}>
      <div className={style.projectImgDiv}>
        <a
          //   href="https://batallon11cordoba.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Pets} alt="countdown_timer" className={style.projectImg} />
        </a>
      </div>
      <div className={style.textAndBtnR}>
        <div className={style.projectTextCont}>
          <h5 className={style.dev}>Frontend / Back-End</h5>
          <div className={style.titleDiv}>
            <h1 className={style.projectTitle}>Pets-Bridge</h1>
          </div>
          <p className={style.projectText}>
            Para llevar adelante este proyecto, se utilizo Next.js en el front y
            Nest.js en el back, con el objetivo de crear una plataforma donde
            diferentes asociaciones y organizaciones dedicadas al rescate y
            cuidado de animales puedan publicar información sobre las mascotas
            que tienen disponibles para apción. El proyecto contiene una
            pasarela de pago(strapi), autenticacion de terceros (nextAuth),
            filtrados, dashboard de admin, subida de archivos a cloudinary!
          </p>
        </div>
        <div className={style.projectButtons}>
          <a
            href="https://github.com/griimreaper/PetsBridge_Server"
            className={style.code}
            target="_blank"
            rel="noreferrer"
          >
            Ver Codigo
          </a>
          <a
            href="https://www.youtube.com/watch?v=YHF4QeROyWQ&ab_channel=estrellaanai"
            target="_blank"
            rel="noreferrer"
            className={style.site}
          >
            Presentacion
          </a>
        </div>
      </div>
    </section>
  );
}
