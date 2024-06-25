import React from "react";
import Bata11 from "./bata11";
import TiendaDeRopa from "./tiendaRopa";
import PetsBridge from "./pets-Bridge";
import TiendaBack from "./tiendaBack";
import style from "./projects.module.css";

const Projects = () => {
  return (
    <div className={style.projects}>
      <h1 className={style.h1}>PROYECTOS</h1>
      <Bata11 />
      <TiendaDeRopa />
      <PetsBridge />
      <TiendaBack />
    </div>
  );
};

export default Projects;
