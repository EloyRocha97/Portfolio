import React from "react";
import style from "./skills.module.css";
import html from "./imgLogos/html5.png";
import css from "./imgLogos/css.png";
import js from "./imgLogos/js.png";
import MUI from "./imgLogos/MUI.png";
import node from "./imgLogos/node.png";
import postgre from "./imgLogos/postgre.png";
import react from "./imgLogos/react.png";
import typescript from "./imgLogos/typescript.png";

const Skills = () => {
  return (
    <section className={style.container}>
      <div className={style.skills}>
        <h1 className={style.h1}>SKILLS</h1>
        <div className={style.skillsCont}>
          <div className={style.row}>
            <img src={react} alt="react" className={style.react} />
            <img src={js} alt="js" className={style.js} />
            <img src={node} alt="node" className={style.node} />
            <img src={postgre} alt="postgre" className={style.postgre} />
          </div>
          <div className={style.row}>
            <img
              src={typescript}
              alt="typescript"
              className={style.typescript}
            />
            <img src={html} alt="html" className={style.html} />
            <img src={css} alt="css" className={style.css} />
            <img src={MUI} alt="MUI" className={style.MUI} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
