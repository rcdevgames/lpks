# LPKS — PT. Logika Programmer Kode Solusi

Company profile website untuk **PT. Logika Programmer Kode Solusi (LPKS)** — perusahaan IT yang berfokus pada pengembangan software, konsultasi teknologi, dan solusi cloud.

**CEO:** Nurdontol Herlambang  
**Team:** Sandi (Lead Developer), Raynard (Developer Engineer), Rian (Developer Engineer), Eko (Business Analyst), Wawaw (DevOps Engineer)

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Geist Font**

## Features

- Single page scroll design with smooth transitions
- Modern night theme with glassmorphism cards
- Fully responsive mobile-first layout
- Sections: Hero, About, Services, Portfolio, Team, Testimonials, Contact
- Company logo and favicon embedded

## Projects Showcase

| Project | Description |
|---------|-------------|
| Billing PDAM | Sistem penagihan dan pembayaran rekening air minum PDAM, web-based, real-time |
| Smart Water Meter PDAM | Sistem pembacaan meter air digital berbasis IoT, monitoring konsumsi otomatis |
| Kepegawaian PDAM | Sistem manajemen kepegawaian: absensi, cuti, penilaian kinerja, penggajian |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy ke VPS atau platform seperti Vercel/Netlify.

## Files Structure

```
app/
├── layout.js          # Root layout + metadata (icon/favicon)
├── globals.css        # Dark theme, glassmorphism styles, animations
└── page.js            # Main page component – all 8 sections in one file
public/
├── lpks/logo.png      # LPKS company logo
└── favicon.png        # Favicon for the site