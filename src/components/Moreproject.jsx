import "./moreproject.css";
import Projects from "./Projects";
import { motion } from "framer-motion";

import perfile from "../icons/perfile.jpeg";

export default function Moreproject() {
  return (
    <div className="cards-container">
      <div className="cards width-md">
        <div className="cards-header">
          <div className="cards-header__blob">
            <div className="blob-1 ">
              
            </div>
          </div>
          <div className="cards-header__info">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                default: { duration: 0.6 },
              }}
            >
              Saber de otros temas
              <br /> ayuda, ¿No es así?
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                default: { duration: 0.6 },
                delay: 0.1,
              }}
            >
              <p>
                He tenido la oportunidad de trabajar en proyectos muy variados,
                desde motion graphics hasta campañas de retail marketing.
              </p>
              <p>
                Ádemas tengo una gran pásion por el desarrollo de software y la
                web3, NFT, cryptos, Smart Contracts.
              </p>
              <a href="#footer">¿Cuando empezamos?</a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* SWIPER */}
      <motion.div className="slide-wrapper width-full">
        <div className="slide" data-id="1">
          <Projects
            icon={"/icons/display.svg"}
            title={"Front End"}
            description={
              "Desde un package.json vacío hasta una página con cientos de funcionalidades, lo puedo hacer."
            }
            tools={["figma", "react", "javascript", "sass", "webpack"]}
          />
        </div>
        <div className="slide" data-id="2">
          <Projects
            icon={"/icons/db.svg"}
            title={"Back End"}
            description={
              "Puedo diseñar, modificar y mantener los sistemas encargados de que tus clientes esten contentos."
            }
            tools={["mongodb", "firebase", "express", "api rest"]}
          />
        </div>
        <div className="slide" data-id="3">
          <Projects
            icon={"/icons/web3.svg"}
            title={"Crypto - Web 3"}
            description={
              "Interactuar con la red de ethereum, crear smart contracts, aplicaciones descentralizadas, etc."
            }
            tools={["moralis", "dapp", "ethereum", "solidity"]}
          />
        </div>
      </motion.div>
    </div>
  );
}
