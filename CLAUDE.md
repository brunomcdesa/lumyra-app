# CLAUDE.md — lumyra-mobile

> Este arquivo é lido pelo Claude Code em toda sessão. Mantê-lo enxuto.
> Detalhes longos estão em `docs/` e na skill **mobile-engineer**.

## Sobre o produto (resumo)

App mobile do **Lumyra**, B2B2C para profissionais de educação física que atendem **mulheres**. A spec completa está em `docs/ANALISE_DE_SISTEMAS.docx`.

- **Educador(a)** (CREF, paga): cria alunas, faz avaliações físicas, prescreve treino.
- **Aluna**: acesso **majoritariamente somente-leitura** ao histórico, com poucas escritas — registrar RPE no treino, preencher questionário de dor, acompanhar o **ciclo menstrual** (o diferencial).

O backend vive em repo separado (`lumyra-backend`, Spring Boot) e expõe REST via OpenAPI. Este repo **gera o cliente tipado a partir do OpenAPI** do backend — não duplique tipos.

## Stack

- **Expo** (managed) · **React Native** · **TypeScript** (`strict: true`).
- **Expo Router** (file-based) com route groups por papel: `(educadora)` e `(aluna)`.
- **TanStack Query** (server state, cache, sync) · **Zustand** (estado global de UI/sessão).
- **expo-secure-store** para token JWT (nunca AsyncStorage para dado sensível).
- **react-hook-form** + **zod** para formulários e validação local.
- Cliente HTTP gerado por **openapi-typescript-codegen** a partir do contrato do backend (script `npm run gen:api` puxa o OpenAPI e regenera tipos + funções).
- **expo-font** para Fraunces (display) e Inter (corpo).

## Estrutura

```
src/
├── app/                          # Expo Router (file-based)
│   ├── (auth)/login.tsx
│   ├── (educadora)/
│   │   ├── _layout.tsx           # tab bar: Início · Alunos · Avaliar · Treinos · Perfil
│   │   └── (tabs)/...
│   ├── (aluna)/
│   │   ├── _layout.tsx           # tab bar: Início · Treino · Ciclo · Avaliações · Perfil
│   │   └── (tabs)/...
│   └── _layout.tsx               # roteia por papel após login
├── components/
│   ├── ui/                       # Button, Card, Chip, Stepper, Avatar, VolumeBar, RpeBar, CycleWheel, ...
│   └── features/                 # blocos específicos de domínio
├── hooks/                        # useAuth, useAssessment, useCycle, useVolume, ...
├── services/
│   ├── api/                      # cliente gerado do OpenAPI (NÃO editar à mão)
│   └── storage/                  # wrappers de SecureStore
├── stores/                       # zustand: session, role, ...
├── constants/theme.ts            # tokens do Lumyra (abaixo)
└── types/
```

## Design tokens (do design Lumyra — use exatamente estes)

Paleta: **verde pastel (sage) × lilás × branco perolado**. Fontes: **Fraunces** (display, itálico no wordmark), **Inter** (corpo), **JetBrains Mono** (mono).

```ts
// src/constants/theme.ts
export const colors = {
  green: { 50:'#F1F6F2',100:'#E2EEE6',200:'#C5DDCC',300:'#A4C8B0',400:'#82B193',
           500:'#5C8A6F',600:'#4A7259',700:'#3B5A47',800:'#2D4435',900:'#1F2F25' },
  lilac: { 50:'#F7F4FB',100:'#EEE6F4',200:'#DECDE9',300:'#C6AEDA',400:'#AA8FC8',
           500:'#9173B5',600:'#785A98',700:'#5F477A',800:'#46365D',900:'#322747' },
  ink:   { 900:'#1F1C28',800:'#2D2A38',700:'#3F3B4E',600:'#5B5768',500:'#7C7888',
           400:'#B6B2BE',300:'#D8D4DC',200:'#EAE7ED',100:'#F2F0F4',50:'#FAF9FC' },
  pearl: '#F9F8FB', white:'#FFFFFF',
  amber:'#C6924A', amber50:'#FBF4EA',
  red:'#C46A6A', red50:'#FAEDED',
  blue:'#6E92C0', blue50:'#EFF3FA',
};
export const radii = { sm:10, md:16, lg:22, xl:30 };
export const font  = { display:'Fraunces', body:'Inter', mono:'JetBrainsMono' };
```

As **13 telas do design** (login, home educadora, alunos, detalhe da aluna, anamnese, resultados de composição, prescrição, volume, testes funcionais 60+, home aluna, ciclo, treino+RPE, dor) são a **especificação visual**. Recrie-as fielmente — não invente UI nova.

## Design de referência — leia antes de implementar qualquer tela

As 13 telas do Lumyra já estão implementadas como protótipo em `docs/design/`.
**Antes de implementar qualquer tela ou componente, leia o arquivo correspondente.**
O índice completo está em `docs/design/INDEX.md`.

| Quer implementar... | Leia antes |
|---|---|
| Login | `docs/design/screens-a.jsx` → `ScreenLogin` |
| Home / Lista / Detalhe da educadora | `docs/design/screens-a.jsx` |
| Anamnese, Resultados, Prescrição, Volume | `docs/design/screens-b.jsx` |
| Testes funcionais 60+, telas da aluna | `docs/design/screens-c.jsx` |
| Qualquer componente UI (Button, Card, Chip...) | `docs/design/ui.jsx` |
| Cores, fontes, raios, sombras | `docs/design/styles.css` |

Os arquivos são JSX de protótipo (não React Native). Ao portar, use `StyleSheet` com
os tokens de `src/constants/theme.ts`. A tabela de portagem está em `docs/design/INDEX.md`.

## Regras invioláveis (resumo — detalhe em `docs/GUARDRAILS.md`)

1. **Read-only respeitado.** Telas da aluna que mostram avaliação, anamnese e treino são read-only. **Não renderize controles de edição nelas.** Marque visualmente com chip "Apenas leitura".
2. **Únicas escritas da aluna:** RPE no treino, questionário de dor, registro de ciclo/sintomas.
3. **Cálculo é do servidor.** %G, volume semanal e fase do ciclo são calculados no backend. O app só exibe. **Não duplicar fórmula clínica no cliente.**
4. **Token no SecureStore.** Nunca em AsyncStorage; logout limpa tudo.
5. **Sem dado sensível em log/analytics.** Conteúdo de ciclo/dor/anamnese não vai para telemetria.
6. **Consentimento antes de coletar.** Telas de ciclo/dor exigem consentimento ativo (vindo do backend) para habilitar coleta.

## Acessibilidade e multiplataforma (a skill detalha)

- Alvos de toque ≥ 44pt; `SafeAreaView`; conteúdo rola; sem dimensões fixas em containers.
- Público inclui alunas **60+**: testar com fonte do sistema ampliada; contraste AA (validar o **sage** em texto pequeno — pode falhar AA).
- Funcionar em iPhone SE até Pro Max; Android 360dp até 412dp.

## Comandos

```bash
npx expo start                  # dev
npm run gen:api                 # regerar cliente a partir do OpenAPI do backend
npm test                        # Jest + React Native Testing Library
npm run lint
```

## Definição de pronto (toda tarefa de mobile)

- [ ] Fiel ao design (tokens, espaçamento, tipografia)
- [ ] Read-only respeitado nas telas da aluna; **únicas escritas** permitidas são RPE, dor, ciclo
- [ ] Dados via TanStack Query (sem `fetch` solto em componente)
- [ ] Sem fórmula clínica no cliente
- [ ] Token só em SecureStore; sem dado sensível em log
- [ ] Funciona com fonte ampliada e em telas pequenas; alvos ≥ 44pt
- [ ] `npm run lint` e `npm test` verdes

## Quando pedir ao Claude Code

Sempre referencie este arquivo e a skill: "leia `CLAUDE.md` e `docs/GUARDRAILS.md`; carregue a skill **mobile-engineer**". Siga `docs/BACKLOG.md` na ordem. Idioma: código em inglês, UI e mensagens em pt-BR.