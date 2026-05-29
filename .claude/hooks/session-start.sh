#!/bin/bash
set -euo pipefail

# Roda apenas no ambiente remoto (Claude Code na web).
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Identidade git do autor — commits saem com as credenciais do Bruno em qualquer contexto.
git config --global user.name "Bruno Cardoso"
git config --global user.email "brunocdesa.dev@gmail.com"

# Dependencias: node_modules nao persiste entre sessoes efemeras.
# npm install (nao ci) para aproveitar o cache do container.
cd "$CLAUDE_PROJECT_DIR"
npm install --no-audit --no-fund >/dev/null

echo "session-start: identidade git configurada e dependencias instaladas."
