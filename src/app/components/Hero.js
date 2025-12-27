"use client";

export default function Hero() {
  const handleDownloadClick = (e) => {
    e.preventDefault();
    // Link al CV PDF quando sarà pronto
    alert("Inserire link al CV PDF");
  };

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">Ciao, sono</div>
          <h1>
            RAUNIG
            <br />
            <span className="gold">DOBRIKA</span>
          </h1>
          <p className="hero-subtitle">
            Preparatore Auto e Car Detailer specializzato in lucidatura,
            ripristino carrozzeria e trattamenti estetici professionali. Cerco
            opportunità in officine e concessionarie.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-red">
              <i className="fas fa-envelope"></i> CONTATTAMI
            </a>
            <a href="#" className="btn" onClick={handleDownloadClick}>
              <i className="fas fa-download"></i> SCARICA CV
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>ANNI ESPERIENZA</p>
            </div>
            <div className="stat">
              <h3>26</h3>
              <p>ANNI</p>
            </div>
            <div className="stat">
              <h3>
                <i className="fas fa-map-marker-alt"></i>
              </h3>
              <p>LATINA, LT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
