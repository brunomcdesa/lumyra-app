# BACKLOG — Lumyra Mobile (Expo / React Native)

> Traduz o roadmap da análise em tarefas pequenas e ordenadas. **Siga a ordem.**
> Como usar: copie **uma** tarefa por vez para o Claude Code, peça para ele ler este arquivo,
> o `CLAUDE.md` e o `docs/GUARDRAILS.md`, e implementar. Rode `npm test` e `npm run lint`,
> confira o critério de aceite, e só então passe à próxima.
>
> Esforço: S ≈ até 1 dia · M ≈ 2–4 dias · L ≈ 1+ semana (para 1 dev).
>
> 🔗 = depende de marco no `lumyra-backend`. Não comece antes desse marco estar pronto.

---

## FASE M0 — Fundação do app (M) · pré-requisito de tudo

> Estas tarefas independem do backend. Podem rodar em paralelo às do backend até T0.5.

### TM0.1 — Bootstrap Expo + TypeScript (S)
- **Objetivo:** projeto Expo com `expo-router`, `typescript` (strict), ESLint + Prettier, estrutura de pastas conforme `CLAUDE.md`. Fontes carregadas via `expo-font` (Fraunces, Inter, JetBrains Mono). `constants/theme.ts` com os tokens do Lumyra.
- **Aceite:** `npx expo start` sobe; fonte Fraunces aparece no wordmark; lint limpo.

### TM0.2 — Sistema de componentes UI base (M)
- **Objetivo:** primitivos em `components/ui/`: `Button`, `Card`, `Chip`, `Input`, `Label`, `Stepper`, `Avatar`, `Divider`, `Pill`, `Spinner`. Fiéis aos tokens; props bem tipadas; suportam estados (default, hover, disabled, loading).
- **Aceite:** Storybook simples (ou tela de catálogo em `app/(dev)/_components.tsx`) mostra todos; passa em fonte ampliada e em iPhone SE.

### TM0.3 — Layout por papel (Expo Router) (S)
- **Objetivo:** route groups `(auth)`, `(educadora)`, `(aluna)`. `_layout.tsx` decide o destino por papel do usuário autenticado (mock no início, real após TM0.5). Tab bars conforme design para cada papel.
- **Aceite:** alternar papel mockado troca a tab bar; navegação entre tabs funciona; SafeArea correta no notch.

### TM0.4 — Cliente de API gerado a partir do OpenAPI (S) · 🔗 depende de Marco F0-PRONTO
- **Objetivo:** script `npm run gen:api` que baixa `/v3/api-docs` do backend e gera tipos + funções em `services/api/` via `openapi-typescript-codegen`. Configurar TanStack Query.
- **Aceite:** cliente gerado, importável, com tipos corretos; chamada de teste a `/health` funciona; CI roda `gen:api` antes do build (ou usa snapshot versionado).

### TM0.5 — Login + auth (M) · 🔗 depende de TM0.4 e backend T0.4
- **Objetivo:** tela de login fiel ao design. Fluxo: chama `POST /auth/login`, armazena JWT no `expo-secure-store`, configura header padrão do cliente, redireciona por papel. Tela de erro tratada. Logout limpa SecureStore + cache TanStack.
- **Aceite:** login real contra backend; refresh automático ao expirar; logout completo; nenhum token em log.

### TM0.6 — Onboarding da aluna + consentimento LGPD (M) · 🔗 depende de backend T0.5 · **toca G2**
- **Objetivo:** fluxo a partir do link de convite — definir senha, ler o termo, registrar consentimento. Tela bloqueia avanço para as áreas sensíveis (ciclo, dor, anamnese) se consentimento inativo.
- **Aceite:** sem consentimento → telas sensíveis exibem "Aceite o termo para continuar"; aceitar libera; revogação esconde dados.

### 🔗 **Marco M0-PRONTO** — app entra em fluxo real

---

## FASE M1 — App da educadora (L) · MVP mobile

### TM1.1 — Home da educadora (S)
- **Objetivo:** dashboard fiel ao design (cards de alunas com mensagens, próximos passos). Dados do `GET /students` com filtros.
- **Aceite:** dados reais; navegação para detalhe da aluna; estado vazio tratado.

### TM1.2 — Lista de alunas + filtros + busca (S) · 🔗 backend T1.2
- **Objetivo:** tela "Alunos" fiel: chips de filtro (ativas, a reavaliar, pausadas), busca, lista com Avatar + nome + status + próxima reavaliação.
- **Aceite:** filtros funcionam; performance OK com 200+ alunas (FlatList virtualizada).

### TM1.3 — Detalhe da aluna (M) · 🔗 backend T1.2
- **Objetivo:** tela fiel ao design — header com Avatar + status, histórico de avaliações, treino atual, botões "Nova avaliação" / "Editar treino" / "Mensagem".
- **Aceite:** dados reais; navegação para fluxos seguintes; loading e erro tratados.

### TM1.4 — Anamnese (M) · 🔗 backend T1.3 · **toca G3 (servidor calcula IMC)**
- **Objetivo:** Stepper fiel ao design: passo 1 sinais vitais (estatura, massa, FC, PA), passo 2 componentes clínicos. Validação com `react-hook-form` + `zod`. Envia para `POST /assessments/{id}/anamnesis`; recebe IMC calculado.
- **Aceite:** validação local correta; IMC vem do servidor (não calculado no cliente); avanço só com dados válidos.

### TM1.5 — Composição corporal — coleta (M) · 🔗 backend T1.4
- **Objetivo:** tela de coleta de dobras cutâneas e perímetros conforme protocolo Guedes & Guedes. Submete para o servidor, recebe resultado completo.
- **Aceite:** sem cálculo no cliente; campos com unidades e ranges plausíveis; pode salvar como rascunho.

### TM1.6 — Resultados de composição (M) · **toca G3 (só exibe)**
- **Objetivo:** tela fiel ao design — gauge de %G, compartimentos de massa, índices com referência, tabela de dobras. **Nada é recalculado no cliente.**
- **Aceite:** dados vêm do backend (T1.4); protocolo aparece junto; finalizar avaliação dispara T1.6 do backend (laudo).

### TM1.7 — Laudo PDF (S) · 🔗 backend T1.6
- **Objetivo:** botão "Gerar laudo PDF" com estado (pending/generated/failed); ao gerado, abre via URL pré-assinada com `expo-web-browser` ou compartilhamento nativo.
- **Aceite:** estado refletido na UI; URL expira (testar reabrir após TTL).

### TM1.8 — Histórico e comparação (S) · 🔗 backend T1.5
- **Objetivo:** lista de avaliações; comparar duas selecionadas com sparkline de %G/MM ao longo do tempo.
- **Aceite:** evolução visualizada; sem editar avaliações antigas (G8 do backend).

### 🔗 **Marco M1-PRONTO** — app cobre a jornada de avaliação fim-a-fim

---

## FASE M2 — Prescrição e volume (educadora) (M) · 🔗 backend T2.x

### TM2.1 — Tela de prescrição (M)
- **Objetivo:** seleção de exercícios por grupo (chips), definir séries/reps/carga por exercício. Fiel ao design.
- **Aceite:** dados salvam; edição funciona; lista de exercícios virtualizada.

### TM2.2 — Análise de volume semanal (M) · **toca G3 (só exibe)**
- **Objetivo:** tela fiel — barras por grupo muscular vs. zona-alvo, cor de status (abaixo/dentro/acima), recomendações textuais vindas do backend.
- **Aceite:** cálculo vem do servidor; gráfico legível em iPhone SE.

### 🔗 **Marco M2-PRONTO** — educadora completa

---

## FASE M3 — App da aluna + ciclo menstrual (L) · 🔗 backend T3.x

> O diferencial. Só comece após validação de conteúdo do ciclo (ver T3.4 do backend).

### TM3.1 — Home da aluna (S) · **toca G1 (read-only)**
- **Objetivo:** dashboard fiel ao design — próximo treino, fase atual do ciclo (resumo), última avaliação, contato da educadora. Nenhum botão de edição.
- **Aceite:** chip "Apenas leitura" onde aplicável; alvos ≥ 44pt.

### TM3.2 — Treino do dia (read-only) (S) · **toca G1**
- **Objetivo:** lista de exercícios prescritos para hoje, fiel ao design. Sem edição.
- **Aceite:** read-only respeitado.

### TM3.3 — Execução de treino + RPE (M) · 🔗 backend T3.2
- **Objetivo:** modo execução com séries marcáveis e seletor de RPE (Borg CR10) fiel ao design (barra colorida 0–10). Persiste cada série.
- **Aceite:** offline-friendly (fila local + sync); haptic feedback em iOS ao marcar série.

### TM3.4 — Questionário de dor (M) · 🔗 backend T3.3 · **toca G2**
- **Objetivo:** mapa corporal interativo (SVG), seleção de região, escala VAS 0–10, tipo e gatilho. Cards de histórico de dor.
- **Aceite:** acessível por leitor de tela (cada região com label); consentimento verificado.

### TM3.5 — Aba Ciclo + roda de 28 dias (L) · 🔗 backend T3.4 · **toca G2, G3**
- **Objetivo:** tela fiel — `CycleWheel` (componente SVG) com fase atual destacada, dia do ciclo, conteúdo educativo por fase, recomendações, **disclaimer visível**. Registro diário de sintomas. Edição da última menstruação e duração média.
- **⚠ Antes de começar:** validar com você o tom do texto e o disclaimer; **não inventar conteúdo clínico**.
- **Aceite:** fase vem calculada do servidor; disclaimer presente; fallback para ciclo desconhecido tratado com mensagem; fiel ao design.

### TM3.6 — Avaliações (visão da aluna) (S) · **toca G1**
- **Objetivo:** histórico das próprias avaliações em modo leitura, com gráficos de evolução. Sem editar.
- **Aceite:** mesma fidelidade visual da educadora, sem controles de edição.

### 🔗 **Marco M3-PRONTO** — aluna completa, diferencial entregue

---

## FASE M4 — Testes funcionais 60+ (M) · 🔗 backend T4.1

### TM4.1 — Bateria funcional (M) · **toca G7 (acessibilidade)**
- **Objetivo:** fluxo de aplicação dos testes (cronômetro embutido, instruções claras, entrada de valores). Tela fiel ao design.
- **Aceite:** instruções legíveis com fonte ampliada; cronômetro com som; entrada validada.

---

## FASE M5 — Polimento e store (M)

### TM5.1 — Notificações push (M)
- **Objetivo:** `expo-notifications`, lembrete de treino, lembrete de registro de ciclo, aviso de reavaliação pendente. Permissões pedidas com contexto.
- **Aceite:** lembretes funcionam; opt-out claro.

### TM5.2 — Acessibilidade 60+ (S) · **toca G7**
- **Objetivo:** revisão completa — contraste AA em todas as telas (revisar sage em texto pequeno), tamanhos de fonte escaláveis, leitor de tela cobrindo telas críticas. Teste com fonte do sistema em 130%.
- **Aceite:** sem violações no axe-mobile; aprovado em teste manual com fonte ampliada.

### TM5.3 — Build EAS e submissão (M)
- **Objetivo:** `eas.json`, build dev/preview/production, ícone/splash do Lumyra, configurar TestFlight e Play Console internos.
- **Aceite:** build de produção sobe; TestFlight interno funciona; Play console aceita o AAB.

### TM5.4 — Política de privacidade e termos no app (S)
- **Objetivo:** telas estáticas para política e termo, links no perfil. Conteúdo revisado juridicamente.
- **Aceite:** links externos abrem corretamente; conteúdo aprovado.

---

## Como pedir uma tarefa ao Claude Code (modelo)

```
Implemente a tarefa TM1.4 do docs/BACKLOG.md neste repositório lumyra-mobile.

Antes de codar:
- leia CLAUDE.md e docs/GUARDRAILS.md;
- leia docs/design/INDEX.md e o arquivo de design da tela correspondente
  (ex.: docs/design/screens-b.jsx → ScreenAnamnese);
- carregue a skill mobile-engineer;
- respeite G3 (cálculo é do servidor, app só exibe) e G6 (fiel ao design).

Ao terminar:
- rode npm test e npm run lint;
- me mostre o que mudou e qual critério de aceite cobriu;
- se faltar endpoint ou decisão de UX, pare e me pergunte.
```