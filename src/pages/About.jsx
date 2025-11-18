import { motion } from 'framer-motion'

const timeline = [
  {
    period: '2025',
    role: '의료 AI 스타트업 · 리드 ML 엔지니어',
    bullets: [
      '다기관 폐암 데이터셋 수집/정제 및 AutoML 파이프라인 구축',
      '실시간 추론을 위한 GPU 인프라 및 모니터링 대시보드 설계',
    ],
  },
  {
    period: '2023 – 2024',
    role: '대학원 연구실 · 헬스케어 데이터 사이언티스트',
    bullets: [
      'EMR·건강보험 빅데이터 기반 예후 예측 연구',
      'ICML Healthcare Workshop, KDD Health Day 등 논문·포스터 발표',
    ],
  },
  {
    period: '2020 – 2022',
    role: '데이터 컨설턴트',
    bullets: [
      '공공데이터 헬스케어 프로젝트 12건 컨설팅 및 지표 설계',
      '지자체/병원 보고서 자동화를 위한 데이터 파이프라인 구축',
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
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">02</span>
          <h2 className="text-3xl font-semibold text-slate-50">Experience</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          프로덕트와 연구를 넘나들며 의료 데이터를 활용한 AI 솔루션을 만들어 온 경력입니다.
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
          의료 AI 프로덕트를 빠르게 실험하고 운영하기 위해 활용하는 기술 스택입니다.
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

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">01</span>
          <h2 className="text-3xl font-semibold text-slate-50">About</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          환자와 의료진이 신뢰할 수 있는 AI 솔루션을 만들기 위해 데이터 파이프라인과 제품 개발을 통합적으로 바라봅니다.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.6fr,1fr]">
        <motion.article
          className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm leading-relaxed text-slate-300">
            컴퓨터 비전과 임상 데이터 분석 경험을 바탕으로, 모델 개발에서 배포·모니터링까지 이어지는 ML 시스템을 설계합니다.
            의료기관과 협업하며 실제 환자 케어에 도움이 되는 기능을 우선시하고, 복잡한 데이터 환경을 정돈해 실험 속도를 높입니다.
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            소규모 스타트업부터 대형 병원 연구실까지 다양한 팀과 협업하며 기술 의사결정을 리드했으며, 프로덕트와 연구를 연결해
            임상 현장에 바로 적용 가능한 결과를 도출하는 것에 집중하고 있습니다.
          </p>
        </motion.article>

        <motion.aside
          className="rounded-3xl border border-medblue-bright/20 bg-gradient-to-br from-medblue-dark/20 via-medblue/15 to-medblue-soft/10 p-[1px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="h-full rounded-[calc(theme(borderRadius.3xl)-1px)] bg-slate-950/80 p-6">
            <h3 className="text-base font-semibold text-medblue-bright">핵심 역량</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>의료영상 + 임상 데이터 융합 파이프라인 설계</li>
              <li>배포 후 성능 추적을 고려한 MLOps 아키텍처 설계</li>
              <li>원내·공공 데이터를 활용한 정책/비즈니스 인사이트 도출</li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}