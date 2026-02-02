import { motion } from 'framer-motion'

const timeline = [
  {
    period: '2025.07 – 2026.01',
    role: '건양대학교병원 바이오메디컬 AI 과정 (3기)',
    bullets: [
      'CDSS 개발 실습 및 K-MIMIC DB 구축·분석',
      'EMR 기반 패혈증 조기 예측 모델 개발 (LightGBM, XGBoost, SHAP)',
      'CT/MRI 의료영상 전처리·세그멘테이션 파이프라인 구축 (LiTS, KiTS23, HCC-TACE-SEG)',
      '데이터 마트 생성, feature engineering, 자동화 파이프라인 설계',
    ],
  },
  {
    period: '2022.11 – 2025.04',
    role: '공정 관리 / 설비 관리 — (주)동광아연',
    bullets: [
      '공장 전체 공정 운영 및 프로세스 관리',
      '안전 기준 준수·위험요소 분석 등 시스템 안정성 확보',
      '이상 상황 탐지·보고 체계 운영 및 제조 데이터 기반 공정 효율 분석',
      '→ 의료데이터 파이프라인의 안정성·품질관리 경험으로 연결',
    ],
  },
  {
    period: '2019.11 – 2022.11',
    role: '기자재 유통·기술영업 — (주)명일전기',
    bullets: [
      'LS산전, Autonics, Honeywell 등 산업용 센서·전장 제품 공급',
      '고객 요구사항 분석 및 구성 요소 최적화 제안',
      '기술 문서·사양 관리와 분류 체계 정리',
      '→ 의료기기/임상정보 시스템을 이해하는 기반 경험',
    ],
  },
]

const customIcons = {
  jupyter: { src: '/assets/Jupyter_logo.svg.png', label: 'Jupyter' },
  numpy: { src: '/assets/numpy.svg', label: 'NumPy' },
  pandas: { src: '/assets/Pandas_logo.svg.png', label: 'Pandas' },
  jwt: { src: '/assets/jwt.png', label: 'JWT' },
  windsurf: { src: '/assets/windsurf.svg', label: 'Windsurf' },
  finalcut: { src: '/assets/final-cut-pro-logo.png', label: 'Final Cut Pro' },
  miricanvas: { src: '/assets/miricanvas.png', label: 'MiriCanvas' },
  suno: { src: '/assets/suno-app-icon.png', label: 'Suno AI' },
  canva: { src: '/assets/canva.png', label: 'Canva' },
  mariadb: { src: '/assets/mariadb.png', label: 'MariaDB' },
}

const skills = [
  {
    category: 'AI · ML',
    items: [
      { type: 'icon', value: 'python', label: 'Python' },
      { type: 'icon', value: 'r', label: 'R' },
      { type: 'custom', value: 'jupyter', label: 'Jupyter' },
      { type: 'icon', value: 'tensorflow', label: 'TensorFlow' },
      { type: 'icon', value: 'pytorch', label: 'PyTorch' },
      { type: 'custom', value: 'numpy', label: 'NumPy' },
      { type: 'custom', value: 'pandas', label: 'Pandas' },
      { type: 'icon', value: 'scikitlearn', label: 'scikit-learn' },
      { type: 'icon', value: 'opencv', label: 'OpenCV' },
    ],
  },
  {
    category: 'Supporting Skills',
    items: [
      { type: 'icon', value: 'html', label: 'HTML' },
      { type: 'icon', value: 'css', label: 'CSS' },
      { type: 'icon', value: 'bootstrap', label: 'Bootstrap' },
      { type: 'icon', value: 'django', label: 'Django' },
      { type: 'icon', value: 'react', label: 'React' },
      { type: 'icon', value: 'mysql', label: 'MySQL' },
      { type: 'custom', value: 'mariadb', label: 'MariaDB' },
    ],
  },
  {
    category: 'DevOps · Tools',
    items: [
      { type: 'icon', value: 'git', label: 'Git' },
      { type: 'icon', value: 'github', label: 'GitHub' },
      { type: 'icon', value: 'vscode', label: 'VS Code' },
      { type: 'icon', value: 'pycharm', label: 'PyCharm' },
      { type: 'icon', value: 'nodejs', label: 'Node.js' },
      { type: 'icon', value: 'npm', label: 'npm' },
      { type: 'icon', value: 'bash', label: 'Bash' },
      { type: 'custom', value: 'windsurf', label: 'Windsurf' },
    ],
  },
  {
    category: 'Creative · Media',
    items: [
      { type: 'custom', value: 'finalcut', label: 'Final Cut Pro' },
      { type: 'icon', value: 'aftereffects', label: 'After Effects' },
      { type: 'custom', value: 'canva', label: 'Canva' },
      { type: 'custom', value: 'miricanvas', label: 'MiriCanvas' },
      { type: 'custom', value: 'suno', label: 'Suno AI' },
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">04</span>
          <h2 className="text-3xl font-semibold text-slate-50">Experience</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          제조·공정 분야의 실무 경험을 기반으로, 현재는 의료데이터·AI 모델링 중심의 전문성을 확장하고 있습니다.
        </p>
      </header>

      <div className="relative space-y-6 border-l border-slate-800/80 pl-6">
        {timeline.map((entry) => (
          <motion.article
            key={entry.period}
            className="relative rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="absolute -left-[34px] top-6 block h-3 w-3 rounded-full border border-medblue-bright bg-slate-950" />
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-medblue-soft/90">
              {entry.period}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">{entry.role}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {entry.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-medblue-bright/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-4">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">03</span>
          <h2 className="text-3xl font-semibold text-slate-50">Skills</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          의료 AI 연구 및 데이터 파이프라인 구축을 위해 활용하는 기술 스택입니다.
        </p>
      </header>

      <div className="grid gap-2 grid-cols-1">
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-base font-semibold text-slate-200">{skill.category}</h3>
            <div className="mt-2 flex flex-wrap gap-4">
              {skill.items.map((item) => {
                const key = item.value ?? item.label
                const displayLabel = item.label ?? customIcons[item.value]?.label ?? item.value

                // content가 직접 정의된 경우 (MariaDB 같은 특수 케이스)
                if (item.content) {
                  return <div key={key}>{item.content}</div>
                }

                if (item.type === 'icon') {
                  return (
                    <div key={key} className="skill-item">
                      <span className="skill-icon">
                        <img
                          src={`https://skillicons.dev/icons?i=${item.value}`}
                          alt={displayLabel}
                          className="skill-icon__img"
                          loading="lazy"
                        />
                      </span>
                      <span className="skill-label">{displayLabel}</span>
                    </div>
                  )
                }

                if (item.type === 'custom') {
                  const custom = customIcons[item.value]
                  if (!custom) return null
                  return (
                    <div key={key} className="skill-item">
                      <span className="skill-icon skill-icon--custom">
                        <img
                          src={custom.src}
                          alt={displayLabel}
                          className="skill-icon__img"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTEuOTk5IDFjLTIuMjE3IDAtNC4zMzQuMzU4LTYuMjUxLjk5NnYxOS4zM2MxLjg5LS42MTYgMy43NDItLjk5IDUuNzY0LS45OSAzLjQ3OCAwIDEwLjU2NiAyLjgxMyAxMC41NjYgMy4yNTMgMCAuNDQxLTUuMDg4IDMuNzM3LTEwLjU2NiAzLjczNy0yLjAyIDAtMy44NzUtLjM3NC01Ljc2NS0uOTl2LTE5LjMzdjEuODg5LjYxNiAzLjc0My45OSA1Ljc2NS45OWguMDEzYzEuNzIzIDAgMy4yNzMtLjM0IDUuMTU0LS42ODYuMTEzLjAwNi4yMjYuMDEyLjM0Mi4wMTIgMi4yMTcgMCA0LjMzNC4zNTggNi4yNTEuOTk2djE5LjMzYy0xLjg5LS42MTYtMy43NDItLjk5LTUuNzY0LS45OS01LjQ3OCAwLTEwLjU2NiAyLjgxMy0xMC41NjYgMy4yNTMgMCAuNDQxIDUuMDg4IDMuNzM3IDEwLjU2NiAzLjczNyAyLjAyMSAwIDMuODc1LS4zNzQgNS43NjUtLjk5VjEuOTk2Yy0xLjg4OS42MTYtMy43NDMuOTktNS43NjUuOTloLS4wMTNjLTEuNzIzIDAtMy4yNzMtLjM0LTUuMTU0LS42ODYtLjExMy4wMDYtLjIyNi4wMTItLjM0Mi4wMTJaIi8+PC9zdmc+';
                          }}
                        />
                      </span>
                      <span className="skill-label">{displayLabel}</span>
                    </div>
                  )
                }

                return null
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function AboutSection({ onNavigateToJourney }) {
  return (
    <section id="about" className="scroll-mt-24 space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">01</span>
          <h2 className="text-3xl font-semibold text-slate-50">About</h2>
        </div>
        
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.6fr,1fr]">
        <motion.article
          className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          의료 영상과 임상 데이터를
          <br />
          모델이 바로 사용할 수 있는 형태로 정리하고,
          <br />
          전처리·학습·추론 과정을 하나의 흐름으로 연결합니다.
          <br />
          <br />
          좌표계 정합, 데이터 표준화, 결측 처리 등
          <br />
          모델 이전 단계의 품질을 중시하며,
          <br />
          재현 가능한 실험 환경과 해석 가능한 결과를 목표로 합니다.
        </p>
        
        </motion.article>

        <div className="flex flex-col gap-6">
          {/* My Journey 박스 - 클릭 가능 + 애니메이션 효과 */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <aside
              className="journey-box-wrapper h-full rounded-3xl p-[2px] cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={onNavigateToJourney}
            >
              <motion.div
                className="h-full rounded-[calc(theme(borderRadius.3xl)-2px)] bg-slate-950/95 p-6 flex flex-col justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-base font-semibold mb-3 leading-relaxed journey-title-shimmer">
                  💡 From Survival
                  <br />
                  <span className="ml-6">to Saving Lives</span>
                </h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  생존을 위해 AI를 시작했고,
                  <br />
                  생명을 지키는 파이프라인을 설계합니다.
                  <br />
                  <span className="text-medblue-soft/80 mt-2 block">
                    기술과 삶이 만난 여정을 확인하세요.
                  </span>
                </p>
              </motion.div>
            </aside>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
