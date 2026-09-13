import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaGlobe,
  FaServer,
  FaMobileScreenButton,
  FaPenRuler,
  FaChartColumn,
  FaMicrochip,
  FaShieldHalved,
  FaClipboardList,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfaff] text-[#17132b]">

      <Navbar />

      {/* =========================
          HERO
      ========================= */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-24"
      >

        {/* LEFT */}
        <div>

          {/* Greeting */}
          <p className="mb-7 text-2xl font-bold leading-tight tracking-tight text-purple-600 sm:text-3xl">
            Hello, I&apos;m Glory.
          </p>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.14] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            I&apos;m curious about the space between an idea and the thing
            people eventually use.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            My work moves across interfaces, systems, and the experience in
            between them — exploring how digital products are shaped, built,
            studied, and refined.
          </p>

          {/* =========================
              DESIGN PRINCIPLE
          ========================= */}
          <div className="mt-8 border-l-2 border-purple-300 pl-5">

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple-600">
              A principle I keep close
            </p>

            <p className="mt-2 max-w-xl text-base leading-7 text-slate-700">
              Clarity before decoration. Function with intention. Details that
              earn their place.
            </p>

          </div>

          {/* =========================
              BUTTONS
          ========================= */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            {/* Work button */}
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700"
            >
              <span>Explore My Work</span>
              <ArrowUpRight size={14} />
            </a>

            {/* CV */}
            <a
              href="/cv.pdf"
              className="inline-flex items-center rounded-full border border-purple-200 bg-[#f1e9ff] px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-[#e7dcff] hover:shadow-md"
            >
              View CV
            </a>

          </div>

          {/* Social icons */}
          <div className="mt-8 flex items-center gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/GloryMungathia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-300 bg-[#efe7ff] text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e4d7ff] hover:shadow-md"
            >
              <FaGithub size={21} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/glory-mung-athia-235645401/"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-300 bg-[#efe7ff] text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e4d7ff] hover:shadow-md"
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Email */}
            <a
              href="malito:gloryymungathia@gmail.com"
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-300 bg-[#efe7ff] text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e4d7ff] hover:shadow-md"
            >
              <FaEnvelope size={19} />
            </a>
          </div>
        </div>
        {/* =========================
    RIGHT SIDE - PHOTO
========================= */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Soft purple glow */}
          <div className="absolute right-4 top-10 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />

          <div className="relative w-full max-w-md">

            {/* Decorative outline */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[3rem] border border-purple-200" />

            {/* Main photo frame */}
            <div className="relative overflow-hidden rounded-[3rem] bg-purple-100 p-3 shadow-[0_30px_90px_rgba(109,40,217,0.16)]">
              <div className="relative h-[620px] overflow-hidden rounded-[2.5rem] bg-white">

                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Glory Mung'athia"
                  fill
                  priority
                  className="object-cover object-[18%_18%]"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />

              </div>
            </div>

            {/* Small floating label */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-purple-100 bg-white px-5 py-4 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-500">
                Building with perspective
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
    ABOUT ME
========================= */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        {/* Section heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-purple-600 sm:text-4xl lg:text-5xl">
            About Me
          </h2>

          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            I didn&apos;t start out knowing how technology was built. I discovered
            that I could build it.
          </h3>
        </div>

        {/* About content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* Left visual */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-purple-100" />

            <div className="relative rounded-[2rem] border border-purple-100 bg-[#f4eeff] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple-600">
                The perspective I&apos;m building
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-lg font-semibold">Understand</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Explore how people interact with products and where their needs
                    sit within the experience.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold">Create</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Shape interfaces and build the systems that make digital
                    experiences work.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold">Question</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Look beyond whether something works to consider why it should
                    exist and what could be improved.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold">Refine</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Use testing, feedback, and iteration to make what I build clearer
                    and more dependable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right story */}
          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              When I joined AkiraChix, I was stepping into a world I had barely
              understood before. I had never really stopped to think about how
              websites, applications, or even browser extensions were created.
            </p>

            <p>
              AkiraChix changed that for me. It gave me the opportunity to explore
              technology from different angles and, more importantly, showed me that
              I could actually belong in this field.
            </p>

            <p>
              Since then, I have moved between product design, UX research, frontend
              and backend development, mobile applications, data, IoT, and quality
              assurance. Each area has helped me understand a different part of the
              journey from an idea to something people can actually use.
            </p>

            <p>
              What interests me most is looking beyond the surface of a product — understanding why something
              should exist, how people might experience it, what could go wrong, and what could make it better.
            </p>

            <p>
              I also enjoy working with people. I bring energy into collaborative
              spaces, stay optimistic when things become difficult, and keep working
              when a problem takes longer than expected to solve.
            </p>

            {/* Closing statement */}
            <div className="border-l-2 border-purple-400 pl-6 pt-2">
              <p className="text-xl font-semibold leading-8 text-[#17132b] sm:text-2xl">
                I&apos;m learning to look at technology not as separate pieces, but
                as parts of the same product story.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =========================
    WHAT I BRING TO THE TABLE
========================= */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        {/* Section heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-purple-600 sm:text-4xl lg:text-5xl">
            What I Bring to the Table
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A range of skills I have explored through building, designing,
            experimenting, and working across different areas of technology.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* =========================
        WEB DEVELOPMENT
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaGlobe size={21} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              Web Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Building responsive and interactive web applications.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "JavaScript", "HTML", "CSS", "Next.js"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              <a
                href="https://github.com/GloryMungathia/react-forms"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                React Forms →
              </a>

              <a
                href="https://github.com/GloryMungathia/glorysProjects"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                glorysProjects →
              </a>

              <a
                href="https://my-fan-page-sand.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                My Fan Page ↗
              </a>

              <a
                href="https://github.com/GloryMungathia/my-fan-page"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                Fan Page GitHub →
              </a>

              <a
                href="https://github.com/GloryMungathia/gamesprojects"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                Games Project →
              </a>
            </div>
          </div>

          {/* =========================
        BACKEND DEVELOPMENT
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaServer size={20} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              Backend Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Building APIs, application logic, and database-driven systems.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "APIs"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              <a
                href="https://github.com/GloryMungathia/pharmacy_pos"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                Pharmacy POS →
              </a>

              <a
                href="https://github.com/GloryMungathia/app_repo"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                App Repo →
              </a>
            </div>
          </div>

          {/* =========================
        MOBILE DEVELOPMENT
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaMobileScreenButton size={21} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              Mobile Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Building cross-platform mobile applications.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Flutter", "Dart"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 text-sm font-semibold">
              <a
                href="https://github.com/GloryMungathia/flutter-kicks"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                Flutter Kicks →
              </a>
            </div>
          </div>

          {/* =========================
        PRODUCT DESIGN
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaPenRuler size={21} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              Product Design
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Designing digital products, interfaces, user flows, wireframes, and
              prototypes.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["UI Design", "User Flows", "Wireframes", "Prototyping"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            <div className="mt-6 text-sm font-semibold">
              <a
                href="#"
                className="text-purple-700 transition hover:text-purple-900"
              >
                Product Design Work →
              </a>
            </div>
          </div>

          {/* =========================
        DATA & MACHINE LEARNING
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaChartColumn size={21} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              Data & Machine Learning
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Working with data analysis, visualization, preprocessing, and machine
              learning.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "Pandas", "Data Analysis", "Visualization", "ML"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              <a
                href="https://github.com/GloryMungathia/dsa_projects"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                DSA Projects →
              </a>

              <a
                href="https://github.com/GloryMungathia/training_models"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                Training Models →
              </a>

              <a
                href="https://github.com/GloryMungathia/machine_learnig_model"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                ML Model →
              </a>
            </div>
          </div>

          {/* =========================
        IOT
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaMicrochip size={21} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              IoT
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Exploring embedded systems, sensors, microcontrollers, and connected
              devices.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Embedded Systems", "Sensors", "Microcontrollers"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 text-sm font-semibold">
              <a
                href="https://github.com/GloryMungathia/IOT-projects"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                IoT Work →
              </a>
            </div>
          </div>

          {/* =========================
        QUALITY ASSURANCE
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaShieldHalved size={21} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              Quality Assurance
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Functional testing, test cases, defect identification, and automated
              testing.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Functional Testing", "Test Cases", "Cypress"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              <a
                href="https://github.com/GloryMungathia/QA-AAA"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                QA Examples →
              </a>

              <a
                href="https://github.com/GloryMungathia/automation-test-QA"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 transition hover:text-purple-900"
              >
                Cypress Tests →
              </a>
            </div>
          </div>

          {/* =========================
        PRODUCT MANAGEMENT
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaClipboardList size={21} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              Product Management
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Exploring product requirements, feature prioritization, and product
              documentation.
            </p>

            <div className="mt-5">
              <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700">
                PRD project coming soon
              </span>
            </div>
          </div>

          {/* =========================
        UX RESEARCH
    ========================= */}
          <div className="rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe7ff] text-purple-700">
              <FaMagnifyingGlass size={20} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#17132b]">
              UX Research
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Developing an understanding of user needs, behaviors, and usability.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
    WORK
========================= */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        {/* Section heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-purple-600 sm:text-4xl lg:text-5xl">
            Work
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A selection of personal and collaborative projects I have built across
            different areas of technology.
          </p>
        </div>

        {/* =========================
      PERSONAL PROJECTS
  ========================= */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple-500">
              Personal Projects
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-[#17132b] sm:text-3xl">
              Projects I chose to build beyond the classroom.
            </h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">

            {/* =========================
    CAMPUS BUDGET TRACKER
========================= */}
            <article className="group overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              {/* Campus Budget Tracker Logo */}
              <div className="relative h-48 overflow-hidden bg-[#f1e9ff]">
                <Image
                  src="/images/Budget.png"
                  alt="Campus Budget Tracker logo"
                  fill
                  className="object-contain p-10"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-purple-600">
                  Personal Project
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#17132b]">
                  Campus Budget Tracker
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A personal budgeting platform that helps students track income and
                  expenses, monitor budgets, review financial history, and understand
                  their spending patterns.
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", "JavaScript", "Dashboard"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-5 flex items-center gap-5">
                  <a
                    href="https://campusbudgettracker.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    Live Demo →
                  </a>

                  <a
                    href="https://github.com/GloryMungathia/campus-budget-tracker"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </article>

            {/* =========================
          SHERE CELEBRATION MOMENTS
      ========================= */}
            <article className="group overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Project logo / placeholder */}
              <div className="relative h-48 overflow-hidden bg-[#f7f2ff]">
                <Image
                  src="/images/shere-moments-logo.png"
                  alt="Shere Celebration Moments logo"
                  fill
                  className="object-contain p-10"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-purple-600">
                  Personal Project
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#17132b]">
                  Sheré Celebration Moments
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A web platform created for sharing and preserving celebration
                  moments through a simple digital experience.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-5">
                  <a
                    href="https://shere-celebretion-moments.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    Live Demo →
                  </a>

                  <a
                    href="https://github.com/GloryMungathia/shere-celebration-moments"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </article>

            {/* =========================
          MY FAN PAGE
      ========================= */}
            <article className="group overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* My Fan Page Logo */}
              <div className="relative h-48 overflow-hidden bg-[#f1e9ff]">
                <Image
                  src="/images/Peace1.png"
                  alt="My Fan Page logo"
                  fill
                  className="object-contain p-10"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-purple-600">
                  Personal Project
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#17132b]">
                  My Fun Page
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A personal web experience focused on structured content, visual
                  presentation, and interactive user interfaces.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-5">
                  <a
                    href="https://my-fan-page-sand.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    Live Demo →
                  </a>

                  <a
                    href="https://github.com/GloryMungathia/my-fan-page"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </article>

            {/* =========================
    PAMODZI GROUP PROJECT
========================= */}
            <article className="group overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              {/* Pamodzi Logo */}
              <div className="relative h-48 overflow-hidden bg-[#f7f2ff]">
                <Image
                  src="/images/pamodzi_logo.png"
                  alt="Pamodzi logo"
                  fill
                  className="object-contain p-10"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-purple-600">
                  Group Project
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#17132b]">
                  Pamodzi
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A group-built digital platform designed to connect commercial buyers
                  with agricultural cooperatives, supporting produce sourcing, demand
                  campaigns, farmer listings, quality verification, and coordinated
                  pickup.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Web Development", "Product Platform", "Dashboard"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-5">
                  <a
                    href="https://pamodzi-five.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    Informational Website →
                  </a>

                  <a
                    href="https://phoenixdashboard.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                  >
                    Dashboard →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
          </section>

      {/* =========================
          LET'S CONNECT
      ========================= */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="overflow-hidden rounded-[2.5rem] bg-[#efe7ff]">
          <div className="grid gap-10 px-8 py-12 sm:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-16">

            {/* Left side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
                Let&apos;s Connect
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#17132b] sm:text-5xl">
                Have a project, an opportunity, or an idea?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                I&apos;d love to hear from you. Whether you&apos;re interested
                in my work, would like to collaborate, or simply want to start
                a conversation, feel free to reach out.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {/* Email */}
                <a
                  href="mailto:gloryymungathia@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700"
                >
                  Send Me an Email
                  <FaEnvelope size={15} />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/GloryMungathia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 transition hover:-translate-y-0.5 hover:bg-purple-50"
                >
                  GitHub
                  <FaGithub size={15} />
                </a>

              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center lg:justify-end">
              <div className="w-full max-w-sm rounded-[2rem] border border-purple-200 bg-white p-7 shadow-sm">

                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple-500">
                  Find me online
                </p>

                <div className="mt-6 space-y-4">

                  {/* GitHub */}
                  <a
                    href="https://github.com/GloryMungathia"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-[#f7f2ff]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efe7ff] text-purple-700">
                      <FaGithub size={19} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#17132b]">
                        GitHub
                      </p>
                      <p className="text-sm text-slate-500">
                        View my projects and code
                      </p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/glory-mung-athia-235645401/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-[#f7f2ff]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efe7ff] text-purple-700">
                      <FaLinkedinIn size={18} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#17132b]">
                        LinkedIn
                      </p>
                      <p className="text-sm text-slate-500">
                        Connect with me professionally
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:gloryymungathia@gmail.com"
                    className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-[#f7f2ff]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#efe7ff] text-purple-700">
                      <FaEnvelope size={18} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#17132b]">
                        Email
                      </p>
                      <p className="text-sm text-slate-500">
                        Send me a message
                      </p>
                    </div>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="border-t border-purple-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} Glory Mung&apos;athia. All rights reserved.
          </p>

          <p>
            Designed and built with intention.
          </p>
        </div>
      </footer>
    </main>
  );
}