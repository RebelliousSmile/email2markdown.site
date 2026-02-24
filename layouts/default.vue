<template>
  <div class="min-h-screen flex flex-col bg-surface font-sans text-ink">

    <!-- Nav -->
    <nav class="bg-white border-b border-sep sticky top-0 z-50 shadow-sm">
      <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div class="w-8 h-8 rounded-xl bg-brand flex items-center justify-center shadow-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
            </svg>
          </div>
          <span class="font-bold text-base tracking-tight text-ink">
            email<span class="text-brand">2</span>markdown
          </span>
        </NuxtLink>

        <!-- Nav links -->
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium pb-0.5 border-b-2 transition-colors"
            :class="isActive(link.to) ? 'text-brand border-brand' : 'text-ink-muted border-transparent hover:text-ink'"
          >{{ link.label }}</NuxtLink>

          <a
            href="https://github.com/RebelliousSmile/email2markdown.app"
            target="_blank"
            rel="noopener"
            class="text-sm font-medium text-ink-muted hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <button class="bg-action text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity">
            Télécharger
          </button>
        </div>

      </div>
    </nav>

    <!-- Main -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-surface-alt border-t border-sep py-10 px-6">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2.5">
          <div class="w-6 h-6 rounded-lg bg-brand flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
            </svg>
          </div>
          <span class="text-sm text-ink-muted">email2markdown — Open source, 100% local</span>
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="text-sm text-ink-muted hover:text-ink transition-colors">Documentation</a>
          <a
            href="https://github.com/RebelliousSmile/email2markdown.app"
            target="_blank"
            rel="noopener"
            class="text-sm text-ink-muted hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <span class="text-xs text-ink-dim">
            © 2026 <a href="https://www.scriptami.com" target="_blank" rel="noopener" class="hover:text-ink-muted transition-colors">scriptami</a>
          </span>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
const route = useRoute()

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/features', label: 'Fonctionnalités' },
]

function isActive(path) {
  return route.path === path
}
</script>
