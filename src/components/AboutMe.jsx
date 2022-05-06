import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import consolee from "../icons/console.svg";
import linkedin from "../icons/linkedin.svg";

import perfile from "../icons/perfile.jpeg";
import "./Aboutme.css";

const About = () => {
  const { scrollYProgress } = useViewportScroll();

  const [hookedYPostion, setHookedYPosition] = useState(0);
  const offset = hookedYPostion * -2000;

  useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]);

  return (
    <section className="hero">
      {/* === NAV === */}
      <section className="nav nomobile">
        <motion.div
          className="nav__links width-md"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "inertia",
            default: { duration: 1 },
            delay: 0.3,
          }}
        >
          <a
            className="nav-item"
            href="https://github.com/jaider012"
            target="_blank"
          >
            <img src={consolee} alt="console" />
          </a>

          <a
            className="nav-item"
            href="https://www.linkedin.com/in/jaider-andres-panqueva12/"
            target="_blank"
          >
            <img src={linkedin} alt="console" />
          </a>
          <a
            className="nav-item"
            href="https://github.com/jaider012  "
            target="_blank"
          >
            <p className="text-sm">BLOG</p>
          </a>
          <a className="nav-item" href="#">
            <p className="text-sm">es</p>
          </a>
        </motion.div>
      </section>
      <motion.div
        className="hero__name width-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", default: { duration: 1.2 } }}
      >
        <h2>Jaider Panqueva.</h2>
      </motion.div>

      <motion.div
        className="hero__title container-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          default: { duration: 0.7 },
          delay: 0.9,
        }}
      >
        <motion.div className="width-full" animate={{ x: offset }}>
          {/* FULL STACK */}
          <p className="hero-fullstack-title">
            full stack <span> dev</span>
          </p>
        </motion.div>
      </motion.div>
      <div className="hero__mobile mobile">
        <motion.div
          className="avatar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            default: { duration: 0.7 },
            delay: 1.1,
          }}
        >
          <div className="blob-1">
            {" "}
            <img src={perfile} alt="blob" className="img1" />{" "}
          </div>
        </motion.div>

        <motion.div
          className="hero__mobile-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            default: { duration: 1.2 },
            delay: 0.1,
          }}
        >
          <div className="mobile-buttons__left">
            <a
              className="nav-item"
              href="https://github.com/jaider012"
              target="_blank"
            >
              <img src={consolee} alt="console" />
            </a>
            <a
              className="nav-item"
              href="https://www.linkedin.com/in/jaider-andres-panqueva12/"
              target="_blank"
            >
              <img src={linkedin} alt="console" />
            </a>
          </div>
          <div className="mobile-buttons__right">
            <a href="#footer" className="mobile-buttons__contactme">
              contactame
            </a>
          </div>
        </motion.div>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "inertia",
          default: { duration: 0.8 },
          delay: 0.2,
        }}
        className="hero__description container-sm width-md"
      >
        <div className="hero__description-left">
          <ul className="hero__list">
            <p className="text-sm aboutme">Sobre mí</p>
            <li>Soy una persona creativa y autodidacta.</li>

            <li>
              Tengo la capacidad de realizar proyectos web 
              <br/>teniendo siempre en
              mente que sean escalables y moduralizables.
            </li>

            <li>
              {" "}
              Mi expericia en :
              <a
                href="https://www.linkedin.com/in/jaider-andres-panqueva12/"
                target="_blank"
              >
                Linkedin
              </a>
              ,{" "}
              <a href="https://github.com/jaider012" target="_blank">
                Github.{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="hero__description-right nomobile">
          <div className="blob-1 ">
            <img src={perfile} alt="blob" className="img1" />{" "}
          </div>
          <div className="blob-2"></div>
        </div>
      </motion.div>
      {/* Buttons */}
      <motion.div
        className="hero__buttons width-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          default: { duration: 0.6 },
          delay: 0.2,
        }}
      >
        <div className="hero__buttons-container">
          <a className="button-green" href="#projects">
            ¿Tienes algo de tiempo? Vamos a verlo! 👋
          </a>
        </div>
        <a className="nomobile button-purple" href="#footer">
          Contactame
        </a>
      </motion.div>
    </section>
  );
};

export default About;
