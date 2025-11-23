const projectGroups = [
  {
    heading: '대표 프로젝트',
    blurb: '건양대학교병원 바이오메디컬 AI 과정에서 수행한 핵심 프로젝트들입니다.',
    items: [
      {
        id: 'sepsis',
        title: 'Early Sepsis Prediction',
        description: 'ICU·병동 기반 EMR/Vital 데이터를 통합하여 패혈증 위험 환자를 조기에 감지하는 모델을 개발했습니다. 데이터 마트 생성부터 feature engineering, 모델링(LightGBM, XGBoost), threshold 조정, SHAP 기반 해석까지 전 과정에 참여했습니다.',
        tags: ['EMR', 'LightGBM', 'SHAP', 'Clinical AI'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
      {
        id: 'multi-cancer-seg',
        title: 'Multi-Cancer Segmentation Preprocessing',
        description: 'LiTS, KiTS23, HCC-TACE-SEG, MSD 등 다양한 공개 의료영상 데이터셋을 활용하여 마스크 추출, 슬라이스 생성, 오버레이 제작 등 segmentation 학습을 위한 전처리 파이프라인을 구축했습니다. NIfTI → 2D PNG 파이프라인 구축 및 multi-mask 매핑을 자동화했습니다.',
        tags: ['NIfTI', 'DICOM', 'Segmentation', 'Medical Imaging'],
        links: {
          demo: '#',
          repo: '#',
        },
      },
      {
        id: 'ai-pipeline',
        title: 'Medical AI Automation Pipeline',
        description: '의료 데이터 처리의 반복 작업을 자동화하기 위해 4단계 파이프라인(수집 → 전처리 → 학습 → 평가)을 구성했습니다. CLI 기반 실행 구조와 Config-driven 파이프라인으로 EMR/이미지 양쪽에 확장 가능한 구조를 채택했습니다.',
        tags: ['Python', 'Pipeline', 'Automation', 'MLOps'],
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
