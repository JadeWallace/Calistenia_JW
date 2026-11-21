document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'calistenia_forge_state_v1';
  const AI_KEY_STORAGE = 'calistenia_forge_gemini_key_v1';

  function loadState() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return {
        masteredIds: Array.isArray(raw?.masteredIds) ? raw.masteredIds : [],
        personalRecords: raw?.personalRecords && typeof raw.personalRecords === 'object' ? raw.personalRecords : {},
        completedWorkouts: Number(raw?.completedWorkouts) || 0,
        lastExerciseIds: Array.isArray(raw?.lastExerciseIds) ? raw.lastExerciseIds : [],
        mode: raw?.mode === 'equip' ? 'equip' : 'none',
        selectedEquip: Array.isArray(raw?.selectedEquip) ? raw.selectedEquip : ['barra', 'paralelas']
      };
    } catch {
      return {
        masteredIds: [],
        personalRecords: {},
        completedWorkouts: 0,
        lastExerciseIds: [],
        mode: 'none',
        selectedEquip: ['barra', 'paralelas']
      };
    }
  }

  let state = loadState();
  let currentWorkout = [];
  let selectedSkillFilter = 'all';

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateHeaderBadges();
  }

  function formatPrLabel(pr) {
    if (!pr || !pr.value) return null;
    const unitText = pr.unit === 's' ? `${pr.value}s` : `${pr.value} rep${Number(pr.value) === 1 ? '' : 's'}`;
    return `PR: ${unitText}`;
  }

  function inferDefaultUnit(targetText = '') {
    return /\b\d+\s*s\b|seg/i.test(targetText) ? 's' : 'reps';
  }

  // Elementos principais
  const streakBadge = document.getElementById('streak-badge');
  const masteredBadge = document.getElementById('mastered-badge');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  const workoutDateLabel = document.getElementById('workout-date-label');
  const modeNoneBtn = document.getElementById('mode-none-btn');
  const modeEquipBtn = document.getElementById('mode-equip-btn');
  const equipmentSelector = document.getElementById('equipment-selector');
  const equipChecks = document.querySelectorAll('.equip-check');
  const dailyWorkoutContainer = document.getElementById('daily-workout-container');
  const regenerateWorkoutBtn = document.getElementById('regenerate-workout-btn');
  const finishWorkoutBtn = document.getElementById('finish-workout-btn');

  const skillFilterBar = document.getElementById('skill-filter-bar');
  const progressionTreeContainer = document.getElementById('progression-tree-container');

  // Modal
  const exerciseModal = document.getElementById('exercise-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDiagram = document.getElementById('modal-diagram');
  const modalSteps = document.getElementById('modal-steps');
  const modalMistake = document.getElementById('modal-mistake');
  const modalTarget = document.getElementById('modal-target');
  const modalEquip = document.getElementById('modal-equip');
  const modalPrBox = document.getElementById('modal-pr-box');
  const modalPrCurrent = document.getElementById('modal-pr-current');
  const modalPrValue = document.getElementById('modal-pr-value');
  const modalPrUnit = document.getElementById('modal-pr-unit');
  const modalSavePrBtn = document.getElementById('modal-save-pr-btn');
  const modalAiKeyBtn = document.getElementById('modal-ai-key-btn');
  const modalAiQuestion = document.getElementById('modal-ai-question');
  const modalAiAskBtn = document.getElementById('modal-ai-ask-btn');
  const modalAiResponse = document.getElementById('modal-ai-response');
  const modalTimerBtn = document.getElementById('modal-timer-btn');
  const modalMasterBtn = document.getElementById('modal-master-btn');

  // Cronômetro
  const timerModeBadge = document.getElementById('timer-mode-badge');
  const timerLabel = document.getElementById('timer-label');
  const timerDisplay = document.getElementById('timer-display');
  const timerSubinfo = document.getElementById('timer-subinfo');
  const timerStartBtn = document.getElementById('timer-start-btn');
  const timerPauseBtn = document.getElementById('timer-pause-btn');
  const timerResetBtn = document.getElementById('timer-reset-btn');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const startTabataBtn = document.getElementById('start-tabata-btn');
  const startEmomBtn = document.getElementById('start-emom-btn');

  const miniTimerBar = document.getElementById('mini-timer-bar');
  const miniTimerLabel = document.getElementById('mini-timer-label');
  const miniTimerValue = document.getElementById('mini-timer-value');
  const miniTimerOpen = document.getElementById('mini-timer-open');
  const miniTimerStop = document.getElementById('mini-timer-stop');

  let activeTab = 'workout';

  function updateHeaderBadges() {
    const totalSkills = PROGRESSION_PATHS.reduce((acc, path) => acc + path.steps.length, 0);
    streakBadge.textContent = `🔥 ${state.completedWorkouts} treino${state.completedWorkouts === 1 ? '' : 's'}`;
    masteredBadge.textContent = `🏆 ${state.masteredIds.length}/${totalSkills} dominados`;
  }

  function switchTab(tabName) {
    activeTab = tabName;
    tabBtns.forEach(btn => {
      const isSelected = btn.getAttribute('data-tab') === tabName;
      btn.className = isSelected
        ? 'tab-btn px-4 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-slate-950 transition shrink-0'
        : 'tab-btn px-4 py-2 rounded-lg text-sm font-semibold bg-slate-900 text-slate-300 hover:bg-slate-800 transition shrink-0';
    });
    tabPanels.forEach(panel => {
      panel.classList.toggle('is-hidden', panel.id !== `tab-${tabName}`);
    });
    updateMiniTimerVisibility();
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
  });

  // --- MODO DE EQUIPAMENTO & TREINO DIÁRIO ---
  function syncModeUI() {
    const isEquip = state.mode === 'equip';
    modeNoneBtn.className = !isEquip
      ? 'py-2.5 px-3 rounded-xl text-sm font-semibold border transition bg-amber-500/15 border-amber-400 text-amber-300'
      : 'py-2.5 px-3 rounded-xl text-sm font-semibold border transition bg-slate-950 border-slate-800 text-slate-300';
    modeEquipBtn.className = isEquip
      ? 'py-2.5 px-3 rounded-xl text-sm font-semibold border transition bg-amber-500/15 border-amber-400 text-amber-300'
      : 'py-2.5 px-3 rounded-xl text-sm font-semibold border transition bg-slate-950 border-slate-800 text-slate-300';

    equipmentSelector.classList.toggle('is-hidden', !isEquip);
    equipChecks.forEach(chk => {
      chk.checked = state.selectedEquip.includes(chk.value);
    });
  }

  function getAvailableExercises(block) {
    return DAILY_EXERCISES.filter(ex => {
      if (ex.block !== block) return false;
      if (state.mode === 'none') {
        return ex.equipment.includes('none');
      }
      return ex.equipment.includes('none') || ex.equipment.some(eq => state.selectedEquip.includes(eq));
    });
  }

  function pickSmartExercise(block, excludeIds = []) {
    const pool = getAvailableExercises(block);
    if (pool.length === 0) return null;

    let preferred = pool.filter(ex => !excludeIds.includes(ex.id) && !state.lastExerciseIds.includes(ex.id));
    if (state.mode === 'equip') {
      const equipOnly = preferred.filter(ex => !ex.equipment.includes('none'));
      if (equipOnly.length > 0) preferred = equipOnly;
    }

    const candidates = preferred.length > 0 ? preferred : pool.filter(ex => !excludeIds.includes(ex.id));
    const finalPool = candidates.length > 0 ? candidates : pool;
    return finalPool[Math.floor(Math.random() * finalPool.length)];
  }

  function generateDailyWorkout() {
    const blocks = [
      { key: 'warmup', label: '1. Aquecimento & Mobilidade' },
      { key: 'push', label: '2. Força — Empurrar' },
      { key: 'pull', label: '3. Força — Puxar' },
      { key: 'legs', label: '4. Força — Pernas' },
      { key: 'core', label: '5. Core & Estabilidade' },
      { key: 'finisher', label: '6. Finalizador' }
    ];

    const usedIds = [];
    currentWorkout = blocks
      .map(b => {
        const picked = pickSmartExercise(b.key, usedIds);
        if (picked) usedIds.push(picked.id);
        return picked ? { ...picked, blockLabel: b.label, done: false } : null;
      })
      .filter(Boolean);

    renderDailyWorkout();
  }

  function renderDailyWorkout() {
    const today = new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long'
    });
    workoutDateLabel.textContent = `${today} • ${state.mode === 'none' ? 'Peso do corpo livre' : 'Com equipamentos selecionados'}`;

    dailyWorkoutContainer.innerHTML = currentWorkout
      .map((ex, idx) => `
        <article class="bg-slate-900 border ${ex.done ? 'border-emerald-500/60 bg-emerald-950/10' : 'border-slate-800'} rounded-2xl p-5 space-y-3 transition">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-400">${ex.blockLabel}</span>
              <h3 class="font-display text-lg font-bold text-white mt-0.5 ${ex.done ? 'line-through text-slate-400' : ''}">${ex.name}</h3>
            </div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-200">
              ${ex.prescription}
            </span>
          </div>

          <div class="flex flex-wrap gap-2 pt-1">
            <button type="button" data-action="demo" data-idx="${idx}"
              class="bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold px-3 py-2 rounded-lg transition">
              👁️ Como executar
            </button>
            <button type="button" data-action="timer" data-idx="${idx}"
              class="bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 text-xs font-semibold px-3 py-2 rounded-lg transition">
              ⏱️ Descanso (${ex.restSeconds}s)
            </button>
            <button type="button" data-action="swap" data-idx="${idx}"
              class="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold px-3 py-2 rounded-lg transition">
              🔀 Trocar
            </button>
            <button type="button" data-action="toggle" data-idx="${idx}"
              class="ml-auto ${ex.done ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'} text-xs font-bold px-3 py-2 rounded-lg transition">
              ${ex.done ? '✔ Feito' : 'Marcar feito'}
            </button>
          </div>
        </article>
      `)
      .join('');
  }

  dailyWorkoutContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const idx = Number(btn.getAttribute('data-idx'));
    const action = btn.getAttribute('data-action');
    const item = currentWorkout[idx];
    if (!item) return;

    if (action === 'demo') {
      openExerciseModal({
        badge: item.blockLabel,
        title: item.name,
        diagramKey: item.diagram,
        steps: item.steps,
        mistake: item.mistake,
        target: `Meta: ${item.prescription}`,
        equip: `Equipamento: ${item.equipment.includes('none') ? 'Sem equipamento' : item.equipment.join(', ')}`,
        timerSeconds: item.restSeconds,
        masterableId: null
      });
    } else if (action === 'timer') {
      startCountdown(item.restSeconds, `Descanso • ${item.name}`);
      switchTab('timer');
    } else if (action === 'swap') {
      const currentIds = currentWorkout.map(x => x.id);
      const replacement = pickSmartExercise(item.block, currentIds);
      if (replacement) {
        currentWorkout[idx] = { ...replacement, blockLabel: item.blockLabel, done: false };
        renderDailyWorkout();
      }
    } else if (action === 'toggle') {
      currentWorkout[idx].done = !currentWorkout[idx].done;
      renderDailyWorkout();
    }
  });

  modeNoneBtn.addEventListener('click', () => {
    state.mode = 'none';
    saveState();
    syncModeUI();
    generateDailyWorkout();
  });

  modeEquipBtn.addEventListener('click', () => {
    state.mode = 'equip';
    saveState();
    syncModeUI();
    generateDailyWorkout();
  });

  equipChecks.forEach(chk => {
    chk.addEventListener('change', () => {
      const checked = Array.from(equipChecks).filter(c => c.checked).map(c => c.value);
      state.selectedEquip = checked.length > 0 ? checked : ['barra'];
      syncModeUI();
      saveState();
      generateDailyWorkout();
    });
  });

  regenerateWorkoutBtn.addEventListener('click', generateDailyWorkout);

  finishWorkoutBtn.addEventListener('click', () => {
    state.completedWorkouts += 1;
    state.lastExerciseIds = currentWorkout.map(ex => ex.id);
    saveState();
    finishWorkoutBtn.textContent = '🎉 Treino Salvo! Bom descanso';
    setTimeout(() => {
      finishWorkoutBtn.textContent = '✅ Concluir Treino de Hoje';
    }, 2500);
  });

  // --- ÁRVORE DE PROGRESSÕES ---
  function renderSkillFilterBar() {
    const filters = [{ id: 'all', name: 'Todas as Trilhas', icon: '🌳' }, ...PROGRESSION_PATHS];
    skillFilterBar.innerHTML = filters
      .map(f => {
        const active = selectedSkillFilter === f.id;
        return `<button type="button" data-skill="${f.id}"
          class="px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 border transition ${
            active
              ? 'bg-amber-500/20 border-amber-400 text-amber-300'
              : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
          }">
          ${f.icon} ${f.name}
        </button>`;
      })
      .join('');
  }

  skillFilterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-skill]');
    if (!btn) return;
    selectedSkillFilter = btn.getAttribute('data-skill');
    renderSkillFilterBar();
    renderProgressionTree();
  });

  function renderProgressionTree() {
    const paths = selectedSkillFilter === 'all'
      ? PROGRESSION_PATHS
      : PROGRESSION_PATHS.filter(p => p.id === selectedSkillFilter);

    progressionTreeContainer.innerHTML = paths
      .map(path => {
        const masteredCount = path.steps.filter(s => state.masteredIds.includes(s.id)).length;

        const nodesHtml = path.steps
          .map((step, index) => {
            const isMastered = state.masteredIds.includes(step.id);
            const prevStep = index > 0 ? path.steps[index - 1] : null;
            const isUnlocked = index === 0 || (prevStep && state.masteredIds.includes(prevStep.id)) || isMastered;
            const prLabel = formatPrLabel(state.personalRecords[step.id]);

            let cardStyle = 'bg-slate-950/70 border-slate-800/80 opacity-75';
            let statusIcon = '🔒';
            if (isMastered) {
              cardStyle = 'bg-emerald-950/20 border-emerald-500/60';
              statusIcon = '🏆';
            } else if (isUnlocked) {
              cardStyle = 'bg-slate-900 border-amber-500/50';
              statusIcon = '⚡';
            }

            return `
              <div class="relative pl-6 border-l-2 ${isMastered ? 'border-emerald-500' : isUnlocked ? 'border-amber-400' : 'border-slate-800'}">
                <span class="absolute -left-2.5 top-4 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                  isMastered ? 'bg-emerald-500 text-slate-950' : isUnlocked ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }">${index + 1}</span>

                <div class="border rounded-xl p-4 ${cardStyle} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div class="flex flex-wrap items-center gap-2 text-xs font-semibold ${isMastered ? 'text-emerald-300' : isUnlocked ? 'text-amber-300' : 'text-slate-400'}">
                      <span>${statusIcon} ${step.level}</span>
                      <span>•</span>
                      <span>${step.equip}</span>
                      ${prLabel ? `<span class="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200">🏅 ${prLabel}</span>` : ''}
                    </div>
                    <h4 class="font-display text-base font-bold text-white mt-0.5">${step.name}</h4>
                    <p class="text-xs text-slate-400 mt-0.5">Meta de domínio: ${step.target}</p>
                  </div>

                  <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" data-tree-demo="${path.id}:${step.id}"
                      class="bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold px-3 py-2 rounded-lg transition">
                      👁️ Execução
                    </button>
                    <button type="button" data-tree-pr="${path.id}:${step.id}"
                      class="bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-200 text-xs font-semibold px-3 py-2 rounded-lg transition">
                      🏅 PR
                    </button>
                    <button type="button" data-tree-master="${step.id}"
                      class="${isMastered ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'} text-xs font-bold px-3 py-2 rounded-lg transition">
                      ${isMastered ? 'Dominado' : 'Dominar'}
                    </button>
                  </div>
                </div>
              </div>
            `;
          })
          .join('');

        return `
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h3 class="font-display text-xl font-bold text-white">${path.icon} ${path.name}</h3>
                <p class="text-xs text-slate-400">${path.description}</p>
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-emerald-300">
                ${masteredCount}/${path.steps.length} etapas
              </span>
            </div>
            <div class="space-y-3 pt-1">${nodesHtml}</div>
          </div>
        `;
      })
      .join('');
  }

  function toggleMastered(stepId) {
    if (state.masteredIds.includes(stepId)) {
      state.masteredIds = state.masteredIds.filter(id => id !== stepId);
    } else {
      state.masteredIds.push(stepId);
    }
    saveState();
    renderProgressionTree();
  }

  function findStepByCompositeId(compositeId) {
    const [pathId, stepId] = (compositeId || '').split(':');
    const path = PROGRESSION_PATHS.find(p => p.id === pathId);
    const step = path?.steps.find(s => s.id === stepId);
    return { path, step };
  }

  progressionTreeContainer.addEventListener('click', (e) => {
    const demoBtn = e.target.closest('button[data-tree-demo]');
    if (demoBtn) {
      const { path, step } = findStepByCompositeId(demoBtn.getAttribute('data-tree-demo'));
      if (step && path) {
        openExerciseModal({
          badge: `${path.name} • ${step.level}`,
          title: step.name,
          diagramKey: step.diagram,
          steps: step.steps,
          mistake: step.mistake,
          target: `Meta: ${step.target}`,
          equip: `Equipamento: ${step.equip}`,
          timerSeconds: 30,
          masterableId: step.id,
          focusPr: false
        });
      }
      return;
    }

    const prBtn = e.target.closest('button[data-tree-pr]');
    if (prBtn) {
      const { path, step } = findStepByCompositeId(prBtn.getAttribute('data-tree-pr'));
      if (step && path) {
        openExerciseModal({
          badge: `${path.name} • ${step.level}`,
          title: step.name,
          diagramKey: step.diagram,
          steps: step.steps,
          mistake: step.mistake,
          target: `Meta: ${step.target}`,
          equip: `Equipamento: ${step.equip}`,
          timerSeconds: 30,
          masterableId: step.id,
          focusPr: true
        });
      }
      return;
    }

    const masterBtn = e.target.closest('button[data-tree-master]');
    if (masterBtn) {
      toggleMastered(masterBtn.getAttribute('data-tree-master'));
    }
  });

  // --- MODAL DE DEMONSTRAÇÃO, PR E COACHING IA ---
  function getStoredAiKey() {
    return localStorage.getItem(AI_KEY_STORAGE) || '';
  }

  function configureAiKey() {
    const currentKey = getStoredAiKey();
    const typed = window.prompt(
      'Cole sua chave da Gemini API (ela ficará salva apenas neste navegador, no localStorage):',
      currentKey
    );
    if (typed !== null) {
      const cleaned = typed.trim();
      if (cleaned) {
        localStorage.setItem(AI_KEY_STORAGE, cleaned);
      } else {
        localStorage.removeItem(AI_KEY_STORAGE);
      }
    }
  }

  async function askAiAboutExercise(exerciseTitle, mistakeText, stepsList) {
    let apiKey = getStoredAiKey();
    if (!apiKey) {
      configureAiKey();
      apiKey = getStoredAiKey();
      if (!apiKey) return;
    }

    const userQuestion = modalAiQuestion.value.trim() ||
      'Me dê 3 dicas práticas de postura, ativação muscular e regressão segura para esse movimento.';

    modalAiResponse.classList.remove('is-hidden');
    modalAiResponse.textContent = 'Analisando biomecânica e montando orientação...';
    modalAiAskBtn.disabled = true;

    const promptText = [
      'Você é um treinador especialista em calistenia e progressões avançadas.',
      `Movimento: ${exerciseTitle}`,
      `Passo a passo base: ${stepsList.join(' | ')}`,
      `Erro comum: ${mistakeText}`,
      `Dúvida do atleta: ${userQuestion}`,
      'Responda em português de forma clara, objetiva e segura, com tópicos curtos.'
    ].join('\n');

    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }]
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error?.message || 'Falha na requisição à IA.');
      }

      const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      modalAiResponse.textContent = answer || 'Não foi possível gerar uma resposta agora.';
    } catch (err) {
      modalAiResponse.textContent = `Não foi possível consultar a IA: ${err.message}`;
    } finally {
      modalAiAskBtn.disabled = false;
    }
  }

  function refreshModalPr(stepId, targetText) {
    const existingPr = state.personalRecords[stepId];
    modalPrCurrent.textContent = existingPr ? `Atual: ${formatPrLabel(existingPr)}` : 'Sem PR registrado';
    modalPrValue.value = existingPr ? existingPr.value : '';
    modalPrUnit.value = existingPr ? existingPr.unit : inferDefaultUnit(targetText);
  }

  function openExerciseModal({
    badge,
    title,
    diagramKey,
    steps,
    mistake,
    target,
    equip,
    timerSeconds,
    masterableId,
    focusPr = false
  }) {
    modalBadge.textContent = badge;
    modalTitle.textContent = title;
    modalDiagram.innerHTML = DIAGRAMS[diagramKey] || DIAGRAMS.push;
    modalSteps.innerHTML = steps.map(s => `<li>${s}</li>`).join('');
    modalMistake.textContent = mistake;
    modalTarget.textContent = target;
    modalEquip.textContent = equip;

    modalAiQuestion.value = '';
    modalAiResponse.textContent = '';
    modalAiResponse.classList.add('is-hidden');
    modalAiKeyBtn.onclick = configureAiKey;
    modalAiAskBtn.onclick = () => askAiAboutExercise(title, mistake, steps);

    modalTimerBtn.onclick = () => {
      closeExerciseModal();
      startCountdown(timerSeconds || 45, title);
      switchTab('timer');
    };

    if (masterableId) {
      const isMastered = state.masteredIds.includes(masterableId);
      modalMasterBtn.classList.remove('is-hidden');
      modalMasterBtn.textContent = isMastered ? '✔ Já Dominado (Desmarcar)' : '🏆 Marcar como Dominado';
      modalMasterBtn.onclick = () => {
        toggleMastered(masterableId);
        closeExerciseModal();
      };

      modalPrBox.classList.remove('is-hidden');
      refreshModalPr(masterableId, target);
      modalSavePrBtn.onclick = () => {
        const numericVal = Number(modalPrValue.value);
        if (!numericVal || numericVal <= 0) {
          modalPrValue.focus();
          return;
        }
        state.personalRecords[masterableId] = {
          value: numericVal,
          unit: modalPrUnit.value === 's' ? 's' : 'reps'
        };
        saveState();
        renderProgressionTree();
        refreshModalPr(masterableId, target);
        modalSavePrBtn.textContent = 'Salvo!';
        setTimeout(() => {
          modalSavePrBtn.textContent = 'Salvar PR';
        }, 1400);
      };
    } else {
      modalMasterBtn.classList.add('is-hidden');
      modalMasterBtn.onclick = null;
      modalPrBox.classList.add('is-hidden');
      modalSavePrBtn.onclick = null;
    }

    exerciseModal.classList.remove('is-hidden');

    if (focusPr && masterableId) {
      setTimeout(() => modalPrValue.focus(), 50);
    }
  }

  function closeExerciseModal() {
    exerciseModal.classList.add('is-hidden');
  }

  closeModalBtn.addEventListener('click', closeExerciseModal);
  exerciseModal.addEventListener('click', (e) => {
    if (e.target === exerciseModal) closeExerciseModal();
  });

  // --- CRONÔMETRO DE TREINO (WEB AUDIO + TABATA + EMOM) ---
  let timerInterval = null;
  let remainingSeconds = 60;
  let initialSeconds = 60;
  let isRunning = false;
  let protocolMode = 'countdown';
  let protocolRound = 1;
  let tabataPhase = 'work';

  function playBeep(freq = 880, duration = 0.18) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = 0.12;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignora bloqueio de áudio se o navegador exigir interação extra
    }
  }

  function formatTime(totalSec) {
    const mins = Math.floor(Math.max(0, totalSec) / 60);
    const secs = Math.max(0, totalSec) % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateMiniTimerVisibility() {
    const shouldShow = isRunning && activeTab !== 'timer';
    miniTimerBar.classList.toggle('is-hidden', !shouldShow);
  }

  function renderTimer() {
    const formatted = formatTime(remainingSeconds);
    timerDisplay.textContent = formatted;
    miniTimerValue.textContent = formatted;
    miniTimerLabel.textContent = timerLabel.textContent;
    updateMiniTimerVisibility();
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    updateMiniTimerVisibility();
  }

  function tickTimer() {
    if (remainingSeconds > 1) {
      remainingSeconds -= 1;
      if (remainingSeconds <= 3) playBeep(660, 0.1);
      renderTimer();
      return;
    }

    playBeep(1040, 0.35);

    if (protocolMode === 'tabata') {
      if (tabataPhase === 'work') {
        tabataPhase = 'rest';
        remainingSeconds = 10;
        timerModeBadge.textContent = `Tabata • Round ${protocolRound}/8`;
        timerLabel.textContent = '😮‍💨 Descanso (10s)';
      } else if (protocolRound < 8) {
        protocolRound += 1;
        tabataPhase = 'work';
        remainingSeconds = 20;
        timerModeBadge.textContent = `Tabata • Round ${protocolRound}/8`;
        timerLabel.textContent = '🔥 Esforço Máximo (20s)';
      } else {
        stopTimer();
        remainingSeconds = 0;
        timerLabel.textContent = '🏆 Tabata Concluído!';
      }
      renderTimer();
      return;
    }

    if (protocolMode === 'emom') {
      if (protocolRound < 10) {
        protocolRound += 1;
        remainingSeconds = 60;
        timerModeBadge.textContent = `EMOM • Minuto ${protocolRound}/10`;
        timerLabel.textContent = '⚡ Novo Minuto — Execute sua série!';
        renderTimer();
      } else {
        stopTimer();
        remainingSeconds = 0;
        timerLabel.textContent = '🏆 EMOM 10 min Concluído!';
        renderTimer();
      }
      return;
    }

    stopTimer();
    remainingSeconds = 0;
    timerLabel.textContent = '✅ Tempo finalizado!';
    renderTimer();
  }

  function runTimer() {
    if (isRunning) return;
    if (remainingSeconds <= 0) remainingSeconds = initialSeconds || 60;
    isRunning = true;
    timerInterval = setInterval(tickTimer, 1000);
    renderTimer();
  }

  function startCountdown(seconds, labelText) {
    stopTimer();
    protocolMode = 'countdown';
    initialSeconds = seconds;
    remainingSeconds = seconds;
    timerModeBadge.textContent = 'Descanso / Isometria';
    timerLabel.textContent = labelText || `Contagem de ${seconds}s`;
    timerSubinfo.textContent = 'Aviso sonoro nos últimos 3 segundos';
    runTimer();
  }

  timerStartBtn.addEventListener('click', runTimer);
  timerPauseBtn.addEventListener('click', stopTimer);
  timerResetBtn.addEventListener('click', () => {
    stopTimer();
    protocolMode = 'countdown';
    remainingSeconds = initialSeconds;
    timerModeBadge.textContent = 'Descanso / Isometria';
    timerLabel.textContent = 'Pronto para iniciar';
    renderTimer();
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const secs = Number(btn.getAttribute('data-seconds'));
      startCountdown(secs, `Cronômetro • ${secs}s`);
    });
  });

  startTabataBtn.addEventListener('click', () => {
    stopTimer();
    protocolMode = 'tabata';
    protocolRound = 1;
    tabataPhase = 'work';
    initialSeconds = 20;
    remainingSeconds = 20;
    timerModeBadge.textContent = 'Tabata • Round 1/8';
    timerLabel.textContent = '🔥 Esforço Máximo (20s)';
    timerSubinfo.textContent = '8 ciclos de 20s ativo + 10s descanso';
    runTimer();
  });

  startEmomBtn.addEventListener('click', () => {
    stopTimer();
    protocolMode = 'emom';
    protocolRound = 1;
    initialSeconds = 60;
    remainingSeconds = 60;
    timerModeBadge.textContent = 'EMOM • Minuto 1/10';
    timerLabel.textContent = '⚡ Execute sua série no início do minuto';
    timerSubinfo.textContent = 'O tempo restante do minuto é o seu descanso';
    runTimer();
  });

  miniTimerOpen.addEventListener('click', () => switchTab('timer'));
  miniTimerStop.addEventListener('click', () => {
    stopTimer();
    renderTimer();
  });

  // Inicialização
  updateHeaderBadges();
  syncModeUI();
  generateDailyWorkout();
  renderSkillFilterBar();
  renderProgressionTree();
  renderTimer();
});