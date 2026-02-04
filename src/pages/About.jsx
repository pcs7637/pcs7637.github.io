import { motion } from 'framer-motion'

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

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-6">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">03</span>
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