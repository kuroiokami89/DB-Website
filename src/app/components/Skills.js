"use client";

export default function Skills() {
  return (
    <div className="blocco" id="skills">
      <div className="section-header">
        <h2>
          COMPETENZE <span className="gold">TECNICHE</span>
        </h2>
        <p className="section-subtitle">
          Padronanza completa delle tecniche di car detailing professionale
        </p>
      </div>
      <div className="skills-grid">
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fas fa-car"></i>
          </div>
          <div className="skill-text">
            Pulizia dettagliata interni ed esterni
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div className="skill-text">Lucidatura professionale multi-step</div>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fas fa-broom"></i>
          </div>
          <div className="skill-text">Sanificazione abitacolo</div>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i class="fas fa-eraser"></i>
          </div>
          <div className="skill-text">Rimozione ossido e graffi</div>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i class="fas fa-cogs"></i>
          </div>
          <div className="skill-text">Ripristino plastiche e carrozzeria</div>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="skill-text">Cura e protezione cerchi diamantati</div>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fas fa-flask"></i>
          </div>
          <div className="skill-text">Uso prodotti professionali</div>
        </div>
        <div className="skill-item">
          <div className="skill-icon">
            <i className="fas fa-award"></i>
          </div>
          <div className="skill-text">
            Car care avanzato e finiture di qualità
          </div>
        </div>
      </div>
    </div>
  );
}
