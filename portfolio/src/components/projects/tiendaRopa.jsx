import React from "react";
import style from "./projects.module.css";
import TiendaRopa from "./imgProjects/E-comerce.png";

export default function TiendaDeRopa() {
  return (
    <section className={style.project2}>
      <div className={style.projectImgDiv}>
        <a
          //   href="https://batallon11cordoba.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={TiendaRopa}
            alt="countdown_timer"
            className={style.projectImg}
          />
        </a>
      </div>
      <div className={style.textAndBtnR}>
        <div className={style.projectTextCont}>
          <h5 className={style.dev}>Frontend / Back-End</h5>
          <div className={style.titleDiv}>
            <h1 className={style.projectTitle}>E-Comerce</h1>
          </div>
          <p className={style.projectText}>
            El proyecto se desarrolló utilizando Express, React, Redux y Node.
            Se trata de un E-comerce de ropa basico. En el cual se puede logear
            con una cuenta, a traves de google o por gmail. Cuenta con una con
            un apartado inicial sobre la pagina, una seccion de tienda y otra
            para el contacto a la misma. La seccion de tienda cuenta con una
            barra de busqueda. Un paginado. Filtros segun el genero, los
            diferentes tipos de ropa y sus diferentes talles.
          </p>
        </div>
        <div className={style.projectButtons}>
          <a
            href="https://github.com/EloyRocha97/E-comerce/tree/master"
            className={style.code}
            target="_blank"
            rel="noreferrer"
          >
            Ver Codigo
          </a>
          {/* <a
            href="https://batallon11cordoba.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className={style.site}
          >
            Ver pagina
          </a> */}
        </div>
      </div>
    </section>
  );
}
