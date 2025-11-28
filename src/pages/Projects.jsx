import { motion } from 'framer-motion'
import { useState } from 'react'

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
          repo: 'https://github.com/pcs7637/phems-sepsis-early-warning',
        },
      },
      {
        id: 'multi-cancer-seg',
        title: 'Medical Image Preprocessing Pipelines',
        description: 'BraTS2023, KiTS23, LIDC-IDRI, MAMA-MIA 등 4개의 주요 의료 영상 데이터셋을 2D 딥러닝 모델 학습에 적합한 형태로 변환하는 전처리 파이프라인 모음입니다. 도메인별 정규화, 방향 표준화, 전문가 합의 기반 세그멘테이션 등 의료 영상 특화 기술을 적용했습니다.',
        tags: ['NIfTI', 'DICOM', 'Segmentation', 'Medical Imaging'],
        links: {
          repo: 'https://github.com/pcs7637/medical-image-preprocessing',
        },
        images: [
          {
            src: '/assets/comprehensive_overview_diagram.png',
            alt: '4개 프로젝트 통합 파이프라인 다이어그램',
            caption: 'Pipeline Overview'
          },
          {
            src: '/assets/preprocessing_statistics.png',
            alt: '전처리 통계 대시보드',
            caption: 'Statistics Dashboard'
          },
          {
            src: '/assets/github_repository_banner.png',
            alt: 'GitHub 레포지토리 배너',
            caption: 'Project Banner'
          }
        ]
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

function ProjectItem({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

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
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="inline-flex items-center gap-1 transition hover:text-medblue-soft"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          )}
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

      {/* Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-slate-950/50 border border-slate-800/50">
          <div className="relative aspect-video">
            <img
              src={project.images[currentImageIndex].src}
              alt={project.images[currentImageIndex].alt}
              className="w-full h-full object-contain"
            />

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-3 text-slate-300 backdrop-blur-sm transition hover:bg-medblue-bright hover:text-white"
                  aria-label="Previous image"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-3 text-slate-300 backdrop-blur-sm transition hover:bg-medblue-bright hover:text-white"
                  aria-label="Next image"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-4">
              <p className="text-sm font-medium text-slate-300">
                {project.images[currentImageIndex].caption}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-2 py-3">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentImageIndex
                      ? 'w-8 bg-medblue-bright'
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

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
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-medblue-bright">02</span>
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
