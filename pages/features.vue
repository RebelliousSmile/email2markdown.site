<template>
  <div class="features-page">
    <section class="page-header">
      <div class="container">
        <h1>Fonctionnalités</h1>
        <p>Découvrez toutes les capacités d'email2markdown</p>
      </div>
    </section>

    <section class="features-detailed">
      <div class="container">
        <div class="feature-detail">
          <div class="feature-detail-icon">🔄</div>
          <div class="feature-detail-content">
            <h2>Conversion HTML vers Markdown</h2>
            <p>
              email2markdown analyse le contenu HTML de vos emails et le convertit en Markdown standard.
              La conversion préserve la structure du document, les titres, les listes, les liens et le formatage texte.
            </p>
            <ul class="feature-list">
              <li>Support complet de la syntaxe Markdown</li>
              <li>Préservation des balises HTML importantes</li>
              <li>Gestion des tableaux et listes imbriquées</li>
              <li>Conservation des liens et images</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail reverse">
          <div class="feature-detail-icon">🎨</div>
          <div class="feature-detail-content">
            <h2>Nettoyage du Formatage</h2>
            <p>
              Les emails contiennent souvent du code HTML complexe avec des styles inline et des balises inutiles.
              email2markdown nettoie automatiquement ce code pour produire un Markdown propre et lisible.
            </p>
            <ul class="feature-list">
              <li>Suppression des styles CSS inline</li>
              <li>Élimination des balises de tracking</li>
              <li>Simplification de la structure HTML</li>
              <li>Optimisation pour la lisibilité</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail">
          <div class="feature-detail-icon">⚙️</div>
          <div class="feature-detail-content">
            <h2>Options de Conversion</h2>
            <p>
              Personnalisez le processus de conversion selon vos besoins spécifiques avec de nombreuses options configurables.
            </p>
            <ul class="feature-list">
              <li>Choix du style Markdown (GitHub, CommonMark, etc.)</li>
              <li>Options de gestion des images</li>
              <li>Paramètres de formatage du texte</li>
              <li>Mode strict ou permissif</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail reverse">
          <div class="feature-detail-icon">📤</div>
          <div class="feature-detail-content">
            <h2>Export et Intégration</h2>
            <p>
              Exportez vos emails convertis dans différents formats et intégrez email2markdown dans votre workflow.
            </p>
            <ul class="feature-list">
              <li>Export en fichiers .md</li>
              <li>Copie dans le presse-papiers</li>
              <li>API pour l'intégration</li>
              <li>Support batch pour plusieurs emails</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail">
          <div class="feature-detail-icon">🔒</div>
          <div class="feature-detail-content">
            <h2>Sécurité et Confidentialité</h2>
            <p>
              Vos emails sont traités localement dans votre navigateur. Aucune donnée n'est envoyée à des serveurs externes.
            </p>
            <ul class="feature-list">
              <li>Traitement 100% local</li>
              <li>Aucun stockage de vos emails</li>
              <li>Code open source auditable</li>
              <li>Respect de votre vie privée</li>
            </ul>
          </div>
        </div>

        <div class="feature-detail reverse">
          <div class="feature-detail-icon">🚀</div>
          <div class="feature-detail-content">
            <h2>Performance</h2>
            <p>
              Optimisé pour traiter rapidement vos emails, même les plus volumineux, sans ralentissement.
            </p>
            <ul class="feature-list">
              <li>Conversion quasi-instantanée</li>
              <li>Support des emails volumineux</li>
              <li>Optimisation mémoire</li>
              <li>Interface réactive</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à essayer ?</h2>
          <p>Commencez à convertir vos emails en Markdown dès maintenant</p>
          <NuxtLink to="/" class="btn btn-primary">Retour à l'accueil</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.features-page {
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

.features-detailed {
  padding: 80px 0;
}

.feature-detail {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;
}

.feature-detail.reverse {
  grid-template-columns: 2fr 1fr;
}

.feature-detail.reverse .feature-detail-icon {
  order: 2;
}

.feature-detail-icon {
  font-size: 120px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-detail-content h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 20px;
}

.feature-detail-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6b7280;
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  color: #374151;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
  font-size: 1.2rem;
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

@media (max-width: 968px) {
  .feature-detail,
  .feature-detail.reverse {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .feature-detail.reverse .feature-detail-icon {
    order: 0;
  }

  .feature-detail-icon {
    font-size: 80px;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .feature-detail-content h2 {
    font-size: 1.75rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
