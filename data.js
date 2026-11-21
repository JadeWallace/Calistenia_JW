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
          'Estenda as pernas bem abertas (espacate aéreo) mantendo o corpo horizontal.',
          'Trave glúteos, quadríceps e ponta dos pés.'
        ],
        mistake: 'Deixar os pés abaixo da linha dos ombros.'
      },
      {
        id: 'pl_6',
        level: 'Nível 6 • Elite',
        name: 'Full Planche',
        target: 'Sustentação limpa 3–5s+',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'planche',
        steps: [
          'Corpo completamente estendido, pernas unidas e paralelo ao solo.',
          'Sustente apenas sobre as mãos com braços 100% retos.'
        ],
        mistake: 'Perder a retroversão pélvica (arquear a lombar).'
      }
    ]
  },
  {
    id: 'front_lever',
    name: 'Front Lever',
    icon: '🦇',
    description: 'Domínio de puxada horizontal com braços estendidos, dorsais e core.',
    steps: [
      {
        id: 'fl_1',
        level: 'Nível 1 • Base',
        name: 'Active Dead Hang (Suspensão Ativa)',
        target: '4x 30s',
        equip: 'Barra Fixa',
        diagram: 'pull',
        steps: [
          'Segure a barra na largura dos ombros com pegada pronada.',
          'Puxe os ombros para baixo (depressão escapular) afastando-os das orelhas.'
        ],
        mistake: 'Ficar pendurado passivamente com ombros colados nas orelhas.'
      },
      {
        id: 'fl_2',
        level: 'Nível 2 • Fundamento',
        name: 'Inverted Hang & Skin the Cat',
        target: '4x 5 reps',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'hollow',
        steps: [
          'Suba as pernas passando por baixo da barra até ficar invertido.',
          'Controle a descida lentamente usando as dorsais.'
        ],
        mistake: 'Descer rápido usando impulso.'
      },
      {
        id: 'fl_3',
        level: 'Nível 3 • Intermediário',
        name: 'Tuck Front Lever',
        target: '5x 15s',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Com braços totalmente estendidos, empurre a barra para baixo como se fosse um pulldown.',
          'Mantenha as costas paralelas ao chão com joelhos recolhidos.'
        ],
        mistake: 'Dobrar os cotovelos durante a sustentação.'
      },
      {
        id: 'fl_4',
        level: 'Nível 4 • Avançado I',
        name: 'Advanced Tuck / One-Leg Front Lever',
        target: '5x 10s',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Afaste os joelhos do peito até alinhar o tronco ou estenda uma perna à frente.',
          'Mantenha o quadril na mesma altura dos ombros.'
        ],
        mistake: 'Deixar o quadril cair abaixo da linha dos ombros.'
      },
      {
        id: 'fl_5',
        level: 'Nível 5 • Avançado II',
        name: 'Straddle Front Lever',
        target: '5x 6–8s',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Estenda ambas as pernas abertas alinhadas com o tronco.',
          'Pressione a barra para baixo ativando ao máximo as dorsais.'
        ],
        mistake: 'Perder a tensão nas escápulas.'
      },
      {
        id: 'fl_6',
        level: 'Nível 6 • Elite',
        name: 'Full Front Lever',
        target: 'Sustentação limpa 5s+',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Corpo reto, pernas unidas e horizontal abaixo da barra.',
          'Braços estendidos, ombros deprimidos e glúteos contraídos.'
        ],
        mistake: 'Quebrar a linha do quadril ("efeito banana").'
      }
    ]
  },
  {
    id: 'back_lever',
    name: 'Back Lever',
    icon: '🌙',
    description: 'Extensão de ombros sob tensão, mobilidade articular e força posterior.',
    steps: [
      {
        id: 'bl_1',
        level: 'Nível 1 • Base',
        name: 'German Hang Parcial / Mobilidade de Ombro',
        target: '3x 20s suaves',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'pull',
        steps: [
          'Segure a barra com pegada pronada e leve suavemente o tronco à frente/baixo sem forçar a articulação.',
          'Aqueça bem antes de colocar carga.'
        ],
        mistake: 'Forçar amplitude fria ou sentir fisgada na parte anterior do ombro.'
      },
      {
        id: 'bl_2',
        level: 'Nível 2 • Fundamento',
        name: 'Skin the Cat Controlado',
        target: '4x 4–5 reps lentas',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'hollow',
        steps: [
          'Eleve os joelhos, passe por dentro dos braços e desça controladamente até a posição de Back Lever.',
          'Retorne com força de dorsais e abdômen.'
        ],
        mistake: 'Deixar o corpo despencar na passagem.'
      },
      {
        id: 'bl_3',
        level: 'Nível 3 • Intermediário',
        name: 'Tuck Back Lever',
        target: '5x 15s',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Mantenha os braços estendidos e o tronco paralelo ao chão com joelhos recolhidos.',
          'Ative glúteos e abdômen para não arquear a lombar.'
        ],
        mistake: 'Dobrar os cotovelos durante a isometria.'
      },
      {
        id: 'bl_4',
        level: 'Nível 4 • Avançado I',
        name: 'Advanced Tuck / One-Leg Back Lever',
        target: '5x 10s',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Abra o quadril alinhando as costas ou estenda uma perna mantendo a outra recolhida.',
          'Sustente a tensão com cotovelos bloqueados.'
        ],
        mistake: 'Deixar o quadril cair abaixo da linha dos ombros.'
      },
      {
        id: 'bl_5',
        level: 'Nível 5 • Avançado II',
        name: 'Straddle Back Lever',
        target: '4x 6–8s',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Estenda ambas as pernas abertas em posição horizontal.',
          'Mantenha cabeça neutra e tronco estável.'
        ],
        mistake: 'Jogar a cabeça muito para trás forçando o pescoço.'
      },
      {
        id: 'bl_6',
        level: 'Nível 6 • Elite',
        name: 'Full Back Lever',
        target: 'Sustentação limpa 5s+',
        equip: 'Barra Fixa ou Argolas',
        diagram: 'frontLever',
        steps: [
          'Corpo completamente estendido, pernas unidas e alinhadas horizontalmente.',
          'Braços retos e core firme do início ao fim.'
        ],
        mistake: 'Soltar o abdômen e deixar a lombar ceder.'
      }
    ]
  },
  {
    id: 'one_arm_pullup',
    name: 'One-Arm Pull-up (Barra com 1 Braço)',
    icon: '🦾',
    description: 'Força máxima unilateral de puxada, pegada e controle anti-rotação.',
    steps: [
      {
        id: 'oap_1',
        level: 'Nível 1 • Base',
        name: 'Barra Fixa Estrita + Archer Pull-up',
        target: '4x 10 barras • 4x 6 archer',
        equip: 'Barra Fixa',
        diagram: 'pull',
        steps: [
          'Construa base sólida de barras limpas e puxe em direção a uma mão enquanto a outra auxilia.',
          'Controle toda a fase excêntrica.'
        ],
        mistake: 'Usar balanço de quadril para compensar a falta de força.'
      },
      {
        id: 'oap_2',
        level: 'Nível 2 • Fundamento',
        name: 'Barra com Pegada Assimétrica / Toalha',
        target: '4x 6 reps cada lado',
        equip: 'Barra Fixa + Toalha/Fita',
        diagram: 'pull',
        steps: [
          'Segure a barra com uma mão e uma toalha/fita mais baixa com a outra, reduzindo o auxílio da mão secundária.',
          'Suba mantendo o tronco alinhado.'
        ],
        mistake: 'Puxar excessivamente com o braço que segura a toalha.'
      },
      {
        id: 'oap_3',
        level: 'Nível 3 • Intermediário',
        name: 'Negativas de One-Arm Pull-up',
        target: '4x 3 descidas (4–5s)',
        equip: 'Barra Fixa',
        diagram: 'pull',
        steps: [
          'Suba com as duas mãos até o topo, solte uma mão e desça controladamente com um braço só.',
          'Evite travar de uma vez no final da descida.'
        ],
        mistake: 'Descer rápido demais nos últimos centímetros.'
      },
      {
        id: 'oap_4',
        level: 'Nível 4 • Avançado I',
        name: 'One-Arm Lock-off (Isometria no Topo/Meio)',
        target: '4x 6–10s cada braço',
        equip: 'Barra Fixa',
        diagram: 'pull',
        steps: [
          'Suba com auxílio e sustente com um braço só em diferentes ângulos (90° e topo).',
          'Mantenha o ombro ativo e estável.'
        ],
        mistake: 'Deixar o tronco girar sem controle.'
      },
      {
        id: 'oap_5',
        level: 'Nível 5 • Avançado II',
        name: 'One-Arm Pull-up com 1 Dedo / Elástico Leve',
        target: '4x 3–4 reps cada braço',
        equip: 'Barra Fixa',
        diagram: 'pull',
        steps: [
          'Use apenas um dedo de apoio leve ou assistência mínima e faça a puxada completa até passar o queixo.',
          'Foque na tração contínua da dorsal.'
        ],
        mistake: 'Apoiar peso real no dedo auxiliar.'
      },
      {
        id: 'oap_6',
        level: 'Nível 6 • Elite',
        name: 'Full One-Arm Pull-up',
        target: 'Repetição estrita limpa cada lado',
        equip: 'Barra Fixa',
        diagram: 'pull',
        steps: [
          'Inicie da suspensão com um braço, puxe com potência mantendo estabilidade do core e leve o queixo acima da barra.',
          'Desça até extensão controlada.'
        ],
        mistake: 'Chutar as pernas para ganhar impulso na subida.'
      }
    ]
  },
  {
    id: 'human_flag',
    name: 'Bandeira Humana (Human Flag)',
    icon: '🚩',
    description: 'Força lateral de oblíquos, serrátil, ombro inferior e puxada superior.',
    steps: [
      {
        id: 'hf_1',
        level: 'Nível 1 • Base',
        name: 'Prancha Lateral Isométrica',
        target: '3x 40s cada lado',
        equip: 'Sem equipamento',
        diagram: 'sidePlank',
        steps: [
          'Apoie o antebraço no chão e eleve o quadril formando uma linha reta.',
          'Sustente sem deixar a pelve girar.'
        ],
        mistake: 'Deixar o quadril cair em direção ao solo.'
      },
      {
        id: 'hf_2',
        level: 'Nível 2 • Fundamento',
        name: 'Suporte Vertical na Barra (Flag Support)',
        target: '4x 15s cada lado',
        equip: 'Barra Vertical / Espaldar',
        diagram: 'flag',
        steps: [
          'Segure a barra vertical com a mão de cima em pronação e a de baixo empurrando.',
          'Tire os pés do chão mantendo o corpo inclinado para cima (quase vertical).'
        ],
        mistake: 'Dobrar o braço de baixo.'
      },
      {
        id: 'hf_3',
        level: 'Nível 3 • Intermediário',
        name: 'Tuck Human Flag',
        target: '4x 10s cada lado',
        equip: 'Barra Vertical / Espaldar',
        diagram: 'flag',
        steps: [
          'Recolha os joelhos em direção ao peito e alinhe o tronco na horizontal.',
          'Puxe fortemente com o braço superior e empurre com o inferior.'
        ],
        mistake: 'Girar o peito para o chão.'
      },
      {
        id: 'hf_4',
        level: 'Nível 4 • Avançado I',
        name: 'Negativas Controladas de Bandeira',
        target: '4x 3 descidas lentas (4s)',
        equip: 'Barra Vertical / Espaldar',
        diagram: 'flag',
        steps: [
          'Suba em suporte vertical e desça o corpo estendido o mais devagar possível.',
          'Foque em frear a descida com os oblíquos e ombros.'
        ],
        mistake: 'Despencar sem controle na metade final.'
      },
      {
        id: 'hf_5',
        level: 'Nível 5 • Avançado II',
        name: 'Straddle Human Flag',
        target: '4x 6s cada lado',
        equip: 'Barra Vertical / Espaldar',
        diagram: 'flag',
        steps: [
          'Abra as pernas para reduzir a alavanca e sustente o corpo paralelo ao solo.',
          'Mantenha ambos os braços firmes e estendidos.'
        ],
        mistake: 'Aproximar demais as mãos na barra.'
      },
      {
        id: 'hf_6',
        level: 'Nível 6 • Elite',
        name: 'Full Human Flag',
        target: 'Sustentação limpa 5s+ cada lado',
        equip: 'Barra Vertical / Espaldar',
        diagram: 'flag',
        steps: [
          'Corpo completamente estendido e pernas juntas na horizontal.',
          'Sustente o alinhamento lateral perfeito.'
        ],
        mistake: 'Perder a trava do braço inferior.'
      }
    ]
  },
  {
    id: 'muscle_up',
    name: 'Muscle-up na Barra',
    icon: '⚡',
    description: 'Potência explosiva de puxada combinada com transição e mergulho.',
    steps: [
      {
        id: 'mu_1',
        level: 'Nível 1 • Base',
        name: 'Remada Australiana (Australian Pull-up)',
        target: '4x 12 reps',
        equip: 'Barra Baixa ou Argolas',
        diagram: 'pull',
        steps: [
          'Corpo inclinado abaixo da barra, calcanhares no solo.',
          'Puxe o peito até tocar a barra fechando as escápulas.'
        ],
        mistake: 'Flexionar o quadril durante a puxada.'
      },
      {
        id: 'mu_2',
        level: 'Nível 2 • Fundamento',
        name: 'Barra Fixa Estrita + Mergulho na Barra Reta',
        target: '4x 8 barras + 4x 10 dips',
        equip: 'Barra Fixa',
        diagram: 'dip',
        steps: [
          'Domine barras fixas limpas passando o queixo e mergulhos profundos acima da barra.',
          'Controle toda a amplitude sem balanço excessivo.'
        ],
        mistake: 'Fazer meias repetições sem estender os braços.'
      },
      {
        id: 'mu_3',
        level: 'Nível 3 • Intermediário',
        name: 'Barra Fixa Explosiva (Chest-to-Bar / Waist)',
        target: '5x 4 reps explosivas',
        equip: 'Barra Fixa',
        diagram: 'pull',
        steps: [
          'Puxe com velocidade máxima levando a barra até o esterno ou umbigo.',
          'Desenhe um leve arco ("C") ao redor da barra.'
        ],
        mistake: 'Puxar reto para cima batendo o peito na barra.'
      },
      {
        id: 'mu_4',
        level: 'Nível 4 • Avançado I',
        name: 'Negativas de Transição (Slow Negative MU)',
        target: '4x 3 reps (5s de descida)',
        equip: 'Barra Fixa Baixa',
        diagram: 'muscleUp',
        steps: [
          'Comece no topo da barra, desça o mergulho e gire os punhos para trás controladamente.',
          'Segure a transição o máximo possível.'
        ],
        mistake: 'Deixar os cotovelos abrirem para os lados.'
      },
      {
        id: 'mu_5',
        level: 'Nível 5 • Avançado II',
        name: 'Muscle-up com Elástico ou Leve Balanço',
        target: '4x 3 reps',
        equip: 'Barra Fixa',
        diagram: 'muscleUp',
        steps: [
          'Inicie a puxada explosiva, incline o tronco sobre a barra e empurre o mergulho.',
          'Mantenha os cotovelos fechados na transição.'
        ],
        mistake: 'Subir um braço de cada vez ("chicken wing").'
      },
      {
        id: 'mu_6',
        level: 'Nível 6 • Elite',
        name: 'Strict Bar Muscle-up',
        target: '3x 3 reps estritas',
        equip: 'Barra Fixa',
        diagram: 'muscleUp',
        steps: [
          'Saia da suspensão morta sem impulso das pernas e suba acima da barra em movimento contínuo.',
          'Finalize com cotovelos totalmente travados no topo.'
        ],
        mistake: 'Usar impulso de joelhos para passar a transição.'
      }
    ]
  },
  {
    id: 'handstand',
    name: 'Handstand & HSPU',
    icon: '🤸',
    description: 'Equilíbrio invertido e força vertical completa de ombros.',
    steps: [
      {
        id: 'hs_1',
        level: 'Nível 1 • Base',
        name: 'Pike Push-up no Chão',
        target: '4x 10 reps',
        equip: 'Sem equipamento',
        diagram: 'pike',
        steps: [
          'Forme um "V" invertido com o quadril alto.',
          'Leve o topo da cabeça à frente das mãos formando um triângulo e empurre de volta.'
        ],
        mistake: 'Descer a cabeça reta entre as mãos em vez de projetar à frente.'
      },
      {
        id: 'hs_2',
        level: 'Nível 2 • Fundamento',
        name: 'Pike Push-up com Pés Elevados',
        target: '4x 8 reps',
        equip: 'Banco / Degrau',
        diagram: 'pike',
        steps: [
          'Apoie os pés em um banco deixando o tronco quase vertical.',
          'Controle a descida e empurre até travar os ombros.'
        ],
        mistake: 'Abrir demais os cotovelos.'
      },
      {
        id: 'hs_3',
        level: 'Nível 3 • Intermediário',
        name: 'Wall Handstand (Peito para a Parede)',
        target: '4x 30s',
        equip: 'Parede',
        diagram: 'handstand',
        steps: [
          'Suba caminhando com os pés na parede até ficar alinhado.',
          'Empurre o chão, contraia glúteos e evite arquear a lombar.'
        ],
        mistake: 'Encostar a barriga na parede arqueando as costas.'
      },
      {
        id: 'hs_4',
        level: 'Nível 4 • Avançado I',
        name: 'Equilíbrio Livre (Freestanding Handstand)',
        target: '10 min de prática • 15s+ contínuos',
        equip: 'Sem equipamento',
        diagram: 'handstand',
        steps: [
          'Controle o equilíbrio pressionando as pontas dos dedos quando cair para frente e a palma quando voltar.',
          'Mantenha o olhar fixo entre as mãos.'
        ],
        mistake: 'Tentar equilibrar dobrando os cotovelos em vez de usar os dedos.'
      },
      {
        id: 'hs_5',
        level: 'Nível 5 • Avançado II',
        name: 'Wall Handstand Push-up (HSPU na Parede)',
        target: '4x 5–6 reps',
        equip: 'Parede',
        diagram: 'handstand',
        steps: [
          'Desça controladamente até tocar o topo da cabeça no solo/almofada.',
          'Empurre com potência até estender completamente os braços.'
        ],
        mistake: 'Despencar na descida sem controle excêntrico.'
      },
      {
        id: 'hs_6',
        level: 'Nível 6 • Elite',
        name: 'Freestanding Handstand Push-up',
        target: '3x 3 reps livres',
        equip: 'Sem equipamento',
        diagram: 'handstand',
        steps: [
          'Execute a flexão de parada de mão completa sem apoio de parede.',
          'Mantenha o alinhamento corporal do início ao fim.'
        ],
        mistake: 'Perder a tensão do core na transição de subida.'
      }
    ]
  },
  {
    id: 'v_sit',
    name: 'V-Sit (Sustentação em "V")',
    icon: '📐',
    description: 'Compressão abdominal profunda, flexores de quadril e empurre de ombros.',
    steps: [
      {
        id: 'vs_1',
        level: 'Nível 1 • Base',
        name: 'Hollow Body Hold + Leg Raises no Solo',
        target: '4x 30s hollow + 3x 12 elevações',
        equip: 'Sem equipamento',
        diagram: 'hollow',
        steps: [
          'Mantenha a lombar colada ao chão e eleve as pernas estendidas sem perder o contato lombar.',
          'Construa base de compressão e controle abdominal.'
        ],
        mistake: 'Arquear a lombar quando as pernas descem.'
      },
      {
        id: 'vs_2',
        level: 'Nível 2 • Fundamento',
        name: 'Tuck L-Sit no Solo ou Paralelas',
        target: '4x 20s',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'planche',
        steps: [
          'Empurre o solo ou paralelas travando os cotovelos e tire os quadris e pés do chão com joelhos flexionados.',
          'Mantenha os ombros deprimidos.'
        ],
        mistake: 'Encolher os ombros deixando o peito afundar.'
      },
      {
        id: 'vs_3',
        level: 'Nível 3 • Intermediário',
        name: 'Full L-Sit',
        target: '4x 15–20s',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'planche',
        steps: [
          'Estenda os joelhos e aponte os pés à frente na horizontal enquanto sustenta o quadril no ar.',
          'Trave quadríceps e abdômen.'
        ],
        mistake: 'Dobrar os joelhos ou deixar as pernas caírem.'
      },
      {
        id: 'vs_4',
        level: 'Nível 4 • Avançado I',
        name: 'Angled L-Sit / Elevação Gradual das Pernas',
        target: '4x 10–12s',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'vsit',
        steps: [
          'A partir do L-Sit, incline levemente o tronco para trás e eleve as pernas além da horizontal.',
          'Aumente a compressão abdominal sem perder a trava dos cotovelos.'
        ],
        mistake: 'Dobrar os cotovelos ao tentar subir mais as pernas.'
      },
      {
        id: 'vs_5',
        level: 'Nível 5 • Avançado II',
        name: 'Low V-Sit (~45°)',
        target: '4x 8–10s',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'vsit',
        steps: [
          'Sustente o corpo em formato de "V" aberto cerca de 45° com pernas estendidas e unidas.',
          'Empurre o apoio continuamente para manter o quadril alto.'
        ],
        mistake: 'Perder o equilíbrio para trás por falta de empurre.'
      },
      {
        id: 'vs_6',
        level: 'Nível 6 • Elite',
        name: 'High V-Sit (75°–90°+)',
        target: 'Sustentação limpa 5s+',
        equip: 'Sem equipamento ou Paralelas',
        diagram: 'vsit',
        steps: [
          'Eleve as pernas estendidas bem alto em um "V" acentuado mantendo ombros fortes e braços travados.',
          'Respire de forma curta e controlada sem soltar o core.'
        ],
        mistake: 'Flexionar os joelhos no pico da elevação.'
      }
    ]
  },
  {
    id: 'pistol_squat',
    name: 'Pernas & Pistol Squat',
    icon: '🦵',
    description: 'Força unilateral de pernas, mobilidade de tornozelo e estabilidade de quadril.',
    steps: [
      {
        id: 'ps_1',
        level: 'Nível 1 • Base',
        name: 'Agachamento Livre Profundo',
        target: '4x 15 reps',
        equip: 'Sem equipamento',
        diagram: 'squat',
        steps: [
          'Pés na largura dos ombros, desça quebrando a paralela com coluna neutra.',
          'Empurre o chão pelos calcanhares e meio do pé.'
        ],
        mistake: 'Tirar os calcanhares do chão.'
      },
      {
        id: 'ps_2',
        level: 'Nível 2 • Fundamento',
        name: 'Agachamento Búlgaro (Bulgarian Split Squat)',
        target: '4x 10 reps cada perna',
        equip: 'Banco / Degrau',
        diagram: 'squat',
        steps: [
          'Apoie o peito do pé de trás em um banco e desça até o joelho traseiro quase tocar o chão.',
          'Mantenha o tronco firme e o joelho da frente alinhado.'
        ],
        mistake: 'Deixar o joelho da frente cair para dentro (valgo).'
      },
      {
        id: 'ps_3',
        level: 'Nível 3 • Intermediário',
        name: 'Shrimp Squat (Agachamento Camarão)',
        target: '4x 8 reps cada perna',
        equip: 'Sem equipamento',
        diagram: 'squat',
        steps: [
          'Segure o pé de trás com a mão e agache com a perna da frente até o joelho traseiro tocar suavemente o solo.',
          'Suba sem impulsionar com o pé de trás.'
        ],
        mistake: 'Bater o joelho com força no chão.'
      },
      {
        id: 'ps_4',
        level: 'Nível 4 • Avançado I',
        name: 'Pistol Squat Assistido / Negativo',
        target: '4x 5 reps cada perna',
        equip: 'Sem equipamento ou Apoio',
        diagram: 'squat',
        steps: [
          'Estenda uma perna à frente e desça em 4 segundos até sentar em um banco baixo ou apoiando levemente a mão.',
          'Suba mantendo a perna livre estendida.'
        ],
        mistake: 'Arredondar excessivamente as costas e perder o equilíbrio para trás.'
      },
      {
        id: 'ps_5',
        level: 'Nível 5 • Avançado II',
        name: 'Pistol Squat Completo',
        target: '4x 6 reps cada perna',
        equip: 'Sem equipamento',
        diagram: 'squat',
        steps: [
          'Em uma perna só, agache até o glúteo encostar na panturrilha com calcanhar firme no chão.',
          'Suba sem apoiar o outro pé.'
        ],
        mistake: 'Deixar a perna elevada tocar o solo na subida.'
      },
      {
        id: 'ps_6',
        level: 'Nível 6 • Elite',
        name: 'Dragon Pistol Squat',
        target: '3x 4 reps cada perna',
        equip: 'Sem equipamento',
        diagram: 'squat',
        steps: [
          'Cruze a perna livre por trás da perna de apoio e execute o agachamento unilateral completo.',
          'Exige mobilidade extrema de quadril e força de estabilização.'
        ],
        mistake: 'Perder o alinhamento do joelho de base.'
      }
    ]
  }
];

// Banco de exercícios para o Treino Diário Dinâmico
const DAILY_EXERCISES = [
  // AQUECIMENTO & MOBILIDADE
  {
    id: 'w_wrists',
    block: 'warmup',
    name: 'Mobilidade de Punhos e Escápulas',
    prescription: '2 min contínuos',
    restSeconds: 30,
    equipment: ['none'],
    diagram: 'push',
    steps: [
      'Em quatro apoios, faça círculos suaves sobre os punhos em ambas as direções.',
      'Finalize com 12 retrações e protrações escapulares com braços estendidos.'
    ],
    mistake: 'Forçar amplitude dolorosa nos punhos frios.'
  },
  {
    id: 'w_world_greatest',
    block: 'warmup',
    name: 'Maior Alongamento do Mundo + Rotação Torácica',
    prescription: '6 reps cada lado',
    restSeconds: 30,
    equipment: ['none'],
    diagram: 'sidePlank',
    steps: [
      'Dê um passo largo à frente, apoie a mão oposta no chão e gire o tronco abrindo o braço para o teto.',
      'Respire fundo a cada rotação.'
    ],
    mistake: 'Fazer rápido sem estender a perna de trás.'
  },
  {
    id: 'w_dead_hang',
    block: 'warmup',
    name: 'Dead Hang + Ativação Escapular',
    prescription: '2x 25s',
    restSeconds: 30,
    equipment: ['barra', 'argolas'],
    diagram: 'pull',
    steps: [
      'Pendure-se na barra ou argolas e alterne entre relaxar e puxar os ombros para baixo.',
      'Prepare a pegada e descomprima a coluna.'
    ],
    mistake: 'Dobrar os cotovelos durante o aquecimento escapular.'
  },

  // EMPURRAR (PUSH)
  {
    id: 'push_standard',
    block: 'push',
    name: 'Flexão de Braço Estrita',
    prescription: '4x 10–15 reps',
    restSeconds: 60,
    equipment: ['none'],
    diagram: 'push',
    steps: [
      'Mãos na largura dos ombros, cotovelos a 45° do tronco.',
      'Toque o peito próximo ao solo e empurre até estender completamente.'
    ],
    mistake: 'Deixar o quadril cair antes do peito.'
  },
  {
    id: 'push_archer',
    block: 'push',
    name: 'Flexão Arqueiro (Archer Push-up)',
    prescription: '4x 6 reps cada lado',
    restSeconds: 75,
    equipment: ['none'],
    diagram: 'push',
    steps: [
      'Afaste bem as mãos e desça o corpo em direção a um dos braços enquanto o outro fica estendido.',
      'Alterne os lados com controle.'
    ],
    mistake: 'Dobrar o braço de suporte lateral.'
  },
  {
    id: 'push_pike',
    block: 'push',
    name: 'Pike Push-up (Foco em Ombros)',
    prescription: '4x 8–12 reps',
    restSeconds: 60,
    equipment: ['none'],
    diagram: 'pike',
    steps: [
      'Eleve o quadril em V invertido e leve a cabeça à frente da linha das mãos.',
      'Empurre com os ombros até travar os cotovelos.'
    ],
    mistake: 'Transformar em flexão comum baixando o quadril.'
  },
  {
    id: 'push_dips',
    block: 'push',
    name: 'Mergulho nas Paralelas (Dips)',
    prescription: '4x 8–12 reps',
    restSeconds: 75,
    equipment: ['paralelas'],
    diagram: 'dip',
    steps: [
      'Desça até o ombro ficar abaixo da linha do cotovelo com tronco levemente inclinado.',
      'Empurre até estender os braços.'
    ],
    mistake: 'Encolher os ombros perto das orelhas no fundo do movimento.'
  },
  {
    id: 'push_ring',
    block: 'push',
    name: 'Flexão nas Argolas + Suporte RTO',
    prescription: '4x 8–10 reps',
    restSeconds: 75,
    equipment: ['argolas'],
    diagram: 'dip',
    steps: [
      'Execute a flexão mantendo as argolas estáveis junto ao corpo.',
      'No topo, gire as palmas levemente para fora (RTO).'
    ],
    mistake: 'Deixar as argolas afastarem descontroladamente.'
  },
  {
    id: 'push_decline',
    block: 'push',
    name: 'Flexão Declinada com Pés no Banco',
    prescription: '4x 10–12 reps',
    restSeconds: 60,
    equipment: ['banco'],
    diagram: 'push',
    steps: [
      'Apoie os pés no banco e mantenha o abdômen travado.',
      'Desça o peito em direção ao chão com controle.'
    ],
    mistake: 'Arquear a lombar por falta de ativação do core.'
  },

  // PUXAR (PULL)
  {
    id: 'pull_towel_row',
    block: 'pull',
    name: 'Remada Isométrica / Prancha com Puxada Escapular',
    prescription: '4x 12 reps lentas',
    restSeconds: 60,
    equipment: ['none'],
    diagram: 'hollow',
    steps: [
      'Deitado de bruços (Superman Pull), estenda os braços à frente e puxe os cotovelos para trás apertando as escápulas.',
      'Segure 2 segundos na contração máxima.'
    ],
    mistake: 'Subir o pescoço forçando a cervical.'
  },
  {
    id: 'pull_pullup',
    block: 'pull',
    name: 'Barra Fixa Pronada (Pull-up)',
    prescription: '4x 6–10 reps',
    restSeconds: 90,
    equipment: ['barra'],
    diagram: 'pull',
    steps: [
      'Inicie puxando as escápulas para baixo e leve o peito em direção à barra.',
      'Desça até estender totalmente os braços.'
    ],
    mistake: 'Usar impulso de pernas ou encurtar a descida.'
  },
  {
    id: 'pull_chinup',
    block: 'pull',
    name: 'Barra Fixa Supinada (Chin-up)',
    prescription: '4x 6–10 reps',
    restSeconds: 90,
    equipment: ['barra'],
    diagram: 'pull',
    steps: [
      'Palmas voltadas para você na largura dos ombros.',
      'Puxe com firmeza mantendo o tronco estável.'
    ],
    mistake: 'Arredondar os ombros para frente no topo.'
  },
  {
    id: 'pull_ring_row',
    block: 'pull',
    name: 'Remada nas Argolas (Ring Row)',
    prescription: '4x 10–12 reps',
    restSeconds: 60,
    equipment: ['argolas'],
    diagram: 'pull',
    steps: [
      'Corpo reto inclinado sob as argolas, puxe até as mãos tocarem as costelas.',
      'Segure 1 segundo no topo.'
    ],
    mistake: 'Deixar o quadril cair antes de completar a puxada.'
  },
  {
    id: 'pull_band_row',
    block: 'pull',
    name: 'Remada Unilateral + Face Pull com Elástico',
    prescription: '4x 12–15 reps',
    restSeconds: 60,
    equipment: ['elastico'],
    diagram: 'pull',
    steps: [
      'Prenda o elástico em ponto fixo e puxe fechando as escápulas com controle.',
      'Controle o retorno sem deixar o elástico puxar seu tronco.'
    ],
    mistake: 'Girar o tronco para compensar a tensão do elástico.'
  },
  {
    id: 'pull_australian_pb',
    block: 'pull',
    name: 'Remada Australiana nas Paralelas',
    prescription: '4x 10–12 reps',
    restSeconds: 60,
    equipment: ['paralelas'],
    diagram: 'pull',
    steps: [
      'Segure as paralelas por baixo com corpo estendido e puxe o peito entre as barras.',
      'Mantenha glúteos e abdômen contraídos.'
    ],
    mistake: 'Puxar com o pescoço projetado à frente.'
  },

  // PERNAS (LEGS)
  {
    id: 'legs_squat_jump',
    block: 'legs',
    name: 'Agachamento Profundo + Pausa Isométrica',
    prescription: '4x 12 reps (2s pausa)',
    restSeconds: 60,
    equipment: ['none'],
    diagram: 'squat',
    steps: [
      'Desça até o fundo do agachamento, segure 2 segundos sem relaxar e suba firme.',
      'Mantenha o peso distribuído em todo o pé.'
    ],
    mistake: 'Relaxar a lombar no ponto mais baixo.'
  },
  {
    id: 'legs_lunge',
    block: 'legs',
    name: 'Afundo Reverso Alternado',
    prescription: '4x 10 reps cada perna',
    restSeconds: 60,
    equipment: ['none'],
    diagram: 'squat',
    steps: [
      'Dê um passo controlado para trás e desça ambos os joelhos a 90°.',
      'Empurre com a perna da frente para retornar.'
    ],
    mistake: 'Bater o joelho de trás no chão.'
  },
  {
    id: 'legs_bulgarian',
    block: 'legs',
    name: 'Agachamento Búlgaro no Banco',
    prescription: '4x 8–10 reps cada perna',
    restSeconds: 75,
    equipment: ['banco'],
    diagram: 'squat',
    steps: [
      'Pé de trás apoiado no banco, desça verticalmente mantendo o joelho da frente estável.',
      'Suba empurrando o calcanhar da frente.'
    ],
    mistake: 'Ficar muito próximo ao banco e tirar o calcanhar da frente.'
  },
  {
    id: 'legs_band_squat',
    block: 'legs',
    name: 'Agachamento com Resistência de Elástico',
    prescription: '4x 12–15 reps',
    restSeconds: 60,
    equipment: ['elastico'],
    diagram: 'squat',
    steps: [
      'Pise no elástico e passe a outra ponta pelos ombros.',
      'Acelere na subida vencendo a tensão crescente do elástico.'
    ],
    mistake: 'Inclinar demais o tronco para frente.'
  },

  // CORE & ESTABILIDADE
  {
    id: 'core_hollow',
    block: 'core',
    name: 'Hollow Body Hold (Canoa)',
    prescription: '4x 25–35s',
    restSeconds: 45,
    equipment: ['none'],
    diagram: 'hollow',
    steps: [
      'Deitado de costas, pressione a lombar 100% contra o chão.',
      'Eleve ombros e pernas estendidas mantendo a tensão abdominal.'
    ],
    mistake: 'Deixar a lombar descolar do solo.'
  },
  {
    id: 'core_pallof',
    block: 'core',
    name: 'Pallof Press Isométrico com Elástico',
    prescription: '3x 25s cada lado',
    restSeconds: 45,
    equipment: ['elastico'],
    diagram: 'sidePlank',
    steps: [
      'Fique de lado para a ancoragem do elástico, estenda os braços à frente do peito e resista à rotação.',
      'Mantenha quadril e ombros perfeitamente alinhados.'
    ],
    mistake: 'Deixar o tronco girar em direção ao ponto fixo.'
  },
  {
    id: 'core_hanging_raise',
    block: 'core',
    name: 'Elevação de Joelhos / Pés na Barra',
    prescription: '4x 8–12 reps',
    restSeconds: 60,
    equipment: ['barra', 'argolas'],
    diagram: 'pull',
    steps: [
      'Pendurado com escápulas ativas, eleve os joelhos ou pés até a barra sem balançar.',
      'Controle a descida por 2 segundos.'
    ],
    mistake: 'Usar impulso para jogar as pernas para cima.'
  },
  {
    id: 'core_lsit',
    block: 'core',
    name: 'L-Sit / Tuck L-Sit nas Paralelas',
    prescription: '4x 15–20s',
    restSeconds: 60,
    equipment: ['paralelas'],
    diagram: 'planche',
    steps: [
      'Empurre as paralelas para baixo travando os cotovelos e eleve os joelhos ou pernas estendidas à frente.',
      'Mantenha os ombros longe das orelhas.'
    ],
    mistake: 'Deixar os ombros subirem e o peito afundar.'
  },

  // FINALIZADOR
  {
    id: 'fin_burpee_plank',
    block: 'finisher',
    name: 'Desafio Final: 40s Prancha + 10 Agachamentos (3 rounds)',
    prescription: '3 rounds sem pausa longa',
    restSeconds: 45,
    equipment: ['none'],
    diagram: 'push',
    steps: [
      'Execute 40 segundos de prancha firme seguidos imediatamente de 10 agachamentos controlados.',
      'Descanse 45s e repita 3 vezes.'
    ],
    mistake: 'Perder a postura da prancha na fadiga.'
  },
  {
    id: 'fin_deadhang_max',
    block: 'finisher',
    name: 'Desafio de Pegada: Sustentação Máxima na Barra',
    prescription: '2 tentativas máximas',
    restSeconds: 60,
    equipment: ['barra', 'argolas'],
    diagram: 'pull',
    steps: [
      'Segure firme na barra ou argolas com ombros encaixados pelo maior tempo possível.',
      'Fortalece antebraços para Front Lever, Muscle-up e Bandeira.'
    ],
    mistake: 'Soltar a barra sem controlar a descida.'
  }
];
