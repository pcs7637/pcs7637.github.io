import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const projectGroups = [
  {
    heading: '대표 프로젝트',
    blurb: '의료 영상/데이터 파이프라인 구축 및 모델링 프로젝트입니다.',
    items: [
      {
        id: 'breast-cancer-pipeline',
        title: 'Breast Cancer Imaging Pipeline',
        description: `MRI-based Tumor Segmentation with Pipeline-first Design

[Summary]
유방 MRI 영상에서 종양을 분할하는 딥러닝 모델을 개발하며, 모델 성능 이전에 **의료 영상 데이터가 ‘일관된 구조로 흐를 수 있는가’**를 핵심 문제로 설정한 프로젝트입니다. 본 프로젝트는 단일 모델 구현이 아니라, 좌표계·해상도·메타데이터 정합을 포함한 End-to-End 데이터 파이프라인 설계에 초점을 두었습니다.`,
        details: `[Problem Definition]
의료 영상 프로젝트에서 성능 저하의 주요 원인은 종종 모델이 아니라 전처리 단계에서 발생하는 좌표계 불일치, spacing/affine 손실, 메타데이터 왜곡이었습니다. 특히 MONAI 기반 변환 과정에서 발생하는 orientation/spacing 불일치는 학습 재현성과 결과 해석을 어렵게 만드는 핵심 병목으로 작용했습니다.

[What I Did]
- DICOM → NIfTI 변환 과정에서 발생하는 좌표계(RAS/LPS) 및 affine 불일치 문제를 추적
- 라이브러리 추상화에 의존하지 않고, PyTorch 중심의 전처리 로직을 단계별로 재구성
- Resampling, Normalization, Orientation 표준화를 Config-driven 파이프라인으로 분리
- 데이터 → 전처리 → 학습 → 추론 흐름을 재실행 가능하고 검증 가능한 구조로 설계
- 단일 실험이 아닌, 반복 실험에서도 동일한 데이터 정합성이 유지되는 환경 확보

[Key Insight]
이 프로젝트를 통해, 의료 영상 AI에서 중요한 것은 “더 복잡한 모델”이 아니라 모델이 신뢰할 수 있는 입력을 받도록 만드는 데이터 흐름임을 확인했습니다. 본 프로젝트는 유방암이라는 특정 질환을 넘어, 신장암·전립선암 등 다른 3D 의료 영상 도메인에도 그대로 확장 가능한 파이프라인 구조를 목표로 설계되었습니다.`,
        tags: ['Python', 'PyTorch', 'MONAI', 'DICOM', 'NIfTI', '3D Medical Imaging', 'Pipeline Automation'],
        links: {
          repo: 'https://github.com/nogeonu/medical-cdss-system', 
        },
        images: [
          {
            src: '/assets/Breast Cancer Imaging Pipeline_t.png',
            alt: 'Breast Cancer Imaging Pipeline Thumbnail',
            caption: 'MRI-based Tumor Segmentation Pipeline'
          }
        ],
        demoVideo: '/assets/20260126_091922555.mp4'
      },
      {
        id: 'prostate-cancer-cdss',
        title: 'Prostate Cancer Biopsy Targeting CDSS',
        description: `End-to-End On-Premise AI Pipeline & RAG-integrated Clinical Workflow

[Summary]
전립선 MRI 영상에서 암 의심 부위(ROI)를 검출하고 조직검사 타겟을 제안하는 AI 시스템을 개발하며, 단순 모델 성능을 넘어 ‘실제 임상 워크플로우에 통합 가능한 온프레미스 분산 시스템’ 구축을 핵심 문제로 설정한 프로젝트입니다. 본 프로젝트는 단일 추론 모델이 아니라, DICOM 수신부터 AI 분석(Phase 1~3), 그리고 RAG 기반 의학적 근거 제시까지 이어지는 End-to-End 파이프라인 설계에 초점을 두었습니다.`,
        details: `[Problem Definition]
의료 영상 AI 도입의 실질적 장벽은 모델의 정확도뿐만 아니라, 불완전한 데이터(Missing Modality)와 파편화된 워크플로우였습니다. 특히 임상 현장에서 빈번한 DWI/ADC 시퀀스 결측은 모델 추론 실패의 주원인이었으며, 연구용 코드가 실제 PACS/EMR 환경과 유기적으로 연동되지 못해 의료진의 의사결정을 실질적으로 보조하지 못하는 병목이 존재했습니다.

[What I Did]
• **Phase 1(분할) → Phase 2(분류) → Phase 3(타겟팅)**으로 이어지는 Multi-stage AI 파이프라인을 구축하고, Modality Dropout(E7) 기법을 적용해 필수 시퀀스(DWI) 결측 시에도 강건한 추론이 가능하도록 설계
• Django(Main) - FastAPI(AI Worker) - Qdrant(RAG)로 이어지는 3-PC 온프레미스 분산 아키텍처를 구현하여 데이터 보안과 추론 성능을 동시에 확보
• 로컬 파일 경로 의존성을 제거하고, **MinIO(S3) 기반의 입출력 계약(I/O Contract)**을 정의하여 워커의 위치와 무관하게 확장 가능한 데이터 흐름 확립
• LLM(Ollama)과 VectorDB를 연동한 RAG(검색 증강 생성) 시스템을 탑재하여, 단순 예측 점수뿐만 아니라 PI-RADS 가이드라인 등 의학적 근거를 함께 제시하는 CDSS 완성

[Key Insight]
이 프로젝트를 통해, 의료 AI의 핵심 가치는 단순한 세그멘테이션 정확도(Dice Score)가 아니라, **“조직검사를 위해 놓치지 않는 후보 제시(High Recall)”**와 **“시스템적 안정성”**이 결합된 워크플로우 통합에 있음을 확인했습니다. 또한 본 파이프라인은 전립선암을 넘어 신장암(Kidney) 등 타 장기로 즉시 확장 가능한 Config-driven 구조로 설계되어, 의료 AI 플랫폼으로서의 확장 가능성을 입증했습니다.`,
        tags: ['Python', 'PyTorch', 'MONAI', 'Django', 'FastAPI', 'Docker', 'MinIO', 'PostgreSQL', 'Orthanc', 'RAG'],
        links: {
          repo: 'https://github.com/pcs7637/Prostate-AI-Worker', 
        },
        images: [
          {
            src: '/assets/Prostate Cancer Biopsy Targeting CDSS_t.png',
            alt: 'Prostate Cancer Biopsy Targeting CDSS Thumbnail',
            caption: 'On-Premise AI Pipeline & RAG Workflow'
          }
        ],
        sampleImages: [
           { src: '/assets/unified_test_sample_21.png', alt: 'Sample Output' }
        ]
      },
      {
        id: 'kidney-tumor-pipeline',
        title: 'Kidney Tumor Segmentation & Efficient AI Pipeline',
        description: `High-Performance AI on Limited Hardware (6GB VRAM)

[Summary]
신장 CT 영상(KiTS23)에서 신장 영역을 먼저 식별하고 종양을 정밀 분할하는 2-Stage AI 파이프라인을 개발했습니다. 이 프로젝트는 고사양 서버가 아닌 제한된 하드웨어(6GB VRAM) 환경에서도 SOTA(State-of-the-Art) 수준의 성능을 확보하는 것을 핵심 문제로 설정했습니다. 단순한 모델 학습을 넘어, 상류(Upstream) 단계인 신장 검출부터 하류(Downstream) 단계인 종양 분할, 그리고 후처리로 이어지는 전체 파이프라인의 실질적 임상 효용성을 검증하는 데 초점을 두었습니다.`,
        details: `[Problem Definition]
3D 의료 영상(CT) 분할의 실질적 장벽은 고해상도 볼륨 처리에 요구되는 막대한 컴퓨팅 자원이었습니다. 특히 RTX 2060(6GB)과 같은 일반적인 GPU 환경에서는 기존의 무거운 3D 모델(SwinUNETR 등)이 구동되지 않거나 수렴하지 않는 문제가 있었습니다. 또한, 단일 모델 평가만으로는 전단계(신장 검출)의 오류가 최종 진단에 미치는 영향을 파악하기 어려운 ‘평가의 불투명성’이 존재하여, 실제 임상 환경에서의 신뢰성을 담보하기 어려웠습니다.

[What I Did]
• **Stage 1(신장 위치 확인) → Stage 2(종양 정밀 분할)**로 이어지는 계층적 파이프라인을 구축하고, ROI(관심 영역) 크로핑 전략을 적용하여 메모리 효율성을 극대화, 저사양 GPU에서도 강건한 3D 추론이 가능하도록 설계.
• 초기 베이스라인(SwinUNETR) 대비 **162배의 성능 향상(Dice 0.005 → 0.81)**을 달성했으며, 연결 성분 분석(Connected Component Analysis) 등 후처리 알고리즘을 적용해 난이도가 높은 케이스에서 최대 0.20의 Dice 점수 추가 향상을 이끌어냄.
• 평가 지표를 **Upper-Bound(GT 기반 이상적 환경)**와 **Pipeline-Aware(예측 기반 실제 환경)**로 이원화하여 정의함으로써, 단순 모델 성능(Mean Dice 0.81)과 실제 자동화 파이프라인 성능(0.78)을 명확히 구분하고 시스템의 병목 구간을 투명하게 규명.
• 97.3%의 파이프라인 성공률을 달성하고, 전체 케이스의 74%에서 Dice 0.8 이상의 'Excellent' 등급을 확보하여 임상 보조 도구로서의 유용성을 입증.

[Key Insight]
이 프로젝트를 통해, 하드웨어 제약은 모델 구조의 축소가 아니라 **“전략적 데이터 처리(ROI-based approach)”**로 극복 가능함을 확인했습니다. 또한 의료 AI의 신뢰성은 단순히 높은 평균 점수가 아니라, 상류 단계(신장 검출)의 오류가 하류 단계(종양 분할)에 미치는 영향을 정량화하는 **“평가의 투명성(Dual Evaluation)”**에서 비롯됨을 입증했습니다. 이는 연구용 모델이 실제 병원 시스템에 이식될 때 발생할 수 있는 성능 간극(Gap)을 사전에 파악하고 대비하는 핵심 방법론이 됩니다.`,
        tags: ['Python', 'PyTorch', 'nnU-Net v2', 'TotalSegmentator', 'SimpleITK', 'Docker'],
        links: {
          repo: 'https://github.com/pcs7637/KiTS23-Tumor-Segmentation',
        },
        images: [
          {
             src: '/assets/Kidney Tumor Segmentation & Efficient AI Pipeline_t.png',
             alt: 'Kidney Tumor Segmentation Thumbnail',
             caption: 'Efficient 2-Stage Pipeline on Limited Hardware'
          }
        ],
        sampleImages: [
          { src: '/assets/corrected_case_00186.png', alt: 'Result Case 00186' },
          { src: '/assets/corrected_case_00044.png', alt: 'Result Case 00044' }
        ]
      },
      {
        id: 'multi-cancer-seg',
        title: 'Medical Image Preprocessing Pipelines',
        description: 'BraTS2023, KiTS23, LIDC-IDRI, MAMA-MIA 등 4개의 주요 의료 영상 데이터셋을 2D 딥러닝 모델 학습에 적합한 형태로 변환하는 전처리 파이프라인 모음입니다. 도메인별 정규화, 방향 표준화, 전문가 합의 기반 세그멘테이션 등 의료 영상 특화 기술을 적용했습니다.',
        tags: ['NIfTI', 'DICOM', 'Segmentation', 'Medical Imaging'],
        links: {
          repo: 'https://github.com/pcs7637/medical-image-preprocessing',
        },
      },
      {
        id: 'sepsis',
        title: 'Early Sepsis Prediction',
        description: 'ICU·병동 기반 EMR/Vital 데이터를 통합하여 패혈증 위험 환자를 조기에 감지하는 모델을 개발했습니다. 데이터 마트 생성부터 feature engineering, 모델링(LightGBM, XGBoost), threshold 조정, SHAP 기반 해석까지 전 과정에 참여했습니다.',
        tags: ['EMR', 'LightGBM', 'SHAP', 'Clinical AI'],
        links: {
          repo: 'https://github.com/pcs7637/phems-sepsis-early-warning',
        },
      },
    ],
  },
]

// Modal for Text Details
function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
        <motion.div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
          <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-white transition">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h3 className="text-2xl font-bold text-slate-100 mb-6">{project.title}</h3>
          <div className="whitespace-pre-line text-sm leading-relaxed text-slate-300 space-y-6">
            <p className="font-semibold text-medblue-bright">{project.description}</p>
            <div className="h-px bg-slate-800" />
            <p>{project.details}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}

// Lightbox for Images
function ImageModal({ images, isOpen, onClose }) {
  const [idx, setIdx] = useState(0)
  
  useEffect(() => {
    if (isOpen) setIdx(0) // Reset index on open
  }, [isOpen])

  if (!isOpen || !images) return null
  
  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/95 p-4" onClick={onClose}>
      <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white/70 hover:text-white transition">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <img src={images[idx].src} className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl" />
        {images.length > 1 && (
          <div className="mt-6 flex gap-3">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full transition-all ${i === idx ? 'bg-medblue-bright w-8' : 'bg-slate-700'}`} />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

// Video Modal
function VideoModal({ videoSrc, isOpen, onClose }) {
  if (!isOpen || !videoSrc) return null
  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/95 p-4" onClick={onClose}>
      <div className="relative max-w-5xl w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white/70 hover:text-white hover:bg-black/80 transition">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <video 
            src={videoSrc} 
            className="w-full h-full" 
            controls 
            autoPlay
            playsInline
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            disablePictureInPicture
        />
      </div>
    </div>,
    document.body
  )
}

function ProjectItem({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isImgOpen, setIsImgOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [modalImgs, setModalImgs] = useState([])

  const nextImage = (e) => {
    e.stopPropagation()
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = (e) => {
    e.stopPropagation()
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  // 썸네일 이미지 클릭 핸들러
  const handleThumbnailClick = (e) => {
    e.stopPropagation()
    if (project.images && project.images.length > 0) {
      setModalImgs(project.images)
      setIsImgOpen(true)
    }
  }

  return (
    <>
      <motion.article
        className="group relative rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 transition duration-200 hover:-translate-y-1 hover:border-medblue-bright/60 hover:bg-slate-900/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
          <div className="flex gap-4 text-sm font-medium text-medblue-bright">
            {project.demoVideo && (
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="hover:text-white flex items-center gap-1 transition-colors animate-pulse"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                Demo Video ▷
              </button>
            )}
            {project.sampleImages && (
              <button 
                onClick={() => { setModalImgs(project.sampleImages); setIsImgOpen(true); }}
                className="hover:text-medblue-soft underline underline-offset-4"
              >
                Sample View
              </button>
            )}
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
            {project.links.repo && (
               <a
               href={project.links.repo}
               className="inline-flex items-center gap-1 text-slate-400 transition hover:text-medblue-soft"
               target="_blank"
               rel="noreferrer"
             >
               GitHub ↗
             </a>
            )}
          </div>
        </header>

        {/* Image Carousel */}
        {project.images && project.images.length > 0 && (
          <div className="relative mt-6 overflow-hidden rounded-2xl bg-slate-950/50 border border-slate-800/50">
            <div className="relative aspect-video">
              <img
                src={project.images[currentImageIndex].src}
                alt={project.images[currentImageIndex].alt}
                className="w-full h-full object-contain cursor-zoom-in"
                onClick={handleThumbnailClick}
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-4 pointer-events-none">
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
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

        <p className="mt-4 text-sm leading-relaxed text-slate-400 whitespace-pre-line">
          {project.description}
        </p>

        {project.details && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-sm font-semibold text-medblue-bright hover:text-medblue-soft transition-colors flex items-center gap-1"
          >
            <span>View Details</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
        
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

      {/* Detail Modal */}
      {project.details && (
        <ProjectModal 
          project={project} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      {/* Image Modal */}
      <ImageModal
        images={modalImgs}
        isOpen={isImgOpen}
        onClose={() => setIsImgOpen(false)}
      />

      {/* Video Modal */}
      <VideoModal 
        videoSrc={project.demoVideo} 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </>
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
