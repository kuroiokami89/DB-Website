"use client";

export default function Experience() {
  return (
    <div className="blocco section-bordered" id="experience">
      <div className="section-header">
        <h2>
          ESPERIENZA <span className="gold">PROFESSIONALE</span>
        </h2>
      </div>

      <div className="experience-grid">
        <div className="experience-item">
          <div className="experience-icon">
            <i className="fa-solid fa-car-side"></i>
          </div>
          <div className="experience-content">
            <h3>PREPARATORE AUTO / DETAILER</h3>
            <p className="experience-description">
              Attività di lavaggio approfondito interno/esterno, lucidatura
              carrozzerie, trattamento tappezzerie, ripristino plastiche, cerchi
              e dettagli. Responsabile della finitura estetica prima della
              consegna al cliente e del mantenimento degli standard di qualità
              del servizio.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-icon">
            <i className="fas fa-wrench"></i>
          </div>
          <div className="experience-content">
            <h3>ADDETTO ALLA CARROZZERIA</h3>
            <p className="experience-description">
              Esperienza nella levigatura, lucidatura, verniciatura e
              riparazione di graffi profondi. Capacità di gestire lavorazioni su
              diversi tipi di vernici e materiali, garantendo un risultato
              ottimale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
