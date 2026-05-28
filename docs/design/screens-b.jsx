// screens-b.jsx — Avaliação (Anamnese + Resultados), Prescrição, Análise de Volume

// ═══════════════════════════════════════════════════════════════════════════
// 5. NOVA AVALIAÇÃO — ANAMNESE (step 1)
// ═══════════════════════════════════════════════════════════════════════════
const ScreenAnamnese = () => {
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
          }}>
            <I.chevL size={20} stroke="var(--mf-ink-700)" />
          </div>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600 }}>Rascunho salvo · agora</div>
        </div>

        <div style={{ padding: '6px 22px 10px' }}>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Nova avaliação</div>
          <h1 style={{ fontSize: 28, marginTop: 2 }}>Anamnese</h1>
        </div>

        <MFStepper steps={['Anamnese', 'Composição', 'Resultados']} current={0} />

        {/* Cliente card */}
        <div style={{ padding: '0 18px 14px' }}>
          <div style={{
            background: 'var(--mf-ink-900)', color: '#fff',
            borderRadius: 16, padding: 12,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <MFAvatar name="Pirigo Barreto" size="md" color="#fff,#1F1B2E" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Pirigo Barreto</div>
              <div style={{ fontSize: 11, opacity: 0.65 }}>07/03/2026 · Consulta nº 4</div>
            </div>
            <div style={{ fontFamily: 'var(--mf-mono)', fontSize: 11, opacity: 0.7 }}>23.05a · M</div>
          </div>
        </div>

        {/* Sinais vitais */}
        <div style={{ padding: '0 18px', marginBottom: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <I.heart size={16} stroke="var(--mf-green-700)" />
            <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14, color: 'var(--mf-ink-900)' }}>Sinais vitais & medidas base</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { lbl: 'Estatura',  unit: 'cm',    val: '193' },
              { lbl: 'Massa',     unit: 'kg',    val: '90.0' },
              { lbl: 'FC repouso',unit: 'bpm',   val: '58' },
              { lbl: 'IMC',       unit: 'kg/m²', val: '24.2', readOnly: true },
            ].map((f) => (
              <div key={f.lbl} style={{
                background: 'var(--mf-white)',
                border: '1px solid var(--mf-ink-200)',
                borderRadius: 14, padding: '10px 12px',
                opacity: f.readOnly ? 0.7 : 1,
              }}>
                <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{f.lbl}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22, color: 'var(--mf-ink-900)', letterSpacing: '-0.02em' }}>{f.val}</div>
                  <div style={{ fontSize: 11, color: 'var(--mf-ink-500)' }}>{f.unit}</div>
                </div>
              </div>
            ))}

            <div style={{
              gridColumn: '1 / -1',
              background: 'var(--mf-white)',
              border: '1px solid var(--mf-ink-200)',
              borderRadius: 14, padding: '10px 12px',
            }}>
              <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Pressão arterial</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22 }}>118</div>
                <div style={{ fontSize: 14, color: 'var(--mf-ink-400)' }}>/</div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22 }}>76</div>
                <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', marginLeft: 4 }}>mmHg</div>
                <div style={{ flex: 1 }} />
                <span className="mf-chip green" style={{ height: 22, fontSize: 10 }}>Normotenso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Componentes clínicos */}
        <div style={{ padding: '0 18px', marginTop: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <I.clipboard size={16} stroke="var(--mf-green-700)" />
            <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14, color: 'var(--mf-ink-900)' }}>Componentes clínicos</div>
          </div>

          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 16, padding: 4,
          }}>
            {[
              { lbl: 'Histórico de cirurgias e lesões', val: 'Entorse tornozelo D (2022)', filled: true },
              { lbl: 'Patologias diagnosticadas',       val: 'Nenhuma',                     filled: true },
              { lbl: 'Medicamentos em uso',             val: 'Nenhum',                      filled: true },
              { lbl: 'Reações alérgicas',               val: 'Adicionar...',                 filled: false },
              { lbl: 'Queixas apresentadas',            val: 'Adicionar...',                 filled: false },
            ].map((row, i, arr) => (
              <div key={row.lbl} style={{
                padding: '12px 14px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--mf-ink-100)' : 'none',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: 6,
                  background: row.filled ? 'var(--mf-green-500)' : 'var(--mf-ink-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {row.filled && <I.check size={12} sw={3} stroke="#fff" />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600 }}>{row.lbl}</div>
                  <div style={{
                    fontSize: 13, fontWeight: row.filled ? 600 : 400,
                    color: row.filled ? 'var(--mf-ink-900)' : 'var(--mf-ink-400)',
                    marginTop: 1,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>{row.val}</div>
                </div>
                <I.edit size={16} stroke="var(--mf-ink-400)" />
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '22px 18px 0' }}>
          <button className="mf-btn">
            Próximo: Composição corporal
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

// ═══════════════════════════════════════════════════════════════════════════
// 6. RESULTADOS — Composição Corporal
// ═══════════════════════════════════════════════════════════════════════════
const ScreenResultados = () => {
  // Real PDF data — PIRIGO (Guedes & Guedes, antropometria bi-compartimental)
  const indicators = [
    { name: 'IMC',                    val: 24.2,  unit: 'kg/m²', ref: '≤ 25.0',         status: 'ok' },
    { name: 'Cintura / Quadril',     val: 0.79,  unit: '',      ref: '< 0.83',          status: 'ok' },
    { name: 'Cintura / Estatura',    val: 0.42,  unit: '',      ref: '0.50',            status: 'ok' },
    { name: 'Índice de Conicidade',  val: 0.94,  unit: '',      ref: '≤ 1.0',           status: 'ok' },
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
          }}>
            <I.chevL size={20} stroke="var(--mf-ink-700)" />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><I.download size={18} stroke="var(--mf-ink-700)" /></div>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><I.share size={18} stroke="var(--mf-ink-700)" /></div>
          </div>
        </div>

        <div style={{ padding: '6px 22px 10px' }}>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Pirigo Barreto · 07/03/26</div>
          <h1 style={{ fontSize: 28, marginTop: 2 }}>Composição corporal</h1>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 4 }}>
            Antropometria bi-compartimental · <strong style={{ color: 'var(--mf-ink-700)' }}>Guedes &amp; Guedes</strong>
          </div>
        </div>

        <MFStepper steps={['Anamnese', 'Composição', 'Resultados']} current={2} />

        {/* % gordura hero — banded gauge */}
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--mf-ink-900), #0a2c24)',
            color: '#fff',
            borderRadius: 22, padding: 20,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 200, height: 200, borderRadius: 999,
              background: 'radial-gradient(circle, rgba(247,144,9,0.25), transparent 70%)',
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Gordura relativa
                </div>
                <span style={{
                  background: 'rgba(247,144,9,0.18)', color: '#FDB022',
                  fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 999,
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>Abaixo da ref.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em' }}>6.59</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>%</div>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>
                Referência homens 23a: <strong style={{ color: '#fff' }}>12 – 18%</strong>
              </div>

              {/* gauge */}
              <div style={{ marginTop: 16, position: 'relative', height: 32 }}>
                <div style={{
                  height: 8, borderRadius: 4,
                  background: 'linear-gradient(90deg, #6E92C0 0%, #6E92C0 28%, #9173B5 28%, #9173B5 60%, #C6924A 60%, #C6924A 84%, #C46A6A 84%, #C46A6A 100%)',
                  opacity: 0.85,
                }} />
                {/* marker */}
                <div style={{
                  position: 'absolute', top: -3, left: 'calc(11% - 7px)',
                  width: 14, height: 14, borderRadius: 999,
                  background: '#fff',
                  boxShadow: '0 0 0 3px rgba(255,255,255,0.25), 0 4px 8px rgba(0,0,0,0.3)',
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 10, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mf-mono)' }}>
                  <span>0</span><span>essencial</span><span>ideal</span><span>moderado</span><span>30+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compartimentos kg */}
        <div style={{ padding: '14px 18px 0' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 18, padding: 16,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Compartimentos</div>
              <div style={{ fontFamily: 'var(--mf-mono)', fontSize: 11, color: 'var(--mf-ink-500)' }}>90.00 kg</div>
            </div>
            {/* horizontal stacked bar */}
            <div style={{ height: 26, borderRadius: 8, overflow: 'hidden', display: 'flex', boxShadow: '0 0 0 1px var(--mf-ink-200) inset' }}>
              <div style={{ width: '93.4%', background: 'var(--mf-green-500)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8, color: '#fff', fontSize: 11, fontWeight: 700 }}>84.06</div>
              <div style={{ width: '6.6%', background: '#FDB022' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, gap: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--mf-green-500)' }} />
                  <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 600 }}>Massa magra</div>
                </div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 18, marginTop: 2 }}>84.06<span style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 500 }}> kg</span></div>
                <div style={{ fontSize: 10, color: 'var(--mf-green-700)', fontWeight: 600, marginTop: 1 }}>↑ acima da ref.</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: '#FDB022' }} />
                  <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 600 }}>Gordura absoluta</div>
                </div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 18, marginTop: 2 }}>5.94<span style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 500 }}> kg</span></div>
                <div style={{ fontSize: 10, color: 'var(--mf-amber)', fontWeight: 600, marginTop: 1 }}>↓ ref. 10.8 – 16.2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="mf-section-title">Índices clínicos</div>
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {indicators.map(ind => (
            <div key={ind.name} style={{
              background: 'var(--mf-white)',
              border: '1px solid var(--mf-ink-200)',
              borderRadius: 14, padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600 }}>{ind.name}</div>
                <div style={{ fontSize: 11, color: 'var(--mf-ink-400)', marginTop: 1 }}>Ref: {ind.ref}</div>
              </div>
              <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 18, color: 'var(--mf-ink-900)' }}>
                {ind.val.toFixed(2)} <span style={{ fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 500 }}>{ind.unit}</span>
              </div>
              <div style={{
                width: 28, height: 28, borderRadius: 999,
                background: 'var(--mf-green-50)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <I.check size={14} sw={3} stroke="var(--mf-green-600)" />
              </div>
            </div>
          ))}
        </div>

        {/* Dobras cutâneas */}
        <div className="mf-section-title">
          Dobras cutâneas
          <span className="link">3 medidas</span>
        </div>
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 18, padding: 16,
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
          }}>
            {[
              { name: 'Tricipital',    val: 8 },
              { name: 'Supra-ilíaca',  val: 6 },
              { name: 'Abdominal',     val: 6 },
            ].map(d => (
              <div key={d.name} style={{
                background: 'var(--mf-green-50)',
                borderRadius: 12, padding: 10,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 10, color: 'var(--mf-green-800)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {d.name}
                </div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 22, color: 'var(--mf-green-800)', marginTop: 4, letterSpacing: '-0.02em' }}>
                  {d.val}<span style={{ fontSize: 10, opacity: 0.6 }}>mm</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', marginTop: 8, padding: '0 4px', lineHeight: 1.5 }}>
            Soma das 3 dobras (Guedes &amp; Guedes ♂): <strong style={{ color: 'var(--mf-ink-900)' }}>20 mm</strong>. Densidade corporal estimada e %G derivada via fórmula Siri.
          </div>
        </div>

        <div style={{ padding: '22px 18px 0', display: 'flex', gap: 10 }}>
          <button className="mf-btn ghost" style={{ flex: 1 }}>
            <I.history size={18} />
            Comparar
          </button>
          <button className="mf-btn" style={{ flex: 1 }}>
            <I.barbell size={18} />
            Prescrever
          </button>
        </div>

        <div style={{ height: 80 }} />
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

// ═══════════════════════════════════════════════════════════════════════════
// 7. PRESCRIÇÃO DE TREINO — seleção de exercícios
// ═══════════════════════════════════════════════════════════════════════════
const ScreenPrescricao = () => {
  const groups = ['Peitoral', 'Costas', 'Ombros', 'Bíceps', 'Tríceps', 'Pernas', 'Glúteos', 'Abdômen'];
  const exercises = [
    { name: 'Supino Reto',         sets: 4, reps: '8-10', load: '70kg', selected: true },
    { name: 'Supino Inclinado',    sets: 3, reps: '8-10', load: '60kg', selected: true },
    { name: 'Crucifixo Inclinado', sets: 3, reps: '10-12',load: '18kg', selected: true },
    { name: 'Cross Over',           sets: 3, reps: '12-15',load: '15kg', selected: true },
    { name: 'Supino Declinado',     sets: 0, reps: '—',    load: '—',    selected: false },
    { name: 'Crucifixo no Peck',    sets: 0, reps: '—',    load: '—',    selected: false },
    { name: 'Flexão de Braço',      sets: 0, reps: '—',    load: '—',    selected: false },
    { name: 'Pull Over',             sets: 0, reps: '—',    load: '—',    selected: false },
  ];

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        {/* Header */}
        <div style={{ padding: '0 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <I.chevL size={20} stroke="var(--mf-ink-700)" />
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'var(--mf-green-50)', color: 'var(--mf-green-700)',
            padding: '6px 12px', borderRadius: 999,
            fontSize: 12, fontWeight: 700,
          }}>
            <I.target size={14} sw={2.4} />
            Hipertrofia · 4x sem
          </div>
        </div>

        <div style={{ padding: '6px 22px 14px' }}>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Pirigo · Sessão A</div>
          <h1 style={{ fontSize: 28, marginTop: 2 }}>Prescrição</h1>
        </div>

        {/* Group selector */}
        <div style={{ padding: '0 18px 14px', display: 'flex', gap: 8, overflow: 'hidden', whiteSpace: 'nowrap' }}>
          {groups.map((g, i) => (
            <div key={g} className={'mf-chip' + (i === 0 ? ' active' : '')}>{g}</div>
          ))}
        </div>

        {/* Volume meter for this group */}
        <div style={{ padding: '0 18px 16px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 18, padding: 14,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Volume — Peitoral</div>
                <div style={{ fontSize: 11, color: 'var(--mf-ink-500)' }}>séries / semana</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 26, color: 'var(--mf-green-700)', letterSpacing: '-0.03em' }}>13</div>
                <div style={{ fontSize: 12, color: 'var(--mf-ink-400)' }}>/ 16</div>
              </div>
            </div>
            <div style={{ position: 'relative', height: 10, background: 'var(--mf-ink-100)', borderRadius: 5, overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', left: '50%', right: '20%', top: 0, bottom: 0,
                background: 'repeating-linear-gradient(-45deg, rgba(145,115,181,0.15), rgba(145,115,181,0.15) 4px, rgba(145,115,181,0.25) 4px, rgba(145,115,181,0.25) 8px)',
                borderLeft: '1.5px dashed var(--mf-green-500)',
                borderRight: '1.5px dashed var(--mf-green-500)',
              }} />
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '65%', background: 'var(--mf-green-500)', borderRadius: 5 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'var(--mf-ink-400)', fontFamily: 'var(--mf-mono)' }}>
              <span>0</span><span style={{ color: 'var(--mf-green-700)', fontWeight: 600 }}>10 – 16 ideal</span><span>20</span>
            </div>
          </div>
        </div>

        {/* Exercise list */}
        <div style={{ padding: '0 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 14 }}>Exercícios · Peitoral</div>
          <div style={{ fontSize: 12, color: 'var(--mf-green-700)', fontWeight: 600 }}>+ adicionar</div>
        </div>

        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {exercises.map((ex, i) => (
            <div key={ex.name} style={{
              background: ex.selected ? 'var(--mf-white)' : 'var(--mf-ink-50)',
              border: '1px solid ' + (ex.selected ? 'var(--mf-ink-200)' : 'var(--mf-ink-200)'),
              borderRadius: 14, padding: '10px 12px',
              display: 'flex', alignItems: 'center', gap: 12,
              opacity: ex.selected ? 1 : 0.55,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 7,
                background: ex.selected ? 'var(--mf-green-500)' : 'transparent',
                border: ex.selected ? 'none' : '1.8px solid var(--mf-ink-300)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {ex.selected && <I.check size={13} sw={3.2} stroke="#fff" />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--mf-ink-900)' }}>{ex.name}</div>
                <div style={{ fontSize: 11, color: 'var(--mf-ink-500)', display: 'flex', gap: 10, marginTop: 2 }}>
                  {ex.selected ? (
                    <>
                      <span><strong style={{ color: 'var(--mf-ink-700)' }}>{ex.sets}</strong> × {ex.reps}</span>
                      <span>·</span>
                      <span>{ex.load}</span>
                    </>
                  ) : 'toque para adicionar'}
                </div>
              </div>
              {ex.selected && (
                <div style={{
                  fontFamily: 'var(--mf-mono)', fontSize: 11, fontWeight: 600,
                  color: 'var(--mf-green-700)',
                  background: 'var(--mf-green-50)',
                  padding: '4px 8px', borderRadius: 8,
                }}>
                  {ex.sets} ser.
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '22px 18px 0' }}>
          <button className="mf-btn">
            <I.activity size={18} />
            Ver análise de volume completa
          </button>
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFTabBar active="treino" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// 8. ANÁLISE DE VOLUME — semanal por grupo muscular
// ═══════════════════════════════════════════════════════════════════════════
const ScreenVolume = () => {
  // séries semanais por grupo (baseado na planilha)
  const muscles = [
    { name: 'Peitoral',        sets: 13, target: [10, 16], color: 'green' },
    { name: 'Costas',          sets: 17, target: [12, 18], color: 'green' },
    { name: 'Tríceps',         sets: 9,  target: [8, 14],  color: 'green' },
    { name: 'Bíceps',          sets: 8,  target: [8, 14],  color: 'green' },
    { name: 'Delt. Anterior',  sets: 6,  target: [4, 8],   color: 'green' },
    { name: 'Delt. Medial',    sets: 10, target: [8, 14],  color: 'green' },
    { name: 'Delt. Posterior', sets: 4,  target: [6, 12],  color: 'low' },
    { name: 'Quadríceps',      sets: 16, target: [10, 18], color: 'green' },
    { name: 'Isquiotibiais',   sets: 12, target: [10, 16], color: 'green' },
    { name: 'Glúteos',         sets: 9,  target: [8, 14],  color: 'green' },
    { name: 'Panturrilhas',    sets: 22, target: [10, 16], color: 'over' },
    { name: 'Trapézio',        sets: 3,  target: [4, 10],  color: 'low' },
    { name: 'Abdômen',         sets: 8,  target: [6, 12],  color: 'green' },
  ];
  const maxScale = 24;
  const totalSets = muscles.reduce((a, m) => a + m.sets, 0);

  return (
    <div className="mf-screen">
      <MFStatus />

      <div className="mf-scroll">
        <div className="mf-statusbar-spacer" />

        {/* Header */}
        <div style={{ padding: '0 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
              <I.filter size={18} stroke="var(--mf-ink-700)" />
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'var(--mf-white)', border: '1px solid var(--mf-ink-200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <I.share size={18} stroke="var(--mf-ink-700)" />
            </div>
          </div>
        </div>

        <div style={{ padding: '6px 22px 4px' }}>
          <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Pirigo · Mesociclo atual</div>
          <h1 style={{ fontSize: 28, marginTop: 2 }}>Volume semanal</h1>
        </div>

        {/* Top summary */}
        <div style={{ padding: '14px 18px 0' }}>
          <div className="mf-card dark" style={{ padding: 18, borderRadius: 20 }}>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Total séries / sem</div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 36, marginTop: 4, letterSpacing: '-0.03em' }}>{totalSets}</div>
              </div>
              <div style={{ flex: 1, borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 14 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Sessões</div>
                <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 800, fontSize: 36, marginTop: 4, letterSpacing: '-0.03em' }}>4<span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}> /sem</span></div>
              </div>
            </div>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: '#9173B5' }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>10 dentro da faixa</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: '#C6924A' }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>1 acima</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: '#9CA3AF' }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>2 abaixo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Segmented */}
        <div style={{ padding: '14px 18px 4px' }}>
          <div className="mf-segctrl">
            <div className="seg active">Uma sessão</div>
            <div className="seg">Duas sessões</div>
          </div>
        </div>

        <div className="mf-section-title" style={{ marginTop: 10 }}>
          Por grupo muscular
          <span style={{ fontFamily: 'var(--mf-mono)', fontSize: 11, color: 'var(--mf-ink-500)', fontWeight: 500 }}>séries / sem</span>
        </div>

        {/* Bars */}
        <div style={{ padding: '0 18px' }}>
          <div style={{
            background: 'var(--mf-white)',
            border: '1px solid var(--mf-ink-200)',
            borderRadius: 18, padding: '14px 16px',
          }}>
            {muscles.map((m, i) => (
              <div key={m.name} style={{ borderBottom: i < muscles.length - 1 ? '1px solid var(--mf-ink-100)' : 'none' }}>
                <MFVolBar label={m.name} value={m.sets} target={m.target} max={maxScale} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, padding: '0 4px', fontSize: 11, color: 'var(--mf-ink-500)' }}>
            <div style={{
              width: 22, height: 12, borderRadius: 3,
              background: 'repeating-linear-gradient(-45deg, rgba(145,115,181,0.18), rgba(145,115,181,0.18) 3px, rgba(145,115,181,0.28) 3px, rgba(145,115,181,0.28) 6px)',
              border: '1px dashed var(--mf-green-500)',
              flexShrink: 0,
            }} />
            <span>Zona alvo de volume semanal (séries efetivas)</span>
          </div>
        </div>

        {/* Insights */}
        <div className="mf-section-title">Recomendações</div>
        <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { icon: I.alert, tone: 'amber',   t: 'Reduza panturrilha', s: '22 séries está acima do MAV. Sugerimos 14–16.' },
            { icon: I.zap,   tone: 'green',   t: 'Aumente Delt. Posterior', s: '4 séries abaixo da faixa. Adicione 2× crucifixo invertido.' },
            { icon: I.target,tone: 'ink',     t: 'Volume total adequado', s: '137 séries/sem é compatível com intermediário em hipertrofia.' },
          ].map((r, i) => {
            const Ico = r.icon;
            const bgMap = { amber: '#FBF4EA', green: 'var(--mf-green-50)', ink: 'var(--mf-ink-100)' };
            const fgMap = { amber: '#B54708', green: 'var(--mf-green-700)', ink: 'var(--mf-ink-700)' };
            return (
              <div key={i} style={{
                background: 'var(--mf-white)',
                border: '1px solid var(--mf-ink-200)',
                borderRadius: 14, padding: 12,
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: bgMap[r.tone],
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Ico size={16} stroke={fgMap[r.tone]} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--mf-display)', fontWeight: 700, fontSize: 13, color: 'var(--mf-ink-900)' }}>{r.t}</div>
                  <div style={{ fontSize: 12, color: 'var(--mf-ink-500)', marginTop: 2, lineHeight: 1.4 }}>{r.s}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mf-tabbar-spacer" />
      </div>

      <MFTabBar active="treino" />
    </div>
  );
};

Object.assign(window, { ScreenAnamnese, ScreenResultados, ScreenPrescricao, ScreenVolume });
