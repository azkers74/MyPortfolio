import './App.css'

function App() {
  const portraitImageUrl = `${import.meta.env.BASE_URL}Lloyd.jpg`

  const projects = [
    {
      title: 'InvoiceFlow',
      description:
        'Automated invoicing tool for freelancers. Generates branded PDFs and sends client reminders on schedule.',
      stack: ['Google Apps Script', 'Sheets API', 'HTML'],
    },
    {
      title: 'TaskBoard',
      description:
        'Kanban app with drag-and-drop, real-time updates, and SQL-backed activity history.',
      stack: ['React', 'TypeScript', 'PostgreSQL'],
    },
    {
      title: 'SchoolMetrics',
      description:
        'Dashboard for a local school that parses attendance files and surfaces trends with charts.',
      stack: ['React', 'SQL', 'Recharts'],
    },
    {
      title: 'DocSign Lite',
      description:
        'Lightweight e-signature flow inside Google Docs with approvals and Drive-based access controls.',
      stack: ['Apps Script', 'Drive API', 'OAuth'],
    },
  ]

  return (
    <div className="page-shell">
      <header className="nav-wrap">
        <div className="container nav">
          <a className="brand" href="#top">
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
                Hi, I&apos;m Alex, a junior developer who turns ideas into shipped
                products using <strong>React</strong>, <strong>SQL</strong>, and{' '}
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
                <p className="meta">/ based in Lisbon, PT</p>
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
              <p className="label">// About me</p>
              <h2>Curious mind, pragmatic builder.</h2>
              <p>
                I started coding by automating spreadsheet workflows and never
                stopped. Today I build full web apps in React backed by SQL and Sharepoint.
              </p>
              <p>
                I&apos;m looking for my first full-time developer role where I can
                learn from strong engineering teams and ship useful products.
              </p>
            </article>
            <div className="stat-row">
              <div className="stat-card">
                <strong>12+</strong>
                <span>Projects shipped</span>
              </div>
              <div className="stat-card">
                <strong>2</strong>
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
            <p className="label">// Projects</p>
            <h2>A few things I&apos;ve built recently.</h2>
            <div className="cards-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
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
              <p className="label">// Experience</p>
              <h2>Where I&apos;ve worked and learned.</h2>
              <div className="timeline">
                <article className="timeline-item">
                  <p className="timeline-year">2024 - Present</p>
                  <h3>Freelance Developer</h3>
                  <p className="timeline-company">Self-employed</p>
                  <ul>
                    <li>Built React + SQL dashboards for two local businesses.</li>
                    <li>Automated reporting workflows saving 8h/week per client.</li>
                  </ul>
                </article>
                <article className="timeline-item">
                  <p className="timeline-year">2023 - 2024</p>
                  <h3>Junior Web Developer (Intern)</h3>
                  <p className="timeline-company">Bright Studio</p>
                  <ul>
                    <li>Shipped landing pages and small features in a React codebase.</li>
                    <li>Wrote SQL queries and reviewed teammates&apos; pull requests.</li>
                  </ul>
                </article>
                <article className="timeline-item">
                  <p className="timeline-year">2022 - 2023</p>
                  <h3>Operations Analyst</h3>
                  <p className="timeline-company">DataCo</p>
                  <ul>
                    <li>Replaced manual spreadsheet work with Google Apps Script tools.</li>
                    <li>First exposure to engineering and sparked a career shift.</li>
                  </ul>
                </article>
              </div>
            </article>

            <article>
              <p className="label">// Skills</p>
              <h2>My toolbox.</h2>
              <div className="skill-box">
                <h5>Languages</h5>
                <ul className="skill-tags">
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
              <p className="label">// Contact</p>
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

      <footer className="site-footer">
        <p>© 2026 Alex Carter. Built with React &amp; Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
