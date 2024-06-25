import React from "react";
import style from "./presentation.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Presentation = () => {
  const logo = "{ER}";
  return (
    <div className={style.presentation}>
      <h1 className={style.logo}>{logo}</h1>
      <div className={style.title}>
        <h1>Eloy Emmanuel Rocha</h1>
        <h4>Fullstack Developer</h4>
        <div className={style.network}>
          <a
            href="https://github.com/EloyRocha97"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              sx={{
                minWidth: "70px",
                minHeight: "70px",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/eloy-rocha-6a92901b3/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              sx={{
                minWidth: "70px",
                minHeight: "70px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
