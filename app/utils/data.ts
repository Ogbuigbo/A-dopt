export const NAV_LINKS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  {
    href: "/services",
    label: "Services",
    key: "services",
    children: [
      { label: "Procurements", href: "/services/procurements" },
      { label: "Engineering Services", href: "/services/engineering-consultation" },
      { label: "Enivomental Management", href: "/services/enviromental-management" },
      // { label: "Geotechnical ", href: "/services/testing" },
      { label: "Laboratory Services", href: "/services/laboratory-testing" },
      { label: "IT- Training", href: "/services/it-training" },
      // { label: "Procurement and Logistics ", href: "/services/testing" },
    ],
  },
  { href: "/careers", label: "Careers", key: "careers" },
  { href: "/projects", label: "Projects & Gallery", key: "projects" },
  { href: "/contact", label: "Contact", key: "contact" },
];

  export const ITEMS = [
    {
      icons: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734422942/monochrome-scene-depicting-life-workers-construction-industry-site_2_hx3ow3.jpg',
      title: 'Comprehensive Engineering Consultancy',
      description: 'Our team provides expert guidance and customized solutions, ensuring quality and excellence in every project.',
    },
    {
      icons: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734351929/engineering_ffbivj.png',
      title: 'Environmental Management Consultancy',
      description: 'We help clients implement sustainable practices and comply with environmental regulations for better stewardship.',
    },
    {
      icons: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734527486/freepik__enhance__71371_upgrxf.png',
      title: 'Laboratory Services',
      description: 'Our laboratory offers reliable testing and analysis, supporting engineering projects with high standards of quality.',
    },
    {
      icons: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733917352/tenweb_media_tDIJMZWT_gsgbwv.webp',
      title: 'Efficient Procurement and Logistics',
      description: 'Streamlining supply chain processes, we ensure timely delivery and effective procurement strategies for projects.',
    },
    // {
    //   icons: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1731497987/tenweb_media_tZxnz09g_1_fmeggv.webp',
    //   title: 'Compensation & Benefits',
    //   description: 'Quema Consulting will set the guidelines for the organization to develop the employee’s career and help to achieve a high retention rate within the organization to do the following tasks',
    // },
  
  ]