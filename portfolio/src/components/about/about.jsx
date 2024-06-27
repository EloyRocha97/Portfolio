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
          Soy un desarrollador web con más de 3 años de experiencia en
          desarrollo Fullstack. Tengo experiencia en desarrollo frontend y
          backend, así como en metodologías Scrum. Me dedico a ofrecer productos
          innovadores y de alta calidad. Actualizándome constantemente en las
          últimas tecnologías, he realizado proyectos personales para fortalecer
          mis habilidades. Estoy emocionado de ofrecer mis servicios
          profesionales a quienes los necesiten.
        </p>
      </div>
    </div>
  );
};

export default About;
