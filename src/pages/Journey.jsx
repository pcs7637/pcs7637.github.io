import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const journeyContent = `# 🏥 Medical AI Journey: From Survival to Saving Lives

> **"AI로 생존하려 시작했지만, 생명을 지키기 위해 Medical AI로 도착했습니다. 5살 딸아이의 봉와직염이 저를 이 길로 이끌었고, 그 이후 배운 모든 기술은 그 질문을 해결하기 위한 과정이었습니다."**

---

## 📖 여정의 개요

이 문서는 **실업 상태에서 AI 자동화로 시작해, 가족의 아픔을 계기로 Medical AI 연구자로 성장한 이야기**를 기록합니다.

### 🎯 핵심 성과
- ✅ **개인적 동기 확립** (딸아이 봉와직염 → 패혈증 조기 예측, AUPRC 0.453)
- ✅ **BIO 기반 분석 경험** (천식 바이오마커 프로젝트)
- ✅ **Clinical ML·논문 재현 경험** (심부전 사망률 예측)
- ✅ **Medical Imaging 전처리 파이프라인** 완성 (4개 데이터셋)
- ✅ **Liver Cancer 연구** (HCC-TACE 전처리 + TCGA-LIHC 딥러닝)
- ✅ **Multimodal Deep Learning** 완성 (68.26%, 15회 실험, 100% 시행착오 해결)

### 🎓 교육 배경
- **건양대학교병원 바이오메디컬 AI 교육 과정** (2025.07.22 ~ 2026.01.21)
- K-디지털 트레이닝 신기술 '바이오헬스' 분야 최초 과정
- Python, SQL, 의료데이터, AI 딥러닝, 현장실습, 프로젝트 (총 320시간)

---

## 🌱 Origin Story: AI를 시작한 이유

### 2025년 4월 - 퇴사, 그리고 생존을 위한 AI

**㈜동광아연 퇴사**

실업급여를 받으며 생계를 고민하던 시기, 한 가지 생각이 들었습니다.

> "아무나 유튜브 영상 만들어서 돈 버는데... 나도 AI로 자동화하면 되지 않을까?"

**GPT-3.5와 제미나이 1.5와의 50일**

매일 12-15시간씩:
- 크롤링 → 키워드 생성 → 스크립트 생성 → TTS → 비디오 생성 → 배포
- Python, ffmpeg, Selenium, Whisper를 맨땅에서 배움
- "왜 안돼?" "이거 어떻게 고쳐?" 수백 번의 디버깅

**결과**: AI 자동화 파이프라인 완성

하지만 더 중요한 것은:
- **AI 엔지니어로서의 기초체력** 획득
- **스스로 문제를 정의하고 해결하는 태도** 확립

---

### 2025년 5-6월 - 방향이 생기다

#### ETRI 연구원 아랫동서의 조언

> "형, 이렇게까지 혼자 파고들 거면... AI 교육과정 한번 다녀보는 게 어때요? 요즘 의료 AI 잘 나가요."

- 나보다 4살 많은 아랫동서
- ETRI에서 AI 연구 중
- 내 기술적 집요함을 알아본 사람

#### 임상연구원 처제의 지원

처제는 현직 임상연구원(CRA)으로, 나에게 많은 도움을 주었습니다:
- 최근 학계 동향
- 바이오·임상 영역에서 AI 활용 사례
- 패혈증, 암, 심혈관 질환, 바이오마커 분야 흐름
- 병원 내 연구 프로세스, 환자 데이터 구조

당시엔 다 이해하지 못했지만, 이 대화들이 나중에 **천식·심부전 프로젝트에서 모두 연결**됩니다.

---

### 2025년 7월 - 막연함을 행동으로

**건양대학교병원 바이오메디컬 AI 교육 과정 시작** (7월 22일)

솔직히 말하면:
> "실업급여도 받고 있고... 취직 잘되면 좋지. 막연하게 시작하자."

하지만 이 **막연함**이 나중에 **확신**으로 바뀝니다.

---

## 💔 Stage 2: 전환점 - 개인적인 동기 (패혈증 조기 예측)

> **"5살 딸아이가 아팠습니다. 그 경험이 저를 Medical AI로 이끌었습니다."**

### 📂 프로젝트 정보
- **프로젝트**: 소아 패혈증 조기 예측 시스템
- **유형**: **개인 작업** (가장 개인적인 동기)
- **데이터**: PHEMS Hackathon Early Sepsis Prediction

### 💔 사건의 발단

#### 2025년 9월, 일요일 아침

5살 딸아이가 아팠습니다. 독감인지 코로나인지 모르겠는데 열이 나고 2-3일이 지났습니다.

집이 5층이라 계단을 올라가다가 넘어졌고, 다리에 찰과상을 입었습니다.

#### 이틀 후

아침에 보니:
- 고열 (38도 이상)
- 찰과상 부위가 **엄청 부어있음**
- 붉게 변색

![찰과상 초기](/assets/daughter_cellulitis_1.jpg)

### 🏥 첫 번째 병원 (응급소아병원)

> "열이 나네요. 귀지가 막혀있나 봐요."

- 상처 이야기를 했지만 **병변은 보지 않음**
- 열만 재고 피검사만 지시
- 결과: **염증수치 엄청 높음**

![검사 결과](/assets/lab_report.jpg)

**의사**: "입원하세요."

**나**: "돈이 없어서... 약만 받아가겠습니다."

### 😰 악화

약을 먹였지만:
- 호전되지 않음
- **더 심해짐**
- 부종이 계속 커짐

![악화된 상태](/assets/daughter_cellulitis_2.jpg)

### 🏥 두 번째 병원 (재활병원 정형외과)

늦은 오후, 인근 재활병원으로 데려갔습니다.

> "우리가 못 보겠습니다. **대학병원으로 가세요.**"

### 🚨 세 번째 병원 (충남대병원 응급실)

바로 충남대병원 응급실로 달려갔습니다.

**의사**: "**즉시 입원**합니다."

**진단**: **봉와직염 (Cellulitis)**

**담당교수**: "이런 케이스가 특이합니다. 소아병동 수련의들에게 보여줘도 될까요?"

**충격**이었습니다.

### 🤔 의문

병원 생활을 마치고 나서 계속 생각했습니다:

\`\`\`
최초 병원에 방문했을 때 바로 입원해서 항생제만 투여했으면 나아졌을까?

그게 아니라면 임시방편의 허술한 조치였을까?

이 위험도가 극에 달하면 어디까지 가지?

아... 패혈증이구나.

그럼 이걸 조기에 탐색할 수 있는 방법이 있을까?

가장 보편적인 병·의원급에서도 간단한 피검사로 발견할 수만 있다면...

환자 집중으로부터도 자유롭고,
상급병원과의 연결 네트워크도 활성화되어
모두에게 윈윈일 텐데.
\`\`\`

### 💡 결심

> "마침 내가 하고 있는 과정이 있으니 직접 해보자!"

그렇게 뛰어든 것이 **PHEMS Hackathon Early Sepsis Prediction** 데이터셋이었습니다.

**이 순간, 나의 Medical AI 여정은 "취업"에서 "사명"으로 바뀌었습니다.**

---

### 🏆 최종 성과

#### 모델 성능
| 지표 | 값 |
|------|-----|
| **AUPRC** | **0.453** |
| **AUROC** | 0.863 |
| **정밀도 (PPV)** | 0.321 |
| **재현율** | 0.45 |
| **알람율** | 4.75% |

#### 운영점 설정
- **모델**: Stacked 3h/6h/12h
- **Threshold**: 0.05
- **Dwell**: 1시간
- **Cooldown**: 4시간

#### 의미
- ✅ **의료 AI 벤치마크 "Good" 수준**
- ✅ **임상 수용 가능한 알람율** (4.75%)
- ✅ **알람의 32%가 실제 패혈증**
- ✅ **실전 배포 가능성 확보**

---

## 🎬 마무리: 여정의 의미

### 시작 - AI로 생존하려 했다
> "2025년 4월 퇴사. 실업급여 받으며 AI 자동화 파이프라인을 만들었습니다. GPT-3.5와 제미나이 1.5와 50일간 씨름했습니다."

### 연결 - 사람들이 방향을 제시했다
> "ETRI 연구원 아랫동서가 Medical AI를 추천했고, 임상연구원 처제가 학계 동향을 알려주었습니다."

### 전환점 - 딸아이가 아팠다
> "2025년 9월, 5살 딸아이의 봉와직염. 세 번의 병원 방문. '패혈증을 조기에 탐지할 방법은 없을까?' 이 질문이 저를 Medical AI로 이끌었습니다."

### 성장 - 기술을 쌓았다
> "천식 (BIO) → 심부전 (Clinical ML) → 패혈증 (Time-series) → 의료영상 (Imaging) → 간암 (DICOM + Multimodal)"

### 완성 - 하이브리드 연구자가 되었다
> "68.26%를 달성했고, 언제 멈춰야 하는지도 배웠습니다. **기술·임상·인간**이 하나로 연결된 연구자가 되었습니다."

---

## 💎 이 여정의 핵심 메시지

> **"나는 AI로 생존하려 시작했지만,  
> 생명을 지키기 위해 Medical AI로 도착했다."**

이것이 **기술 포트폴리오**와 **인간 스토리**가 하나로 합쳐진 순간입니다.

---

**작성일**: 2025-11-26  
**타임라인**: 2025.04 (퇴사) ~ 2025.11 (TCGA-LIHC 완성)  
**교육 과정**: 건양대학교병원 바이오메디컬 AI (2025.07.22 ~ 2026.01.21)  
**상태**: ✅ 완료  

---

**⭐ 이 여정이 도움이 되셨다면 Star를 눌러주세요!**
`

export default function Journey({ onBack }) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <div className="background-layer" aria-hidden />
            <div className="pointer-glow" aria-hidden />

            <div className="relative z-10 mx-auto max-w-4xl px-6 py-12">
                {/* Header */}
                <motion.div
                    className="mb-12 flex items-center justify-between"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <button
                        onClick={onBack}
                        className="group inline-flex items-center gap-3 rounded-full border border-slate-700/70 px-6 py-3 text-sm font-semibold text-slate-400 transition hover:border-medblue-bright/60 hover:text-medblue-bright"
                    >
                        <span className="h-px w-10 bg-slate-700 transition group-hover:bg-medblue-bright/70" aria-hidden />
                        Back to Portfolio
                    </button>
                </motion.div>

                {/* Content */}
                <motion.article
                    className="prose prose-invert prose-slate max-w-none"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ children }) => (
                                <h1 className="text-4xl font-bold text-slate-50 mb-6">{children}</h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-3xl font-semibold text-slate-100 mt-12 mb-4 border-b border-slate-800 pb-3">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-2xl font-semibold text-slate-200 mt-8 mb-3">{children}</h3>
                            ),
                            h4: ({ children }) => (
                                <h4 className="text-xl font-semibold text-slate-300 mt-6 mb-2">{children}</h4>
                            ),
                            p: ({ children }) => (
                                <p className="text-slate-300 leading-relaxed mb-4">{children}</p>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-medblue-bright/60 bg-slate-900/60 pl-6 py-4 my-6 italic text-slate-300">
                                    {children}
                                </blockquote>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">{children}</ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-4">{children}</ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-slate-300">{children}</li>
                            ),
                            code: ({ inline, children }) =>
                                inline ? (
                                    <code className="bg-slate-800/60 text-medblue-bright px-2 py-1 rounded text-sm">
                                        {children}
                                    </code>
                                ) : (
                                    <code className="block bg-slate-900/80 text-slate-300 p-4 rounded-lg overflow-x-auto text-sm">
                                        {children}
                                    </code>
                                ),
                            pre: ({ children }) => (
                                <pre className="bg-slate-900/80 p-4 rounded-lg overflow-x-auto mb-4">
                                    {children}
                                </pre>
                            ),
                            table: ({ children }) => (
                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full border border-slate-800 rounded-lg">
                                        {children}
                                    </table>
                                </div>
                            ),
                            thead: ({ children }) => (
                                <thead className="bg-slate-900/60">{children}</thead>
                            ),
                            tbody: ({ children }) => (
                                <tbody className="divide-y divide-slate-800">{children}</tbody>
                            ),
                            tr: ({ children }) => (
                                <tr className="border-b border-slate-800">{children}</tr>
                            ),
                            th: ({ children }) => (
                                <th className="px-4 py-3 text-left text-sm font-semibold text-medblue-bright">
                                    {children}
                                </th>
                            ),
                            td: ({ children }) => (
                                <td className="px-4 py-3 text-sm text-slate-300">{children}</td>
                            ),
                            img: ({ src, alt }) => (
                                <img
                                    src={src}
                                    alt={alt}
                                    className="rounded-lg my-6 max-w-full h-auto shadow-lg"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                    }}
                                />
                            ),
                            hr: () => (
                                <hr className="border-slate-800 my-8" />
                            ),
                        }}
                    >
                        {journeyContent}
                    </ReactMarkdown>
                </motion.article>

                {/* Footer */}
                <motion.div
                    className="mt-12 pt-8 border-t border-slate-800 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button
                        onClick={onBack}
                        className="group inline-flex items-center gap-3 rounded-full border border-slate-700/70 px-6 py-3 text-sm font-semibold text-slate-400 transition hover:border-medblue-bright/60 hover:text-medblue-bright"
                    >
                        <span className="h-px w-10 bg-slate-700 transition group-hover:bg-medblue-bright/70" aria-hidden />
                        Back to Portfolio
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
