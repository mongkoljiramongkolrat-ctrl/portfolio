"use client";

import { useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const experience = [
  {
    company: "Nocnoc (Betterbe Marketplace)",
    logo: "/logos/nocnoc.png",
    initials: "NN",
    color: "bg-orange-500",
    period: "June 2025 – Present",
    context:
      "Thailand's specialized online marketplace for home, living, and construction products — backed by conglomerates SCG and Frasers Property/ThaiBev with ~6.9 billion baht in registered capital (~$190M USD). One of the most well-funded vertical e-commerce platforms in the country.",
    roles: [
      {
        title: "Product Manager",
        bullets: [
          'Improved on-site search performance by integrating generative AI and semantic search, increasing result relevance and reducing "no result" rates.',
          "Led end-to-end delivery of a mobile banking payment method across app and web, optimizing app-switching flows, retry logic, and analytics to improve conversion.",
          "Optimized core commerce systems — search, product listing, PDPs — to improve scalability, performance, and cost efficiency.",
        ],
      },
    ],
  },
  {
    company: "Bluebik Group",
    logo: "/logos/bluebik.png",
    initials: "BB",
    color: "bg-blue-600",
    period: "January 2023 – May 2025",
    context:
      "Thailand's leading homegrown digital transformation consultancy, listed on the Stock Exchange of Thailand (SET: BBIK). With 1,000+ technology consultants and record revenue of 1.54 billion baht (~$43M USD) in 2025, Bluebik is the flagship local alternative to global consultancies for Thai enterprise digital transformation.",
    roles: [
      {
        title: "Senior Consultant – Solution Advisory",
        bullets: [
          "Designed end-to-end customer journey and digital solution concept for an oil refueling self-service platform — proposals led to client approval and full implementation.",
          "Defined infrastructure cost optimization strategies across four enterprise systems and established a long-term service management model to centralize operations.",
        ],
      },
      {
        title: "Senior Consultant – Strategic PMO",
        projects: [
          {
            name: "Orbit Digital — PMO Setup",
            note: "JV between PTT OR (40%) and Bluebik (60%) — OR's dedicated digital innovation engine.",
            bullets: [
              "Established a solution committee governing technical design and tool selection across all client projects.",
              "Formed an estimation committee to standardize effort estimation company-wide, reducing redundancy and improving accuracy.",
            ],
          },
          {
            name: "PTT OR — EV Station PluZ",
            note: "PTT OR's mobile app for Thailand's EV charging network (1,300+ charge points).",
            bullets: [
              "Formulated deployment strategies covering technical and business operations, including contingency plans, within a compressed timeline.",
              "Led the cutover of the EV charging app, migrating 900+ chargers and critical customer data with minimal disruption.",
            ],
          },
          {
            name: "PTT OR — Blueplus+",
            note: "OR's unified loyalty platform across PTT Station, Café Amazon, and other brands.",
            bullets: [
              "Organized the full SDLC, endorsing agile practices and promoting cross-team ownership.",
              "Refined processes with the client's product owner to minimize misalignment across a large-scope release.",
            ],
          },
        ],
      },
      {
        title: "Consultant – Strategic PMO",
        projects: [
          {
            name: "PTT OR — Blueplus+ (Initial Phase)",
            bullets: [
              "Directed a project with 5 concurrent tracks, overseeing 100+ cross-functional team members across 10+ partner organizations.",
              "Managed 4 major releases, developing comprehensive fallout plans to mitigate risks and ensure smooth execution.",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "Tact Social Consulting",
    logo: "/logos/tact.png",
    initials: "TC",
    color: "bg-emerald-600",
    period: "July 2021 – December 2022",
    context:
      "Bangkok-based boutique ESG and sustainability consultancy helping Thai corporations implement ESG strategies, measure carbon footprints, and prepare sustainability reports to international standards (GRI, TCFD, IFRS). Serves 30+ public and private sector organizations.",
    roles: [
      {
        title: "Project Manager",
        bullets: [
          "Delivered Sea (Thailand) DOTs 2021 — a Shopee SME digital accelerator — resulting in 890 applicants, 20% growth in digital skills self-assessment, and SMEs' average revenue tripling.",
          "Managed stakeholder communications across clients, sellers, and participants, achieving an 86% average satisfaction rate.",
        ],
      },
      {
        title: "Sales & Sustainability Consultant",
        bullets: [
          "Proposed actionable ESG strategies for retail clients, leading to the sale and implementation of two consulting projects.",
        ],
      },
    ],
  },
  {
    company: "Accenture",
    logo: "/logos/accenture.png",
    initials: "AC",
    color: "bg-purple-600",
    period: "January – July 2021",
    context:
      "One of the world's largest professional services firms — ~779,000 employees, $69.7B revenue in FY2025 — providing digital transformation, cloud, and AI consulting across 52 countries. A globally recognized gateway into enterprise consulting.",
    roles: [
      {
        title: "Management Consulting Intern",
        bullets: [
          "Built a 3-year digital transformation roadmap for a chemical company's plant turnaround workstream; the initiative was selected among five for the next implementation phase.",
          "Collaborated with a multinational team to design the UI and develop a CRM and marketing automation system for a retail client.",
        ],
      },
    ],
  },
];

const skillGroups = [
  {
    label: "Product & Project",
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    skills: ["Product Management", "Strategic PMO", "Agile / Scrum", "Digital Transformation"],
  },
  {
    label: "Tools",
    color: "bg-slate-50 text-slate-600 border-slate-200",
    skills: ["Jira", "Figma", "Microsoft Office Suite", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    label: "Domain",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    skills: ["E-commerce", "Enterprise Systems", "ESG & Sustainability", "Infrastructure Optimization"],
  },
  {
    label: "Languages",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    skills: ["Thai (Native)", "English (Intermediate)"],
  },
];

const strengths = ["Communication", "Harmony", "Maximizer", "Relator", "Individualization"];

/* ─── Sub-components ────────────────────────────────────────────────────── */

function Logo({ src, initials, color, name }: { src: string; initials: string; color: string; name: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm ${color}`}>
        {initials}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      onError={() => setErr(true)}
      className="w-12 h-12 rounded-2xl object-contain bg-white border border-slate-100 p-1.5 shadow-sm shrink-0"
    />
  );
}

function Context({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-500 transition-colors"
      >
        <span className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}>▶</span>
        Company background
      </button>
      {open && (
        <p className="mt-2 text-xs text-slate-500 leading-relaxed bg-slate-50 rounded-xl p-3 border border-slate-100">
          {text}
        </p>
      )}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-slate-900 text-sm tracking-tight">Mongkol J.</span>
          <div className="flex gap-5 text-sm text-slate-400 font-medium">
            {["experience", "skills", "education", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-slate-900 capitalize transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-6 py-24 sm:py-32">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Product Manager · Bangkok, Thailand
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Mongkol<br />
            <span className="text-indigo-400">Jiramongkolrat</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-4">
            Product Manager bridging business strategy and technology — from enterprise consulting to building products used by millions across Southeast Asia.
          </p>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed mb-10">
            I thrive at the intersection of user needs, business goals, and technical delivery. Whether integrating AI-powered search or overseeing the migration of 900+ EV chargers, I care about building things that work, scale, and create real impact.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:mongkol.jiramongkolrat@gmail.com"
              className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-500/25"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/mongkol-jiramongkolrat/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">

        {/* Experience */}
        <section id="experience" className="py-20">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">Work Experience</h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company} className="group">
                <div className="flex gap-4 items-start">
                  <Logo src={job.logo} initials={job.initials} color={job.color} name={job.company} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-slate-900 text-base leading-snug">{job.company}</h3>
                      <span className="text-xs text-slate-400 whitespace-nowrap mt-0.5 shrink-0">{job.period}</span>
                    </div>
                    <Context text={job.context} />
                  </div>
                </div>

                {/* Roles */}
                <div className="ml-16 mt-5 space-y-6">
                  {job.roles.map((role) => (
                    <div key={role.title}>
                      <p className="text-sm font-semibold text-indigo-600 mb-2">{role.title}</p>

                      {role.bullets && (
                        <ul className="space-y-2">
                          {role.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-slate-500 leading-relaxed">
                              <span className="mt-2 w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}

                      {role.projects && (
                        <div className="space-y-4">
                          {role.projects.map((proj) => (
                            <div key={proj.name} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                              <p className="text-xs font-semibold text-slate-700 mb-0.5">{proj.name}</p>
                              {"note" in proj && proj.note && (
                                <p className="text-xs text-slate-400 mb-2 italic">{proj.note}</p>
                              )}
                              <ul className="space-y-1.5">
                                {proj.bullets.map((b, i) => (
                                  <li key={i} className="flex gap-2.5 text-sm text-slate-500 leading-relaxed">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                                    {b}
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

                {/* divider */}
                <div className="mt-10 border-b border-slate-100 last:border-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 border-t border-slate-100">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">Skills</h2>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex gap-4 items-start">
                <span className="text-xs text-slate-400 w-28 pt-1 shrink-0 font-medium">{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${group.color}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-4 items-start">
              <span className="text-xs text-slate-400 w-28 pt-1 shrink-0 font-medium">Strengths</span>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-medium rounded-full border bg-violet-50 text-violet-700 border-violet-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-400 ml-32">Gallup StrengthsFinder · Tested January 2025</p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20 border-t border-slate-100">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">Education</h2>
          <div className="flex gap-4 items-start">
            <Logo src="/logos/chula.png" initials="CU" color="bg-pink-600" name="Chulalongkorn University" />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">Chulalongkorn University</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Bachelor of Business Administration — Marketing</p>
                  <p className="text-sm mt-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-xs font-medium">
                      First-Class Honors · GPAX 3.61
                    </span>
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Thailand's most prestigious university — ranked #1 in Thailand, top 250 globally (QS).
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-slate-400">Bangkok, Thailand</p>
                  <p className="text-xs text-slate-400 mt-0.5">2017 – 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Award */}
          <div className="mt-10">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Awards</h3>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-xl shrink-0">
                🏆
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-700">Blue Awards — Beyond Standard</p>
                <p className="text-xs text-slate-400 mt-0.5">Bluebik Company Core Value Award</p>
              </div>
              <span className="text-xs text-slate-400 shrink-0">2024</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-slate-100">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contact</h2>
          <p className="text-slate-500 text-sm mb-8">Open to new opportunities and conversations.</p>
          <div className="space-y-3">
            <a
              href="mailto:mongkol.jiramongkolrat@gmail.com"
              className="flex items-center gap-3 group w-fit"
            >
              <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 text-sm group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                @
              </span>
              <span className="text-sm text-slate-600 group-hover:text-indigo-600 transition-colors">
                mongkol.jiramongkolrat@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mongkol-jiramongkolrat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-fit"
            >
              <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 text-sm group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                in
              </span>
              <span className="text-sm text-slate-600 group-hover:text-indigo-600 transition-colors">
                linkedin.com/in/mongkol-jiramongkolrat
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                📍
              </span>
              <span className="text-sm text-slate-500">Bangkok, Thailand</span>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-100 py-8">
        <p className="max-w-4xl mx-auto px-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Mongkol Jiramongkolrat
        </p>
      </footer>
    </div>
  );
}
