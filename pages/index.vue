<template>
  <div>

    <!-- ===== HERO ===== -->
    <section class="px-6 pt-20 pb-16 text-center">
      <div class="max-w-3xl mx-auto">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 bg-brand/8 border border-brand/25">
          <span class="w-2 h-2 rounded-full bg-brand"></span>
          <span class="text-sm font-medium text-brand">Gratuit · Open Source · 100% local</span>
        </div>

        <!-- H1 -->
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-ink">
          Vos emails, rangés<br /><span class="text-brand">et lisibles pour toujours</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg max-w-lg mx-auto mb-10 leading-relaxed text-ink-muted">
          email2markdown se connecte à vos boîtes mail, convertit chaque email en fichier Markdown, et range tout dans des dossiers. Simple, local, privé.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <button class="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base shadow-md hover:opacity-90 transition-opacity bg-action text-white">
            Télécharger
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
          <a
            href="https://github.com/RebelliousSmile/email2markdown.app"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-white shadow-sm border border-sep hover:border-gray-400 transition-colors text-ink-muted no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Voir sur GitHub
          </a>
        </div>

        <!-- CLI hint -->
        <p class="text-xs text-ink-dim">
          ou : <code class="px-2 py-1 rounded font-mono text-source bg-source/8">cargo build --release</code>
        </p>
      </div>
    </section>

    <!-- ===== FLOW DIAGRAM ===== -->
    <section class="px-6 pb-16">
      <div class="max-w-3xl mx-auto flex items-center justify-center gap-4 sm:gap-6 flex-wrap">

        <div class="flex flex-col items-center gap-2.5">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-source/8 border border-source/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7B8FA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
            </svg>
          </div>
          <span class="text-xs font-medium text-source">Vos boîtes mail</span>
        </div>

        <svg width="32" height="2"><line x1="0" y1="1" x2="32" y2="1" stroke="#DDD9D4" stroke-width="2" stroke-dasharray="4 4"/></svg>

        <div class="flex flex-col items-center gap-2.5">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-action/8 border border-action/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07A5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
            </svg>
          </div>
          <span class="text-xs font-medium text-action">Export sur commande</span>
        </div>

        <svg width="32" height="2"><line x1="0" y1="1" x2="32" y2="1" stroke="#DDD9D4" stroke-width="2" stroke-dasharray="4 4"/></svg>

        <div class="flex flex-col items-center gap-2.5">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center" style="background:rgba(212,168,83,0.1); border:1px solid rgba(212,168,83,0.2)">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#D4A853" stroke="none">
              <path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
          </div>
          <span class="text-xs font-medium" style="color:#D4A853">Rangé en dossiers</span>
        </div>

        <svg width="32" height="2"><line x1="0" y1="1" x2="32" y2="1" stroke="#DDD9D4" stroke-width="2" stroke-dasharray="4 4"/></svg>

        <div class="flex flex-col items-center gap-2.5">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-brand/8 border border-brand/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="18" rx="2"/>
              <path d="M7 8v8l3-3 3 3V8"/><path d="M17 8v8"/><path d="M17 12h-2"/>
            </svg>
          </div>
          <span class="text-xs font-medium text-brand">Fichiers lisibles</span>
        </div>

      </div>
    </section>

    <!-- ===== SYSTRAY ===== -->
    <section class="px-6 pb-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-2 text-ink">Accessible depuis la barre des tâches</h2>
        <p class="text-sm text-ink-muted max-w-md mx-auto mb-8">
          L'icône vit dans votre barre système. Un clic droit suffit pour lancer un export — uniquement quand vous le décidez.
        </p>

        <!-- Systray mockup -->
        <div class="flex justify-center">
          <div>
            <div class="px-3 py-1.5 flex items-center justify-end gap-2.5 w-72 rounded-t-lg" style="background:#e0dfe4; border-bottom:1px solid #b8b8b8">
              <div class="w-3.5 h-3.5 rounded-sm" style="background:rgba(156,163,175,0.4)"></div>
              <div class="w-3.5 h-3.5 rounded-sm" style="background:rgba(156,163,175,0.4)"></div>
              <div class="w-5 h-5 rounded flex items-center justify-center bg-brand-light">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
                </svg>
              </div>
              <div class="w-3.5 h-3.5 rounded-sm" style="background:rgba(156,163,175,0.4)"></div>
              <span class="text-10px text-gray-500 font-mono ml-1">12:33</span>
            </div>
            <div class="w-48 overflow-hidden rounded-b" style="background:#f6f5f4; border:1px solid #c4c4c4; box-shadow:2px 3px 10px rgba(0,0,0,0.12)">
              <div class="py-1">
                <div v-for="item in ['Export compte', 'Trier emails']" :key="item" class="flex items-center justify-between px-4 py-1">
                  <span class="text-12px text-gray-700">{{ item }}</span>
                  <span class="text-10px text-gray-400">›</span>
                </div>
              </div>
              <div class="mx-2.5 border-t border-gray-300"></div>
              <div class="py-1">
                <div v-for="item in ['Import Thunderbird', 'Paramètres…', 'Documentation']" :key="item" class="px-4 py-1">
                  <span class="text-12px text-gray-700">{{ item }}</span>
                </div>
              </div>
              <div class="mx-2.5 border-t border-gray-300"></div>
              <div class="py-1">
                <div class="px-4 py-1"><span class="text-12px text-gray-700">Quitter</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-xl p-3 mt-4 max-w-xs mx-auto bg-surface-alt border border-sep">
          <p class="text-xs text-ink-muted">
            <span class="text-brand">●</span> export OK · <span class="text-action">●</span> en cours · <span class="text-danger">●</span> erreur
          </p>
        </div>
      </div>
    </section>

    <!-- ===== APP SCREENSHOTS ===== -->
    <section class="bg-surface-alt px-6 py-16">
      <div class="max-w-4xl mx-auto">

        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-2 text-ink">L'application en action</h2>
          <p class="text-sm text-ink-muted max-w-md mx-auto">
            Parcourez vos emails convertis, prévisualisez le résultat, configurez vos comptes.
          </p>
        </div>

        <!-- Tab buttons -->
        <div class="flex items-center justify-center gap-2 mb-6">
          <button
            v-for="(tab, i) in previewTabs"
            :key="i"
            @click="activePreview = i"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            :class="activePreview === i
              ? 'bg-white text-brand border border-sep shadow-sm'
              : 'bg-transparent text-ink-muted border border-transparent'"
          >{{ tab }}</button>
        </div>

        <!-- App window chrome -->
        <div class="bg-white border border-sep rounded-xl overflow-hidden shadow-lg h-96">
          <div class="bg-surface-alt border-b border-sep px-4 py-2 flex items-center gap-2">
            <div class="flex gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(248,113,113,0.6)"></div>
              <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(251,191,36,0.6)"></div>
              <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(74,222,128,0.6)"></div>
            </div>
            <div class="flex-1 flex justify-center">
              <span class="text-10px font-medium text-ink-muted">email2markdown</span>
            </div>
            <div class="w-12"></div>
          </div>

          <div style="height: calc(100% - 33px); overflow:hidden">

            <!-- Tab: Explorateur -->
            <div v-if="activePreview === 0" class="grid h-full" style="grid-template-columns: 2fr 3fr">
              <!-- Folder tree -->
              <div class="border-r border-sep overflow-y-auto">
                <div class="px-3 py-2 flex items-center gap-1.5 bg-surface-alt border-b border-sep">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#D4A853" stroke="none"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                  <span class="text-10px font-bold uppercase tracking-wider text-ink">Dossiers</span>
                </div>
                <div
                  v-for="item in visibleFolders"
                  :key="item.id"
                  @click="item.hasChildren && toggleFolder(item.id)"
                  class="flex items-center gap-2 py-2 pr-3 border-b border-sep-light"
                  :class="item.hasChildren ? 'cursor-pointer' : ''"
                  :style="{ paddingLeft: `${item.depth * 16 + 12}px` }"
                >
                  <span class="w-3 flex-shrink-0 text-ink-dim">
                    <svg v-if="item.hasChildren && item.isOpen" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                    <svg v-else-if="item.hasChildren" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4A853" stroke="none"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                  <span class="text-[12px] flex-1 text-ink">{{ item.name }}</span>
                  <span v-if="item.files" class="text-9px font-semibold px-1.5 py-0.5 rounded-full bg-brand/8 text-brand">{{ item.files }}</span>
                </div>
              </div>
              <!-- File list -->
              <div class="overflow-y-auto">
                <div class="px-3 py-2 flex items-center gap-1.5 bg-surface-alt border-b border-sep">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8l3-3 3 3V8"/><path d="M17 8v8"/><path d="M17 12h-2"/></svg>
                  <span class="text-10px font-bold uppercase tracking-wider text-ink">projets / alpha</span>
                  <span class="text-9px font-bold px-1.5 py-0.5 rounded-full ml-1 bg-brand/8 text-brand">412</span>
                </div>
                <div v-for="(f, i) in previewFiles" :key="i" class="flex items-center gap-2 px-3 py-2 border-b border-sep-light">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7BC4A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8l3-3 3 3V8"/><path d="M17 8v8"/><path d="M17 12h-2"/></svg>
                  <span class="text-11px flex-1 truncate text-ink">{{ f.name }}</span>
                  <div class="flex items-center gap-0.5">
                    <svg v-for="s in 3" :key="s" width="10" height="10" viewBox="0 0 24 24" :fill="s <= f.imp ? '#D4A853' : 'none'" :stroke="s <= f.imp ? '#D4A853' : '#B0AAA4'" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab: Aperçu -->
            <div v-else-if="activePreview === 1" class="grid h-full" style="grid-template-columns: 1fr 1fr">
              <!-- Email source -->
              <div class="p-4 space-y-3 overflow-y-auto border-r border-sep">
                <div class="px-3 py-2 rounded-lg flex items-center gap-1.5 mb-3 bg-source/8">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7B8FA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
                  <span class="text-10px font-bold uppercase text-source">Email source</span>
                </div>
                <div v-for="m in emailMeta" :key="m.l">
                  <p class="text-9px uppercase tracking-wider text-ink-dim">{{ m.l }}</p>
                  <p class="text-11px text-ink">{{ m.v }}</p>
                </div>
                <div class="pt-2">
                  <p class="text-9px uppercase tracking-wider mb-1 text-ink-dim">Importance</p>
                  <div class="flex items-center gap-0.5">
                    <svg v-for="s in 3" :key="s" width="12" height="12" viewBox="0 0 24 24" fill="#D4A853" stroke="#D4A853" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                </div>
                <div class="pt-2">
                  <p class="text-9px uppercase tracking-wider mb-1 text-ink-dim">Pièces jointes</p>
                  <div v-for="a in ['planning-projet.pdf', 'maquettes-v1.png']" :key="a" class="flex items-center gap-1.5 px-2 py-1.5 rounded mb-1 bg-surface-alt border border-sep-light">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7B8FA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span class="text-10px text-ink">{{ a }}</span>
                  </div>
                </div>
              </div>
              <!-- Markdown result -->
              <div class="p-4 overflow-y-auto">
                <div class="px-3 py-2 rounded-lg flex items-center gap-1.5 mb-3 bg-result/8">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7BC4A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8l3-3 3 3V8"/><path d="M17 8v8"/><path d="M17 12h-2"/></svg>
                  <span class="text-10px font-bold uppercase text-brand">Markdown</span>
                </div>
                <h3 class="font-bold text-sm mb-1 text-ink">Réunion de lancement — Projet Alpha</h3>
                <p class="text-10px italic mb-3 text-ink-muted">3 février 2026</p>
                <p class="text-11px leading-relaxed mb-3 text-ink">Suite à notre réunion, voici le résumé des décisions prises et les prochaines étapes.</p>
                <h4 class="font-semibold text-xs mb-1 text-brand">Décisions validées</h4>
                <p class="text-11px leading-relaxed mb-2 text-ink">Architecture découplée retenue, backend API + frontend SPA.</p>
                <div class="px-3 py-1.5 rounded-r mb-3 bg-action/8" style="border-left:3px solid #E07A5F">
                  <p class="text-11px text-ink">Deadline : <strong>15 mars 2026</strong></p>
                </div>
              </div>
            </div>

            <!-- Tab: Paramètres -->
            <div v-else class="p-4 space-y-4 overflow-y-auto">
              <h3 class="font-bold text-sm text-ink">Paramètres</h3>
              <!-- Accounts -->
              <div class="rounded-lg overflow-hidden bg-white border border-sep-light">
                <div class="px-3 py-2 flex items-center justify-between bg-surface-alt border-b border-sep-light">
                  <span class="text-10px font-bold text-ink">Comptes email</span>
                  <span class="text-9px font-semibold text-action">+ Ajouter</span>
                </div>
                <div class="p-2 space-y-1.5">
                  <div
                    v-for="a in emailAccounts"
                    :key="a.n"
                    class="rounded-lg p-2.5 flex items-center gap-2.5 bg-surface border"
                    :class="a.ok ? 'border-sep-light' : 'border-danger/30'"
                  >
                    <div class="w-7 h-7 rounded-lg flex items-center justify-center" :class="a.ok ? 'bg-brand/8' : 'bg-danger/8'">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" :stroke="a.ok ? '#5B8C6F' : '#C45B5B'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="font-semibold text-11px text-ink">{{ a.n }}</p>
                      <p class="text-9px text-ink-muted">{{ a.e }}</p>
                    </div>
                    <svg v-if="a.ok" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>
                    <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C45B5B" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                </div>
              </div>
              <!-- Sync -->
              <div class="rounded-lg overflow-hidden bg-white border border-sep-light">
                <div class="px-3 py-2 bg-surface-alt border-b border-sep-light">
                  <span class="text-10px font-bold text-ink">Options d'export</span>
                </div>
                <div class="p-3 space-y-2.5">
                  <div v-for="s in syncSettings" :key="s.l" class="flex items-center justify-between">
                    <span class="text-11px text-ink">{{ s.l }}</span>
                    <template v-if="s.toggle">
                      <div class="w-8 h-4 rounded-full flex items-center px-0.5 transition-colors" :class="s.on ? 'bg-brand' : 'bg-sep'">
                        <div class="w-3 h-3 rounded-full bg-white shadow transition-transform" :style="s.on ? 'transform:translateX(16px)' : ''"></div>
                      </div>
                    </template>
                    <span v-else class="text-10px text-ink-muted">{{ s.v }}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURE CARDS ===== -->
    <section class="px-6 py-16">
      <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 text-center">

        <div class="rounded-2xl p-6 shadow-sm bg-white border border-sep">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 mx-auto bg-brand/8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2" stroke-linecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="font-semibold mb-1.5 text-ink">100% local</h3>
          <p class="text-sm text-ink-muted">Vos emails ne quittent jamais votre ordinateur</p>
        </div>

        <div class="rounded-2xl p-6 shadow-sm bg-white border border-sep">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 mx-auto bg-action/8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E07A5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </div>
          <h3 class="font-semibold mb-1.5 text-ink">Simple</h3>
          <p class="text-sm text-ink-muted">Installez, configurez, lancez. Une commande suffit.</p>
        </div>

        <div class="rounded-2xl p-6 shadow-sm bg-white border border-sep">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 mx-auto bg-source/8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#7B8FA3">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <h3 class="font-semibold mb-1.5 text-ink">Open Source</h3>
          <p class="text-sm text-ink-muted">Code ouvert, vérifiable, gratuit pour toujours</p>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
const activePreview = ref(0)
const previewTabs = ['Explorateur', 'Aperçu', 'Paramètres']

// Folder tree
const expandedFolders = ref(['INBOX', 'INBOX.projets'])

const folderTree = [
  { id: 'INBOX', name: 'INBOX', children: [
    { id: 'INBOX.clients', name: 'clients', files: 34 },
    { id: 'INBOX.projets', name: 'projets', children: [
      { id: 'INBOX.projets.alpha', name: 'alpha', files: 412 },
      { id: 'INBOX.projets.beta', name: 'beta', files: 28 },
    ] },
    { id: 'INBOX.factures', name: 'factures', files: 35 },
    { id: 'INBOX.newsletters', name: 'newsletters', files: 89 },
  ] },
  { id: 'Sent', name: 'Sent', files: 156 },
]

function flattenTree(tree, expanded, depth = 0) {
  const result = []
  for (const item of tree) {
    const { children, ...data } = item
    result.push({
      ...data,
      depth,
      hasChildren: !!children?.length,
      isOpen: expanded.includes(item.id),
    })
    if (children?.length && expanded.includes(item.id)) {
      result.push(...flattenTree(children, expanded, depth + 1))
    }
  }
  return result
}

const visibleFolders = computed(() => flattenTree(folderTree, expandedFolders.value))

function toggleFolder(id) {
  const idx = expandedFolders.value.indexOf(id)
  if (idx >= 0) expandedFolders.value.splice(idx, 1)
  else expandedFolders.value.push(id)
}

const previewFiles = [
  { name: '2026-02-03_Reunion-kick-off.md', imp: 3 },
  { name: '2026-01-28_Specs-techniques-v2.md', imp: 3 },
  { name: '2025-12-15_Feedback-maquettes.md', imp: 2 },
  { name: '2025-12-01_Devis-hebergement.md', imp: 1 },
  { name: '2025-11-20_Newsletter-update.md', imp: 0 },
]

const emailMeta = [
  { l: 'De', v: 'thomas@client-alpha.com' },
  { l: 'À', v: 'marie@agence-web.fr' },
  { l: 'Objet', v: 'Réunion de lancement — CR' },
]

const emailAccounts = [
  { n: 'Pro', e: 'marie@agence-web.fr', ok: true },
  { n: 'Perso', e: 'marie@gmail.com', ok: true },
  { n: 'Asso', e: 'contact@asso-nature.org', ok: false },
]

const syncSettings = [
  { l: 'Destination', v: '~/Emails/', toggle: false },
  { l: 'Pièces jointes', toggle: true, on: true },
  { l: 'Ignorer existants', toggle: true, on: true },
  { l: 'Exclure signatures', toggle: true, on: true },
]
</script>
