const projectGroups = [
  {
    heading: '대표 프로젝트',
    items: [
      {
        id: 'lung-cancer',
        title: 'Lung Cancer Prediction',
        description: 'CT 전처리 → ML 예측 → 웹 UI',
        tags: ['Django', 'React', 'Machine Learning'],
        links: {
          demo: 'https://github.com/pcs7637/lung-cancer-prediction-system',
          repo: 'https://github.com/pcs7637/lung-cancer-prediction-system',
        },
      },
      {
        id: 'igo-duya',
        title: 'Igo_duya',
        description: '의료비 비교 플랫폼, HIRA 연동',
        tags: ['API', 'Map', 'Next.js'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
      {
        id: 'sepsis',
        title: 'Early Sepsis Prediction',
        description: '표형 데이터 기반 실시간 위험도 예측',
        tags: ['Python', 'Scikit-learn', 'MLOps'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
    ],
  },
  {
    heading: '연구 및 PoC',
    items: [
      {
        id: 'skin-lesion',
        title: 'Skin Lesion Classifier',
        description: 'DermIS 오픈데이터로 ResNet 미세조정',
        tags: ['PyTorch', 'Vision AI'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
      {
        id: 'ehr-nlp',
        title: 'EHR 요약 NLP',
        description: '임상 노트 요약을 위한 KoBERT 파인튜닝',
        tags: ['NLP', 'KoBERT'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
    ],
  },
]

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex gap-3 text-sm font-medium">
        <a href={project.links.demo} className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noreferrer">
          Live Demo ↗
        </a>
        <a href={project.links.repo} className="text-slate-500 hover:text-slate-700" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <div className="space-y-12">
      {projectGroups.map((group) => (
        <section key={group.heading} className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{group.heading}</h2>
            <p className="mt-2 text-sm text-slate-500">
              {group.heading === '대표 프로젝트'
                ? '실제 프로덕션 또는 상용화를 목표로 진행한 핵심 작업들입니다.'
                : '실험적 시도와 연구 결과를 정리한 기록용 프로젝트입니다.'}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {group.items.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
