import React from "react";
import style from "./projects.module.css";
import Tienda from "./imgProjects/SoloBack.png";

export default function TiendaBack() {
  return (
    <section className={style.project2}>
      <div className={style.projectImgDiv}>
        <a
          //   href="https://batallon11cordoba.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Tienda}
            alt="countdown_timer"
            className={style.projectImg}
          />
        </a>
      </div>
      <div className={style.textAndBtnR}>
        <div className={style.projectTextCont}>
          <h5 className={style.dev}>Back-End</h5>
          <div className={style.titleDiv}>
            <h1 className={style.projectTitle}>Proyecto de Back-End</h1>
          </div>
          <p className={style.projectText}>
            Para poner en practica algunos conocimientos, realice este proyecto
            back-end en el cual se puede solicitar turnos de un calendario y
            realizar compras de productos seleccionados. El principal objetivo
            de este proyecto es llevar a cabo diversos filtros desde el back,
            debido a que hasta la fecha los realizaba desde la parte del
            frontend. Este enfoque proporciona una mayor flexibilidad y control
            sobre la manipulación de datos, mejorando la eficiencia y la
            seguridad de la aplicación. Tambien cuenta con un login y una
            pasarela de pago.
          </p>
        </div>
        <div className={style.projectButtons}>
          <a
            href="https://github.com/EloyRocha97/Tienda"
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
