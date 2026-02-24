<template>
  <div>

    <!-- Header -->
    <section class="px-6 py-16 text-center bg-surface-alt border-b border-sep">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-ink">À propos d'email2markdown</h1>
        <p class="text-base text-ink-muted">Une solution simple pour archiver vos emails en Markdown</p>
      </div>
    </section>

    <!-- Content -->
    <section class="px-6 py-16">
      <div class="max-w-3xl mx-auto space-y-16">

        <div>
          <h2 class="text-2xl font-bold mb-6 text-ink">Qu'est-ce qu'email2markdown ?</h2>
          <p class="text-base leading-relaxed text-ink-muted mb-4">
            email2markdown est une application desktop qui se connecte à vos boîtes mail IMAP et convertit chaque email en fichier Markdown. Vos emails sont rangés dans des dossiers qui reflètent votre arborescence mail, nommés clairement avec la date.
          </p>
          <p class="text-base leading-relaxed text-ink-muted">
            Le format Markdown est devenu un standard pour la rédaction de documentation et de notes. En convertissant vos emails en Markdown, vous obtenez des fichiers texte légers, portables, lisibles partout, pour toujours.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-8 text-ink text-center">Pourquoi email2markdown ?</h2>
          <div class="grid sm:grid-cols-2 gap-5">
            <div v-for="r in reasons" :key="r.title" class="bg-white border border-sep rounded-2xl p-6 hover:-translate-y-1 transition-transform shadow-sm">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" :class="r.bg">
                <span class="text-xl">{{ r.icon }}</span>
              </div>
              <h3 class="font-semibold mb-2 text-ink">{{ r.title }}</h3>
              <p class="text-sm text-ink-muted leading-relaxed">{{ r.desc }}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-8 text-ink text-center">Comment ça marche ?</h2>
          <div class="space-y-6 max-w-2xl mx-auto">
            <div v-for="(step, i) in steps" :key="i" class="flex gap-5">
              <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-brand text-white font-bold text-sm">
                {{ i + 1 }}
              </div>
              <div>
                <h3 class="font-semibold mb-1 text-ink">{{ step.title }}</h3>
                <p class="text-sm text-ink-muted leading-relaxed">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-8 text-ink text-center">Technologies</h2>
          <div class="flex justify-center flex-wrap gap-4">
            <div v-for="t in techStack" :key="t.name" class="flex flex-col items-center gap-2 px-6 py-4 bg-surface-alt rounded-xl border border-sep hover:scale-105 transition-transform min-w-28">
              <span class="text-2xl">{{ t.icon }}</span>
              <span class="font-semibold text-sm text-ink">{{ t.name }}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6 text-ink text-center">Contact & Contribution</h2>
          <p class="text-base leading-relaxed text-ink-muted mb-8 text-center max-w-lg mx-auto">
            email2markdown est un projet open source de <a href="https://www.scriptami.com" target="_blank" rel="noopener" class="text-brand hover:underline font-medium">scriptami</a>. Les contributions, suggestions et rapports de bugs sont les bienvenus.
          </p>
          <div class="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/RebelliousSmile/email2markdown.app" target="_blank" rel="noopener" class="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-surface-alt border border-sep text-ink font-medium text-sm hover:bg-surface-hover transition-colors no-underline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-ink-muted">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:contact@scriptami.com" class="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-surface-alt border border-sep text-ink font-medium text-sm hover:bg-surface-hover transition-colors no-underline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-ink-muted">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
              </svg>
              contact@scriptami.com
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="bg-surface-alt border-t border-sep px-6 py-16">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-3 text-ink">Prêt à commencer ?</h2>
        <p class="text-sm text-ink-muted mb-8">Gratuit, open source, sans compte à créer.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button class="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold shadow-md hover:opacity-90 transition-opacity bg-action text-white">
            Télécharger
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
          <NuxtLink to="/features" class="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-white shadow-sm border border-sep hover:border-gray-400 transition-colors text-ink-muted no-underline">
            Voir les fonctionnalités
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const reasons = [
  { icon: '📝', title: 'Simplicité', desc: 'Installez, configurez une fois, oubliez. L\'application synchronise en arrière-plan.', bg: 'bg-brand/8' },
  { icon: '🎯', title: 'Pérennité', desc: 'Des fichiers texte lisibles dans 20 ans, sans dépendance à un service tiers.', bg: 'bg-action/8' },
  { icon: '🔓', title: 'Open Source', desc: 'Code source ouvert et auditable. Aucune boîte noire, aucune surprise.', bg: 'bg-source/8' },
  { icon: '🛡️', title: 'Vie privée', desc: 'Rien ne quitte votre machine. Pas de cloud, pas de compte, pas de télémétrie.', bg: 'bg-result/8' },
]

const steps = [
  { title: 'Installez l\'application', desc: 'Téléchargez le binaire pour votre système ou installez via cargo.' },
  { title: 'Configurez vos comptes IMAP', desc: 'Ajoutez vos adresses email et paramètres de connexion dans l\'interface.' },
  { title: 'La synchronisation démarre', desc: 'L\'application tourne en arrière-plan et convertit vos emails au fil de l\'eau.' },
  { title: 'Profitez de vos archives', desc: 'Parcourez vos emails en Markdown depuis n\'importe quel éditeur de texte.' },
]

const techStack = [
  { icon: '🦀', name: 'Rust' },
  { icon: '⚡', name: 'Nuxt 4' },
  { icon: '💚', name: 'Vue 3' },
  { icon: '🎨', name: 'UnoCSS' },
]
</script>
