// screens-c.jsx — Testes funcionais (60+), Aluna views (Home, Treino+RPE, Ciclo, Dor)

// ───────────────────────────────────────────────────────────────────────────
// Tab bar — Aluna (perspectiva da aluna, 5 abas próprias)
// ───────────────────────────────────────────────────────────────────────────
const MFAlunaTabBar = ({ active = 'home' }) => {
  const items = [
    { k: 'home',    label: 'Início',  ico: I.home },
    { k: 'treino',  label: 'Treino',  ico: I.barbell },
    { k: 'ciclo',   label: 'Ciclo',   ico: I.heart },
    { k: 'aval',    label: 'Avaliações', ico: I.activity },
    { k: 'perfil',  label: 'Perfil',  ico: I.user },
  ];
  return (
    <div className="mf-tabbar">
      {items.map(it => {
        const Ico = it.ico;
        const isActive = it.k === active;
        return (
          <div key={it.k} className={'tab' + (isActive ? ' active' : '')}>
            <div className="ico"><Ico size={22} stroke={isActive ? 'var(--mf-green-700)' : 'var(--mf-ink-400)'} sw={isActive ? 2.4 : 2} /></div>
            <div>{it.label}</div>
          </div>
        );
      })}
      <div style={{
        position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
        width: 139, height: 5, borderRadius: 100, background: 'rgba(0,0,0,0.25)',
        pointerEvents: 'none',
      }}/>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 9. TESTES FUNCIONAIS — bateria para alunos 60+ (lado do educador)
// ═══════════════════════════════════════════════════════════════════════════
const ScreenTestesFuncionais = () => {
  const tests = [
    {
      name: 'Timed Up & Go (TUG)',
      desc: 'Levantar, andar 3m e voltar a sentar',
      unit: 's', value: '9.2', ref: '< 10s',
      status: 'ok', statusLabel: 'Independente',
      icon: I.activity,
    },
    {
      name: 'Sentar e levantar 30s',
      desc: 'Repetições em 30 segundos',
      unit: 'rep', value: '14', ref: '≥ 12 (70-74a)',
      status: 'ok', statusLabel: 'Acima da ref.',
      icon: I.zap,
    },
    {
      name: 'Apoio unipodal',
      desc: 'Equilíbrio em uma perna, olhos abertos',
      unit: 's', value: '18', ref: '≥ 10s',
      status: 'ok', statusLabel: 'Adequado',
      icon: I.target,
    },
    {
      name: 'Preensão manual',
      desc: 'Dinamômetro hidráulico — mão dominante',
      unit: 'kg', value: '22', ref: '≥ 20 (♀ 70-74a)',
      status: 'ok', statusLabel: 'Adequado',
      icon: I.body,
    },
    {
      name: 'Sentar e alcançar',
      desc: 'Banco de Wells · flexibilidade posterior',
      unit: 'cm', value: '−2', ref: '≥ 0 cm',
      status: 'alert', statusLabel: 'Atenção',
      icon: I.ruler,
    },
    {
      name: 'Tinetti (POMA)',
      desc: 'Marcha + equilíbrio · score 0-28',
      unit: '/28', value: '24', ref: '> 24 baixo risco',
      status: 'ok', statusLabel: 'Baixo risco queda',
      icon: I.check,
    },
  ];

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        {/* Back nav */}
        <div style={{ padding: '0 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><I.chevL size={20} stroke="var(--mf-ink-700)" /></div>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600 }}>Rascunho salvo</div>
        </div>

        <div style={{ padding: '6px 22px 6px' }}>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Bateria funcional · 60+</div>
          <h1 style={{ fontSize: 28, marginTop: 2 }}>Testes funcionais</h1>
        </div>

        {/* Aluno card */}
        <div style={{ padding: '8px 18px 14px' }}>
          <div style={{
            background: 'var(--mf-green-50)',
            border: '1px solid var(--mf-green-200)',
            borderRadius: 16, padding: 12,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <MFAvatar name="Dona Marta" size="md" color="#fff,#5F477A" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14, color: 'var(--mf-ink-900)' }}>Marta Espíndola</div>
              <div style={{ fontSize: 11, color: 'var(--mf-ink-600)' }}>72 anos · ♀ · 1ª bateria do ano</div>
            </div>
            <div style={{
              fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22, color: 'var(--mf-green-700)',
              display: 'flex', alignItems: 'baseline', gap: 2,
            }}>
              5<span style={{ fontSize: 11, color: 'var(--mf-green-700)', opacity: 0.7, fontWeight: 600 }}>/6</span>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <div style={{ padding: '0 18px 16px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 18, padding: 16,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Risco de queda</div>
                <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', marginTop: 2 }}>Composto Tinetti + TUG + Unipodal</div>
              </div>
              <span className="mf-chip green" style={{ height: 26 }}>Baixo</span>
            </div>
            <div style={{ position: 'relative', height: 10, background: 'var(--mf-ink-100)', borderRadius: 5, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '25%',
                background: 'linear-gradient(90deg, var(--mf-green-400), var(--mf-green-600))', borderRadius: 5 }} />
              {/* tick marks */}
              {[33, 66].map((p, i) => (
                <div key={i} style={{ position: 'absolute', left: p + '%', top: -2, bottom: -2, width: 1, background: 'var(--mf-ink-300)' }} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'var(--mf-ink-500)', fontWeight: 600 }}>
              <span style={{ color: 'var(--mf-green-700)' }}>Baixo</span><span>Moderado</span><span>Alto</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 22px 10px', fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Testes realizados</div>

        {/* Tests list */}
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {tests.map((t, i) => {
            const Ico = t.icon;
            const isAlert = t.status === 'alert';
            return (
              <div key={t.name} style={{
                background: 'var(--mf-white)',
                border: '1px solid ' + (isAlert ? '#FEDF89' : 'var(--mf-ink-200)'),
                borderRadius: 16, padding: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 11,
                    background: isAlert ? 'var(--mf-amber-50)' : 'var(--mf-green-50)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Ico size={18} stroke={isAlert ? 'var(--mf-amber)' : 'var(--mf-green-700)'} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', marginTop: 1, lineHeight: 1.4 }}>{t.desc}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                        <div style={{
                          fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22,
                          color: isAlert ? 'var(--mf-amber)' : 'var(--mf-ink-900)',
                          letterSpacing: '-0.02em', lineHeight: 1,
                        }}>{t.value}</div>
                        <div style={{ fontSize: 11, color: 'var(--mf-ink-500)' }}>{t.unit}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
                      <span className={'mf-chip ' + (isAlert ? 'amber' : 'green')} style={{ height: 22, fontSize: 10 }}>
                        {t.statusLabel}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--mf-ink-500)' }}>Ref: {t.ref}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Pending test */}
          <div style={{
            background: 'var(--mf-ink-50)',
            border: '1.5px dashed var(--mf-ink-300)',
            borderRadius: 16, padding: 14,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 11,
              background: 'var(--mf-white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              border: '1px dashed var(--mf-ink-300)',
            }}>
              <I.plus size={18} stroke="var(--mf-ink-500)" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14, color: 'var(--mf-ink-700)' }}>Caminhada de 6 minutos</div>
              <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', marginTop: 1 }}>Capacidade cardiorrespiratória · ainda não realizado</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '22px 18px 0' }}>
          <button className="mf-btn">
            Finalizar bateria
            <I.check size={18} sw={2.4} />
          </button>
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFTabBar active="aval" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 10. ALUNA · HOME — visão da aluna (Ana Lacerda)
// ═══════════════════════════════════════════════════════════════════════════
const ScreenAlunaHome = () => {
  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        {/* Header */}
        <div className="mf-tophead">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <MFAvatar name="Ana Lacerda" size="md" color="#FFE4F1,#B42318" />
            <div className="greet">
              <span className="hi">Olá ✨</span>
              <span className="name">Ana</span>
            </div>
          </div>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <I.bell size={20} stroke="var(--mf-ink-700)" />
          </div>
        </div>

        {/* Cycle hero */}
        <div style={{ padding: '0 18px' }}>
          <div style={{
            borderRadius: 24, padding: 20,
            background: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative ring */}
            <svg width="160" height="160" viewBox="0 0 100 100" style={{ position: 'absolute', right: -30, top: -30, opacity: 0.4 }}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#EC4899" strokeWidth="0.5" strokeDasharray="2 3" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="#BE185D" strokeWidth="0.4" />
            </svg>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.6)', padding: '4px 10px',
                borderRadius: 999, fontSize: 11, fontWeight: 700, color: '#9D174D',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: 999, background: '#EC4899' }} />
                Fase folicular
              </div>
              <div style={{ marginTop: 12, fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.03em', color: '#831843', lineHeight: 1 }}>
                Dia 9 <span style={{ fontSize: 16, color: '#9D174D', fontWeight: 600, opacity: 0.7 }}>/ 28</span>
              </div>
              <div style={{ fontSize: 13, color: '#831843', marginTop: 6, lineHeight: 1.45, maxWidth: 240 }}>
                Energia subindo. Ótimo momento para <strong>treinos de força</strong> e cargas maiores.
              </div>
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#9D174D', fontWeight: 600 }}>
                <span>Ver detalhes do ciclo</span>
                <I.chevR size={14} sw={2.4} stroke="#9D174D" />
              </div>
            </div>
          </div>
        </div>

        {/* Treino de hoje */}
        <div className="mf-section-title">Treino de hoje</div>
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'var(--mf-ink-900)', color: '#fff',
            borderRadius: 20, padding: 18,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', width: 180, height: 180, right: -60, top: -60,
              background: 'radial-gradient(circle, rgba(145,115,181,0.3), transparent 70%)',
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Sessão B · Inferior</div>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22, marginTop: 4 }}>Posterior &amp; glúteos</div>
                </div>
                <span style={{
                  background: 'var(--mf-green-500)', color: '#fff',
                  fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 999,
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>Em curso</span>
              </div>
              <div style={{ display: 'flex', gap: 18, marginTop: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Exercícios</div>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 20, marginTop: 2 }}>3 <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>/ 7</span></div>
                </div>
                <div style={{ width: 1, background: 'rgba(255,255,255,0.08)' }} />
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Duração</div>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 20, marginTop: 2 }}>42 <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>min</span></div>
                </div>
                <div style={{ flex: 1 }} />
                <button style={{
                  background: 'var(--mf-green-500)', color: '#fff',
                  border: 'none', height: 44, padding: '0 16px', borderRadius: 12,
                  fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 13,
                  display: 'flex', alignItems: 'center', gap: 6, alignSelf: 'flex-end',
                  boxShadow: '0 4px 12px rgba(145,115,181,0.4)',
                }}>
                  Continuar
                  <I.chevR size={16} sw={2.4} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links — read only access */}
        <div className="mf-section-title">Minhas informações</div>
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { ico: I.activity,  t: 'Última avaliação',  s: '22.4% gordura · há 12 dias', tag: 'Apenas leitura' },
            { ico: I.clipboard, t: 'Minha anamnese',    s: 'Atualizar questionário de dor', tag: 'Pendente', tagTone: 'amber' },
            { ico: I.barbell,   t: 'Treino atual',      s: 'Periodização · Set 5/6', tag: '+RPE' },
          ].map((it, i) => {
            const Ico = it.ico;
            return (
              <div key={i} style={{
                background: 'var(--mf-white)',
                border: '1px solid var(--mf-ink-200)',
                borderRadius: 14, padding: 12,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 11,
                  background: 'var(--mf-green-50)', color: 'var(--mf-green-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Ico size={20} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--mf-ink-900)' }}>{it.t}</div>
                  <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 1 }}>{it.s}</div>
                </div>
                {it.tag && (
                  <span className={'mf-chip ' + (it.tagTone === 'amber' ? 'amber' : 'green')} style={{ height: 22, fontSize: 10 }}>
                    {it.tag}
                  </span>
                )}
                <I.chevR size={16} stroke="var(--mf-ink-400)" />
              </div>
            );
          })}
        </div>

        {/* Educadora */}
        <div className="mf-section-title">Sua educadora</div>
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 16, padding: 14,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <MFAvatar name="Caroline Borges" size="md" color="#2D2842,#fff" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Caroline B. Gonçalves</div>
              <div style={{ fontSize: 11, color: 'var(--mf-ink-500)' }}>CREF 047328-G/SP</div>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: 11,
              background: 'var(--mf-green-50)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <I.mail size={18} stroke="var(--mf-green-700)" />
            </div>
          </div>
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFAlunaTabBar active="home" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 11. ALUNA · TREINO COM RPE — Borg CR10
// ═══════════════════════════════════════════════════════════════════════════
const ScreenAlunaTreino = () => {
  // Borg CR10 (0-10) color stops
  const rpeColors = ['#94A3B8','#94A3B8','#22C55E','#22C55E','#84CC16','#FACC15','#F59E0B','#F59E0B','#F97316','#EF4444','#DC2626'];
  const rpeLabels = ['descanso','muito leve','leve','leve','moderado','um pouco difícil','difícil','difícil','muito difícil','quase máximo','máximo'];

  const exercises = [
    { name: 'Stiff', sets: 3, reps: '10-12', load: '40 kg', state: 'done', rpe: 7 },
    { name: 'Cadeira flexora', sets: 4, reps: '12', load: '35 kg', state: 'done', rpe: 8 },
    { name: 'Elevação de quadril', sets: 4, reps: '15', load: '60 kg', state: 'doing', rpeSet: 2 },
    { name: 'Avanço com halteres', sets: 3, reps: '10', load: '12 kg', state: 'todo' },
    { name: 'Cadeira abdutora', sets: 3, reps: '15', load: '30 kg', state: 'todo' },
    { name: 'Panturrilha em pé', sets: 4, reps: '20', load: '80 kg', state: 'todo' },
  ];

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        <div style={{ padding: '0 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><I.chevL size={20} stroke="var(--mf-ink-700)" /></div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'var(--mf-green-50)', color: 'var(--mf-green-700)',
            padding: '6px 12px', borderRadius: 999,
            fontSize: 12, fontWeight: 700,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--mf-green-500)' }} />
            22:48 em curso
          </div>
        </div>

        <div style={{ padding: '6px 22px 12px' }}>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Sessão B · Posterior &amp; glúteos</div>
          <h1 style={{ fontSize: 26, marginTop: 2 }}>Treino de hoje</h1>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 4 }}>Prescrito por Caroline B. · adapt. fase folicular</div>
        </div>

        {/* Exercise being done — RPE input */}
        <div style={{ padding: '0 18px 14px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '2px solid var(--mf-green-500)',
            borderRadius: 20, padding: 16,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -10, left: 16,
              background: 'var(--mf-green-500)', color: '#fff',
              fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 999,
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>Atual</div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 18 }}>Elevação de quadril</div>
                <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 2 }}>4 séries × 15 reps · 60 kg</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 24, color: 'var(--mf-green-700)' }}>2</div>
                <div style={{ fontSize: 12, color: 'var(--mf-ink-500)' }}>/ 4 séries</div>
              </div>
            </div>

            {/* Sets pills */}
            <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
              {[1,2,3,4].map(s => {
                const isDone = s <= 2;
                return (
                  <div key={s} style={{
                    flex: 1, height: 36, borderRadius: 10,
                    background: isDone ? 'var(--mf-green-500)' : 'var(--mf-ink-100)',
                    color: isDone ? '#fff' : 'var(--mf-ink-500)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                    fontSize: 12, fontWeight: 600,
                  }}>
                    {isDone && <I.check size={14} sw={3} />}
                    Série {s}
                  </div>
                );
              })}
            </div>

            <div className="mf-div" style={{ margin: '16px 0' }} />

            {/* RPE picker */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
                <div>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Como foi essa série?</div>
                  <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', marginTop: 1 }}>Percepção subjetiva de esforço · Borg CR10</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 32,
                    color: rpeColors[8], lineHeight: 1, letterSpacing: '-0.03em',
                  }}>8</div>
                  <div style={{ fontSize: 10, color: 'var(--mf-ink-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>muito difícil</div>
                </div>
              </div>

              {/* RPE bar */}
              <div style={{ display: 'flex', gap: 3 }}>
                {Array.from({ length: 11 }).map((_, i) => {
                  const isSelected = i === 8;
                  const isPast = i < 8;
                  return (
                    <div key={i} style={{
                      flex: 1, height: isSelected ? 38 : 26,
                      borderRadius: 6,
                      background: isPast || isSelected ? rpeColors[i] : 'var(--mf-ink-100)',
                      transition: 'all 0.2s',
                      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                      paddingBottom: 3,
                      color: '#fff', fontSize: 10, fontWeight: 700,
                      position: 'relative',
                    }}>
                      {isSelected && (
                        <div style={{
                          position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
                          width: 12, height: 12, borderRadius: 999,
                          background: '#fff', border: '2px solid ' + rpeColors[8],
                        }} />
                      )}
                      {(isPast || isSelected) && i}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'var(--mf-ink-400)', fontWeight: 600 }}>
                <span>0 descanso</span>
                <span>5 moderado</span>
                <span>10 máximo</span>
              </div>
            </div>

            <button className="mf-btn" style={{ marginTop: 16, height: 48 }}>
              Confirmar série 2
              <I.check size={18} sw={2.4} />
            </button>
          </div>
        </div>

        {/* Lista de exercícios */}
        <div style={{ padding: '0 22px 10px', fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Sequência</div>
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {exercises.map((ex, i) => {
            const isDone = ex.state === 'done';
            const isDoing = ex.state === 'doing';
            return (
              <div key={ex.name} style={{
                background: 'var(--mf-white)',
                border: '1px solid ' + (isDoing ? 'var(--mf-green-500)' : 'var(--mf-ink-200)'),
                borderRadius: 14, padding: '12px 14px',
                display: 'flex', alignItems: 'center', gap: 12,
                opacity: ex.state === 'todo' ? 0.65 : 1,
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 999,
                  background: isDone ? 'var(--mf-green-500)' : (isDoing ? '#fff' : 'var(--mf-ink-100)'),
                  border: isDoing ? '2px solid var(--mf-green-500)' : 'none',
                  color: isDone ? '#fff' : 'var(--mf-ink-500)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 12,
                  flexShrink: 0,
                }}>
                  {isDone ? <I.check size={14} sw={3} /> : i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--mf-ink-900)' }}>{ex.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', marginTop: 1 }}>
                    {ex.sets}× {ex.reps} · {ex.load}
                  </div>
                </div>
                {isDone && ex.rpe && (
                  <div style={{
                    fontFamily: 'var(--mf-mono)', fontSize: 11, fontWeight: 700,
                    color: '#fff', background: rpeColors[ex.rpe],
                    padding: '4px 8px', borderRadius: 8,
                  }}>
                    RPE {ex.rpe}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFAlunaTabBar active="treino" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 12. ALUNA · CICLO MENSTRUAL — fases e implicações no treino
// ═══════════════════════════════════════════════════════════════════════════
const ScreenAlunaCiclo = () => {
  // 28-day cycle visualization
  const day = 9;
  const cycleLen = 28;
  const phases = [
    { name: 'Menstrual',  start: 1,  end: 5,  color: '#EF4444', light: '#FEE2E2', dark: '#7F1D1D' },
    { name: 'Folicular',  start: 6,  end: 13, color: '#EC4899', light: '#FCE7F3', dark: '#831843' },
    { name: 'Ovulação',   start: 14, end: 16, color: '#F59E0B', light: '#FEF3C7', dark: '#78350F' },
    { name: 'Lútea',      start: 17, end: 28, color: '#9173B5', light: '#EEE6F4', dark: '#322747' },
  ];
  const currentPhase = phases.find(p => day >= p.start && day <= p.end);

  // wheel — donut chart for cycle
  const SIZE = 220, CX = SIZE/2, CY = SIZE/2, R = 90, RING = 22;
  const arc = (startDay, endDay, color) => {
    const a1 = (startDay - 1) / cycleLen * Math.PI * 2 - Math.PI / 2;
    const a2 = endDay / cycleLen * Math.PI * 2 - Math.PI / 2;
    const x1 = CX + R * Math.cos(a1), y1 = CY + R * Math.sin(a1);
    const x2 = CX + R * Math.cos(a2), y2 = CY + R * Math.sin(a2);
    const ix1 = CX + (R - RING) * Math.cos(a1), iy1 = CY + (R - RING) * Math.sin(a1);
    const ix2 = CX + (R - RING) * Math.cos(a2), iy2 = CY + (R - RING) * Math.sin(a2);
    const large = (a2 - a1) > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${R-RING} ${R-RING} 0 ${large} 0 ${ix1} ${iy1} Z`;
  };
  // current-day marker
  const dayAng = (day - 0.5) / cycleLen * Math.PI * 2 - Math.PI / 2;
  const dx = CX + (R - RING/2) * Math.cos(dayAng);
  const dy = CY + (R - RING/2) * Math.sin(dayAng);

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        <div style={{ padding: '0 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><I.calendar size={20} stroke="var(--mf-ink-700)" /></div>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600 }}>Última menstruação: 27 abr</div>
        </div>

        <div style={{ padding: '6px 22px 8px' }}>
          <h1 style={{ fontSize: 28 }}>Ciclo menstrual</h1>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 4 }}>Personalize avaliações e treinos com base na sua fase</div>
        </div>

        {/* Wheel */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 6px' }}>
          <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
            <svg width={SIZE} height={SIZE}>
              <defs>
                <filter id="cycle-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
              </defs>
              {phases.map((p, i) => (
                <path key={p.name} d={arc(p.start, p.end, p.color)} fill={p.color} opacity={p.name === currentPhase.name ? 1 : 0.35} />
              ))}
              {/* day markers (dots) */}
              {Array.from({ length: cycleLen }).map((_, i) => {
                const a = (i + 0.5) / cycleLen * Math.PI * 2 - Math.PI / 2;
                const x = CX + (R + 12) * Math.cos(a);
                const y = CY + (R + 12) * Math.sin(a);
                return (
                  <circle key={i} cx={x} cy={y} r={i + 1 === day ? 3 : 1.5}
                          fill={i + 1 === day ? currentPhase.color : 'var(--mf-ink-300)'} />
                );
              })}
              {/* current marker */}
              <circle cx={dx} cy={dy} r={9} fill="#fff" stroke={currentPhase.color} strokeWidth="3" />
              <circle cx={dx} cy={dy} r={3} fill={currentPhase.color} />
            </svg>
            {/* center text */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            }}>
              <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Dia</div>
              <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 48, letterSpacing: '-0.04em', lineHeight: 1, color: currentPhase.dark }}>
                {day}
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: currentPhase.dark, marginTop: 4 }}>{currentPhase.name}</div>
            </div>
          </div>
        </div>

        {/* Phase legend */}
        <div style={{ padding: '8px 18px 0', display: 'flex', gap: 6 }}>
          {phases.map(p => {
            const isCurrent = p.name === currentPhase.name;
            return (
              <div key={p.name} style={{
                flex: 1, padding: '8px 6px', borderRadius: 10,
                background: isCurrent ? p.light : 'var(--mf-ink-50)',
                border: '1px solid ' + (isCurrent ? p.color : 'var(--mf-ink-200)'),
                textAlign: 'center',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: 999, background: p.color, margin: '0 auto 4px' }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: isCurrent ? p.dark : 'var(--mf-ink-500)' }}>{p.name}</div>
                <div style={{ fontSize: 9, color: 'var(--mf-ink-400)', fontFamily: 'var(--mf-mono)', marginTop: 1 }}>
                  {p.start}-{p.end}
                </div>
              </div>
            );
          })}
        </div>

        {/* Current phase detail */}
        <div className="mf-section-title">
          <span style={{ color: currentPhase.dark }}>Fase {currentPhase.name.toLowerCase()}</span>
          <span className="link">Sobre as fases</span>
        </div>

        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: currentPhase.light,
            border: '1px solid ' + currentPhase.color + '40',
            borderRadius: 18, padding: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <I.heart size={16} stroke={currentPhase.dark} />
              <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 13, color: currentPhase.dark, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                O que acontece no corpo
              </div>
            </div>
            <div style={{ fontSize: 13, color: currentPhase.dark, lineHeight: 1.5 }}>
              Os ovários começam a amadurecer um novo folículo. O <strong>estrogênio sobe gradualmente</strong>, melhorando humor, foco e tolerância à dor. Recuperação muscular acelera, sensibilidade à insulina aumenta.
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div style={{ padding: '12px 18px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { ico: I.barbell, tone: 'green', t: 'Recomendado: força e intensidade',
              s: 'Cargas mais altas, séries pesadas, HIIT. Body responde bem a estímulo intenso.' },
            { ico: I.activity, tone: 'green', t: 'Avaliações: ideal para retestes',
              s: 'É a melhor janela para PRs, testes de força máxima e composição corporal.' },
            { ico: I.alert, tone: 'amber', t: 'Atenção: hidratação',
              s: 'Estrogênio em alta favorece retenção sutil — beba ~2,5L/dia se for treinar forte.' },
          ].map((r, i) => {
            const Ico = r.ico;
            const bgMap = { green: 'var(--mf-green-50)', amber: 'var(--mf-amber-50)' };
            const fgMap = { green: 'var(--mf-green-700)', amber: 'var(--mf-amber)' };
            return (
              <div key={i} style={{
                background: 'var(--mf-white)',
                border: '1px solid var(--mf-ink-200)',
                borderRadius: 14, padding: 14,
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10,
                  background: bgMap[r.tone],
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Ico size={16} stroke={fgMap[r.tone]} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 13, color: 'var(--mf-ink-900)' }}>{r.t}</div>
                  <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 2, lineHeight: 1.45 }}>{r.s}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily log */}
        <div className="mf-section-title">Registro de hoje</div>
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 18, padding: 16,
          }}>
            <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, marginBottom: 10 }}>Como você está se sentindo?</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {[
                { l: 'Energia alta', sel: true },
                { l: 'Bem disposta', sel: true },
                { l: 'Cólica' },
                { l: 'Inchaço' },
                { l: 'Cansaço' },
                { l: 'Humor instável' },
                { l: 'Cefaleia' },
              ].map(c => (
                <span key={c.l} className={'mf-chip' + (c.sel ? ' green active' : '')} style={{ height: 30, fontSize: 12 }}>
                  {c.sel && <I.check size={12} sw={3} />}
                  {c.l}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFAlunaTabBar active="ciclo" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 13. ALUNA · QUESTIONÁRIO DE DOR — dentro da anamnese, mapa corporal
// ═══════════════════════════════════════════════════════════════════════════
const ScreenAlunaDor = () => {
  // Pain regions selected (front view body map)
  // 0-10 scale, with two regions registered
  const pains = [
    { region: 'Lombar', score: 6, type: 'pulsante', trigger: 'Ao levantar pela manhã', tone: 'amber' },
    { region: 'Joelho dir.', score: 3, type: 'dor difusa', trigger: 'Após agachamento', tone: 'green' },
  ];

  // body silhouette regions (simplified) — relative coords on 200x440 vbox
  const bodyRegions = [
    { id: 'head',     cx: 100, cy: 32,  r: 22 },
    { id: 'neck',     cx: 100, cy: 64,  r: 10 },
    { id: 'shoulderL',cx: 70,  cy: 90,  r: 13 },
    { id: 'shoulderR',cx: 130, cy: 90,  r: 13 },
    { id: 'chest',    cx: 100, cy: 110, r: 18 },
    { id: 'lower',    cx: 100, cy: 165, r: 17, label: 'lombar', selected: true, color: '#C6924A' },
    { id: 'hip',      cx: 100, cy: 200, r: 18 },
    { id: 'kneeL',    cx: 82,  cy: 290, r: 11 },
    { id: 'kneeR',    cx: 118, cy: 290, r: 11, label: 'joelho', selected: true, color: '#9173B5' },
    { id: 'footL',    cx: 80,  cy: 400, r: 10 },
    { id: 'footR',    cx: 120, cy: 400, r: 10 },
    { id: 'elbowL',   cx: 50,  cy: 175, r: 9 },
    { id: 'elbowR',   cx: 150, cy: 175, r: 9 },
    { id: 'handL',    cx: 38,  cy: 250, r: 10 },
    { id: 'handR',    cx: 162, cy: 250, r: 10 },
  ];

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        <div style={{ padding: '0 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><I.chevL size={20} stroke="var(--mf-ink-700)" /></div>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600 }}>2 de 5 · Anamnese</div>
        </div>

        <div style={{ padding: '6px 22px 14px' }}>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Anamnese · Dor</div>
          <h1 style={{ fontSize: 26, marginTop: 2 }}>Onde você sente dor?</h1>
          <div style={{ fontSize: 13, color: 'var(--mf-ink-500)', marginTop: 4, lineHeight: 1.45 }}>
            Toque nas áreas do corpo para marcar dores. Suas respostas vão direto para a Caroline.
          </div>
        </div>

        {/* Body map */}
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 22, padding: 16,
          }}>
            {/* View toggle */}
            <div className="mf-segctrl" style={{ marginBottom: 12 }}>
              <div className="seg active">Frente</div>
              <div className="seg">Costas</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
              <svg viewBox="0 0 200 440" width="180" height="380">
                {/* Body silhouette */}
                <g fill="var(--mf-ink-100)" stroke="var(--mf-ink-300)" strokeWidth="1.2">
                  {/* head */}
                  <ellipse cx="100" cy="32" rx="22" ry="26" />
                  {/* neck */}
                  <rect x="92" y="55" width="16" height="14" />
                  {/* torso */}
                  <path d="M70 70 Q60 75 56 95 L46 175 Q44 195 50 215 L60 230 Q60 270 65 295 L62 320 L72 320 L78 280 L82 230 L88 230 L92 285 L92 320 L108 320 L108 285 L112 230 L118 230 L122 280 L128 320 L138 320 L135 295 Q140 270 140 230 L150 215 Q156 195 154 175 L144 95 Q140 75 130 70 Z" />
                  {/* arms */}
                  <path d="M58 78 L48 90 L40 130 L36 175 L36 220 L40 260 L46 260 L48 220 L52 175 L58 130 Z" />
                  <path d="M142 78 L152 90 L160 130 L164 175 L164 220 L160 260 L154 260 L152 220 L148 175 L142 130 Z" />
                </g>

                {/* dotted region hints */}
                {bodyRegions.map(r => !r.selected && (
                  <circle key={r.id} cx={r.cx} cy={r.cy} r={r.r}
                          fill="transparent" stroke="var(--mf-ink-300)" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                ))}

                {/* Selected pains */}
                {bodyRegions.filter(r => r.selected).map(r => (
                  <g key={r.id}>
                    <circle cx={r.cx} cy={r.cy} r={r.r + 6} fill={r.color} opacity="0.18" />
                    <circle cx={r.cx} cy={r.cy} r={r.r} fill={r.color} opacity="0.4" />
                    <circle cx={r.cx} cy={r.cy} r={r.r - 4} fill={r.color} />
                  </g>
                ))}
              </svg>
            </div>

            <div style={{
              padding: 10, background: 'var(--mf-ink-50)', borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 11, color: 'var(--mf-ink-600)', marginTop: 6,
            }}>
              <I.alert size={14} stroke="var(--mf-ink-500)" />
              <span>Suas áreas marcadas são compartilhadas só com sua educadora.</span>
            </div>
          </div>
        </div>

        {/* Registered pains */}
        <div className="mf-section-title">
          Dores registradas
          <span className="link">+ adicionar</span>
        </div>

        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {pains.map((p, i) => {
            const colorMap = { amber: { ring: '#C6924A', bg: '#FBF4EA', dark: '#7A5A2E' }, green: { ring: '#9173B5', bg: '#F7F4FB', dark: '#5F477A' } };
            const c = colorMap[p.tone];
            return (
              <div key={i} style={{
                background: 'var(--mf-white)',
                border: '1px solid var(--mf-ink-200)',
                borderRadius: 16, padding: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 999,
                      background: c.bg, border: '2px solid ' + c.ring,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: 10, height: 10, borderRadius: 999, background: c.ring }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 15 }}>{p.region}</div>
                      <div style={{ fontSize: 11, color: 'var(--mf-ink-500)' }}>{p.type} · {p.trigger}</div>
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 22,
                    color: c.dark, letterSpacing: '-0.02em',
                  }}>{p.score}<span style={{ fontSize: 11, color: c.dark, fontWeight: 600, opacity: 0.6 }}>/10</span></div>
                </div>

                {/* VAS slider */}
                <div style={{ position: 'relative', height: 12 }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(90deg, #22C55E 0%, #84CC16 30%, #FACC15 50%, #F59E0B 70%, #EF4444 100%)',
                    borderRadius: 6, opacity: 0.55,
                  }} />
                  <div style={{
                    position: 'absolute', top: -3, left: `calc(${p.score * 10}% - 9px)`,
                    width: 18, height: 18, borderRadius: 999,
                    background: '#fff', border: '3px solid ' + c.ring,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 9, color: 'var(--mf-ink-400)', fontWeight: 600 }}>
                  <span>sem dor</span>
                  <span>moderada</span>
                  <span>incapacitante</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ padding: '22px 18px 0' }}>
          <button className="mf-btn">
            Continuar anamnese
            <I.chevR size={18} sw={2.4} />
          </button>
        </div>

        <div style={{ height: 60 }} />
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 34,
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 8,
      }}>
        <div style={{ width: 139, height: 5, borderRadius: 100, background: 'rgba(0,0,0,0.25)' }} />
      </div>
    </div>
  );
};

Object.assign(window, {
  MFAlunaTabBar,
  ScreenTestesFuncionais,
  ScreenAlunaHome,
  ScreenAlunaTreino,
  ScreenAlunaCiclo,
  ScreenAlunaDor,
});
