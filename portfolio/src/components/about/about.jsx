import React from "react";
import style from "./about.module.css";
import profile_photo from "../img/yoSOLO-.png";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.imgCont}>
        <img
          src={profile_photo}
          alt="profile_photo"
          className={style.profile}
        />
      </div>

      <div className={style.aboutText}>
        <h1 className={style.h1}>SOBRE MI</h1>
        <p>
          Soy un Desarrollador Web con más de 3 año de experiencia en Fullstack
          Development. Con experiencia en desarrollo frontend y backend, asi
          como trabajando con metodologías Scrum. Me dedico a ofrecer productos
          innovadores y de alta calidad. Actualizandome constantemente en las
          últimas tecnologías, he realizado proyectos personales para fortalecer
          mis habilidades. Estoy emocionado de ofrecer mis servicios
          profesionales a quienes los necesitan.
        </p>
      </div>
    </div>
  );
};

export default About;
