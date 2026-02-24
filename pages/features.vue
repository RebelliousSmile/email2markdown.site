<template>
  <div class="px-6 py-16">
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-ink">Ce que fait email2markdown</h1>
        <p class="text-base max-w-lg mx-auto leading-relaxed text-ink-muted">
          Chaque fonctionnalité est pensée pour que vous gardiez le contrôle. Rien ne s'exécute sans votre accord — vos emails sont rangés, lisibles, chez vous.
        </p>
      </div>

      <div class="space-y-20">

        <!-- ===== 1. Export à la demande ===== -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-action/8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E07A5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-3 text-ink">Export à la demande, pas en arrière-plan</h2>
            <p class="text-sm leading-relaxed mb-4 text-ink-muted">
              Contrairement aux outils qui tournent en fond, email2markdown n'exporte que quand vous l'ordonnez : depuis le terminal ou d'un clic droit sur l'icône. Rien ne s'exécute sans votre accord.
            </p>
            <div class="rounded-xl p-4 space-y-2 bg-surface-alt border border-sep">
              <div v-for="a in syncAccounts" :key="a.n" class="flex items-center gap-3">
                <span class="text-sm" :class="a.ok ? 'text-brand' : 'text-danger'">●</span>
                <span class="text-sm font-medium w-14 text-ink">{{ a.n }}</span>
                <span class="text-xs flex-1 text-ink-muted">{{ a.e }}</span>
                <span class="text-xs" :class="a.ok ? 'text-brand' : 'text-danger'">{{ a.ok ? `${a.f} fichiers` : 'erreur' }}</span>
              </div>
            </div>
          </div>
          <!-- Systray mini -->
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
                  <div class="flex items-center justify-between px-4 py-1"><span class="text-12px text-gray-700">Export compte</span><span class="text-10px text-gray-400">›</span></div>
                  <div class="flex items-center justify-between px-4 py-1"><span class="text-12px text-gray-700">Trier emails</span><span class="text-10px text-gray-400">›</span></div>
                </div>
                <div class="mx-2.5 border-t border-gray-300"></div>
                <div class="py-1">
                  <div v-for="item in ['Import Thunderbird', 'Paramètres…', 'Documentation']" :key="item" class="px-4 py-1"><span class="text-12px text-gray-700">{{ item }}</span></div>
                </div>
                <div class="mx-2.5 border-t border-gray-300"></div>
                <div class="py-1"><div class="px-4 py-1"><span class="text-12px text-gray-700">Quitter</span></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== 2. Dossiers ===== -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <!-- App window: explorer -->
          <div class="order-2 md:order-1">
            <div class="bg-white border border-sep rounded-xl overflow-hidden shadow-lg h-72">
              <div class="bg-surface-alt border-b border-sep px-4 py-2 flex items-center gap-2">
                <div class="flex gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(248,113,113,0.6)"></div>
                  <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(251,191,36,0.6)"></div>
                  <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(74,222,128,0.6)"></div>
                </div>
                <div class="flex-1 flex justify-center">
                  <span class="text-10px font-medium text-ink-muted">email2markdown — Explorateur</span>
                </div>
                <div class="w-12"></div>
              </div>
              <div class="grid h-full" style="height: calc(100% - 33px); grid-template-columns: 2fr 3fr">
                <div class="border-r border-sep overflow-y-auto">
                  <div class="px-3 py-2 flex items-center gap-1.5 bg-surface-alt border-b border-sep">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#D4A853" stroke="none"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                    <span class="text-10px font-bold uppercase tracking-wider text-ink">Dossiers</span>
                  </div>
                  <div v-for="item in staticFolders" :key="item.id" class="flex items-center gap-2 py-2 pr-3 border-b border-sep-light" :style="{ paddingLeft: `${item.depth * 16 + 12}px` }">
                    <span class="w-3 flex-shrink-0 text-ink-dim">
                      <svg v-if="item.hasChildren && item.isOpen" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                      <svg v-else-if="item.hasChildren" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4A853" stroke="none"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                    <span class="text-[12px] flex-1 text-ink">{{ item.name }}</span>
                    <span v-if="item.files" class="text-9px font-semibold px-1.5 py-0.5 rounded-full bg-brand/8 text-brand">{{ item.files }}</span>
                  </div>
                </div>
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
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(212,168,83,0.1)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4A853" stroke="none"><path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
            </div>
            <h2 class="text-xl font-bold mb-3 text-ink">Vos dossiers, fidèlement reproduits</h2>
            <p class="text-sm leading-relaxed mb-4 text-ink-muted">
              L'arborescence de votre boîte mail est recréée à l'identique sur votre disque. INBOX/projets/alpha dans votre messagerie ? C'est le même chemin dans vos fichiers.
            </p>
            <p class="text-sm leading-relaxed text-ink-muted">
              Chaque email devient un fichier nommé clairement :
              <code class="px-2 py-0.5 rounded font-mono text-xs text-brand bg-brand/8 ml-1">2026-02-03_Reunion-kick-off.md</code>
            </p>
          </div>
        </div>

        <!-- ===== 3. Conversion HTML → Markdown ===== -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-result/8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7BC4A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="18" rx="2"/>
                <path d="M7 8v8l3-3 3 3V8"/><path d="M17 8v8"/><path d="M17 12h-2"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-3 text-ink">Du HTML au Markdown, en propre</h2>
            <p class="text-sm leading-relaxed mb-4 text-ink-muted">
              Fini le HTML illisible des emails. Chaque message est converti en Markdown propre avec un frontmatter YAML complet : expéditeur, destinataire, date, objet — et les pièces jointes rangées à côté.
            </p>
            <div class="space-y-2">
              <div v-for="t in conversionFeatures" :key="t" class="flex items-center gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7BC4A8" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>
                <span class="text-sm text-ink">{{ t }}</span>
              </div>
            </div>
          </div>
          <!-- Preview window -->
          <div class="bg-white border border-sep rounded-xl overflow-hidden shadow-lg h-80">
            <div class="bg-surface-alt border-b border-sep px-4 py-2 flex items-center gap-2">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(248,113,113,0.6)"></div>
                <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(251,191,36,0.6)"></div>
                <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(74,222,128,0.6)"></div>
              </div>
              <div class="flex-1 flex justify-center">
                <span class="text-10px font-medium text-ink-muted">email2markdown — Aperçu</span>
              </div>
              <div class="w-12"></div>
            </div>
            <div class="grid" style="height: calc(100% - 33px); grid-template-columns: 1fr 1fr">
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
              </div>
              <div class="p-4 overflow-y-auto">
                <div class="px-3 py-2 rounded-lg flex items-center gap-1.5 mb-3 bg-result/8">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7BC4A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8l3-3 3 3V8"/><path d="M17 8v8"/><path d="M17 12h-2"/></svg>
                  <span class="text-10px font-bold uppercase text-brand">Markdown</span>
                </div>
                <h3 class="font-bold text-sm mb-1 text-ink">Réunion de lancement — Projet Alpha</h3>
                <p class="text-10px italic mb-3 text-ink-muted">3 février 2026</p>
                <p class="text-11px leading-relaxed mb-3 text-ink">Suite à notre réunion, voici le résumé des décisions prises.</p>
                <h4 class="font-semibold text-xs mb-1 text-brand">Décisions validées</h4>
                <div class="px-3 py-1.5 rounded-r mb-3 bg-action/8" style="border-left:3px solid #E07A5F">
                  <p class="text-11px text-ink">Deadline : <strong>15 mars 2026</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== 4. Tri par importance ===== -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="bg-white border border-sep rounded-xl p-6 shadow-sm">
              <div class="space-y-3">
                <div v-for="f in sortingDemo" :key="f.name" class="flex items-center gap-3" :style="f.imp === 0 ? 'opacity:0.5' : ''">
                  <div class="flex items-center gap-0.5 w-14">
                    <svg v-for="s in 3" :key="s" width="12" height="12" viewBox="0 0 24 24" :fill="s <= f.imp ? '#D4A853' : 'none'" :stroke="s <= f.imp ? '#D4A853' : '#B0AAA4'" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <span class="text-sm flex-1 text-ink">{{ f.name }}</span>
                  <span v-if="f.tag" class="text-10px font-medium px-2 py-0.5 rounded-full"
                    :style="f.imp >= 3 ? 'color:#E07A5F; background:rgba(224,122,95,0.08); border:1px solid rgba(224,122,95,0.25)' : f.imp === 0 ? 'color:#B0AAA4; background:#F3F1EE; border:1px solid #DDD9D4' : 'color:#8C8580; background:#F3F1EE; border:1px solid #DDD9D4'"
                  >{{ f.tag }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(212,168,83,0.1)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" stroke-width="2" stroke-linecap="round">
                <line x1="4" y1="6" x2="16" y2="6"/><line x1="4" y1="12" x2="13" y2="12"/><line x1="4" y1="18" x2="10" y2="18"/>
                <polyline points="18 15 21 18 18 21"/><line x1="21" y1="18" x2="21" y2="9"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-3 text-ink">Tri automatique : supprimer, résumer, garder</h2>
            <p class="text-sm leading-relaxed mb-4 text-ink-muted">
              La commande <code class="px-1 py-0.5 rounded text-xs text-source bg-source/8">sort</code> analyse vos emails exportés et génère un rapport <code class="px-1 py-0.5 rounded text-xs text-brand bg-brand/8">sort_report.json</code> avec trois catégories : emails à supprimer, à résumer, ou à conserver.
            </p>
            <p class="text-sm leading-relaxed text-ink-muted">
              Basé sur l'expéditeur, les mots-clés, le type d'email et l'âge — avec listes blanche et noire configurables.
            </p>
          </div>
        </div>

        <!-- ===== 5. 100% local ===== -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand/8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2" stroke-linecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-3 text-ink">100% local, 100% privé</h2>
            <p class="text-sm leading-relaxed mb-4 text-ink-muted">
              Aucun serveur distant. Aucun cloud. Aucune donnée ne quitte votre machine. L'application se connecte directement à vos comptes IMAP et stocke tout localement.
            </p>
            <p class="text-sm leading-relaxed text-ink-muted">
              Vos emails sont à vous. Ils le restent.
            </p>
          </div>
          <div class="flex items-center justify-center">
            <div class="bg-white border border-sep rounded-2xl p-8 shadow-sm text-center max-w-xs">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto bg-brand/8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2" stroke-linecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div class="space-y-3">
                <div v-for="t in privacyPoints" :key="t" class="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>
                  <span class="text-sm text-left text-ink">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== 6. CLI ===== -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="rounded-xl overflow-hidden shadow-lg" style="background:#1e1e2e; border:1px solid #3a3a4c">
              <div class="px-4 py-2 flex items-center gap-2" style="background:#2a2a3c; border-bottom:1px solid #3a3a4c">
                <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(248,113,113,0.7)"></div>
                <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(251,191,36,0.7)"></div>
                <div class="w-2.5 h-2.5 rounded-full" style="background:rgba(74,222,128,0.7)"></div>
                <span class="text-10px font-mono ml-2" style="color:#64748b">terminal</span>
              </div>
              <div class="p-4 font-mono text-11px leading-6 space-y-3">
                <div>
                  <p><span class="text-green-400">$</span> <span style="color:#e2e8f0">email-to-markdown export --account Pro</span></p>
                  <p style="color:#64748b">⟳ Connexion IMAP…</p>
                  <p style="color:#64748b">⟳ Export en cours… 47 nouveaux emails</p>
                  <p class="text-green-400">✓ 47 emails convertis en .md</p>
                </div>
                <div style="border-top:1px solid #3a3a4c" class="pt-3">
                  <p><span class="text-green-400">$</span> <span style="color:#e2e8f0">email-to-markdown sort --account Pro</span></p>
                  <p style="color:#64748b">⟳ Analyse des emails…</p>
                  <p><span class="text-green-400">✓</span> <span style="color:#cbd5e1">sort_report.json généré</span> <span style="color:#475569">· 47 classés</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-source/8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B8FA3" stroke-width="2" stroke-linecap="round">
                <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-3 text-ink">Ligne de commande incluse</h2>
            <p class="text-sm leading-relaxed mb-4 text-ink-muted">
              Pour les utilisateurs avancés, chaque action est disponible en CLI. Export, tri, import de comptes — tout se fait depuis le terminal avec les commandes <code class="px-1 py-0.5 rounded text-xs text-source bg-source/8">export</code>, <code class="px-1 py-0.5 rounded text-xs text-source bg-source/8">sort</code>, <code class="px-1 py-0.5 rounded text-xs text-source bg-source/8">import</code> de <code class="px-1 py-0.5 rounded text-xs text-source bg-source/8">email-to-markdown</code>.
            </p>
            <p class="text-sm leading-relaxed text-ink-muted">
              Parfait pour intégrer dans vos scripts, ou simplement pour ceux qui préfèrent le terminal au tray.
            </p>
          </div>
        </div>

        <!-- ===== 7. Import Thunderbird ===== -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-source/8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B8FA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-3 text-ink">Configuration depuis Thunderbird</h2>
            <p class="text-sm leading-relaxed mb-4 text-ink-muted">
              Vous utilisez Thunderbird ? Une seule commande détecte automatiquement vos profils, extrait les paramètres IMAP et les mots de passe — sans rien saisir à la main.
            </p>
            <p class="text-sm leading-relaxed text-ink-muted">
              <code class="px-1.5 py-0.5 rounded font-mono text-xs text-source bg-source/8">email-to-markdown import --extract-passwords</code> — c'est tout.
            </p>
          </div>
          <div class="flex items-center justify-center">
            <div class="bg-white border border-sep rounded-2xl p-6 shadow-sm max-w-xs w-full">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-source/8">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B8FA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
                </div>
                <svg width="32" height="2"><line x1="0" y1="1" x2="32" y2="1" stroke="#DDD9D4" stroke-width="2" stroke-dasharray="4 4"/></svg>
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-brand/8">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 8v8l3-3 3 3V8"/><path d="M17 8v8"/><path d="M17 12h-2"/></svg>
                </div>
              </div>
              <div class="space-y-2">
                <div v-for="r in thunderbirdImport" :key="r.f" class="flex items-center gap-2">
                  <svg v-if="r.done" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5B8C6F" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>
                  <div v-else class="w-3.5 h-3.5 rounded-full border-2 border-sep flex-shrink-0"></div>
                  <span class="text-xs flex-1 text-ink">{{ r.f }}</span>
                  <span class="text-10px text-ink-muted">{{ r.n }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA bottom -->
      <div class="text-center mt-20 pt-12 border-t border-sep">
        <h2 class="text-2xl font-bold mb-3 text-ink">Prêt à ranger vos emails ?</h2>
        <p class="text-sm mb-8 text-ink-muted">Gratuit, open source, sans compte à créer.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button class="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold shadow-md hover:opacity-90 transition-opacity bg-action text-white">
            Télécharger
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
          <a href="https://github.com/RebelliousSmile/email2markdown.app" target="_blank" rel="noopener" class="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-white shadow-sm border border-sep hover:border-gray-400 transition-colors text-ink-muted no-underline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const syncAccounts = [
  { n: 'Pro', e: 'marie@agence-web.fr', ok: true, f: '2 847' },
  { n: 'Perso', e: 'marie@gmail.com', ok: true, f: '1 203' },
  { n: 'Asso', e: 'contact@asso-nature.org', ok: false },
]

// Static folder tree for features page
const staticFolders = [
  { id: 'INBOX', name: 'INBOX', depth: 0, hasChildren: true, isOpen: true },
  { id: 'INBOX.clients', name: 'clients', files: 34, depth: 1, hasChildren: false },
  { id: 'INBOX.projets', name: 'projets', depth: 1, hasChildren: true, isOpen: true },
  { id: 'INBOX.projets.alpha', name: 'alpha', files: 412, depth: 2, hasChildren: false },
  { id: 'INBOX.projets.beta', name: 'beta', files: 28, depth: 2, hasChildren: false },
  { id: 'INBOX.factures', name: 'factures', files: 35, depth: 1, hasChildren: false },
  { id: 'Sent', name: 'Sent', files: 156, depth: 0, hasChildren: false },
]

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

const conversionFeatures = [
  'Images de signature filtrées',
  'Frontmatter YAML avec métadonnées (from, to, date, subject)',
  'Pièces jointes sauvegardées dans attachments/',
  'Profondeur des citations configurable',
]

const sortingDemo = [
  { name: 'Reunion-kick-off.md', imp: 3, tag: 'Urgent' },
  { name: 'Specs-techniques-v2.md', imp: 3, tag: 'Important' },
  { name: 'Feedback-maquettes.md', imp: 2, tag: null },
  { name: 'Devis-hebergement.md', imp: 1, tag: null },
  { name: 'Newsletter-update.md', imp: 0, tag: 'Bruit' },
]

const privacyPoints = [
  'Pas de serveur tiers',
  'Pas de compte à créer',
  'Pas de télémétrie',
  'Données sur votre disque uniquement',
]

const thunderbirdImport = [
  { f: 'Profil détecté', n: 'default-release', done: true },
  { f: 'Comptes extraits', n: '3 comptes', done: true },
  { f: 'Mots de passe', n: 'écrits dans .env', done: true },
]
</script>
