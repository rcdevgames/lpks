"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: "🌐", title: "Web Development", desc: "Aplikasi web modern, performa tinggi, SEO-friendly. React, Next.js, Node.js." },
  { icon: "📱", title: "Mobile App", desc: "Aplikasi iOS & Android dengan React Native atau Flutter. Satu kode, dua platform." },
  { icon: "🎨", title: "UI/UX Design", desc: "Desain antarmuka yang intuitif dan engaging. Riset user, wireframe, prototyping." },
  { icon: "☁️", title: "DevOps & Cloud", desc: "Deployment, CI/CD, containerization, monitoring. AWS, Docker, Kubernetes." },
];

const portfolioItems = [
  { title: "Billing PDAM", desc: "Sistem penagihan dan pembayaran rekening air minum PDAM. Web-based, real-time, multi-cabang.", tags: ["Next.js", "PostgreSQL", "Payment"] },
  { title: "Smart Water Meter PDAM", desc: "Sistem pembacaan meter air digital berbasis IoT. Monitoring konsumsi air secara otomatis.", tags: ["IoT", "React", "Node.js"] },
  { title: "Kepegawaian PDAM", desc: "Sistem manajemen kepegawaian PDAM: absensi, cuti, penilaian kinerja, dan penggajian.", tags: ["Next.js", "Prisma", "Report"] },
];

const teamMembers = [
  { name: "Nurdian Herlambang", role: "CEO", initials: "NH", highlight: true },
  { name: "Sandi", role: "Lead Developer", initials: "SA" },
  { name: "Raynard", role: "Developer Engineer", initials: "RA" },
  { name: "Rian", role: "Developer Engineer", initials: "RI" },
  { name: "Eko", role: "Business Analyst", initials: "EK" },
  { name: "Wawaw", role: "DevOps Engineer", initials: "WA" },
];

const testimonials = [
  { quote: "LPKS membangun platform billing kami dalam waktu singkat. Hasilnya solid dan mudah digunakan. Sangat direkomendasikan!", name: "Andi Pratama", company: "CEO, BillingWAW" },
  { quote: "Tim LPKS sangat responsif dan memahami kebutuhan teknis kami. Dukungan DevOps mereka luar biasa.", name: "Rina Wijaya", company: "CTO, 9Router" },
  { quote: "Desain UI/UX yang mereka buat benar-benar meningkatkan user engagement aplikasi kami.", name: "Doni Kusuma", company: "Product Manager, EduTech" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim! (Demo — belum terhubung ke backend)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen text-zinc-200 font-[family-name:var(--font-geist-sans)]">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/lpks/logo.png" alt="LPKS" className="h-10 w-auto object-contain" />
          </a>

          {/* desktop menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-zinc-400 hover:text-zinc-100 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* mobile hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-zinc-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass border-t border-white/5">
            <div className="flex flex-col px-6 py-3 gap-3 text-sm font-medium">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center fade-up">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">Teknologi yang Solusi</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient">PT. LOGIKA PROGRAMMER</span>
            <br />
            <span>KODE SOLUSI</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Membangun Masa Digital yang Lebih Cerdas. Kami hadir untuk membantu bisnis Anda bertransformasi melalui teknologi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full glass text-zinc-300 font-semibold text-sm hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">Tentang LPKS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 fade-up">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Visi</h3>
              <p className="text-zinc-400 leading-relaxed">
                Menjadi perusahaan teknologi terdepan di Indonesia yang menciptakan solusi digital inovatif, scalable, dan berdampak nyata bagi bisnis dan masyarakat.
              </p>
              <h3 className="text-xl font-semibold text-cyan-400 mt-8 mb-4">Misi</h3>
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  Menyediakan layanan pengembangan software berkualitas tinggi dengan standar internasional.
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  Membangun ekosistem digital yang memberdayakan UMKM dan startup Indonesia.
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  Mengembangkan talenta teknologi lokal melalui program mentoring dan kolaborasi.
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  Menjaga integritas dan transparansi dalam setiap proyek yang kami kerjakan.
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 fade-up">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Profil Perusahaan</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                <strong className="text-zinc-200">PT. Logika Programmer Kode Solusi (LPKS)</strong> adalah perusahaan IT
                yang berfokus pada pengembangan software, konsultasi teknologi, dan solusi cloud. Didirikan dengan semangat
                untuk menghadirkan <em>&quot;teknologi yang solusi&quot;</em> — kami percaya setiap tantangan bisnis
                memiliki jawaban dalam bentuk kode yang tepat.
              </p>
              <div className="space-y-3 text-sm text-zinc-400">
                <div className="flex gap-3">
                  <span className="text-cyan-400">📍</span>
                  <span>Jl. Teknologi Raya No. 42, Jakarta Selatan, DKI Jakarta 12950</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400">✉️</span>
                  <span>hello@lpks.co.id</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400">📞</span>
                  <span>+62 21 1234 5678</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">Layanan Kami</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-6 fade-up">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">Portfolio</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioItems.map((p, i) => (
              <div key={i} className="glass rounded-2xl p-6 fade-up group">
                <div className="w-full h-40 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-white/5 mb-4 flex items-center justify-center">
                  <span className="text-4xl opacity-20">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">Tim Kami</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((m, i) => (
              <div key={i} className={`glass rounded-2xl p-6 text-center fade-up ${m.highlight ? "ring-1 ring-cyan-500/30" : ""}`}>
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold ${
                  m.highlight
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white"
                    : "bg-white/5 text-zinc-400"
                }`}>
                  {m.initials}
                </div>
                <h3 className="font-semibold text-zinc-100">{m.name}</h3>
                <p className="text-zinc-500 text-sm mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section id="testimonial" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">Apa Kata Mereka</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6 fade-up flex flex-col">
                <div className="text-cyan-400 text-4xl mb-4">&ldquo;</div>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-semibold text-zinc-200 text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">Hubungi Kami</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 fade-up space-y-5">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Nama</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Subjek</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Subjek pesan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Pesan</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  placeholder="Tulis pesan Anda..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Kirim Pesan
              </button>
            </form>
            <div className="glass rounded-2xl p-8 fade-up flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Info Kontak</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Punya pertanyaan atau ingin berdiskusi tentang proyek? Hubungi kami langsung melalui kontak di bawah ini.
                </p>
              </div>
              <div className="space-y-4 text-sm text-zinc-400">
                <div className="flex gap-3 items-center">
                  <span className="text-cyan-400 text-lg">📍</span>
                  <span>Jl. Teknologi Raya No. 42, Jakarta Selatan, DKI Jakarta 12950</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-cyan-400 text-lg">✉️</span>
                  <span>hello@lpks.co.id</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-cyan-400 text-lg">📞</span>
                  <span>+62 21 1234 5678</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                {["LinkedIn", "GitHub", "Instagram"].map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full glass text-zinc-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} PT. Logika Programmer Kode Solusi. All rights reserved.</p>
          <p>
            Made with ❤️ in Jakarta
          </p>
        </div>
      </footer>
    </div>
  );
}