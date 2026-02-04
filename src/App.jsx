import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Projects from './pages/Projects.jsx'
import About, { ExperienceSection, SkillsSection } from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Journey from './pages/Journey.jsx'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/pcs7637' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pcs7637' },
  { label: 'Email', href: 'mailto:pcs7637@gmail.com' },
]

const introMessage = '> Press Enter to Start'

export default function App() {
  const year = new Date().getFullYear()
  const [hasEntered, setHasEntered] = useState(false)
  const [typedMessage, setTypedMessage] = useState('')
  const [currentPage, setCurrentPage] = useState('home') // 'home' or 'journey'

  useEffect(() => {
    const root = document.documentElement

    const updateSpotlight = (event) => {
      root.style.setProperty('--spotlight-x', `${event.clientX}px`)
      root.style.setProperty('--spotlight-y', `${event.clientY}px`)
    }

    const resetSpotlight = () => {
      root.style.setProperty('--spotlight-x', '50vw')
      root.style.setProperty('--spotlight-y', '50vh')
    }

    window.addEventListener('pointermove', updateSpotlight)
    window.addEventListener('pointerleave', resetSpotlight)

    return () => {
      window.removeEventListener('pointermove', updateSpotlight)
      window.removeEventListener('pointerleave', resetSpotlight)
    }
  }, [])

  useEffect(() => {
    if (hasEntered) return

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setHasEntered(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasEntered])

  const handleEnterClick = () => setHasEntered(true)

  useEffect(() => {
    if (hasEntered) return

    let index = 0
    setTypedMessage('')

    let intervalId
    const startDelay = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1
        setTypedMessage(introMessage.slice(0, index))
        if (index >= introMessage.length) {
          clearInterval(intervalId)
        }
      }, 70)
    }, 350)

    return () => {
      clearTimeout(startDelay)
      if (intervalId) clearInterval(intervalId)
    }
  }, [hasEntered])

  useEffect(() => {
    if (hasEntered) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hasEntered])

  useEffect(() => {
    const root = document.documentElement
    let rafId

    const updateParallax = () => {
      rafId = null
      root.style.setProperty('--bg-parallax', `${window.scrollY * 0.35}px`)
    }

    const handleScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const handleNavigateToJourney = () => {
    setCurrentPage('journey')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToPortfolio = () => {
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show Journey page if currentPage is 'journey'
  if (hasEntered && currentPage === 'journey') {
    return <Journey onBack={handleBackToPortfolio} />
  }

  return (
    <>
      {!hasEntered && (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/List-16-9.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm" />
            <div className="intro-gradient" aria-hidden />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <motion.button
                type="button"
                onClick={handleEnterClick}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="intro-panel group max-w-lg space-y-5 rounded-3xl border border-medblue-soft/60 bg-slate-950/40 px-12 py-12 text-center shadow-medblue-glow"
              >
                <motion.div
                  className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.55em] text-medblue-soft/70"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-medblue-bright/80 animate-ping" aria-hidden />
                  System Online
                </motion.div>
                <motion.div
                  className="intro-type intro-typewriter mx-auto text-[1.5rem] font-semibold tracking-tight text-medblue-bright"
                  initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 }}
              >
                <span className="intro-typewriter-text">{typedMessage || '\u00A0'}</span>
                <span className="intro-cursor" aria-hidden />
              </motion.div>
              <motion.p
                className="text-sm text-slate-300"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              >
                - 시작하려면 엔터 키를 누르세요 -
              </motion.p>
              <motion.span
                className="block text-xs text-medblue-soft/80 transition group-hover:text-medblue-bright"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                or click anywhere inside this panel
              </motion.span>
            </motion.button>
          </div>
        </div>
      )}

      <div
        className={`relative min-h-screen bg-slate-950 text-slate-200 transition-opacity duration-700 ${hasEntered ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        aria-hidden={!hasEntered}
      >
        <div className="background-layer" aria-hidden />
        <div className="pointer-glow" aria-hidden />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 lg:flex-row lg:gap-24 lg:py-20">
          <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:w-72 lg:flex-none">
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-medblue-soft/80">
                  Medical AI Engineer
                </p>
                <div className="flex items-center gap-5">
                  <div className="h-40 w-40 overflow-hidden rounded-[32px] border border-slate-700/60 bg-slate-900/60 shadow-lg shadow-slate-950/40">
                    <img
                      src="/assets/KakaoTalk_20260128_211215968_03_512.png"
                      alt="박철순 프로필 사진"
                      className="h-full w-full object-cover object-[center_18%]"
                      loading="lazy"
                    />
                  </div>
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-50">박철순</h1>
                </div>
                <h2 className="text-xl font-medium text-slate-300">
                  Medical AI Engineer (Data Pipeline & Imaging)
                </h2>
                <p className="text-sm leading-relaxed text-slate-400">
                  의료 영상(CT/MRI)과 임상 데이터(EMR, Vital)를
                  <br />
                  AI 분석이 가능하도록 구조화하고,
                  <br />
                  전처리–학습–추론 과정을 하나의 파이프라인으로 설계합니다.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>- Medical Imaging & Clinical Data</li>
                  <li>- Pipeline-first System Design</li>
                  <li>- LLM-assisted Rapid Prototyping</li>
                </ul>
                <p className="text-sm italic text-slate-500">“모델이 아니라, 데이터가 흐르는 구조를 만듭니다.”</p>

                <nav className="hidden lg:block">
                  <ul className="space-y-4 text-sm font-medium">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group inline-flex items-center gap-3 text-slate-500 transition-colors duration-300 hover:text-medblue-bright"
                        >
                          <span
                            className="h-px w-10 origin-left rounded-full bg-slate-700 transition-all duration-300 group-hover:w-16 group-hover:bg-medblue-bright/80"
                            aria-hidden
                          />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="space-y-3 text-sm text-slate-500">
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group inline-flex items-center gap-3 rounded-full border border-slate-700/70 px-4 py-2 text-xs font-semibold text-slate-400 transition hover:border-medblue-bright/60 hover:text-medblue-bright"
                >
                  <span className="h-px w-10 bg-slate-700 transition group-hover:bg-medblue-bright/70" aria-hidden />
                  Back to Top
                </button>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-medblue-bright transition hover:text-medblue-soft"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-slate-600">© {year} pcs7637 • MediMarryMe</p>
              </div>
            </div>
          </aside>

          <main className="flex-1 space-y-24 lg:py-6">
            <section className="lg:hidden">
              <nav className="mb-8 flex flex-wrap gap-4 text-sm font-medium text-slate-400">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group relative inline-flex items-center gap-2 transition-colors duration-300 hover:text-medblue-bright"
                  >
                    <span className="h-px w-6 origin-left rounded-full bg-slate-700/70 transition-all duration-300 group-hover:w-10 group-hover:bg-medblue-bright/80" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </section>
            <About onNavigateToJourney={handleNavigateToJourney} />
            <Projects />
            <ExperienceSection />
            <SkillsSection />
            <Contact />
          </main>
        </div>
      </div>
    </>
  )
}
