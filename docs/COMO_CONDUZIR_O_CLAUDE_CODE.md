# Como conduzir o Claude Code para construir o Lumyra (mobile)

Guia prático de operação no dia a dia. Os "o quê" e "como" já estão nos outros arquivos; aqui é o "como usar".

## As camadas e o que cada uma faz

| Arquivo | Papel | Quando é lido |
|---|---|---|
| `CLAUDE.md` | Contexto sempre-presente: stack, tokens, regras, comandos | Toda sessão, automaticamente |
| `docs/GUARDRAILS.md` | Regras invioláveis (G1–G8) | Referenciado pelo CLAUDE.md; cite nas tarefas |
| `docs/BACKLOG.md` | O que construir e em que ordem | Você cola tarefa por tarefa |
| `docs/ANALISE_DE_SISTEMAS.docx` | Spec do produto (fonte da verdade) | Quando precisar de detalhe de requisito |
| Skills `mobile-engineer` / `frontend-engineer` | Como fazer bem (Expo, RN) | Carregam sozinhas pelo gatilho |

**Regra de divisão:** específico do Lumyra → CLAUDE.md/docs. Genérico de engenharia → skill. Não duplique.

## Por que não criar uma skill "lumyra"

Skills servem para conhecimento **reutilizável entre projetos**. O Lumyra é um projeto único; seu conhecimento específico pertence ao repo (CLAUDE.md + docs), versionado junto do código. Suas skills `mobile-engineer` e `frontend-engineer` já cobrem Expo/RN a fundo — deixe-as genéricas. Skill por projeto vira manutenção dobrada.

## O loop de trabalho (uma tarefa por vez)

1. Abra o Claude Code na raiz do repo. Ele lê o `CLAUDE.md` automaticamente.
2. Cole **uma** tarefa do `BACKLOG.md` usando o modelo do fim daquele arquivo.
3. Deixe implementar. A skill `mobile-engineer` carrega pelo gatilho. Os guardrails citados devem ser respeitados.
4. Rode `npm test` e `npm run lint`. Confira em iPhone SE no simulador e com fonte ampliada.
5. Commit pequeno e descritivo. Só então a próxima tarefa.

## Onde o caminho costuma entortar (e como evitar)

- **Inventar UI nova.** O design já existe em 13 telas — recrie fielmente. Se algo está faltando, pergunte antes de improvisar.
- **Duplicar fórmula clínica no cliente.** %G, volume, fase do ciclo vêm calculados do servidor. O app **só exibe**. Não há atalho aqui.
- **Deixar o read-only escapar.** A regra "aluna majoritariamente lê" é fácil de esquecer. As únicas escritas dela são RPE, dor, ciclo. Qualquer outro botão de edição em tela da aluna é bug.
- **Ignorar acessibilidade.** Público inclui 60+; alvo de toque < 44pt ou texto sem contraste AA é defeito.
- **Token em AsyncStorage.** Sempre `expo-secure-store` para JWT/refresh.
- **`fetch` solto em componente.** TanStack Query sempre; senão o cache e o sync quebram.

## Comandos úteis no Claude Code

- **Leitura antes de ação:** "leia `CLAUDE.md` e `docs/GUARDRAILS.md` antes de codar."
- **Plano antes de código** em tarefas M/L: "primeiro me mostre o plano de telas e componentes; espere meu ok."
- **Prova de guardrail:** "me mostre que a tela da aluna não renderiza nenhum botão de edição" (G1), "me mostre o `gen:api` consumido e os tipos vindos do backend".
- **Forçar fidelidade ao design:** "use apenas tokens de `constants/theme.ts`; nada de cor literal nova."
- **Forçar honestidade:** "se o endpoint não existir no backend ainda, pare e me avise — não mocke."

## Sincronia com o repo backend

Pontos de sincronia estão marcados com 🔗 no backlog (ex.: TM0.4 depende do Marco F0-PRONTO do backend).

Antes de começar uma tarefa marcada com 🔗:

1. Confirme que o marco do backend está pronto.
2. Rode `npm run gen:api` para puxar o OpenAPI atualizado e regerar tipos.
3. Verifique se há **breaking change** — o cliente gerado deve compilar sem erro. Se quebrou, fale com o backend antes de tentar consertar à mão.

## Ordem de montagem do repo (primeira vez)

1. Crie o repo `lumyra-mobile` e copie estes arquivos.
2. Coloque `Lumyra_Analise_de_Sistemas.docx` em `docs/ANALISE_DE_SISTEMAS.docx`.
3. Abra o Claude Code na raiz. Cole **TM0.1**.
4. Siga o backlog na ordem; sincronize com o backend nos pontos 🔗.

```
lumyra-mobile/
├── CLAUDE.md
└── docs/
    ├── ANALISE_DE_SISTEMAS.docx
    ├── BACKLOG.md
    ├── GUARDRAILS.md
    └── COMO_CONDUZIR_O_CLAUDE_CODE.md   (este arquivo)
```
