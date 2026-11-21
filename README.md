# Calistenia JW (`Calistenia_JW`)

Aplicação web leve e mobile-first para treinos diários de calistenia, evolução por progressões e cronômetro integrado, pronta para rodar no navegador ou no **GitHub Pages** sem necessidade de servidor.

## Funcionalidades

- **Treino do Dia dinâmico:** Alterna entre **Sem Equipamento** e **Com Equipamento** (*Barra Fixa*, *Paralelas / Apoios*, *Elástico / Superband*, *Argolas* e *Banco / Degrau*), evitando repetir os mesmos exercícios da última sessão concluída.
- **Árvore de Progressões (do básico ao elite):** 6 trilhas completas (*Planche*, *Front Lever*, *Bandeira Humana*, *Muscle-up na Barra*, *Handstand & HSPU* e *Pernas & Pistol Squat*) com desbloqueio por etapas e registro de **Recorde Pessoal (PR)** em segundos ou repetições.
- **Guia de execução + Coaching IA:** Ilustrações esquemáticas em SVG por padrão de movimento, passo a passo, erro comum a evitar e consulta opcional via Gemini API com chave salva apenas no `localStorage` do navegador.
- **Cronômetro integrado:** Contagem regressiva rápida, **Tabata (8 rounds)**, **EMOM (10 min)** e barra flutuante ao navegar entre abas.

## Como publicar no GitHub Pages

1. Acesse o repositório `Calistenia_JW` no GitHub e mantenha `index.html`, `data.js`, `app.js`, `.gitignore` e `README.md` na raiz.
2. Vá em **Settings → Pages**.
3. Selecione a branch principal e a pasta `/ (root)` e clique em **Save**.
