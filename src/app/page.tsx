import { portfolioData } from "../data";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accentSoft">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const { contact } = portfolioData;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="min-h-screen bg-base text-text">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-grid h-full w-full" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-line bg-base/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Mohamed El Nakouzi
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            {[
              "About",
              "Education",
              "Experience",
              "Projects",
              "Skills",
              "Achievements",
              "Activities",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-accentSoft"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accentSoft">
              Available for software, AI, robotics, and mechatronics opportunities
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {portfolioData.name}
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">
              {portfolioData.title}
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
              {portfolioData.profile}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accentSoft"
              >
                View GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accentSoft hover:text-accentSoft"
              >
                Connect on LinkedIn
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full border border-line bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accentSoft hover:text-accentSoft"
              >
                Email Me
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-line bg-surface/90 p-6 shadow-glow">
            <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-line bg-surfaceAlt">
              <img
                src={`${basePath}/photoCV.png`}
                alt="Mohamed El Nakouzi"
                className="h-auto max-h-[520px] w-full object-contain object-center"
              />
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accentSoft">Location</p>
                <p className="mt-2 text-lg text-white">{contact.location}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accentSoft">Email</p>
                <a className="mt-2 block text-lg text-white hover:text-accentSoft" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accentSoft">Phone</p>
                <a className="mt-2 block text-lg text-white hover:text-accentSoft" href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accentSoft">Languages</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {portfolioData.languages.map((language) => (
                    <span key={language} className="rounded-full border border-line px-3 py-1 text-sm text-slate-300">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="Profile"
            description="A cross-disciplinary foundation in software engineering, AI-enabled systems, AR/VR, and mechatronics, with a focus on building production-ready solutions that bridge code and hardware."
          />
          <div className="rounded-3xl border border-line bg-surface/80 p-8">
            <p className="max-w-4xl text-lg leading-8 text-slate-300">{portfolioData.profile}</p>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle eyebrow="Education" title="Academic Background" />
          <div className="grid gap-6">
            {portfolioData.education.map((item) => (
              <article key={item.degree} className="rounded-3xl border border-line bg-surface/70 p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.degree}</h3>
                    <p className="mt-2 text-muted">{item.location}</p>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-accentSoft">
                    {item.date}
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle eyebrow="Experience" title="Professional Experience" />
          <div className="space-y-6">
            {portfolioData.experience.map((item) => (
              <article key={`${item.role}-${item.date}`} className="rounded-3xl border border-line bg-surface/70 p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.role}, <span className="text-slate-300">{item.company}</span>
                    </h3>
                    <p className="mt-2 text-muted">{item.location}</p>
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-accentSoft">
                    {item.date}
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle
            eyebrow="Projects"
            title="Selected Work"
            description="Projects spanning AI, augmented reality, full-stack systems, machine learning, robotics, and digital hardware."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <article key={project.name} className="rounded-3xl border border-line bg-surface/80 p-7 transition hover:-translate-y-1 hover:border-accent/40">
                <div className="flex min-h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                    <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.18em] text-accentSoft">
                      {project.date}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-slate-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {project.demoUrl ? (
                    <div className="mt-6">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accentSoft transition hover:border-accentSoft hover:bg-accent/20"
                      >
                        {project.demoLabel ?? "View Demo"}
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle eyebrow="Skills" title="Technical Toolkit" />
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioData.skills.map((group) => (
              <article key={group.category} className="rounded-3xl border border-line bg-surface/70 p-7">
                <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={`${group.category}-${item}`}
                      className="rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle eyebrow="Achievements" title="Recognition" />
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.achievements.map((item) => (
              <article key={item} className="rounded-3xl border border-line bg-surface/70 p-7">
                <p className="text-lg leading-8 text-slate-300">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="activities" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle eyebrow="Activities" title="Extracurricular Activities" />
          <div className="grid gap-6">
            {portfolioData.extracurricular.map((item) => (
              <article key={item} className="rounded-3xl border border-line bg-surface/70 p-7">
                <p className="text-lg leading-8 text-slate-300">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="rounded-[2rem] border border-line bg-gradient-to-br from-surface to-surfaceAlt p-8 shadow-glow sm:p-10">
            <SectionTitle
              eyebrow="Contact"
              title="Let's Build Something Impactful"
              description="Open to software engineering, AI, robotics, automation, and mechatronics opportunities."
            />
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accentSoft"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition hover:border-accentSoft hover:text-accentSoft"
              >
                {contact.phone}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition hover:border-accentSoft hover:text-accentSoft"
              >
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition hover:border-accentSoft hover:text-accentSoft"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
