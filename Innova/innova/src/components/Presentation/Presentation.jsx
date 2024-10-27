import "./presentation-style.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Presentation = () => {
  return (
    <>
      <section id="presentation-container">
        <div className="info-container">
          <h2>¡Hola! 👋</h2>
          <p>
            Somos Israel y Cristal, un equipo apasionado de desarrolladores
            especializados en el ámbito del desarrollo web. Combinamos nuestras
            habilidades para crear soluciones digitales innovadoras y adaptadas
            a las necesidades de nuestros clientes, abarcando desde diseño y
            funcionalidad hasta rendimiento y seguridad en cada proyecto.
          </p>
          <div className="social-media-container">
            <a href="#">
              <InstagramIcon sx={{ fontSize: "2rem" }} />
            </a>
            <a href="#">
              <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </a>
            <a href="#">
              <EmailIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>

        <div className="presentation-imgs-container">
          <img
            className="cristal-img"
            src="presentation-pic.png"
            alt="Presentation"
          />
        </div>

        <div className="presentation-mobile-img">
          <img
            className="israel-img"
            src="https://img.freepik.com/fotos-premium/retrato-persona-feliz-ia-generativa_934971-252.jpg"
            alt="Israel"
          />
          <img
            className="cristal-img"
            src="https://images.ecestaticos.com/EJacJ6m-LWZQgh23FX5R2E-Y53A=/69x7:949x667/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F93c%2F69a%2Fecd%2F93c69aecd7958a461bc758d7b2930189.jpg"
            alt="Cristal"
          />
        </div>

        {/* Wave */}
      </section>
      <img className="light-wave" src="light-wave.svg" alt="wave" />
    </>
  );
};
