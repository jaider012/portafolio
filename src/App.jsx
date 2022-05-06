import "./App.css";
import AboutMe from "./components/AboutMe";
import Contactame from "./components/Contactame";
import Moreproject from "./components/Moreproject";
import ProjectPreview from "./components/ProjectPreview";

function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <AboutMe />
        <img src="/icons/divider1.svg" alt="divider" />
        <div className="section-projects" id="projects">
          <ProjectPreview
            name={"REDESIGN"}
            description={"Fakegoogle Google Search & Results"}
            category={"Front-End"}
            icons={["react", "redux", "tailwind", "node"]}
            link={"https://fake-google-delta.vercel.app/search"}
            imgs={["/images/FAKEGOOGLE.gif"]}
          />
          <ProjectPreview
            name={"redesign"}
            description={"Videogame app"}
            category={"Full stack"}
            icons={["react", "redux", "node", "db", "postgress"]}
            link={""}
            imgs={["/images/inicio.png", "/images/home.png"]}
          />
          <ProjectPreview
            name={"Make"}
            description={"Kanban UI"}
            category={"Front-end"}
            icons={["react", "tailwind", "native"]}
            link={"https://to-learn-draggable.vercel.app/"}
            imgs={["images/kanban.gif"]}
          />
        </div>
        <div className="">
          <a
            className="button-moreP1"
            href="https://github.com/jaider012"
            target="_blank"
          >
            Mas proyectos 👋
          </a>
        </div>
      </div>
      <div className="softwares-container">
        {" "}
        <div className="divider">
          <img src="/icons/wave.svg" alt="divider" />
        </div>
        <div className="softwares">
          <div className="bg-anchor">
            <div className="bg-gray"></div>
          </div>
          <div className="software__title">Tecnologias que uso</div>
          <div className="softwares__icons">
            <div className="software__icon">
              <img src="/icons/native.svg" alt="react" />
              <p>react</p>
            </div>
            <div className="software__icon">
              <img src="/icons/redux.svg" alt="react" />
              <p>redux</p>
            </div>
            <div className="software__icon">
              <img src="/icons/node.svg" alt="react" />
              <p>node js</p>
            </div>
            <div className="software__icon">
              <img src="/icons/mongo.svg" alt="react" />
              <p>mongoDB</p>
            </div>
            <div className="software__icon">
              <img src="/icons/firebase.svg" alt="react" />
              <p>firebase</p>
            </div>
            <div className="software__icon">
              <img src="/icons/postgress.svg" alt="react" />
              <p>Postgresql</p>
            </div>
            <div className="software__icon">
              <img src="/icons/tailwind.svg" alt="react" />
              <p>tailwindcss</p>
            </div>
          </div>
        </div>
        <div className="divider">
          <img src="/icons/wave2.svg" alt="divider" />
        </div>
      </div>
      <div className="containercard">
        <Moreproject />
      </div>

      <Contactame />
      <div id="footer"></div>
    </div>
  );
}

export default App;
