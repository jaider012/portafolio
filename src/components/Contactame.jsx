import { motion, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import "./contactame.css";

export default function Contactame() {
  // SCROLL //
  const { scrollYProgress } = useViewportScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]);

  const offset = hookedYPostion * -2000 + 1950;
  // END SCROLL //

  return (
    <div className="contactme-container ">
      <div>
        <motion.h3 animate={{ x: -offset - 50 }}>
          Oh, así que <br /> vas en serio.
        </motion.h3>
      </div>
      <div>
        {" "}
        <p>
          Si llegaste hasta acá deberíamos hablar, <br /> estoy aquí cuando
          gustes.
        </p>
      </div>
      <div>
        <div className="contact-buttons">
          <a href="https://wa.me/573023902452?lang=es" target="_blank">
            Whatsapp
          </a>
          <a href="mailto: jaiderandres901@hotmail.com " target="_blank">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
