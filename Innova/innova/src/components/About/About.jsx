import "./about-style.css";

export const About = () => {
  return (
    <div id="about-container">
      <div className="about-info-container">
        <div className="container">
          <div>
            <h2>
              Sobre <span>nosotros</span>
            </h2>
            <p>
              Somos un equipo conformado por dos desarrolladores comprometidos y
              apasionados por la innovación en el desarrollo web. Nuestro
              enfoque se centra en la creación de soluciones personalizadas que
              se adapten de manera precisa a las necesidades y objetivos
              específicos de nuestros clientes. Nos dedicamos a explorar y
              aplicar las tecnologías más modernas, así como las mejores
              prácticas de la industria, para asegurar que cada proyecto cumpla
              con los más altos estándares de calidad y eficiencia. 
            </p>

            <br /> 
            
            <p>
              Nuestra experiencia nos permite transformar ideas en realidades digitales
              de forma efectiva y creativa. A través de una colaboración cercana
              con nuestros clientes, trabajamos para entender a fondo sus
              expectativas y objetivos, lo que nos permite diseñar y desarrollar
              productos que no solo cumplen con sus requerimientos, sino que
              también superan sus expectativas. Nuestro compromiso es ofrecer
              resultados que impulsen el crecimiento y éxito de nuestros
              clientes, creando experiencias digitales excepcionales que
              destacan por su funcionalidad, rendimiento y atractivo visual.
            </p>
            <button>¡Conócenos!</button>
          </div>

          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/desarrollo-web-4880231-4071988.png"
            alt="pc"
          />
        </div>
      </div>
      <img src="dark-wave.svg" alt="wave" />
    </div>
  );
};
