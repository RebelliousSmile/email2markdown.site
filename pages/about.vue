<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1>À propos d'email2markdown</h1>
        <p>Une solution simple pour convertir vos emails en Markdown</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-section">
          <h2>Qu'est-ce qu'email2markdown ?</h2>
          <p>
            email2markdown est une application web qui permet de convertir facilement le contenu HTML de vos emails
            en format Markdown. Cette conversion facilite la lecture, l'archivage et la réutilisation du contenu
            de vos emails dans différents contextes.
          </p>
          <p>
            Le format Markdown est devenu un standard pour la rédaction de documentation, de notes et de contenu
            structuré. En convertissant vos emails en Markdown, vous bénéficiez d'un format texte léger, portable
            et facilement éditable.
          </p>
        </div>

        <div class="about-section">
          <h2>Pourquoi email2markdown ?</h2>
          <div class="reasons-grid">
            <div class="reason-card">
              <h3>📝 Simplicité</h3>
              <p>
                Une interface intuitive qui rend la conversion d'emails accessible à tous, sans compétences
                techniques particulières requises.
              </p>
            </div>
            <div class="reason-card">
              <h3>🎯 Efficacité</h3>
              <p>
                Conversion rapide et précise qui préserve la structure et le formatage important de vos emails.
              </p>
            </div>
            <div class="reason-card">
              <h3>🔓 Open Source</h3>
              <p>
                Code source ouvert et transparent, permettant à la communauté de contribuer et d'auditer
                le fonctionnement de l'application.
              </p>
            </div>
            <div class="reason-card">
              <h3>🛡️ Sécurité</h3>
              <p>
                Traitement local des emails dans votre navigateur, garantissant la confidentialité de vos données.
              </p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Comment ça marche ?</h2>
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Copiez votre email</h3>
                <p>Sélectionnez et copiez le contenu de l'email que vous souhaitez convertir.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Collez dans email2markdown</h3>
                <p>Collez le contenu HTML de votre email dans l'application.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Obtenez le Markdown</h3>
                <p>La conversion est instantanée. Copiez ou exportez le résultat en Markdown.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Technologies utilisées</h2>
          <div class="tech-stack">
            <div class="tech-item">
              <span class="tech-icon">⚡</span>
              <span class="tech-name">Nuxt 3</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">💚</span>
              <span class="tech-name">Vue 3</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">📝</span>
              <span class="tech-name">Turndown</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🎨</span>
              <span class="tech-name">CSS3</span>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Contact et Contribution</h2>
          <p>
            email2markdown est un projet open source. Nous accueillons avec plaisir les contributions,
            les suggestions et les rapports de bugs de la communauté.
          </p>
          <div class="contact-links">
            <a href="https://github.com" target="_blank" rel="noopener" class="contact-link">
              <span class="link-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="mailto:contact@email2markdown.site" class="contact-link">
              <span class="link-icon">📧</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Commencez dès maintenant</h2>
          <p>Découvrez la facilité de convertir vos emails en Markdown</p>
          <NuxtLink to="/" class="btn btn-primary">Retour à l'accueil</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  background: white;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
}

.page-header p {
  font-size: 1.25rem;
  opacity: 0.95;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-content {
  padding: 80px 0;
}

.about-section {
  margin-bottom: 80px;
}

.about-section h2 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 30px;
  text-align: center;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6b7280;
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.reason-card {
  background: #f9fafb;
  padding: 30px;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.reason-card h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 15px;
}

.reason-card p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 40px auto 0;
}

.step {
  display: flex;
  gap: 25px;
  align-items: flex-start;
}

.step-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 10px;
}

.step-content p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.tech-stack {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  min-width: 120px;
  transition: transform 0.3s;
}

.tech-item:hover {
  transform: scale(1.05);
}

.tech-icon {
  font-size: 3rem;
}

.tech-name {
  font-weight: 600;
  color: #1f2937;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: #f9fafb;
  border-radius: 8px;
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  transition: all 0.3s;
}

.contact-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.link-icon {
  font-size: 1.5rem;
}

.cta-section {
  background: #f9fafb;
  padding: 80px 0;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 15px;
}

.cta-content p {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 30px;
}

.btn {
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }

  .about-section h2 {
    font-size: 2rem;
  }

  .step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
