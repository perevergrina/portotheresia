'use client';

import { ArrowDownRight, ArrowUpRight, BookOpen, Download, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type Language = 'id' | 'en';
type Localized = Record<Language, string>;
type Category = 'social' | 'research' | 'community';

type Project = {
  title: string;
  client: Localized;
  year: string;
  category: Category;
  summary: Localized;
  result: Localized;
  images: string[];
  layout: 'triptych' | 'portrait-duo' | 'landscape-stack' | 'independent-duo';
  href?: string;
};

const projects: Project[] = [
  {
    title: 'Radjawali SCC',
    client: { en: 'Social media content', id: 'Konten media sosial' },
    year: '2025', category: 'social',
    summary: { en: 'Cultural storytelling translated into visual posts and captions for Instagram.', id: 'Cerita budaya yang diterjemahkan menjadi konten visual dan caption untuk Instagram.' },
    result: { en: 'Copywriting · Visual design · Content research', id: 'Copywriting · Desain visual · Riset konten' },
    images: ['/portfolio/radjawali-ketoprak.webp', '/portfolio/radjawali-little-netherland.webp', '/portfolio/radjawali-travel-copy.webp'],
    layout: 'triptych', href: 'https://www.instagram.com/radjawali.scc',
  },
  {
    title: 'Bunk Bed & Breakfast',
    client: { en: 'Social media management', id: 'Manajemen media sosial' },
    year: '2026', category: 'social',
    summary: { en: 'A lively content system for an all-women hostel, built for Instagram and TikTok.', id: 'Sistem konten yang dinamis untuk hostel khusus perempuan di Instagram dan TikTok.' },
    result: { en: '15 reels · 20+ feed designs · 30 story designs', id: '15 reels · 20+ desain feed · 30 desain story' },
    images: ['/portfolio/bunk-junescape.webp', '/portfolio/bunk-jogja-copy.webp', '/portfolio/bunk-islamic-new-year.webp'],
    layout: 'triptych',
  },
  {
    title: 'Travelxism',
    client: { en: 'Junior researcher & consultant', id: 'Peneliti junior & konsultan' },
    year: '2025', category: 'research',
    summary: { en: 'Research, policy brief, and presentation design for a sustainable tourism client.', id: 'Riset, policy brief, dan desain presentasi untuk klien pariwisata berkelanjutan.' },
    result: { en: 'Client report · Policy brief · Presentation', id: 'Laporan klien · Policy brief · Presentasi' },
    images: ['/portfolio/travelxism-fieldwork.webp', '/portfolio/travelxism-team.webp'],
    layout: 'portrait-duo',
  },
  {
    title: 'Teman Kartini & Realino',
    client: { en: 'Community programs', id: 'Program komunitas' },
    year: '2025', category: 'community',
    summary: { en: 'Social programs centered on literacy, sign language, and learning with local children.', id: 'Program sosial yang berfokus pada literasi, bahasa isyarat, dan pembelajaran bersama anak-anak setempat.' },
    result: { en: 'Program planning · Field research · Facilitation', id: 'Perencanaan program · Riset lapangan · Fasilitasi' },
    images: ['/portfolio/teman-kartini.webp', '/portfolio/realino-learning.webp'],
    layout: 'landscape-stack',
  },
  {
    title: 'Independent Work',
    client: { en: 'Creative explorations', id: 'Eksplorasi kreatif' },
    year: '2024–25', category: 'social',
    summary: { en: 'Personal work spanning campaign posters, creative proposals, short-form video, and illustration.', id: 'Karya personal yang mencakup poster kampanye, proposal kreatif, video pendek, dan ilustrasi.' },
    result: { en: 'Art direction · Video editing · Graphic design', id: 'Art direction · Penyuntingan video · Desain grafis' },
    images: ['/portfolio/self-project-topeng.webp', '/portfolio/self-project-roni.webp'],
    layout: 'independent-duo', href: 'https://drive.google.com/drive/folders/1-4etBN1yr79wJHf9oLXBTJeft7ysj_eb?usp=drive_link',
  },
];

const experience = [
  {
    period: { en: 'Jul 2025 — Present', id: 'Jul 2025 — Sekarang' }, role: { en: 'Social Media Specialist / Admin', id: 'Spesialis Media Sosial / Admin' }, company: 'Project Satu Creative',
    detail: { en: 'Managing daily content strategy for 5 Instagram and TikTok accounts, analyzing 8 accounts, and building relationships with 15+ nano influencers.', id: 'Mengelola strategi konten harian untuk 5 akun Instagram dan TikTok, menganalisis 8 akun, serta membangun relasi dengan 15+ nano influencer.' },
  },
  {
    period: { en: 'May — Jun 2026', id: 'Mei — Jun 2026' }, role: { en: 'Social Media Specialist', id: 'Spesialis Media Sosial' }, company: 'Bunk Bed & Breakfast',
    detail: { en: 'Planned daily content, produced monthly shoots, edited 15 reels and 20+ feed designs, and reviewed weekly and monthly performance.', id: 'Merencanakan konten harian, mengelola produksi bulanan, menyunting 15 reels dan 20+ desain feed, serta mengevaluasi performa mingguan dan bulanan.' },
  },
  {
    period: { en: 'Oct — Dec 2025', id: 'Okt — Des 2025' }, role: { en: 'Junior Researcher & Consultant Intern', id: 'Magang Peneliti Junior & Konsultan' }, company: 'Travelxism',
    detail: { en: 'Co-created a client report and policy brief on upskilling ride-hailing drivers, then shaped the presentation for delivery.', id: 'Menyusun laporan klien dan policy brief tentang peningkatan keterampilan pengemudi transportasi daring, lalu merancang materi presentasinya.' },
  },
  {
    period: { en: 'Mar — Jun 2025', id: 'Mar — Jun 2025' }, role: { en: 'Social Media Specialist Intern', id: 'Magang Spesialis Media Sosial' }, company: 'Project Satu Creative',
    detail: { en: 'Produced copy and design titles for 5 clients and supported consistent publishing that contributed to organic audience growth.', id: 'Menghasilkan copy dan judul desain untuk 5 klien serta mendukung publikasi konsisten yang berkontribusi pada pertumbuhan audiens organik.' },
  },
  {
    period: { en: 'Mar 2024 — Mar 2025', id: 'Mar 2024 — Mar 2025' }, role: { en: 'Live Commerce Host', id: 'Host Live Commerce' }, company: 'Team Live',
    detail: { en: 'Presented products on TikTok and Shopee for four-hour live sessions while working toward a weekly sales target.', id: 'Mempresentasikan produk melalui sesi live TikTok dan Shopee selama empat jam serta bekerja untuk mencapai target penjualan mingguan.' },
  },
];

const copy = {
  en: {
    mainNav: 'Main navigation', home: 'Theresia Verani home', work: 'Work', experience: 'Experience', about: 'About', publication: 'Publication', talk: 'Let’s talk', language: 'Choose language',
    eyebrow: 'Social Media · Marketing Communication', heroLead: 'Ideas that', heroAccent: 'connect.', heroSecond: 'Stories that move.',
    intro: 'I’m Theresia Verani Peregrina — a communication graduate turning research, insight, and creative thinking into content people want to see and share.',
    explore: 'Explore my work', download: 'Download CV', orbit: 'Social media · Creative strategy ·', available: 'Available for opportunities', portrait: 'Portrait of Theresia Verani Peregrina',
    highlights: 'Career highlights', accounts: 'social accounts analyzed', reels: 'reels produced', influencers: 'influencer relationships', gpa: 'GPA / 4.00',
    selected: '02 / Selected work', workTitle: 'Strategy with a', workAccent: 'human pulse.', workIntro: 'A selection of social content, research, and community projects — each grounded in clarity, empathy, and measurable action.',
    filterLabel: 'Filter projects', filters: { all: 'All', social: 'Social Media', research: 'Research', community: 'Community' }, openProject: 'Open', sample: 'project sample',
    experienceKicker: '03 / Experience', experienceTitle: 'Learning by', experienceAccent: 'doing.', experienceIntro: 'From fast-moving social feeds to client research and live commerce — I bring structure, curiosity, and care to every brief.',
    aboutKicker: '04 / About', aboutLead: 'A detail-oriented communicator who believes the best content begins with', aboutAccent: 'listening.', based: 'Based in',
    aboutOne: 'I graduated from Universitas Negeri Yogyakarta with a Bachelor’s degree in Communication Science and a 3.83 / 4.00 GPA.',
    aboutTwo: 'My work sits at the intersection of social media, marketing communication, public relations, and research. I enjoy finding the clear idea inside a complex brief — then turning it into work that feels relevant and easy to understand.',
    creative: 'View more creative work', capabilities: 'Capabilities', education: 'Education', certification: 'Certification', degree: 'B.A. Communication Science · 2022–2026 · GPA 3.83 / 4.00',
    publicationKicker: '05 / Publication', publicationTitle: 'Ideas shaped by', publicationAccent: 'research.', publicationLabel: 'Scientific journal article',
    publicationMeta: 'AGUNA: Jurnal Ilmu Komunikasi · Vol. 7 No. 2 · 2026 · pp. 25–36', publicationAction: 'Read the article',
    contactKicker: '06 / Contact', contactTitle: 'Have a story', contactSecond: 'worth telling?', collaborate: 'Let’s work together', whatsapp: 'Chat on WhatsApp', backTop: 'Back to top ↑',
  },
  id: {
    mainNav: 'Navigasi utama', home: 'Beranda Theresia Verani', work: 'Karya', experience: 'Pengalaman', about: 'Tentang', publication: 'Publikasi', talk: 'Hubungi saya', language: 'Pilih bahasa',
    eyebrow: 'Media Sosial · Komunikasi Pemasaran', heroLead: 'Ide yang', heroAccent: 'menghubungkan.', heroSecond: 'Cerita yang menggerakkan.',
    intro: 'Saya Theresia Verani Peregrina — lulusan Ilmu Komunikasi yang mengolah riset, insight, dan pemikiran kreatif menjadi konten yang menarik untuk dilihat dan dibagikan.',
    explore: 'Lihat karya saya', download: 'Unduh CV', orbit: 'Media sosial · Strategi kreatif ·', available: 'Terbuka untuk peluang baru', portrait: 'Potret Theresia Verani Peregrina',
    highlights: 'Pencapaian karier', accounts: 'akun media sosial dianalisis', reels: 'reels diproduksi', influencers: 'relasi influencer', gpa: 'IPK / 4.00',
    selected: '02 / Karya pilihan', workTitle: 'Strategi dengan', workAccent: 'sentuhan manusia.', workIntro: 'Pilihan karya media sosial, riset, dan komunitas — semuanya dibangun dengan kejelasan, empati, dan tindakan yang terukur.',
    filterLabel: 'Filter karya', filters: { all: 'Semua', social: 'Media Sosial', research: 'Riset', community: 'Komunitas' }, openProject: 'Buka', sample: 'sampel proyek',
    experienceKicker: '03 / Pengalaman', experienceTitle: 'Belajar dengan', experienceAccent: 'melakukan.', experienceIntro: 'Dari media sosial yang bergerak cepat hingga riset klien dan live commerce — saya membawa struktur, rasa ingin tahu, dan ketelitian dalam setiap brief.',
    aboutKicker: '04 / Tentang', aboutLead: 'Komunikator yang teliti dan percaya bahwa konten terbaik berawal dari', aboutAccent: 'mendengarkan.', based: 'Berdomisili di',
    aboutOne: 'Saya lulus dari Universitas Negeri Yogyakarta dengan gelar Sarjana Ilmu Komunikasi dan IPK 3,83 / 4,00.',
    aboutTwo: 'Karya saya berada di persimpangan media sosial, komunikasi pemasaran, hubungan masyarakat, dan riset. Saya senang menemukan gagasan yang jernih di dalam brief yang kompleks — lalu mengubahnya menjadi karya yang relevan dan mudah dipahami.',
    creative: 'Lihat karya kreatif lainnya', capabilities: 'Keahlian', education: 'Pendidikan', certification: 'Sertifikasi', degree: 'S1 Ilmu Komunikasi · 2022–2026 · IPK 3,83 / 4,00',
    publicationKicker: '05 / Publikasi', publicationTitle: 'Gagasan yang lahir dari', publicationAccent: 'riset.', publicationLabel: 'Artikel jurnal ilmiah',
    publicationMeta: 'AGUNA: Jurnal Ilmu Komunikasi · Vol. 7 No. 2 · 2026 · hlm. 25–36', publicationAction: 'Baca artikel',
    contactKicker: '06 / Kontak', contactTitle: 'Punya cerita yang', contactSecond: 'layak disampaikan?', collaborate: 'Mari berkolaborasi', whatsapp: 'Hubungi via WhatsApp', backTop: 'Kembali ke atas ↑',
  },
} as const;

const skills = {
  en: ['Social media strategy', 'Content planning', 'Copywriting', 'Performance analysis', 'KOL relations', 'Research & reporting', 'Canva', 'CapCut', 'Microsoft Excel', 'Public relations'],
  id: ['Strategi media sosial', 'Perencanaan konten', 'Copywriting', 'Analisis performa', 'Relasi KOL', 'Riset & pelaporan', 'Canva', 'CapCut', 'Microsoft Excel', 'Hubungan masyarakat'],
};

const filterKeys = ['all', 'social', 'research', 'community'] as const;
type Filter = (typeof filterKeys)[number];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [language, setLanguage] = useState<Language>('en');
  const text = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language');
    if (savedLanguage === 'id' || savedLanguage === 'en') setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);

  const visibleProjects = useMemo(() => activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);

  return (
    <main>
      <nav className="site-nav" aria-label={text.mainNav}>
        <a className="wordmark" href="#top" aria-label={text.home}>TV<span>P.</span></a>
        <div className="nav-links">
          <a href="#work">{text.work}</a><a href="#experience">{text.experience}</a><a href="#about">{text.about}</a><a href="#publication">{text.publication}</a>
        </div>
        <div className="nav-actions">
          <div className="language-switcher" role="group" aria-label={text.language}>
            {(['id', 'en'] as const).map((option) => <button key={option} type="button" className={language === option ? 'active' : ''} aria-pressed={language === option} onClick={() => setLanguage(option)}>{option.toUpperCase()}</button>)}
          </div>
          <a className="nav-contact" href="#contact">{text.talk} <ArrowUpRight aria-hidden="true" size={16} /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.heroLead} <em>{text.heroAccent}</em><br /> {text.heroSecond}</h1>
          <p className="hero-intro">{text.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">{text.explore} <ArrowDownRight aria-hidden="true" size={18} /></a>
            <a className="button button-ghost" href="/downloads/CV-Theresia-Verani-2026.pdf" download>{text.download} <Download aria-hidden="true" size={17} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label={text.portrait}>
          <span className="hero-no" aria-hidden="true">01</span>
          <div className="portrait-frame"><span className="orbit-copy">{text.orbit}</span><img src="/portfolio/vera-portrait.webp" alt="Theresia Verani Peregrina" /></div>
          <div className="availability"><span className="status-dot" aria-hidden="true" />{text.available}</div>
          <p className="location"><MapPin aria-hidden="true" size={15} /> Yogyakarta, Indonesia</p>
        </div>
      </section>

      <section className="impact-strip" aria-label={text.highlights}>
        <div><strong>8</strong><span>{text.accounts}</span></div><div><strong>15</strong><span>{text.reels}</span></div><div><strong>15+</strong><span>{text.influencers}</span></div><div><strong>3.83</strong><span>{text.gpa}</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><div><p className="section-kicker">{text.selected}</p><h2>{text.workTitle}<br /><em>{text.workAccent}</em></h2></div><p>{text.workIntro}</p></div>
        <div className="filters" role="group" aria-label={text.filterLabel}>
          {filterKeys.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{text.filters[filter]}</button>)}
        </div>
        <div className="project-list" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className={`project-gallery gallery-${project.layout}`}>{project.images.map((image, imageIndex) => <img src={image} alt={`${project.title} ${text.sample} ${imageIndex + 1}`} key={image} loading={index > 0 ? 'lazy' : 'eager'} />)}</div>
              <div className="project-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><p>{project.client[language]} · {project.year}</p><h3>{project.title}</h3><p className="project-summary">{project.summary[language]}</p><p className="project-result">{project.result[language]}</p></div>
                {project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${text.openProject} ${project.title}`}><ArrowUpRight aria-hidden="true" /></a> : <span className="project-mark" aria-hidden="true">↗</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-title"><p className="section-kicker light">{text.experienceKicker}</p><h2>{text.experienceTitle}<br /><em>{text.experienceAccent}</em></h2><p>{text.experienceIntro}</p></div>
        <div className="timeline">
          {experience.map((item, index) => <article className="timeline-row" key={`${item.company}-${item.period.en}`}><span className="timeline-index">{String(index + 1).padStart(2, '0')}</span><time>{item.period[language]}</time><div><h3>{item.role[language]}</h3><p className="company">{item.company}</p><p>{item.detail[language]}</p></div></article>)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-statement"><p className="section-kicker">{text.aboutKicker}</p><p className="big-copy">{text.aboutLead} <em>{text.aboutAccent}</em></p></div>
        <div className="about-grid">
          <div className="about-card about-card-accent"><span>{text.based}</span><strong>Yogyakarta,<br />Indonesia</strong><MapPin aria-hidden="true" /></div>
          <div className="about-body"><p>{text.aboutOne}</p><p>{text.aboutTwo}</p><a href="https://drive.google.com/drive/folders/1-4etBN1yr79wJHf9oLXBTJeft7ysj_eb?usp=drive_link" target="_blank" rel="noreferrer">{text.creative} <ArrowUpRight aria-hidden="true" size={17} /></a></div>
          <div className="skills-panel"><p>{text.capabilities}</p><div className="skill-list">{skills[language].map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        </div>
        <div className="education-row"><div><span>{text.education}</span><strong>Universitas Negeri Yogyakarta</strong><p>{text.degree}</p></div><div><span>{text.certification}</span><strong>Digital Marketing Fundamental</strong><p>Habiskerja · 2024</p></div></div>
      </section>

      <section className="publication-section" id="publication">
        <div className="publication-heading"><p className="section-kicker">{text.publicationKicker}</p><h2>{text.publicationTitle}<br /><em>{text.publicationAccent}</em></h2></div>
        <article className="publication-card">
          <BookOpen aria-hidden="true" />
          <div><p className="publication-label">{text.publicationLabel}</p><h3>Strategi Komunikasi Partisipatif Sukarelawan pada Program Pemberdayaan Masyarakat di Perkampungan Sosial Pingit Yogyakarta</h3><p className="publication-authors">Theresia Verani Peregrina · Chatia Hastasari</p><p className="publication-meta">{text.publicationMeta}</p></div>
          <a className="button publication-button" href="https://ejournal.amikompurwokerto.ac.id/index.php/AGUNA/article/view/3443" target="_blank" rel="noreferrer">{text.publicationAction} <ArrowUpRight aria-hidden="true" size={18} /></a>
        </article>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker light">{text.contactKicker}</p>
        <div className="contact-heading"><h2>{text.contactTitle}<br />{text.contactSecond}</h2><a className="contact-orbit" href="mailto:perevergrina@gmail.com" aria-label="Email Theresia"><ArrowUpRight aria-hidden="true" /><span>{text.collaborate}</span></a></div>
        <div className="contact-links"><a href="mailto:perevergrina@gmail.com"><Mail aria-hidden="true" />perevergrina@gmail.com</a><a href="https://wa.me/+6287835762712" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />{text.whatsapp}</a><a href="https://www.linkedin.com/in/theresiaverani" target="_blank" rel="noreferrer"><span className="linkedin-glyph" aria-hidden="true">in</span>LinkedIn</a></div>
      </section>

      <footer><a className="wordmark footer-mark" href="#top">TV<span>P.</span></a><p>Theresia Verani Peregrina · Portfolio 2026</p><a href="#top">{text.backTop}</a></footer>
    </main>
  );
}
