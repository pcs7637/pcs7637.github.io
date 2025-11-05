const timeline = [
  {
    year: '2025',
    title: '의료 AI 스타트업, 리드 ML 엔지니어',
    bullets: [
      '다기관 폐암 데이터셋 수집/정제 및 AutoML 파이프라인 구축',
      '실시간 추론을 위한 GPU 인프라 및 모니터링 대시보드 설계'
    ],
  },
  {
    year: '2023-2024',
    title: '대학원 연구실, 헬스케어 데이터 사이언티스트',
    bullets: [
      'EMR/건강보험 빅데이터로 패턴 마이닝 및 예후 예측 연구',
      'ICML Healthcare Workshop, KDD Health Day 등 논문/포스터 발표'
    ],
  },
  {
    year: '2020-2022',
    title: '데이터 컨설턴트',
    bullets: [
      '공공데이터 기반 헬스케어 프로젝트 12건 컨설팅',
      '지표 정의 및 시각화, 정책 보고서 자동화'
    ],
  },
]

const skills = [
  {
    category: 'AI/ML',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'MLflow', 'Optuna'],
  },
  {
    category: 'MLOps & Backend',
    items: ['FastAPI', 'Django', 'Docker', 'Airflow', 'AWS SageMaker'],
  },
  {
    category: 'Data & Visualization',
    items: ['PostgreSQL', 'Apache Spark', 'Great Expectations', 'Tableau', 'Superset'],
  },
]

export default function About() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 md:grid-cols-[1.5fr,1fr]">
        <div className="rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">소개</h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            의료 데이터를 통해 환자의 생존율을 높이는 솔루션을 만드는 것을 목표로 합니다. 컴퓨터 비전과 임상 데이터 분석 경험
            을 바탕으로 모델 개발에서 배포, 성능 모니터링까지 전 주기를 설계합니다.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            비즈니스 팀과 협업하며 실사용자에게 가치를 제공하는 제품을 만드는 데 집중하고 있습니다. 데이터 파이프라인과 모델
            서빙을 자동화해 팀의 실험 속도를 높이는 것이 강점입니다.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-emerald-400/20 p-[1px]">
          <div className="h-full rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/90 p-6">
            <h3 className="text-lg font-semibold text-slate-900">핵심 역량</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-600">
              <li>의료영상 + 임상 데이터 복합 처리 파이프라인 설계</li>
              <li>모델 재현성을 위한 MLOps 파이프라인 구축</li>
              <li>원내/공공 데이터를 활용한 인사이트 도출 및 보고</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900">타임라인</h2>
        <div className="mt-6 space-y-6">
          {timeline.map((entry) => (
            <article key={entry.year} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm md:flex-row md:items-start md:gap-8">
              <div className="w-full md:w-32 text-sm font-semibold text-indigo-600">{entry.year}</div>
              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">{entry.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {entry.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900">스킬 스택</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.category} className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{skill.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-600">
                {skill.items.map((item) => (
                  <li key={item} className="rounded-full bg-slate-100 px-3 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
