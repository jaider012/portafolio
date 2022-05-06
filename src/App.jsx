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
            description={"Fakegoogle a copy of google"}
            category={"Front-End"}
            icons={["react", "redux", "tailwind", "node"]}
            link={"https://fake-google-delta.vercel.app/search"}
            imgs={["/images/FAKEGOOGLE.gif"]}
          />
          <ProjectPreview
            name={"redesign"}
            description={"Google Search & Results page with Google Cloud"}
            category={"Front-end"}
            icons={["react", "redux", "node", "db", "postgress"]}
            link={"https://killer-7cff7.web.app/"}
            imgs={["/images/inicio.png", "/images/home.png"]}
          />
        </div>
        <div className="">
          <a className="button-moreP1" href="https://github.com/jaider012">
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
              <img src="/icons/figma.svg" alt="react" />
              <p>figma</p>
            </div>
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
              <img src="/icons/graphql.svg" alt="react" />
              <p>graphql</p>
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
