// screens-a.jsx — Login, Home, Alunos, Aluno Detalhe

// ═══════════════════════════════════════════════════════════════════════════
// 1. LOGIN
// ═══════════════════════════════════════════════════════════════════════════
const ScreenLogin = () => {
  return (
    <div className="mf-screen" style={{ background: '#fff' }}>
      <MFStatus />
      <div className="mf-login-bg" />

      <div className="mf-scroll" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ height: 80 }} />
        <div style={{ padding: '0 28px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 56 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 999,
              background: 'linear-gradient(135deg, var(--mf-green-200) 0%, var(--mf-lilac-300) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.6), 0 8px 22px rgba(145,115,181,0.20)',
              position: 'relative',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="12" cy="12" r="3.2" fill="#fff" stroke="none" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
              </svg>
            </div>
            <div style={{ fontFamily: 'var(--mf-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 32, letterSpacing: '-0.03em', color: 'var(--mf-ink-900)' }}>
              lumyra
            </div>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: 36 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 999,
              background: 'var(--mf-green-50)', color: 'var(--mf-green-700)',
              fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: 18,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--mf-green-500)' }} />
              Plataforma profissional
            </div>
            <h1 style={{ fontSize: 38, lineHeight: 1.0, marginBottom: 14, fontStyle: 'italic', fontWeight: 400 }}>
              Avalie.<br/>
              Prescreva.<br/>
              <span style={{ color: 'var(--mf-green-700)' }}>Evolua.</span>
            </h1>
            <p style={{ fontSize: 15, color: 'var(--mf-ink-500)', margin: 0, lineHeight: 1.55 }}>
              Suite completa para profissionais de educação física: avaliações antropométricas, prescrição e análise de volume de treino.
            </p>
          </div>

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <div className="mf-input-label">CREF ou e-mail</div>
              <div style={{ position: 'relative' }}>
                <input className="mf-input" defaultValue="caroline.borges@lumyra.app" style={{ paddingLeft: 48 }} />
                <div style={{ position: 'absolute', left: 16, top: 18, color: 'var(--mf-ink-400)' }}>
                  <I.mail size={20} />
                </div>
              </div>
            </div>
            <div>
              <div className="mf-input-label">Senha</div>
              <div style={{ position: 'relative' }}>
                <input className="mf-input" type="password" defaultValue="••••••••••" style={{ paddingLeft: 48, paddingRight: 48 }} />
                <div style={{ position: 'absolute', left: 16, top: 18, color: 'var(--mf-ink-400)' }}>
                  <I.lock size={20} />
                </div>
                <div style={{ position: 'absolute', right: 16, top: 18, color: 'var(--mf-ink-500)' }}>
                  <I.eye size={20} />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--mf-ink-700)' }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 5,
                  background: 'var(--mf-green-500)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><I.check size={12} sw={3.2} stroke="#fff" /></div>
                Lembrar-me
              </label>
              <a style={{ fontSize: 13, color: 'var(--mf-green-700)', fontWeight: 600 }}>Esqueci minha senha</a>
            </div>
            <button className="mf-btn" style={{ marginTop: 14 }}>
              Entrar na plataforma
              <I.chevR size={18} sw={2.4} />
            </button>
            <button className="mf-btn ghost">Criar conta profissional</button>
          </div>

          <div style={{ marginTop: 26, textAlign: 'center', fontSize: 11, color: 'var(--mf-ink-400)', letterSpacing: '0.04em' }}>
            CFM/CONFEF · CRIPTOGRAFIA AES-256 · LGPD
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 8,
      }}>
        <div style={{ width: 139, height: 5, borderRadius: 100, background: 'rgba(0,0,0,0.25)' }} />
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. HOME / DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════
const ScreenHome = () => {
  const upcoming = [
    { name: 'Pirigo Barreto',     time: '09:00', tag: 'Reavaliação', initials: 'PB' },
    { name: 'Ana Lacerda',         time: '10:30', tag: 'Anamnese',    initials: 'AL' },
    { name: 'Rodrigo Tavares',     time: '14:00', tag: 'Composição',  initials: 'RT' },
    { name: 'Mariana de Souza',    time: '16:15', tag: 'Prescrição',  initials: 'MS' },
  ];

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        {/* Header */}
        <div className="mf-tophead">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <MFAvatar name="Caroline Borges" size="md" color="#2D2842,#fff" />
            <div className="greet">
              <span className="hi">Bom dia ☀</span>
              <span className="name">Caroline B.</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <I.bell size={20} stroke="var(--mf-ink-700)" />
              <div style={{
                position: 'absolute', top: 8, right: 8,
                width: 8, height: 8, borderRadius: 999,
                background: 'var(--mf-green-500)', border: '2px solid var(--mf-white)',
              }} />
            </div>
          </div>
        </div>

        {/* Hero card */}
        <div className="mf-hero">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Esta semana
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 44, letterSpacing: '-0.04em', lineHeight: 1 }}>
                    12
                  </div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>avaliações</div>
                </div>
              </div>
              <MFSpark data={[3,5,4,6,7,9,12]} color="#A78BFA" />
            </div>

            <div style={{ display: 'flex', gap: 20, marginTop: 22, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Alunos ativos</div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22, marginTop: 2 }}>
                  47 <span style={{ fontSize: 12, color: '#C4B5FD', fontWeight: 600 }}>+3</span>
                </div>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Aderência média</div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22, marginTop: 2 }}>
                  86<span style={{ fontSize: 14, opacity: 0.6 }}>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ padding: '20px 18px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { ico: I.clipboard, t: 'Nova avaliação',  s: 'Anamnese · Antropometria', tone: 'green' },
            { ico: I.barbell,   t: 'Nova prescrição', s: 'Volume semanal', tone: 'ink' },
          ].map((it, idx) => {
            const Ico = it.ico;
            const isGreen = it.tone === 'green';
            return (
              <div key={idx} style={{
                padding: 16, borderRadius: 18,
                background: isGreen ? 'var(--mf-green-500)' : 'var(--mf-white)',
                color: isGreen ? '#fff' : 'var(--mf-ink-900)',
                border: isGreen ? 'none' : '1px solid var(--mf-ink-200)',
                position: 'relative', overflow: 'hidden',
                boxShadow: isGreen ? 'var(--mf-shadow-green)' : 'none',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 11,
                  background: isGreen ? 'rgba(255,255,255,0.18)' : 'var(--mf-green-50)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22,
                }}>
                  <Ico size={20} stroke={isGreen ? '#fff' : 'var(--mf-green-700)'} sw={2.2}/>
                </div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em' }}>{it.t}</div>
                <div style={{ fontSize: 11, opacity: isGreen ? 0.85 : 0.6, marginTop: 1 }}>{it.s}</div>
              </div>
            );
          })}
        </div>

        {/* Próximas avaliações */}
        <div className="mf-section-title">
          Agenda de hoje
          <span className="link">Ver tudo</span>
        </div>
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {upcoming.map((u, i) => (
            <div key={u.name} style={{
              background: 'var(--mf-white)',
              border: '1px solid var(--mf-ink-200)',
              borderRadius: 16,
              padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                fontFamily: 'var(--mf-mono)', fontWeight: 600, fontSize: 12,
                width: 44, textAlign: 'center',
                color: i === 0 ? 'var(--mf-green-700)' : 'var(--mf-ink-700)',
              }}>{u.time}</div>
              <div style={{ width: 1, height: 32, background: 'var(--mf-ink-200)' }} />
              <MFAvatar name={u.initials} size="md" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--mf-ink-900)' }}>{u.name}</div>
                <div style={{ fontSize: 12, color: 'var(--mf-ink-500)' }}>{u.tag}</div>
              </div>
              <I.chevR size={18} stroke="var(--mf-ink-400)" />
            </div>
          ))}
        </div>

        {/* Insight card */}
        <div className="mf-section-title">Insights</div>
        <div style={{ padding: '0 18px' }}>
          <div style={{
            padding: 16, borderRadius: 18,
            background: 'var(--mf-amber-50)',
            border: '1px solid #FEDF89',
            display: 'flex', gap: 12, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10,
              background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              <I.alert size={18} stroke="var(--mf-amber)" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#7A5A2E', fontFamily: 'var(--mf-display)' }}>
                3 alunos com reavaliação pendente
              </div>
              <div style={{ fontSize: 12, color: '#7A5A2E', opacity: 0.8, marginTop: 2, lineHeight: 1.4 }}>
                Pirigo, Marcos e Júlia passaram do prazo de 90 dias entre avaliações.
              </div>
            </div>
          </div>
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFTabBar active="home" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 3. ALUNOS — lista
// ═══════════════════════════════════════════════════════════════════════════
const ScreenAlunos = () => {
  const alunos = [
    { name: 'Pirigo Barreto',       age: 23, sex: 'M', fat: 6.59,  status: 'avaliar', last: 'há 1 dia',   trend: [8.2,7.9,7.4,7.0,6.8,6.59] },
    { name: 'Ana Lacerda',           age: 31, sex: 'F', fat: 22.4,  status: 'ok',      last: 'há 12 dias', trend: [26,25,24,23.5,23,22.4] },
    { name: 'Rodrigo Tavares',       age: 28, sex: 'M', fat: 14.2,  status: 'ok',      last: 'há 21 dias', trend: [18,17,16,15.5,14.8,14.2] },
    { name: 'Mariana de Souza',      age: 26, sex: 'F', fat: 19.8,  status: 'ok',      last: 'há 30 dias', trend: [22,21.5,21,20.5,20,19.8] },
    { name: 'Júlia Magalhães',       age: 34, sex: 'F', fat: 28.1,  status: 'avaliar', last: 'há 95 dias', trend: [30,29.5,29,28.6,28.3,28.1] },
    { name: 'Marcos Andrade',        age: 42, sex: 'M', fat: 24.7,  status: 'avaliar', last: 'há 120 dias',trend: [22,23,23.5,24,24.4,24.7] },
    { name: 'Diego Lemes',           age: 19, sex: 'M', fat: 11.3,  status: 'ok',      last: 'há 8 dias',  trend: [14,13.5,13,12.5,12,11.3] },
    { name: 'Fernanda Oliveira',     age: 38, sex: 'F', fat: 26.4,  status: 'ok',      last: 'há 16 dias', trend: [30,29,28,27.5,27,26.4] },
  ];

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        <div style={{ padding: '0 22px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 13, color: 'var(--mf-ink-500)', fontWeight: 500 }}>47 ativos</div>
            <h1 style={{ fontSize: 32 }}>Alunos</h1>
          </div>
          <div style={{
            width: 44, height: 44, borderRadius: 14,
            background: 'var(--mf-ink-900)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <I.plus size={22} sw={2.4} />
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: '0 18px' }}>
          <div style={{ position: 'relative' }}>
            <input className="mf-input" placeholder="Buscar por nome, CPF ou objetivo" style={{ paddingLeft: 46, height: 50 }} />
            <div style={{ position: 'absolute', left: 16, top: 15, color: 'var(--mf-ink-400)' }}>
              <I.search size={20} />
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ padding: '14px 18px 4px', display: 'flex', gap: 8, overflow: 'hidden' }}>
          <div className="mf-chip active">Todos · 47</div>
          <div className="mf-chip">Ativos · 42</div>
          <div className="mf-chip amber">A reavaliar · 5</div>
          <div className="mf-chip">Pausados · 3</div>
        </div>

        {/* List */}
        <div style={{ padding: '10px 18px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {alunos.map((a, i) => (
            <div key={a.name} className="mf-aluno-card">
              <MFAvatar name={a.name} size="md" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div className="name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
                  {a.status === 'avaliar' && (
                    <div style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--mf-amber)', flexShrink: 0 }} />
                  )}
                </div>
                <div className="meta">
                  {a.age} anos · {a.sex} · {a.fat.toFixed(1)}% gordura
                </div>
                <div style={{ fontSize: 11, color: 'var(--mf-ink-400)', marginTop: 2 }}>
                  Última avaliação {a.last}
                </div>
              </div>
              <MFSpark data={a.trend} color={a.status === 'avaliar' ? '#C6924A' : '#9173B5'} width={56} height={28} />
            </div>
          ))}
          <div style={{ height: 14 }} />
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFTabBar active="alunos" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 4. ALUNO DETALHE — Pirigo Barreto
// ═══════════════════════════════════════════════════════════════════════════
const ScreenAluno = () => {
  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        {/* Back nav */}
        <div style={{ padding: '0 18px 14px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <I.chevL size={20} stroke="var(--mf-ink-700)" />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <I.share size={18} stroke="var(--mf-ink-700)" />
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <I.more size={20} stroke="var(--mf-ink-700)" />
            </div>
          </div>
        </div>

        {/* Hero */}
        <div style={{ padding: '0 22px 18px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <MFAvatar name="Pirigo Barreto" size="xl" color="#F7F4FB,#5F477A" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: 24, marginBottom: 2 }}>Pirigo Barreto</h1>
            <div style={{ fontSize: 13, color: 'var(--mf-ink-500)' }}>
              23 anos · M · 193cm · 90kg
            </div>
            <div style={{ marginTop: 8, display: 'flex', gap: 6 }}>
              <span className="mf-chip green active" style={{ height: 24, fontSize: 11, padding: '0 9px' }}>
                Hipertrofia
              </span>
              <span className="mf-chip" style={{ height: 24, fontSize: 11, padding: '0 9px' }}>
                4x semana
              </span>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 20,
            padding: 16,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 14,
          }}>
            <MFStat label="IMC"        value="24.2" delta="0.6" deltaDir="down" />
            <div style={{ borderLeft: '1px solid var(--mf-ink-200)', paddingLeft: 14 }}>
              <MFStat label="% Gord."  value="6.59" unit="%" delta="2.4" deltaDir="down" />
            </div>
            <div style={{ borderLeft: '1px solid var(--mf-ink-200)', paddingLeft: 14 }}>
              <MFStat label="M. Magra" value="84.1" unit="kg" delta="1.8" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ padding: '18px 18px 14px' }}>
          <div className="mf-segctrl">
            <div className="seg active">Avaliações</div>
            <div className="seg">Treino atual</div>
            <div className="seg">Anamnese</div>
          </div>
        </div>

        {/* Avaliações list */}
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { date: '07 mar 2026',  type: 'Antropometria', fat: 6.59,  mass: 90.0, status: 'Atual', isCurrent: true },
            { date: '12 dez 2025', type: 'Antropometria', fat: 7.4,   mass: 89.2, status: '90 dias' },
            { date: '20 set 2025', type: 'Antropometria', fat: 8.8,   mass: 87.5, status: '90 dias' },
            { date: '25 jun 2025', type: 'Anamnese inicial', fat: null, mass: 86.0, status: 'Inicial' },
          ].map((av, i) => (
            <div key={i} style={{
              background: 'var(--mf-white)',
              border: '1px solid ' + (av.isCurrent ? 'var(--mf-green-500)' : 'var(--mf-ink-200)'),
              borderRadius: 16,
              padding: 14,
              position: 'relative',
            }}>
              {av.isCurrent && (
                <div style={{
                  position: 'absolute', top: -8, right: 14,
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                  background: 'var(--mf-green-500)', color: '#fff',
                  padding: '3px 8px', borderRadius: 999,
                }}>Atual</div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>{av.date}</div>
                  <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 1 }}>{av.type}</div>
                </div>
                <I.chevR size={18} stroke="var(--mf-ink-400)" />
              </div>
              {av.fat !== null && (
                <div style={{ display: 'flex', gap: 16, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--mf-ink-100)' }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 600 }}>%G</div>
                    <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 16 }}>{av.fat.toFixed(2)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 600 }}>Massa</div>
                    <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 16 }}>{av.mass.toFixed(1)} <span style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 500 }}>kg</span></div>
                  </div>
                  <div style={{ flex: 1, alignSelf: 'center', textAlign: 'right' }}>
                    <span className="mf-chip green" style={{ height: 22, fontSize: 10 }}>{av.status}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '18px 18px 0' }}>
          <button className="mf-btn">
            <I.plus size={18} sw={2.4} />
            Nova avaliação
          </button>
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFTabBar active="alunos" />
    </div>
  );
};

Object.assign(window, { ScreenLogin, ScreenHome, ScreenAlunos, ScreenAluno });
