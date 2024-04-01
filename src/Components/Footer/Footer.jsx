

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>enlaces rápidos</h3>
          <a href="#home">
            <i className="fas fa-arrow-right"></i> Inicio
          </a>
          <a href="#about">
            <i className="fas fa-arrow-right"></i> Lugares
          </a>
          <a href="#menu">
            <i className="fas fa-arrow-right"></i> Nosotros
          </a>
          <a href="#review">
            <i className="fas fa-arrow-right"></i> Reseñas
          </a>
          
        </div>

        <div className="box">
          <h3>contactenos</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +123-456-7890
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +111-222-3333
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> TuCafe@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> Colombia-Quindio
          </a>
        </div>

        <div className="box">
          <h3>Redes Sociales</h3>
          <a href="#">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>

      <div className="credit">
        Created by <span>ADSO 2560321-2</span>
      </div>
    </section>
  );
}

export default Footer;
