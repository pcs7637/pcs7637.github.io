import { motion } from 'framer-motion'

const channels = [
  {
    heading: 'Email',
    description: '협업 제안, 컨설팅 문의, 강연 요청은 이메일로 연락 주세요.',
    value: 'hello@pcs7637.dev',
  },
  {
    heading: 'LinkedIn',
    description: '경력과 프로젝트 하이라이트를 빠르게 확인할 수 있습니다.',
    value: 'linkedin.com/in/pcs7637',
  },
  {
    heading: 'GitHub',
    description: '코드 히스토리와 실험 노트를 공개합니다.',
    value: 'github.com/pcs7637',
  },
]

const availability = [
  '리모트/하이브리드 협업 가능',
  '의료 데이터 기반 ML 모델링·배포 컨설팅',
  '워크샵, 사내 트레이닝, 해커톤 멘토링',
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
          협업 제안이나 포트폴리오 관련 문의는 언제든지 환영합니다. 실사용 의료 AI 프로젝트의 설계부터 고도화까지 함께합니다.
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

      <motion.div
        className="rounded-3xl border border-medblue-bright/20 bg-gradient-to-r from-medblue-dark/20 via-medblue/15 to-medblue-soft/10 p-[1px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-slate-950/80 p-8">
          <h3 className="text-base font-semibold text-medblue-bright">가능한 협업 형태</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {availability.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-medblue-bright/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
