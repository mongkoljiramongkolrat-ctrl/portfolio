const experience = [
  {
    company: "Nocnoc (Betterbe Marketplace)",
    roles: [
      {
        title: "Product Manager",
        period: "June 2025 – Present",
        bullets: [
          'Improved on-site search performance by integrating generative AI and semantic search to generate related searchable attributes, increasing result relevance and reducing "no result" search rates.',
          "Defined product requirements and led end-to-end delivery of a mobile banking payment method across app and web platforms, optimizing app-switching flows, retry logic, and analytics to improve conversion.",
          "Optimized core commerce systems including search, product listing, and product detail pages to improve scalability, system performance, and cost efficiency.",
        ],
      },
    ],
  },
  {
    company: "Bluebik Group",
    period: "January 2023 – May 2025",
    roles: [
      {
        title: "Senior Consultant – Solution Advisory",
        bullets: [
          "Designed the end-to-end customer journey and digital solution concept for an oil refueling self-service platform, developing proposals that led to successful client approval and implementation.",
          "Defined infrastructure cost optimization strategies across four core enterprise systems and established a long-term service management model to centralize infrastructure and improve operational efficiency.",
        ],
      },
      {
        title: "Senior Consultant – Strategic PMO (Project Manager)",
        projects: [
          {
            name: "Orbit Digital — PMO Setup",
            bullets: [
              "Established a solution committee to govern technical design and tool selection across all client projects, ensuring technology alignment and continuous improvement.",
              "Formed an estimation committee to standardize effort estimation across all company projects, reducing redundancy and improving accuracy for recurring tasks.",
            ],
          },
          {
            name: "PTT OR — EV Station PluZ Application",
            bullets: [
              "Formulated deployment strategies covering both technical deployment and business operations, including contingency plans, within a compressed timeline aligned with critical business objectives.",
              "Led the successful cutover of the EV charging application, overseeing the migration of 900+ chargers and critical customer data with minimal disruption.",
            ],
          },
          {
            name: "PTT OR — Blueplus+ Application",
            bullets: [
              "Organized the full SDLC, endorsing agile practices through standardized communication tools and promoting team ownership of the product.",
              "Refined processes with the client's product owner to minimize timeline misalignment across a large-scope release.",
            ],
          },
        ],
      },
      {
        title: "Consultant – Strategic PMO (Project Manager)",
        projects: [
          {
            name: "PTT OR — Blueplus+ Application",
            bullets: [
              "Directed a large-scale project with five concurrent tracks, overseeing 100+ cross-functional team members and collaborating with 10+ partner organizations.",
              "Managed deployment of four major releases, developing comprehensive fallout plans for each scenario to mitigate risks and ensure smooth execution.",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "Tact Social Consulting",
    roles: [
      {
        title: "Project Manager",
        period: "July 2021 – December 2022",
        bullets: [
          "Planned and implemented Sea (Thailand) DOTs 2021 — a competition developing youth digital entrepreneur skills — resulting in 890 applicants, a 20% increase in self-evaluated digital skills, and SMEs' average revenue tripling.",
          "Managed stakeholder communications across clients, sellers, and participants, achieving an 86% average satisfaction rate.",
        ],
      },
      {
        title: "Sales and Sustainability Consultant",
        bullets: [
          "Analyzed key sustainability topics relevant to the client's business and proposed an actionable ESG strategy, leading to the successful sale and implementation of two projects.",
        ],
      },
    ],
  },
  {
    company: "Accenture",
    roles: [
      {
        title: "Management Consulting Intern",
        period: "January – July 2021",
        bullets: [
          "Analyzed client operational data to create a 3-year digital transformation roadmap for a chemical company's plant turnaround workstream; project was selected among five for the next implementation phase.",
          "Collaborated with a multinational team to design the UI and develop a CRM and marketing automation system for a retail client.",
        ],
      },
    ],
  },
];

const skills = {
  tools: ["Jira", "Figma", "Microsoft Office Suite", "Adobe Photoshop", "Adobe Illustrator"],
  domains: [
    "Product Management",
    "Project Management / PMO",
    "Digital Transformation",
    "Agile / Scrum",
    "ESG & Sustainability Consulting",
    "Enterprise Systems",
  ],
  languages: ["Thai (Native)", "English (Intermediate)"],
};

const strengths = ["Communication", "Harmony", "Maximizer", "Relator", "Individualization"];

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-slate-900 text-sm">Mongkol J.</span>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#education" className="hover:text-slate-900 transition-colors">Education</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6">

        {/* Hero */}
        <section className="py-20 border-b border-slate-100">
          <p className="text-indigo-600 font-medium text-sm mb-3 tracking-wide uppercase">Product Manager</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Mongkol<br />Jiramongkolrat
          </h1>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
            Product Manager bridging business strategy and technology — from enterprise consulting to building products used by millions across Southeast Asia.
          </p>
          <p className="text-slate-500 max-w-xl leading-relaxed mb-8">
            I thrive at the intersection of user needs, business goals, and technical delivery. Whether integrating AI-powered search into an e-commerce platform or overseeing the migration of 900+ EV chargers, I care about building things that work, scale, and create real impact.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:mongkol.jiramongkolrat@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/mongkol-jiramongkolrat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Work Experience</h2>
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3 className="font-semibold text-slate-900 text-lg">{job.company}</h3>
                  {job.period && (
                    <span className="text-sm text-slate-400 whitespace-nowrap mt-0.5">{job.period}</span>
                  )}
                </div>
                <div className="space-y-6">
                  {job.roles.map((role) => (
                    <div key={role.title} className="pl-4 border-l-2 border-slate-100">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <p className="font-medium text-slate-700">{role.title}</p>
                        {role.period && !job.period && (
                          <span className="text-sm text-slate-400 whitespace-nowrap">{role.period}</span>
                        )}
                      </div>
                      {role.bullets && (
                        <ul className="space-y-1.5">
                          {role.bullets.map((b, i) => (
                            <li key={i} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                              <span className="text-slate-300 mt-1.5 shrink-0">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {role.projects && (
                        <div className="space-y-4 mt-2">
                          {role.projects.map((proj) => (
                            <div key={proj.name}>
                              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">{proj.name}</p>
                              <ul className="space-y-1.5">
                                {proj.bullets.map((b, i) => (
                                  <li key={i} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                                    <span className="text-slate-300 mt-1.5 shrink-0">•</span>
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Skills</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Tools</h3>
              <ul className="space-y-1">
                {skills.tools.map((s) => (
                  <li key={s} className="text-sm text-slate-600">{s}</li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Domain Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.domains.map((d) => (
                  <span key={d} className="px-3 py-1 text-sm bg-slate-50 text-slate-600 rounded-full border border-slate-200">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Languages</h3>
              <ul className="space-y-1">
                {skills.languages.map((l) => (
                  <li key={l} className="text-sm text-slate-600">{l}</li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Gallup StrengthsFinder <span className="normal-case font-normal text-slate-300">· Jan 2025</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span key={s} className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-16 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Education</h2>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-900">Chulalongkorn University</h3>
              <p className="text-slate-600 text-sm mt-1">Bachelor of Business Administration — Major in Marketing</p>
              <p className="text-sm mt-1">
                <span className="text-indigo-600 font-medium">First-Class Honors</span>
                <span className="text-slate-400"> · GPAX 3.61</span>
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm text-slate-400">Bangkok, Thailand</p>
              <p className="text-sm text-slate-400 mt-0.5">2017 – 2021</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Awards</h3>
            <div className="flex items-center justify-between py-3 border-t border-slate-100">
              <div>
                <p className="text-sm font-medium text-slate-700">Blue Awards — Beyond Standard</p>
                <p className="text-xs text-slate-400 mt-0.5">Bluebik Company Core Value Award</p>
              </div>
              <span className="text-sm text-slate-400">2024</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h2>
          <p className="text-slate-500 mb-8">Open to new opportunities and conversations.</p>
          <div className="space-y-3">
            <a
              href="mailto:mongkol.jiramongkolrat@gmail.com"
              className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors text-sm"
            >
              <span className="w-4 text-slate-300">✉</span>
              mongkol.jiramongkolrat@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mongkol-jiramongkolrat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors text-sm"
            >
              <span className="w-4 text-slate-300">↗</span>
              linkedin.com/in/mongkol-jiramongkolrat
            </a>
            <p className="flex items-center gap-3 text-slate-600 text-sm">
              <span className="w-4 text-slate-300">◎</span>
              Bangkok, Thailand
            </p>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-100 py-6">
        <p className="max-w-3xl mx-auto px-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Mongkol Jiramongkolrat
        </p>
      </footer>
    </div>
  );
}
