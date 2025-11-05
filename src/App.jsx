import { Link, NavLink, Outlet } from 'react-router-dom'

const linkStyles = ({ isActive }) =>
  `text-sm transition-colors hover:text-indigo-600 ${
    isActive ? 'text-indigo-600 font-semibold' : 'text-slate-600'
  }`

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            MediMarryMe
          </Link>
          <nav className="flex items-center gap-6">
            <NavLink to="/" className={linkStyles} end>
              Projects
            </NavLink>
            <NavLink to="/about" className={linkStyles}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkStyles}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-slate-900">
            <span className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
              MediMarryMeBiomedical
            </span>
            <span className="block mt-2 text-lg md:text-xl text-slate-500">
              Biomedical AI 포트폴리오
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-600">
            데이터와 알고리즘으로 의료 문제를 해결하는 개발자 pcs7637입니다. 의료영상, 공공데이터, 머신러닝을
            결합한 프로젝트를 선별해 소개하고 있습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              대표 프로젝트 보기
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              이력서 &amp; 타임라인
            </Link>
          </div>
        </section>

        <section>
          <Outlet />
        </section>
      </main>

      <footer className="border-t bg-white/70">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-500">
          © {year} pcs7637 • MediMarryMe. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
