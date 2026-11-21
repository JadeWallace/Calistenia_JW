// Ilustrações SVG específicas para cada tipo de movimento na calistenia
const DIAGRAMS = {
  push: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="15" y1="98" x2="245" y2="98" class="text-slate-700"/>
    <circle cx="192" cy="54" r="9" class="text-amber-400"/>
    <line x1="183" y1="58" x2="92" y2="76" class="text-amber-300"/>
    <line x1="92" y1="76" x2="36" y2="94" class="text-slate-300"/>
    <line x1="172" y1="61" x2="172" y2="96" class="text-emerald-400"/>
    <text x="130" y="18" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Cotovelos ~45° • Tronco pranchado • Peito ao solo</text>
  </svg>`,

  planche: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="15" y1="100" x2="245" y2="100" class="text-slate-700"/>
    <circle cx="204" cy="46" r="9" class="text-amber-400"/>
    <line x1="195" y1="49" x2="55" y2="49" class="text-amber-300"/>
    <line x1="168" y1="49" x2="178" y2="98" class="text-emerald-400"/>
    <path d="M178 49 L178 16" class="text-sky-400" stroke-dasharray="3 3"/>
    <text x="130" y="18" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Ombros à frente das mãos • Braços travados • Corpo horizontal</text>
  </svg>`,

  pull: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="40" y1="16" x2="220" y2="16" class="text-slate-500" stroke-width="4"/>
    <line x1="112" y1="16" x2="122" y2="42" class="text-emerald-400"/>
    <line x1="148" y1="16" x2="138" y2="42" class="text-emerald-400"/>
    <circle cx="130" cy="30" r="8" class="text-amber-400"/>
    <line x1="130" y1="39" x2="130" y2="78" class="text-amber-300"/>
    <line x1="130" y1="78" x2="125" y2="102" class="text-slate-300"/>
    <text x="130" y="112" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Escápulas para baixo • Peito subindo até a barra</text>
  </svg>`,

  frontLever: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="40" y1="14" x2="220" y2="14" class="text-slate-500" stroke-width="4"/>
    <line x1="155" y1="14" x2="176" y2="56" class="text-emerald-400"/>
    <circle cx="196" cy="56" r="8" class="text-amber-400"/>
    <line x1="187" y1="56" x2="52" y2="56" class="text-amber-300"/>
    <text x="130" y="96" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Costas paralelas ao chão • Braços retos • Quadril alto</text>
  </svg>`,

  flag: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="62" y1="10" x2="62" y2="105" class="text-slate-500" stroke-width="5"/>
    <line x1="62" y1="34" x2="106" y2="48" class="text-emerald-400"/>
    <line x1="62" y1="76" x2="106" y2="56" class="text-sky-400"/>
    <circle cx="106" cy="35" r="8" class="text-amber-400"/>
    <line x1="106" y1="48" x2="228" y2="48" class="text-amber-300"/>
    <text x="155" y="96" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Mão superior puxa • Mão inferior empurra • Alinhamento lateral</text>
  </svg>`,

  sidePlank: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="20" y1="98" x2="240" y2="98" class="text-slate-700"/>
    <line x1="95" y1="66" x2="95" y2="97" class="text-emerald-400"/>
    <circle cx="185" cy="36" r="8" class="text-amber-400"/>
    <line x1="177" y1="40" x2="52" y2="96" class="text-amber-300"/>
    <line x1="95" y1="66" x2="95" y2="30" class="text-sky-400"/>
    <text x="130" y="18" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Apoio lateral • Quadril elevado • Sem girar o tronco</text>
  </svg>`,

  muscleUp: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="40" y1="46" x2="220" y2="46" class="text-slate-500" stroke-width="4"/>
    <path d="M130 88 Q155 55 130 22" class="text-sky-400" stroke-dasharray="3 3"/>
    <circle cx="130" cy="24" r="8" class="text-amber-400"/>
    <line x1="130" y1="33" x2="130" y2="68" class="text-amber-300"/>
    <line x1="115" y1="46" x2="122" y2="38" class="text-emerald-400"/>
    <line x1="145" y1="46" x2="138" y2="38" class="text-emerald-400"/>
    <text x="130" y="108" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Puxada explosiva • Transição à frente • Trava no alto</text>
  </svg>`,

  dip: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="75" y1="54" x2="185" y2="54" class="text-slate-500" stroke-width="4"/>
    <line x1="115" y1="54" x2="124" y2="72" class="text-emerald-400"/>
    <circle cx="142" cy="52" r="8" class="text-amber-400"/>
    <line x1="136" y1="58" x2="112" y2="88" class="text-amber-300"/>
    <text x="130" y="108" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Tronco levemente inclinado • Ombro abaixo do cotovelo</text>
  </svg>`,

  handstand: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="30" y1="100" x2="230" y2="100" class="text-slate-700"/>
    <line x1="130" y1="100" x2="130" y2="66" class="text-emerald-400"/>
    <circle cx="130" cy="76" r="8" class="text-amber-400"/>
    <line x1="130" y1="66" x2="130" y2="16" class="text-amber-300"/>
    <text x="130" y="112" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Empurre o solo • Olhar entre as mãos • Quadril alinhado</text>
  </svg>`,

  pike: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="20" y1="98" x2="240" y2="98" class="text-slate-700"/>
    <line x1="115" y1="36" x2="55" y2="96" class="text-amber-300"/>
    <line x1="115" y1="36" x2="175" y2="96" class="text-amber-300"/>
    <circle cx="168" cy="74" r="8" class="text-amber-400"/>
    <text x="130" y="18" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Quadril alto em "V" • Cabeça à frente das mãos</text>
  </svg>`,

  squat: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="25" y1="98" x2="235" y2="98" class="text-slate-700"/>
    <circle cx="122" cy="30" r="8" class="text-amber-400"/>
    <line x1="122" y1="39" x2="112" y2="68" class="text-amber-300"/>
    <line x1="112" y1="68" x2="144" y2="72" class="text-emerald-400"/>
    <line x1="144" y1="72" x2="134" y2="97" class="text-slate-300"/>
    <line x1="112" y1="68" x2="195" y2="68" class="text-sky-400"/>
    <text x="130" y="16" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Calcanhar firme • Joelho no eixo do pé • Coluna neutra</text>
  </svg>`,

  hollow: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="15" y1="96" x2="245" y2="96" class="text-slate-700"/>
    <path d="M55 68 Q130 92 205 64" class="text-amber-300"/>
    <circle cx="62" cy="54" r="8" class="text-amber-400"/>
    <line x1="70" y1="58" x2="42" y2="48" class="text-emerald-400"/>
    <text x="130" y="20" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Lombar colada no chão • Ombros e pernas elevados</text>
  </svg>`,

  vsit: `<svg viewBox="0 0 260 115" class="w-full max-w-xs h-28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
    <line x1="20" y1="98" x2="240" y2="98" class="text-slate-700"/>
    <line x1="120" y1="72" x2="120" y2="97" class="text-emerald-400"/>
    <circle cx="105" cy="40" r="8" class="text-amber-400"/>
    <line x1="110" y1="47" x2="120" y2="74" class="text-amber-300"/>
    <line x1="120" y1="74" x2="192" y2="28" class="text-sky-400"/>
    <text x="130" y="16" text-anchor="middle" fill="#94a3b8" stroke="none" font-size="10">Braços travados • Quadril suspenso • Pernas em "V" alto</text>
  </svg>`
};

// 9 Trilhas de Progressão (54 movimentos no total: do básico ao elite)
const PROGRESSION_PATHS = [
  {
    id: 'planche',
    name: 'Planche (Prancha Aérea)',
    icon: '🦅',
    description: 'Força extrema de deltoide anterior, bíceps distal, escápulas e core.',
    steps: [
      {
        id: 'pl_1',
        level: 'Nível 1 • Base',
        name: 'Prancha Escapular (Scapular Push-up Hold)',
        target: '4x 30s',
        equip: 'Sem equipamento',
        diagram: 'push',
        steps: [
          'Entre na posição de prancha alta com mãos alinhadas abaixo dos ombros.',
          'Empurre o chão com força arredondando a parte alta das costas (protração escapular).',
          'Contraia glúteos e abdômen sem deixar o quadril cair.'
        ],
        mistake: 'Deixar as escápulas colapsarem ("afundar" entre os ombros).'
      },
      {
        id: 'pl_2',
        level: 'Nível 2 • Fundamento',
        name: 'Planche Lean (Inclinação Frontal)',
        target: '4x 20s',
        equip: 'Sem equipamento',
        diagram: 'planche',
        steps: [
          'Com braços totalmente estendidos e cotovelos travados, gire os dedos levemente para fora.',
          'Incline os ombros para frente além da linha dos punhos mantendo a protração.',
          'Segure a tensão constante sem dobrar os cotovelos.'
        ],
        mistake: 'Dobrar os cotovelos para aliviar a carga nos ombros.'
      },
      {
        id: 'pl_3',
        level: 'Nível 3 • Intermediário',
        name: 'Frog Stand / Tuck Planche',
        target: '5x 12–15s',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'planche',
        steps: [
          'Apoie as mãos firmes no chão ou paralelas e incline o tronco à frente.',
          'Tire os pés do chão trazendo os joelhos bem próximos ao peito.',
          'Mantenha o quadril na altura dos ombros.'
        ],
        mistake: 'Subir demais o quadril ou olhar para trás.'
      },
      {
        id: 'pl_4',
        level: 'Nível 4 • Avançado I',
        name: 'Advanced Tuck Planche',
        target: '5x 10s',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'planche',
        steps: [
          'A partir da Tuck Planche, abra o ângulo do quadril até que as costas fiquem retas e paralelas ao chão.',
          'Aumente a inclinação dos ombros para compensar o centro de gravidade.'
        ],
        mistake: 'Arredondar a lombar em vez de manter as costas planas.'
      },
      {
        id: 'pl_5',
        level: 'Nível 5 • Avançado II',
        name: 'Straddle Planche',
        target: '5x 6–8s',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'planche',
        steps: [
          'Estenda as pernas bem abertas (espacate aéreo)
