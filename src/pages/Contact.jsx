const channels = [
  {
    heading: 'Email',
    description: '협업 제안, 컨설팅 문의, 강연 요청은 이메일로 연락 주세요.',
    value: 'hello@pcs7637.dev',
  },
  {
    heading: 'LinkedIn',
    description: '경력과 프로젝트 하이라이트를 빠르게 살펴볼 수 있습니다.',
    value: 'linkedin.com/in/pcs7637',
  },
  {
    heading: 'GitHub',
    description: '코드 히스토리와 실험 노트를 모두 공개합니다.',
    value: 'github.com/pcs7637',
  },
]

const availability = [
  '리모트/하이브리드 형태의 협업 가능',
  '의료 데이터 기반 ML 모델링 및 분석 컨설팅',
  '워크샵, 사내 트레이닝, 해커톤 멘토링' ,
]

export default function Contact() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold text-slate-900">연락하기</h2>
        <p className="mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
          협업 제안이나 포트폴리오에 관한 질문이 있다면 언제든지 연락 주세요. 의료 데이터/AI 프로젝트의 설계와 고도화, 팀의 ML
          역량 강화를 돕고 있습니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {channels.map((channel) => (
          <div key={channel.heading} className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{channel.heading}</h3>
            <p className="mt-2 text-sm text-slate-600">{channel.description}</p>
            <a
              href={channel.heading === 'Email' ? `mailto:${channel.value}` : `https://${channel.value}`}
              className="mt-4 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-500"
              target={channel.heading === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
            >
              {channel.value}
            </a>
          </div>
        ))}
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-400/10 p-[1px]">
        <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/95 p-8">
          <h3 className="text-lg font-semibold text-slate-900">가능한 협업 형태</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {availability.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
