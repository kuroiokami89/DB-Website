"use client";

export default function Contacts() {
  return (
    <div className="blocco" id="contact">
      <div className="section-header">
        <h2>
          CONTATTI <span className="gold">&</span> INFO
        </h2>
        {/* <p className="section-subtitle">
          Disponibile per collaborazioni e impieghi nel settore del car
          detailing e della carrozzeria
        </p> */}
      </div>
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-label">TELEFONO</div>
          <div className="contact-value">
            <a href="tel:+39">+39 3711334614</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-label">EMAIL</div>
          <div className="contact-value">
            <a href="mailto:">[inserisci email]</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="contact-label">LOCALITÀ</div>
          <div className="contact-value">Castelfranco Veneto, TV</div>
        </div>
      </div>
    </div>
  );
}
