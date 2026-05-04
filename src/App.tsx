import { useEffect, useState } from 'react'
import './App.css'

interface Project {
  title: string
  description: string
  stack: string[]
  images?: string[]
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const portraitImageUrl = `${import.meta.env.BASE_URL}Lloyd.jpg`
  const brandLogoUrl = `${import.meta.env.BASE_URL}${theme === 'dark' ? 'Logo1.png' : 'Logo2.png'}`

  const modalActive = Boolean(selectedProject || zoomedImage)

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      return
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [modalActive])

  useEffect(() => {
    setSelectedImageIndex(0)
  }, [selectedProject])

  const projects: Project[] = [
    {
      title: 'Daily Monitoring Sheet',
      description:
        'Automated trip and sales monitoring system built on Google Sheets. Provides client trip tracking, rate computation, sales recording, and real-time status updates in a centralized dashboard.',
      stack: ['Google Sheets', 'Google Apps Script', 'Google Gspreed API',  'Sheets API', 'Pivot Tables'],
      images: [`${import.meta.env.BASE_URL}DMS CARGO.png`, `${import.meta.env.BASE_URL}DMS PORT VISMIN.png`, `${import.meta.env.BASE_URL}DMS ZION.png`],
    },
    {
      title: 'FCT (Fuel Control Team)',
      description:
        'Fuel request and liquidation management system built using Power Apps Canvas. Enables users to submit fuel requests, attach receipts, and complete liquidation per transaction. Integrates SharePoint for document and attachment storage, and SQL for structured data management. Includes approval workflows, real-time status tracking, fuel consumption monitoring, audit logs, and centralized reporting to ensure transparency, compliance, and efficient fuel control operations.',
      stack: ['Power Apps Canvas', 'SharePoint', 'Microsoft SQL Server', 'Power Automate','Stored Procedures'],
      images: [`${import.meta.env.BASE_URL}FCT1.png`, `${import.meta.env.BASE_URL}FCT2.png`, `${import.meta.env.BASE_URL}FCT3.png`, `${import.meta.env.BASE_URL}FCT4.png`, `${import.meta.env.BASE_URL}FCT5.png`],
    },
    {
      title: 'SD APP (Source and Destination App)',
      description:
        'A logistics routing and costing system that manages Source-to-Destination trip configurations. It enables registration of routes with Trip KM, fuel budget approval, driver/helper rate computation, and dynamic trip rate calculation per assignment.',
      stack: ['Power Apps vite', 'Power Automate', 'React', 'TypeScript', 'SQL', 'SharePoint'],
      images: [`${import.meta.env.BASE_URL}SD1.png`, `${import.meta.env.BASE_URL}SD2.png`, `${import.meta.env.BASE_URL}SD3.png`, `${import.meta.env.BASE_URL}SD4.png`, `${import.meta.env.BASE_URL}SD5.png`, `${import.meta.env.BASE_URL}SD6.png`],
    },

  ]

  return (
    <div className={`page-shell ${theme}-mode`}>
      <div className="theme-banner">
        <span>{theme === 'dark' ? 'Night mode' : 'Light mode'}</span>
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        >
          Switch to {theme === 'dark' ? 'light' : 'dark'} mode
        </button>
      </div>
      <header className="nav-wrap">
        <div className="container nav">
          <a className="brand" href="#top">
            <img className="brand-logo" src={brandLogoUrl} alt="Lloyd.Dev logo" />
            Lloyd.Dev
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary" href="#contact">
            Hire me
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <article className="hero-copy">
              <p className="status-pill">Available for junior developer roles</p>
              <h1>
                Building clean,
                <br />
                useful tools with
                <br />
                <span>code.</span>
              </h1>
              <p>
                Hi, I&apos;m Lloyd, a junior developer who turns ideas into shipped
                products using <strong>Power apps vite</strong>, <strong>React JS</strong>, <strong>SQL/Sharepoint</strong>, and{' '}
                <strong>Google Apps Script</strong>.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  See my work <span className="btn-icon">→</span>
                </a>
                <a className="btn btn-outline" href="#contact">
                  <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                  Download CV
                </a>
              </div>
              <div className="meta-row">
                <div className="social-icons" aria-label="Social links">
                  <a
                    className="social-link"
                    href="https://github.com/azkers74"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3 4.8 4.8 0 0 0-3-1c-3 0-5.5-2-5.5-4.5a4.5 4.5 0 0 1 1-3.2 4.2 4.2 0 0 1-.1-3.2s1.1-.35 3.6 1.35a12.3 12.3 0 0 1 6 0c2.5-1.7 3.6-1.35 3.6-1.35a4.2 4.2 0 0 1-.1 3.2 4.5 4.5 0 0 1 1 3.2c0 2.5-2.5 4.5-5.5 4.5a4.8 4.8 0 0 1 3 1 4.8 4.8 0 0 1 1 3v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/lloyd-bongolo-0b1233216/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
                <p className="meta">/ based in Philippines, QC</p>
              </div>
            </article>

            <aside className="art-card">
              <img className="art-photo" src={portraitImageUrl} alt="Lloyd portrait" />
            </aside>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <article>
              <p className="label">About me</p>
              <h2>Curious mind, pragmatic builder.</h2>
              <p>
                I started by automating spreadsheet workflows using GSpread, which sparked my interest in development. Since then,
                I’ve expanded into building apps with Power Apps, using SharePoint and SQL as backends.
              </p>
              <p>
                I&apos;m looking for my first full-time developer role where I can
                learn from strong engineering teams and ship useful products.
              </p>
            </article>
            <div className="stat-row">
              <div className="stat-card">
                <strong>10+</strong>
                <span>Projects shipped</span>
              </div>
              <div className="stat-card">
                <strong>4</strong>
                <span>Years coding</span>
              </div>
              <div className="stat-card">
                <strong>5★</strong>
                <span>Client feedback</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="label">Projects</p>
            <h2>A few things I&apos;ve built recently.</h2>
            <div className="cards-grid">
              {projects.map((project) => (
                <article 
                  className="project-card" 
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <header>
                    <h3>{project.title}</h3>
                    <span>↗</span>
                  </header>
                  <p>{project.description}</p>
                  <ul>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section split" id="experience">
          <div className="container split-grid">
            <article>
              <p className="label">Experience</p>
              <h2>Where I&apos;ve worked and learned.</h2>
              <div className="timeline">
                <article className="timeline-item">
                  <p className="timeline-year">2022 - Present</p>
                  <h3>Great Sierra Development Corp</h3>
                  <p className="timeline-company">IT Dev. Staff</p>
                  <ul>
                    <li>Developed trip monitoring systems per client with dashboards for sales, rates, and trip status.</li>
                    <li>Automated workflows using Google Sheets and Google Apps Script.</li>
                    <li>Built Power Apps applications (FCT and SD) integrated with SQL and SharePoint.</li>
                  </ul>
                </article>
                <article className="timeline-item">
                  <p className="timeline-year">2017 - 2021</p>
                  <h3>Asian Institute of Computer Studies</h3>
                  <p className="timeline-company">Maintenance</p>
                  <ul>
                    <li>Involvement in School documents filling.</li>
                    <li>Cleaning Rooms / Maintenance Air-conditioners.</li>
                    <li>Photo editing.</li>
                    <li>Event Decorator.</li>
                  </ul>
                </article>
              </div>
            </article>

            <article>
              <p className="label">Skills</p>
              <h2>My toolbox.</h2>
              <div className="skill-box">
                <h5>Languages</h5>
                <ul className="skill-tags">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>SQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="skill-box">
                <h5>Frameworks</h5>
                <ul className="skill-tags">
                  <li>React</li>
                  <li>Vite</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </div>
              <div className="skill-box">
                <h5>Platforms</h5>
                <ul className="skill-tags">
                  <li>Google Apps Script</li>
                  <li>Jupyter Notebook</li>
                  <li>PostgreSQL</li>
                  <li>Git</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <article className="contact-card">
              <p className="label">Contact</p>
              <h2>
                Let&apos;s build something <span>together.</span>
              </h2>
              <p>
                I&apos;m currently interviewing for junior developer roles. If
                you&apos;re hiring, I&apos;d love to chat.
              </p>
              <div className="hero-actions center">
                <a className="btn btn-primary" href="mailto:azkers05@gmail.com">
                  azkers05@gmail.com
                </a>
                <a className="btn btn-outline" href="#top">
                  Download CV
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-carousel">
                <div className="image-display">
                  <img
                    src={selectedProject.images?.[selectedImageIndex] ?? ''}
                    alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
                    className="modal-image"
                  />
                  <button
                    className="image-view-overlay"
                    type="button"
                    onClick={() => setZoomedImage(selectedProject.images?.[selectedImageIndex] ?? '')}
                    aria-label="View full image"
                  >
                    <svg viewBox="0 0 24 24" className="eye-icon" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="image-controls">
                    {selectedProject.images.length > 1 && (
                      <button
                        className="image-nav-btn"
                        type="button"
                        onClick={() =>
                          setSelectedImageIndex((current) =>
                            selectedProject.images
                              ? (current - 1 + selectedProject.images.length) % selectedProject.images.length
                              : 0,
                          )
                        }
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                    )}
                    <span className="image-counter">
                      {selectedImageIndex + 1} / {selectedProject.images.length}
                    </span>
                    {selectedProject.images.length > 1 && (
                      <button
                        className="image-nav-btn"
                        type="button"
                        onClick={() =>
                          setSelectedImageIndex((current) =>
                            selectedProject.images
                              ? (current + 1) % selectedProject.images.length
                              : 0,
                          )
                        }
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="modal-details">
                <h3>Project Details</h3>
                <p>{selectedProject.description}</p>
                <h4>Tech Stack</h4>
                <ul className="tech-list">
                  {selectedProject.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {zoomedImage && selectedProject && (
        <div className="image-zoom-overlay" onClick={() => setZoomedImage(null)}>
          <button 
            className="zoom-close-btn"
            onClick={() => setZoomedImage(null)}
          >
            ✕
          </button>
          {selectedProject.images && selectedProject.images.length > 1 && (
            <>
              <button
                className="zoom-nav-btn zoom-nav-prev"
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  const count = selectedProject.images?.length ?? 0
                  const nextIndex = count ? (selectedImageIndex - 1 + count) % count : 0
                  setSelectedImageIndex(nextIndex)
                  setZoomedImage(selectedProject.images?.[nextIndex] ?? null)
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="zoom-nav-btn zoom-nav-next"
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  const count = selectedProject.images?.length ?? 0
                  const nextIndex = count ? (selectedImageIndex + 1) % count : 0
                  setSelectedImageIndex(nextIndex)
                  setZoomedImage(selectedProject.images?.[nextIndex] ?? null)
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
          <img src={zoomedImage} alt="Zoomed preview" className="zoomed-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <footer className="site-footer">
        <p>© 2026 Lloyd Bongolo. Built with React &amp; Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
