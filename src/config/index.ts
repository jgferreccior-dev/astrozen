import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "José Gerardo Ferreccio Riega — Digital Media & SEO Specialist",
  author: "José Gerardo Ferreccio Riega",
  description:
    "Portfolio profesional de José Gerardo Ferreccio Riega, Digital Media & SEO Specialist especializado en estrategia digital, SEO, contenidos, Social Media, Performance Marketing y analítica.",
  lang: "es",
  siteLogo: "/favicon.svg",
  navLinks: [
    { text: "Proyectos", href: "#projects" },
    { text: "Experiencia", href: "#experience" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jose-ferreccio-4211901b5/" },
    { text: "GitHub", href: "https://github.com/jgferreccior-dev" },
  ],
  socialImage: "/zen-og.png",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "José Gerardo Ferreccio Riega",
    specialty: "Digital Media & SEO Specialist",
    summary: "Profesional de Marketing, Comunicación y Medios Digitales especializado en estrategia digital, SEO, Social Media, Content Strategy, Performance Marketing y analítica.",
    email: "jgferreccior@gmail.com",
  },
  experience: [
    {
      company: "CICAJ — Pontificia Universidad Católica del Perú (PUCP)",
      position: "Community Manager",
      startDate: "Enero 2022",
      endDate: "Actualidad",
      summary: [
        "Incrementé el alcance de la comunidad digital en 275% y las visualizaciones de contenido en 448% en un trimestre, mediante calendarios editoriales, segmentación de audiencias y pauta digital en Meta Ads.",
        "Elevé los clics hacia inscripciones y contenidos académicos en 802% y alcancé 3.1% de engagement, mediante estrategias de Content Strategy adaptadas a audiencias de posgrado en Facebook e Instagram.",
        "Gestiono la comunicación digital del CICAJ, subunidad del Departamento Académico de Derecho de la PUCP, mediante planificación, producción y publicación de contenidos académicos, institucionales y de investigación.",
      ],
    },
    {
      company: "Grupo ATV",
      position: "Líder de Contenido Deportivo",
      startDate: "2020",
      endDate: "Actualidad",
      summary: [
        "Incrementé el tráfico web en 30% y reduje el porcentaje de rebote en 15% mediante la creación y optimización de landing pages para grandes eventos deportivos, utilizando contenido exclusivo y estrategias de distribución digital.",
        "Coordiné landing pages, contenidos y programas digitales asociados a Juegos Olímpicos de Tokio 2020, Mundial de Qatar 2022 y Champions League.",
      ],
    },
    {
      company: "Grupo ATV",
      position: "Editor de Contenido Web",
      startDate: "2021",
      endDate: "Actualidad",
      summary: [
        "Coordiné la producción y publicación de más de 145,000 artículos con el equipo editorial, contribuyendo a un promedio superior a 1 millón de usuarios únicos mensuales en la web de ATV.",
        "Gestiono contenidos para la plataforma web mediante selección, revisión, organización y preparación de materiales antes de su publicación.",
      ],
    },
    {
      company: "Grupo ATV",
      position: "Productor de Programas Digitales",
      startDate: "2018",
      endDate: "2020",
      summary: [
        "Alcancé picos de 9,000 espectadores con programas digitales como Deportes en la Red en 2018 y creé una comunidad de 15,000 seguidores en cuatro meses para el fanpage del programa.",
        "Desarrollé programas digitales para redes sociales y web, transformando contenidos televisivos en formatos adaptados al consumo digital.",
      ],
    },
    {
      company: "Grupo ATV",
      position: "Community Manager",
      startDate: "2017",
      endDate: "2019",
      summary: "Gestioné las redes sociales de ATV y ATV+ mediante planificación, publicación y seguimiento de contenidos, adaptando formatos y mensajes a cada plataforma.",
    },
    {
      company: "Grupo ATV",
      position: "Redactor Creativo",
      startDate: "2016",
      endDate: "2017",
      summary: "Desarrollé contenidos editoriales para la web de ATV mediante investigación, redacción y adaptación de información para consumo digital.",
    },
    {
      company: "Zebra 3 Producciones",
      position: "Editor de Videos",
      startDate: "2015",
      endDate: "2016",
      summary: "Produje y optimicé piezas audiovisuales mediante procesos de edición y postproducción.",
    },
  ],
  projects: [
    {
      name: "CICAJ — Estrategia de crecimiento digital",
      summary: "Estrategia de contenidos, Social Media y Meta Ads para comunicación académica e institucional dirigida a audiencias de posgrado.",
      linkPreview: "/proyectos/cicaj",
      linkSource: "https://www.pucp.edu.pe/cicaj/",
      image: "/project-cicaj.svg",
    },
    {
      name: "ATV — Sports Media",
      summary: "Experiencias digitales y contenidos multiplataforma para grandes eventos deportivos como Tokio 2020, Qatar 2022 y Champions League.",
      linkPreview: "/proyectos/atv-sports",
      linkSource: "https://www.atv.pe/",
      image: "/project-atv-sports.svg",
    },
    {
      name: "ATV — Web & Content",
      summary: "Gestión editorial y producción de contenido digital a escala para la plataforma web de ATV.",
      linkPreview: "/proyectos/atv-web",
      linkSource: "https://www.atv.pe/",
      image: "/project-atv-web.svg",
    },
    {
      name: "Deportes en la Red",
      summary: "Producción de programas digitales y estrategia de distribución para construir audiencias deportivas en plataformas digitales.",
      linkPreview: "/proyectos/deportes-en-la-red",
      linkSource: "https://www.atv.pe/",
      image: "/project-deportes.svg",
    },
  ],
  about: {
    description: `Soy José Gerardo Ferreccio Riega, profesional de Marketing, Comunicación y Medios Digitales con experiencia en medios de comunicación y sector académico.

Mi experiencia combina estrategia digital, contenidos, SEO, Social Media, Performance Marketing, analítica y comunicación institucional. He trabajado en proyectos digitales y multiplataforma, coordinando equipos y transformando objetivos de comunicación y negocio en acciones orientadas a resultados.

Me interesa desarrollar proyectos donde estrategia, contenido y datos trabajen juntos para construir audiencias, mejorar el rendimiento digital y generar impacto.`,
  },
};
