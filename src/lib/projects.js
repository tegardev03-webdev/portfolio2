// Project portfolio data — bilingual descriptions
// Images expected at /portfolio/projectN.png in public folder.
// Fallback Unsplash image is provided per project until owner uploads real screenshots.

export const projects = [
  {
    id: "manjack-pos",
    img: "/portfolio/portfolio1.png",
    fallback:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
    cat: { id: "Advanced F&B POS System", en: "Advanced F&B POS System" },
    title: "Manjack Coffee House",
    desc: {
      id: "Sistem POS untuk mengelola transaksi, order, dan inventory cafe dengan fitur laporan dan monitoring secara real-time.",
      en: "A POS system to manage transactions, orders and cafe inventory with real-time reporting and monitoring.",
    },
    tags: ["PHP", "MVC", "MySQL", "KSWEB", "Real-time"],
    link: null,
    feature: true,
  },
  {
    id: "bahari-wms",
    img: "/portfolio/portfolio7.png",
    fallback:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
    cat: { id: "Smart Inventory & WMS", en: "Smart Inventory & WMS" },
    title: "PT. Bahari Global Machinery",
    desc: {
      id: "Sistem WMS dengan ABC analysis, min-max stock control, dan forecasting untuk optimasi inventory secara real-time.",
      en: "A WMS with ABC analysis, min-max stock control and forecasting for real-time inventory optimization.",
    },
    tags: ["Python", "NoSQL", "Forecasting", "ABC Analysis", "MIN-MAX"],
    link: null,
    feature: true,
  },
  {
    id: "golden-erp",
    img: "/portfolio/portfolio3.png",
    fallback:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    cat: { id: "ERP & Analytics Dashboard", en: "ERP & Analytics Dashboard" },
    title: "PT. Golden Hitech Indonesia",
    desc: {
      id: "Sistem terintegrasi untuk mengelola inventory, produksi, dan pembelian secara real-time, dilengkapi dashboard analytics untuk monitoring KPI dan pengambilan keputusan yang lebih cepat dan akurat.",
      en: "An integrated platform to manage inventory, production and purchasing in real time, with an analytics dashboard for KPI monitoring and faster, more accurate decisions.",
    },
    tags: ["PHP/OOP", "MVC" ,"MySQL", "Analytics", "Multi-Role"],
    link: null,
    feature: true,
  },
  {
    id: "siakad",
    img: "/portfolio/portfolio5.png",
    fallback:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    cat: { id: "School Information System", en: "School Information System" },
    title: "Sistem Informasi Akademik Sekolah",
    desc: {
      id: "Platform terintegrasi untuk mengelola data siswa, nilai, absensi, jadwal, dan aktivitas akademik dengan multi-role (admin, guru, siswa, dan kepala sekolah).",
      en: "An integrated platform to manage student data, grades, attendance, schedules and academic activities with multi-role access (admin, teacher, student, principal).",
    },
    tags: ["PHP/OOP", "MySQL", "Multi-role", "Dashboard"],
    link: "https://siakadd.free.nf/",
    feature: false,
  },
  {
    id: "rania",
    img: "/portfolio/portfolio6.png",
    fallback:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80",
    cat: {
      id: "Landing Page Rania Garment",
      en: "Landing Page — Rania Garment",
    },
    title: "Rania Garment",
    desc: {
      id: "Landing page untuk brand fashion Rania Garment, menampilkan katalog produk, testimoni pelanggan, dan integrasi WhatsApp untuk memudahkan calon pembeli menghubungi langsung.",
      en: "A landing page for fashion brand Rania Garment featuring a product catalog, customer testimonials and WhatsApp integration for instant inquiries.",
    },
    tags: ["HTML", "Tailwind", "JavaScript", "WhatsApp API"],
    link: "https://raniagarment.com/",
    feature: false,
  },
  {
    id: "barbershop",
    img: "/portfolio/portfolio8.png",
    fallback:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80",
    cat: { id: "Internal Management System", en: "Internal Management System" },
    title: "Barber Shop Reservation & Management System",
    desc: {
      id: "Sistem manajemen operasional barber shop yang dirancang untuk efisiensi antrean. Fitur utama mencakup penjadwalan slot waktu real-time, manajemen data pelanggan, dan dasbor admin untuk memantau performa layanan harian.",
      en: "An operational management system for a barber shop designed for queue efficiency. Core features include real-time time-slot scheduling, customer data management and an admin dashboard for daily performance tracking.",
    },
    tags: ["Laravel", "MySQL", "Booking", "Dashboard"],
    link: null,
    feature: false,
  },
  {
    id: "manjack-brand",
    img: "/portfolio/portfolio9.png",
    fallback:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    cat: { id: "Brand Identity & Landing Page", en: "Brand Identity & Landing Page" },
    title: "Manjack Coffee House — Brand",
    desc: {
      id: "Landing page premium yang menampilkan identitas visual dan atmosfer unik Manjack Coffee House, dirancang dengan fokus pada storytelling brand dan navigasi menu yang intuitif.",
      en: "A premium landing page showcasing the unique visual identity and atmosphere of Manjack Coffee House, designed around brand storytelling and intuitive menu navigation.",
    },
    tags: ["HTML", "Tailwind", "JavaScript", "Branding"],
    link: null,
    feature: false,
  },
];

export const techStack = [
  "HTML",
  "CSS Vanilla",
  "JavaScript",
  "PHP",
  "OOP",
  "Laravel",
  "Tailwind CSS",
  "MySQL",
  "REST API",
  "Git",
  "stich",
];
