const projectGroups = [
  {
    heading: '대표 프로젝트',
    blurb: '실제 프로덕션 또는 상용화를 목표로 진행한 핵심 작업들입니다.',
    items: [
      {
        id: 'lung-cancer',
        title: 'Lung Cancer Prediction',
        description: 'CT 영상 전처리에서 모델 추론, 웹 UI까지 이어지는 엔드-투-엔드 파이프라인을 구축했습니다.',
        tags: ['Django', 'React', 'Machine Learning'],
        links: {
          demo: 'https://github.com/pcs7637/lung-cancer-prediction-system',
          repo: 'https://github.com/pcs7637/lung-cancer-prediction-system',
        },
      },
      {
        id: 'igo-duya',
        title: 'Igo_duya',
        description: 'HIRA 데이터를 활용해 의료비를 비교·추천하는 플랫폼을 구현하고 지도 기반 UX를 설계했습니다.',
        tags: ['API', 'Map', 'Next.js'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
      {
        id: 'sepsis',
        title: 'Early Sepsis Prediction',
        description: '병동 스트리밍 데이터를 이용해 실시간 패혈증 위험도를 예측하고 알림을 제공하는 시스템을 만들었습니다.',
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
    blurb: '실험적 시도와 연구 결과를 정리한 기록용 프로젝트들입니다.',
    items: [
      {
        id: 'skin-lesion',
        title: 'Skin Lesion Classifier',
        description: 'DermIS 데이터를 정제하고 ResNet을 미세조정해 피부 병변 자동 분류 성능을 높였습니다.',
        tags: ['PyTorch', 'Vision AI'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
      {
        id: 'ehr-nlp',
        title: 'EHR 요약 NLP',
        description: '임상 노트 요약을 위해 KoBERT 기반 압축 모델을 개발하고 평가 지표를 설계했습니다.',
        tags: ['NLP', 'KoBERT'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
    ],
  },
]

import { motion } from 'framer-motion'

function ProjectItem({ project }) {
  return (
    <motion.article
      className="group rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 transition duration-200 hover:-translate-y-1 hover:border-medblue-bright/60 hover:bg-slate-900/80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
        <div className="flex gap-4 text-sm font-medium text-medblue-bright">
          <a
            href={project.links.demo}
            className="inline-flex items-center gap-1 transition hover:text-medblue-soft"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>
          <a
            href={project.links.repo}
            className="inline-flex items-center gap-1 text-slate-400 transition hover:text-medblue-soft"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </header>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">04</span>
          <h2 className="text-3xl font-semibold text-slate-50">Projects</h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
          의료 데이터를 실사용 제품으로 전환하기 위해 데이터 파이프라인, 모델 학습, 배포까지 전 과정을 설계한 프로젝트들입니다.
        </p>
      </header>

      {projectGroups.map((group) => (
        <div key={group.heading} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-200">{group.heading}</h3>
            <p className="text-sm text-slate-500">{group.blurb}</p>
          </div>
          <div className="space-y-6">
            {group.items.map((item) => (
              <ProjectItem key={item.id} project={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
