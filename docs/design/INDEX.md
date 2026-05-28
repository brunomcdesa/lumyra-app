# Design de Referência — Lumyra

> Estes arquivos são a **especificação visual do Lumyra**. São JSX do protótipo
> (React/Babel, não React Native), mas contêm o layout, hierarquia de componentes,
> tokens e conteúdo real de cada tela. Leia o arquivo correspondente **antes** de
> implementar qualquer tela ou componente.
>
> ⚠ Não edite estes arquivos. São referência somente-leitura.
> ⚠ Estes componentes usam CSS-in-JS de protótipo — ao portar para React Native,
>   substitua por StyleSheet com os tokens de `src/constants/theme.ts`.

---

## Mapa tela → arquivo

| Tela | Componente no arquivo | Arquivo |
|---|---|---|
| Login | `ScreenLogin` | `screens-a.jsx` |
| Home da educadora | `ScreenHome` | `screens-a.jsx` |
| Lista de alunas | `ScreenAlunos` | `screens-a.jsx` |
| Detalhe da aluna | `ScreenAluno` | `screens-a.jsx` |
| Anamnese (stepper) | `ScreenAnamnese` | `screens-b.jsx` |
| Resultados de composição corporal | `ScreenResultados` | `screens-b.jsx` |
| Prescrição de treino | `ScreenPrescricao` | `screens-b.jsx` |
| Volume semanal | `ScreenVolume` | `screens-b.jsx` |
| Testes funcionais 60+ | `ScreenTestesFuncionais` | `screens-c.jsx` |
| Home da aluna | `ScreenAlunaHome` | `screens-c.jsx` |
| Execução de treino + RPE | `ScreenAlunaTreino` | `screens-c.jsx` |
| Ciclo menstrual | `ScreenAlunaCiclo` | `screens-c.jsx` |
| Questionário de dor | `ScreenAlunaDor` | `screens-c.jsx` |

## Componentes UI compartilhados → `ui.jsx`

Todos os primitivos do design system do Lumyra estão em `ui.jsx`.
Antes de criar qualquer componente em `src/components/ui/`, leia `ui.jsx` para ver
o que já existe e como é usado nas telas.

## Tokens visuais → `styles.css`

Paleta de cores, tipografia (Fraunces / Inter), raios de borda, sombras e espaçamentos.
Os valores CSS viram as constantes em `src/constants/theme.ts`.

---

## Como usar ao pedir uma tela ao Claude Code

```
Implemente a tela TM1.3 (Detalhe da aluna).
Antes de codar, leia docs/design/INDEX.md e docs/design/screens-a.jsx
(componente ScreenAluno) para ver o layout exato.
Porte fielmente para React Native usando os tokens de src/constants/theme.ts.
```

## Regras de portagem protótipo → React Native

| Protótipo (JSX/CSS) | React Native equivalente |
|---|---|
| `div`, `span` | `View`, `Text` |
| `style={{ ... }}` CSS | `StyleSheet.create({})` com tokens |
| `onClick` | `onPress` |
| `img` | `Image` com `source` |
| `overflow: scroll` | `ScrollView` |
| Fonte CSS (`font-family`) | `fontFamily` via `expo-font` (Fraunces/Inter) |
| `px` / `rem` | `dp` (sem unidade no RN) |
| `border-radius` | `borderRadius` (camelCase) |
| `position: fixed` | `position: 'absolute'` + `SafeAreaView` |
| Variáveis CSS (`--color-green-500`) | `colors.green[500]` de `theme.ts` |
