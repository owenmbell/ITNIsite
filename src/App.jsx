import './App.css'

const themes = [
  ['01', 'Institutional loyalty'],
  ['02', 'National security'],
  ['03', 'Political sacrifice'],
  ['04', 'Public truth vs. private power'],
  ['05', 'The machinery of government'],
  ['06', 'Moral compromise'],
]

const visualPanels = [
  {
    className: 'visual-panel--corridor',
    number: '01',
    label: 'The institution',
    caption: 'Power lives in the spaces no one sees.',
  },
  {
    className: 'visual-panel--archive',
    number: '02',
    label: 'The record',
    caption: 'Every secret leaves a paper trail.',
  },
  {
    className: 'visual-panel--surveillance',
    number: '03',
    label: 'The watcher',
    caption: 'Trust is a vulnerability.',
  },
]

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="In The National Interest home">
        ITNI
      </a>
      <nav aria-label="Main navigation">
        <a href="#story">Story</a>
        <a href="#themes">Themes</a>
        <a href="#visual-world">Visual World</a>
      </nav>
      <a className="header-contact" href="#contact">
        Contact
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-seal" aria-hidden="true">
        <span>IN THE NATIONAL INTEREST</span>
      </div>
      <div className="hero-meta">
        <span>A feature film</span>
        <span>Political thriller</span>
      </div>
      <div className="hero-content">
        <p className="classification">Restricted // Eyes Only</p>
        <h1>
          <span>In The</span>
          National
          <span>Interest</span>
        </h1>
        <div className="hero-bottom">
          <p className="tagline">Loyalty has a cost.</p>
          <a className="cta" href="#story">
            Enter the story <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <p className="hero-code" aria-hidden="true">
        FILE 7A-031 / AUTHORIZATION WITHHELD
      </p>
    </section>
  )
}

function Story() {
  return (
    <section className="story section" id="story">
      <div className="section-marker">
        <span>01</span>
        <span>The story</span>
      </div>
      <div className="story-content">
        <Eyebrow>Logline</Eyebrow>
        <p className="logline">
          When a rising government aide uncovers a buried operation with
          consequences reaching the highest levels of power, he is forced to
          choose between loyalty to the institution that made him and the truth
          that could destroy it.
        </p>
        <div className="story-note">
          <span>Washington, D.C.</span>
          <span>Present day</span>
          <span>Feature / Drama</span>
        </div>
      </div>
    </section>
  )
}

function Themes() {
  return (
    <section className="themes section" id="themes">
      <div className="section-heading">
        <div>
          <Eyebrow>Under examination</Eyebrow>
          <h2>Themes</h2>
        </div>
        <p>
          A story about the fault line between public duty and private
          conscience.
        </p>
      </div>
      <div className="theme-grid">
        {themes.map(([number, title]) => (
          <article className="theme-card" key={number}>
            <span className="theme-number">{number}</span>
            <h3>{title}</h3>
            <span className="theme-mark" aria-hidden="true">
              +
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

function VisualWorld() {
  return (
    <section className="visual-world section" id="visual-world">
      <div className="section-heading section-heading--light">
        <div>
          <Eyebrow>Look &amp; atmosphere</Eyebrow>
          <h2>Visual World</h2>
        </div>
        <p>
          Cold light. Closed doors. A capital built on controlled information.
        </p>
      </div>
      <div className="visual-grid">
        {visualPanels.map((panel) => (
          <article
            className={`visual-panel ${panel.className}`}
            key={panel.number}
          >
            <div className="panel-art" aria-hidden="true">
              <span className="focus-frame" />
              <span className="timestamp">REC {panel.number}:17:42</span>
            </div>
            <div className="panel-copy">
              <span>{panel.number}</span>
              <div>
                <h3>{panel.label}</h3>
                <p>{panel.caption}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="visual-direction">
        Dark government interiors <span>•</span> Archival textures{' '}
        <span>•</span> Muted patriotic colors <span>•</span> Classified
        documents <span>•</span> Surveillance framing
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-stamp" aria-hidden="true">
        <span>Project</span>
        <strong>Active</strong>
        <span>2026</span>
      </div>
      <div className="contact-copy">
        <Eyebrow>Production inquiries</Eyebrow>
        <h2>Some truths demand an audience.</h2>
        <p>
          <em>In The National Interest</em> is a feature film currently in
          development. For production, financing, and representation inquiries,
          contact the filmmaking team.
        </p>
        <a className="contact-link" href="mailto:production@example.com">
          production@example.com <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <span>© 2026 In The National Interest</span>
      <span>A feature film in development</span>
      <a href="#top">Return to top ↑</a>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Themes />
        <VisualWorld />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
