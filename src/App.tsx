import aboutPhoto from "./imports/daylen-about.jpg"
import heroPhoto from "./imports/daylen-hero.jpg"
import climateModelImage from "../climate_model1.png"
import courseFinderImage from "../course_finder1-1.png"
import talkClimateImage from "../talkc_demo1.png"

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.5 8.2H3.3V20h3.2V8.2ZM6.8 4.7C6.8 3.7 6 3 4.9 3S3 3.7 3 4.7s.8 1.8 1.9 1.8 1.9-.8 1.9-1.8ZM20.8 13.3c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 1.1-3.5 1.9V8.2H9.6V20h3.2v-5.8c0-1.6.3-3.1 2.3-3.1s2.4 1.8 2.4 3.2V20h3.2l.1-6.7Z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2.5a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.3-.3-4.6-1.1-4.6-4.8 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.5 1 2.6 0 3.7-2.3 4.5-4.6 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.5Z" />
    </svg>
  )
}

function CraftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m8.5 15.5-4-3.5 4-3.5M15.5 8.5l4 3.5-4 3.5M13.8 5.5l-3.6 13" />
    </svg>
  )
}

function FocusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v2.5M22 12h-2.5M12 22v-2.5M2 12h2.5" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m5.5 10.2 2.8 2.8 6.2-6.2" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  )
}

const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    description: "Building applications, working with data, and developing reliable software.",
    skills: [
      ["Python", "Data and application development"],
      ["Go", "Backend development"],
      ["C & Java", "Programming fundamentals"],
      ["JavaScript, HTML & CSS", "Web development"],
    ],
  },
  {
    number: "02",
    title: "AI & Data",
    description: "Exploring machine learning, intelligent systems, and data-driven problem-solving.",
    skills: [
      ["Scikit-learn", ""],
      ["NumPy & Pandas", ""],
      ["OpenAI API & LLM integration", ""],
      ["ChromaDB", ""],
      ["Data visualization & geospatial analysis", ""],
    ],
  },
]

const projects = [
  {
    number: "01",
    title: "Understanding the movement of climate displacement",
    type: "Machine Learning · Climate Technology",
    year: "2025",
    theme: "project-art-lime",
    description:
      "An interactive machine learning application exploring how climate-related factors influence human displacement through predictive modeling and geospatial visualization.",
    technologies: "Python · Scikit-learn · XGBoost · FastAPI · Leaflet",
    repoUrl: "https://github.com/lfbianchini/cs463_final_jupyter",
  },
  {
    number: "02",
    title: (
      <span className="fg-inline-bold">Intelligent Course Search System</span>
    ),
    type: "Full-Stack Development · AI",
    year: "2024",
    theme: "project-art-dark",
    description:
      "A conversational course discovery application that helps students explore university schedules through natural-language queries and relevance-ranked search results.",
    technologies: "Go · JavaScript · HTML · CSS · ChromaDB · OpenAI API",
    repoUrl: "https://github.com/djohnson17/intelligent-course-search",

  },
  {
    number: "03",
    title: "Turning climate awareness into action",
    type: "Full-Stack Development · Social Impact",
    year: "2026",
    theme: "project-art-stone",
    description:
      "A climate communication platform designed to encourage more frequent and informed climate conversations by delivering localized climate information through a web-based signup experience and recurring SMS messages.",
    technologies: "Webflow · JavaScript · Twilio · Supabase",
  },
]

export default function App() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="page-shell">
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Daylen Johnson, home">
          <span>Daylen Johnson</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>

        <a className="header-contact" href="mailto:djohnson17@dons.usfca.edu">
          Let&apos;s talk
          <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="portrait-column">
          <div className="portrait-frame">
            <span className="portrait-accent" aria-hidden="true" />
            <img
              className="portrait scale-[1.06]"
              src={heroPhoto}
              alt="Portrait of Daylen Johnson"
            />
            <span className="portrait-caption">
              Based in the San Francisco Bay Area · Open to opportunities
            </span>
          </div>
        </div>

        <div className="hero-copy">
          <div className="availability">
            <span aria-hidden="true" />
            Available for work opportunities
          </div>
          <p className="eyebrow">Hello, I&apos;m</p>
          <div className="hero-title" id="hero-title">
            Daylen Johnson
          </div>
          <p className="role">
            Computer Science graduate · Creative technologist · Software developer
          </p>
          <p className="intro">
            <span className="fg-inline-bold">
              Building at the intersection of technology, creativity, and
              people.
            </span>
          </p>

          <div className="actions">
            <a
              className="primary-action"
              href="/Daylen Johnson, Portfolio Resume.pdf"
              download="Daylen Johnson, Portfolio Resume.pdf"
            >
              Download CV
              <ArrowIcon />
            </a>
            <a
              className="secondary-action"
              href="mailto:djohnson17@dons.usfca.edu"
            >
              Contact me
            </a>
          </div>

          <div className="social-row">
            <span className="social-label">Find me online</span>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/daylen-johnson/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              className="social-link"
              href="https://github.com/djohnson17"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        className="about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="about-heading">
          <p className="section-kicker">A little more about me</p>
          <div className="section-title" id="about-title">
            Impact driven.
            <br />
            <span>Design minded.</span>
          </div>
        </div>

        <div className="about-layout">
          <div className="about-portrait-wrap">
            <img
              className="about-portrait"
              src={aboutPhoto}
              alt="Daylen Johnson"
            />
            <span className="about-image-label">Curious by nature</span>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I&apos;m a creative technologist driven by curiosity, creativity,
              and the belief that technology can make a difference.
            </p>
            <p className="about-body">
              My work brings together technology, creativity, and
              problem-solving. I&apos;m interested in building intuitive digital
              experiences and intelligent systems that address real-world
              challenges, from climate and healthcare to AI and robotics.
            </p>

            <div className="about-cards">
              <article className="about-card">
                <CraftIcon />
                <div>
                  <span className="card-number">01</span>
                  <p className="card-label">My approach</p>
                  <p className="card-copy">
                    Purposeful technology, thoughtfully built.
                  </p>
                </div>
              </article>

              <article className="about-card">
                <FocusIcon />
                <div>
                  <span className="card-number">02</span>
                  <p className="card-label">My focus</p>
                  <p className="card-copy">
                    Software, AI, and real-world innovation.
                  </p>
                </div>
              </article>
            </div>

            <a className="text-link" href="#projects">
              Explore selected work
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        className="projects-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="projects-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <div className="projects-title" id="projects-title">
              Technology with
              <br />
              purpose and impact.
            </div>
          </div>
          <p className="projects-intro">
            A collection of projects exploring software, intelligent
            systems, and technology designed to address real-world
            challenges.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.number === "03" ? "project-card-featured" : ""
              }`}
              key={project.number}
            >
              <div
                className={`project-art ${project.theme}`}
                aria-hidden="true"
              >
                <span className="project-art-index">{project.number}</span>
                <div className="mock-browser">
                  <div className="mock-browser-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mock-browser-body">
                    {project.number === "01" ? (
                      <img
                        src={climateModelImage}
                        alt="Climate Displacement Predictor showing a world map"
                        style={{
                          gridColumn: "1 / -1",
                          width: "100%",
                          height: "100%",
                          minWidth: 0,
                          objectFit: "contain",
                          objectPosition: "center",
                          display: "block",
                        }}
                      />
                    ) : project.number === "02" ? (
                      <img
                        src={courseFinderImage}
                        alt="Bikini Bottom University Course Finder"
                        style={{
                          gridColumn: "1 / -1",
                          width: "100%",
                          height: "100%",
                          minWidth: 0,
                          objectFit: "contain",
                          objectPosition: "center",
                          display: "block",
                        }}
                      />
                    ) : project.number === "03" ? (
                      <img
                        src={talkClimateImage}
                        alt="Let's Talk Climate website homepage"
                        style={{
                          gridColumn: "1 / -1",
                          width: "100%",
                          height: "100%",
                          minWidth: 0,
                          objectFit: "contain",
                          objectPosition: "center",
                          display: "block",
                        }}
                      />
                    ) : (
                      <>
                        <div className="mock-sidebar" />
                        <div className="mock-content">
                          <span className="mock-title" />
                          <span className="mock-copy" />
                          <div className="mock-panels">
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-meta">
                <div>
                  <p className="project-type">
                    {project.type} <span>·</span> {project.year}
                  </p>
                  <p className="project-name">{project.title}</p>
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  {project.technologies && (
                    <p className="project-technologies">
                      {project.technologies}
                    </p>
                  )}
                </div>
                {project.repoUrl && (
                  <a
                    className="project-open"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRightIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note">
          <a className="text-link" href="mailto:djohnson17@dons.usfca.edu">
            Ask about my work
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section
        className="experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="experience-intro">
          <div>
            <p className="section-kicker">Skills & Expertise</p>
            <div className="experience-title" id="experience-title">
              Tools and technologies
              <br />
              <span>behind the ideas.</span>
            </div>
          </div>

          <p className="experience-summary">
            A multidisciplinary toolkit for developing software, exploring
            intelligent systems, and creating technology that addresses real-world
            challenges.
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-header">
                <span>{group.number}</span>
                <div>
                  <p className="skill-group-title">{group.title}</p>
                  <p className="skill-group-description">{group.description}</p>
                </div>
              </div>

              <div className="skill-list">
                {group.skills.map(([skill, detail]) => (
                  <div className="skill-item" key={skill}>
                    <span className="skill-check">
                      <CheckIcon />
                    </span>
                    <div>
                      <p className="skill-name">{skill}</p>
                      {detail && <p className="skill-detail">{detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="experience-footer">
          <span>Always learning, always refining.</span>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-inner">
          <div className="contact-topline">
            <p className="contact-kicker">
              <span aria-hidden="true" />
              Available for new opportunities
            </p>
            <span>Based in the San Francisco Bay Area · Open to opportunities</span>
          </div>

          <div className="contact-main">
            <div className="contact-title" id="contact-title">
              Have an idea?
              <br />
              <span>Let&apos;s make something meaningful.</span>
            </div>
            <p className="contact-copy">
                I&apos;m interested in building thoughtful technology, exploring creative
                ideas, and working on products that make a difference. Whether it&apos;s
                software, AI, climate technology, or something entirely new, I&apos;m always
                open to interesting projects and conversations.
            </p>
          </div>

          <div className="contact-actions">
            <a className="email-link" href="mailto:djohnson17@dons.usfca.edu">
              <span className="email-icon">
                <MailIcon />
              </span>
              <span>
                <small>Start a conversation</small>
                djohnson17@dons.usfca.edu
              </span>
              <ArrowUpRightIcon />
            </a>

            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/daylen-johnson/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowUpRightIcon />
              </a>
              <a
                href="https://github.com/djohnson17"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>

          <footer className="site-footer">
            <a className="footer-wordmark" href="#home">
              Daylen Johnson<span aria-hidden="true">.</span>
            </a>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="footer-meta">
              <span>© {currentYear} Daylen Johnson</span>
              <a href="#home">Back to top ↑</a>
            </div>
          </footer>
        </div>
      </section>

      <div className="side-note" aria-hidden="true">
        <span>PORTFOLIO · {currentYear}</span>
      </div>
    </main>
  )
}
