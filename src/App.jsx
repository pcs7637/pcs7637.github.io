import { useEffect } from 'react'
import Projects from './pages/Projects.jsx'
import About, { ExperienceSection, SkillsSection } from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/pcs7637' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pcs7637' },
  { label: 'Email', href: 'mailto:hello@pcs7637.dev' },
]

export default function App() {
  const year = new Date().getFullYear()

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

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200">
      <div className="background-layer" aria-hidden />
      <div className="pointer-glow" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 lg:flex-row lg:gap-24 lg:py-20">
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:w-72 lg:flex-none">
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-400/80">
                Biomedical AI 포트폴리오
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-50">pcs7637</h1>
              <h2 className="text-xl font-medium text-slate-300">
                의료 데이터를 통해 생명을 살리는 머신러닝 엔지니어
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                의료영상, 공공데이터, 실시간 추론 파이프라인 경험을 바탕으로 문제 정의부터 배포·운영까지 전 과정을 리드합니다.
                연구와 프로덕트를 넘나들며 신뢰성 있는 AI를 구축합니다.
              </p>

              <nav className="hidden lg:block">
                <ul className="space-y-4 text-sm font-medium">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group inline-flex items-center gap-3 text-slate-500 transition-colors duration-300 hover:text-teal-300"
                      >
                        <span
                          className="h-px w-10 origin-left rounded-full bg-slate-700 transition-all duration-300 group-hover:w-16 group-hover:bg-teal-400/80"
                          aria-hidden
                        />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="space-y-2 text-sm text-slate-500">
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-teal-300 transition hover:text-teal-200"
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
                  className="group relative inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-300"
                >
                  <span className="h-px w-6 origin-left rounded-full bg-slate-700/70 transition-all duration-300 group-hover:w-10 group-hover:bg-teal-300/80" />
                  {item.label}
                </a>
              ))}
            </nav>
          </section>
          <About />
          <ExperienceSection />
          <SkillsSection />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}
