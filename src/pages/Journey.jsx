import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const journeyContent = `저는 AI를 생계를 위한 도구로 처음 접했습니다.
퇴사 이후, 반복적인 콘텐츠 제작을 자동화하기 위해
Python과 LLM API, 음성·영상 처리 도구를 연결한
멀티모달 자동화 파이프라인을 직접 구축했습니다.

이 경험을 통해 저는
“모델을 쓰는 것”보다
서로 다른 시스템을 하나의 흐름으로 연결하는 일에 더 큰 흥미와 강점을 가지고 있다는 것을 알게 되었습니다.

---

## 전환점: 개인적인 사건이 기술의 방향을 바꾸다

2025년, 5살 딸아이가 봉와직염으로 세 번의 병원을 오가며 치료를 받았습니다.
그 경험은 저에게 한 가지 질문을 남겼습니다.

> “이 상태를 더 빨리 알아챌 방법은 없었을까?”

이 질문을 계기로
저는 AI를 **수익 도구**가 아니라
**의료 문제를 다루는 기술**로 다시 보게 되었습니다.

<div class="journey-image-grid">
  <img class="journey-img journey-img--top-left" src="/assets/daughter_cellulitis_1.jpg" alt="초기 증상 기록" />
  <img class="journey-img journey-img--bottom-left" src="/assets/lab_report.jpg" alt="검사 결과 기록" />
  <img class="journey-img journey-img--right" src="/assets/daughter_cellulitis_3.jpg" alt="치료 과정 기록" />
</div>

---

## 기술적 성장: 모델이 아니라 ‘파이프라인’

이후 저는
BIO 데이터, 임상 데이터, 시계열 데이터, 의료영상을 차례로 다루며
Medical AI를 공부했습니다.

하지만 관심의 중심은 항상 같았습니다.

- 데이터를 어떻게 구조화할 것인가
- 오류가 나도 다시 실행 가능한가
- 결과를 사람이 이해할 수 있는가

즉,
**전처리 → 학습 → 추론 → 해석**으로 이어지는
End-to-End 파이프라인을 설계하는 것이 저의 핵심 관심사가 되었습니다.

의료영상 프로젝트에서는
DICOM/NIfTI 포맷 불일치, 좌표계 오류, 메타데이터 손실 문제를 직접 해결하며
“모델 이전에 데이터 흐름이 먼저”라는 원칙을 체득했습니다.


---

## 지금: Medical AI Engineer as a System Builder

현재 저는
유방암 팀 프로젝트와
신장·전립선암 개인 프로젝트를 통해,

AI 모델을 만드는 것을 넘어
의료 데이터를 분석 결과까지 연결하는
Medical AI 파이프라인을 구축하는 엔지니어로 성장하고 있습니다.

저의 목표는
더 높은 정확도의 모델이 아니라,
현장에서 신뢰할 수 있는 구조를 만드는 것입니다.

---

> “AI로 생존하려 시작했지만,
> 생명을 지키기 위한 기술로 Medical AI를 선택했습니다.”
`



export default function Journey({ onBack }) {
    return (
        <div className="journey-page">
            <div className="background-layer" aria-hidden />
            <div className="pointer-glow" aria-hidden />
            <div className="journey-noise" aria-hidden />
            <div className="journey-orbit" aria-hidden />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 lg:py-20">
                <motion.div
                    className="journey-top"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <button
                        onClick={onBack}
                        className="journey-back"
                    >
                        <span className="journey-back-line" aria-hidden />
                        Back to Portfolio
                    </button>
                    <div className="journey-top-chips">
                        <span className="journey-chip">From Survival</span>
                        <span className="journey-chip">to Saving Lives</span>
                    </div>
                </motion.div>

                <div className="journey-hero-card">
                    <div className="journey-hero-glow" aria-hidden />
                    <div className="journey-hero-grid">
                        <div className="journey-hero-copy">
                            <p className="journey-hero-kicker">Medical AI Journey</p>
                            <p className="journey-hero-title">From Survival to Saving Lives</p>
                        </div>
                        <div className="journey-hero-lines" aria-hidden>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>

                <motion.article
                    className="journey-article"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ children }) => (
                                <h1 className="journey-h1">{children}</h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="journey-h2">{children}</h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="journey-h3">{children}</h3>
                            ),
                            h4: ({ children }) => (
                                <h4 className="journey-h4">{children}</h4>
                            ),
                            p: ({ children }) => (
                                <p className="journey-p">{children}</p>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="journey-quote">{children}</blockquote>
                            ),
                            ul: ({ children }) => (
                                <ul className="journey-list">{children}</ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="journey-list journey-list--ordered">{children}</ol>
                            ),
                            li: ({ children }) => (
                                <li className="journey-li">{children}</li>
                            ),
                            code: ({ inline, children }) =>
                                inline ? (
                                    <code className="journey-inline-code">
                                        {children}
                                    </code>
                                ) : (
                                    <code className="journey-code">
                                        {children}
                                    </code>
                                ),
                            pre: ({ children }) => (
                                <pre className="journey-pre">
                                    {children}
                                </pre>
                            ),
                            table: ({ children }) => (
                                <div className="journey-table-wrap">
                                    <table className="journey-table">
                                        {children}
                                    </table>
                                </div>
                            ),
                            thead: ({ children }) => (
                                <thead className="journey-thead">{children}</thead>
                            ),
                            tbody: ({ children }) => (
                                <tbody className="journey-tbody">{children}</tbody>
                            ),
                            tr: ({ children }) => (
                                <tr className="journey-tr">{children}</tr>
                            ),
                            th: ({ children }) => (
                                <th className="journey-th">
                                    {children}
                                </th>
                            ),
                            td: ({ children }) => (
                                <td className="journey-td">{children}</td>
                            ),
                            img: ({ src, alt, className }) => (
                                <img
                                    src={src}
                                    alt={alt}
                                    className={className || 'journey-img'}
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                    }}
                                />
                            ),
                            hr: () => (
                                <hr className="journey-hr" />
                            ),
                        }}
                    >
                        {journeyContent}
                    </ReactMarkdown>
                </motion.article>

                <motion.div
                    className="journey-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button
                        onClick={onBack}
                        className="journey-back"
                    >
                        <span className="journey-back-line" aria-hidden />
                        Back to Portfolio
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
