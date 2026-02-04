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

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'R'],
  },
  {
    category: 'Medical Data',
    items: ['DICOM', 'NIfTI', 'EMR', 'Vital'],
  },
  {
    category: 'ML / AI',
    items: ['PyTorch', 'LightGBM', 'XGBoost', 'SHAP'],
  },
  {
    category: 'System Design',
    items: ['Pipeline Automation', 'Config-driven Workflow'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'CLI-based Execution'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">03</span>
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
    <section id="skills" className="scroll-mt-24 space-y-6">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">04</span>
          <h2 className="text-3xl font-semibold text-slate-50">Core Stack</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          Core Stack (Used in Projects)
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            className="rounded-2xl border border-slate-800/50 bg-slate-900/40 p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-medblue-soft/70 mb-3">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-[11px] font-medium rounded-full bg-slate-800/40 text-slate-300 border border-slate-700/30 hover:border-medblue-soft/50 transition-colors"
                >
                  {item}
                </span>
              ))}
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
