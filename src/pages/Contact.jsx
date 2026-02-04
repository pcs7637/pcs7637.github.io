import { motion } from 'framer-motion'

const channels = [
  {
    heading: 'Email',
    description: '협업 제안, 연구 문의는 이메일로 연락 주세요.',
    value: 'pcs7637@gmail.com',
  },
  {
    heading: 'LinkedIn',
    description: '경력과 프로젝트 하이라이트를 빠르게 확인할 수 있습니다.',
    value: 'linkedin.com/in/pcs7637',
  },
  {
    heading: 'GitHub',
    description: '코드 히스토리와 프로젝트를 공개합니다.',
    value: 'github.com/pcs7637',
  },
]

const availability = [
  '의료 AI 연구실 포지션',
  '의료 데이터 기반 ML 모델링·전처리 프로젝트',
  'EMR/의료영상 데이터 파이프라인 구축',
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 space-y-10">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">05</span>
          <h2 className="text-3xl font-semibold text-slate-50">Contact</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          의료 AI 연구 관련 문의나 협업 제안은 언제든지 환영합니다. 데이터 전처리부터 모델 개발까지 함께합니다.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {channels.map((channel, i) => (
          <motion.div
            key={channel.heading}
            className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-base font-semibold text-slate-200">{channel.heading}</h3>
            <p className="mt-3 text-sm text-slate-400">{channel.description}</p>
            <a
              href={channel.heading === 'Email' ? `mailto:${channel.value}` : `https://${channel.value}`}
              className="mt-5 inline-flex text-sm font-semibold text-medblue-bright transition hover:text-medblue-soft"
              target={channel.heading === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
            >
              {channel.value}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
