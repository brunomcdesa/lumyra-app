# GUARDRAILS — Lumyra Mobile (Expo / React Native)

> Regras invioláveis. Vêm diretamente das seções de risco, segurança e privacidade da análise
> (`docs/ANALISE_DE_SISTEMAS.docx`). Violar qualquer uma é defeito grave, não estilo.
> Confira esta lista antes de finalizar qualquer tarefa.

## G1 — Acesso assimétrico educadora/aluna (a regra nº 1 do mobile)

**Por quê:** a aluna não pode escrever em nada que não esteja na lista permitida — isso protege o histórico e a relação com o profissional.

- Telas da aluna que mostram **avaliação, anamnese e treino prescrito** são **read-only**. Não renderize controles de edição. Marque visualmente com chip "Apenas leitura".
- **Únicas escritas permitidas para a aluna**:
  - Registrar **RPE** (Borg CR10) em execução de treino;
  - Preencher o **questionário de dor**;
  - Registrar **ciclo menstrual** (data da última menstruação, duração) e **sintomas diários**.
- Qualquer outra ação de escrita pela aluna é um bug. O backend também barra (G6 lá), mas o app não deve nem tentar.

## G2 — Consentimento antes de coletar dado sensível

**Por quê:** LGPD Art. 11 — dado de saúde só pode ser tratado com base legal explícita.

- O backend devolve o status de consentimento da aluna. Se inativo, **não habilite** as telas de coleta de ciclo, dor e anamnese — mostre o termo e o botão de aceitar.
- Após revogação, esconda os dados sensíveis localmente também (até o backend confirmar a eliminação).
- O termo aceito tem versão; se o termo subir de versão, a aluna precisa reaceitar antes de novas coletas.

## G3 — Sem cálculo clínico no cliente

**Por quê:** duplicar a fórmula no mobile cria duas verdades — quando a do servidor for corrigida, a do app vai estar errada, e ninguém vai notar.

- %G, massa magra, índices, volume semanal por grupo e **fase do ciclo** vêm calculados do backend. O app só **exibe**.
- Conversões triviais para apresentação (kg→g, formatação) podem ser locais; **derivações clínicas, jamais**.

## G4 — Segurança de armazenamento e rede

- **JWT no `expo-secure-store`** (Keychain no iOS, EncryptedSharedPreferences no Android). Nunca em AsyncStorage, Zustand persistido ou MMKV sem cripto.
- Logout limpa SecureStore, cache de TanStack Query e estado em memória.
- Toda chamada HTTP é HTTPS (validar no `app.config.ts` em prod).
- **Sem certificate pinning no MVP** (custa manutenção e pode quebrar atualizações silenciosamente) — anotar como item futuro.

## G5 — Sem dado sensível em log/telemetria

- Conteúdo de ciclo, dor, anamnese, composição, nome completo, e-mail: **não vai para nenhum sistema de telemetria** (Sentry, analytics, etc.) — nem em mensagem de erro, nem em breadcrumb.
- Crash reports: scrub de payloads de requisição antes de enviar.
- Console: nada de `console.log` com dado sensível em build de produção (lint regra: bloquear `console.*` em prod).

## G6 — Fiel ao design

- Use **somente** os tokens do `constants/theme.ts`. Não invente cor, raio ou tipografia.
- As 13 telas do design são a especificação visual; recrie fielmente, não improvise.
- Antes de criar componente novo, procurar em `components/ui/` — provavelmente já existe.

## G7 — Acessibilidade não-negociável

- Alvos de toque ≥ **44pt** para qualquer elemento tocável.
- Sempre `SafeAreaView` / `useSafeAreaInsets` em telas (notch/Dynamic Island/home indicator).
- Contraste **AA** (validar sage `#5C8A6F` em texto pequeno — pode reprovar; usar `green-700` quando for texto pequeno).
- Conteúdo rola; nunca dimensões fixas em containers de texto.
- Testar com **fonte do sistema ampliada** — público inclui alunas 60+.

## G8 — Honestidade de implementação

- Nada de mock que finja ser real. Se o endpoint não existe ainda no backend, **pare e avise**.
- Não duplique tipos manualmente: rode `npm run gen:api` e use o cliente gerado.
- Não tome decisão de arquitetura por conta própria. As decisões estão na análise. Dúvida = perguntar.

---

## Checklist rápido de fim de tarefa

- [ ] **G1** — telas read-only da aluna sem edição; únicas escritas são RPE / dor / ciclo
- [ ] **G2** — coleta de dado sensível bloqueada sem consentimento ativo
- [ ] **G3** — zero cálculo clínico no cliente
- [ ] **G4** — token no SecureStore; logout limpa tudo
- [ ] **G5** — nenhum dado sensível em log/telemetria
- [ ] **G6** — só tokens do tema; fiel ao design
- [ ] **G7** — alvos ≥ 44pt; SafeArea; testado com fonte ampliada
- [ ] **G8** — nada simulado; cliente da API regenerado se houve mudança
