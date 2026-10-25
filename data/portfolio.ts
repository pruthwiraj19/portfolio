export const portfolio = {
  name: 'Pruthwiraj Deshmukh',
  initials: 'PD',
  location: 'Mumbai, India',
  email: 'pruthwiraj.deshmukh@welingkar.org',
  phone: '+91 8208687490',
  linkedin: 'https://www.linkedin.com/in/pruthwiraj-deshmukh/',
  intro:
    'I am an MMS Marketing student at WeSchool with a B.Pharm foundation. I combine customer conversations, market research and analytical thinking to understand what people need and turn those insights into commercial results.',
  highlights: [
    { value: '₹30L+', label: 'Sales generated at Vijay Sales', detail: 'Across a two-month internship' },
    { value: '200+', label: 'Customers engaged', detail: 'Through needs-led product conversations' },
    { value: '42% → 62%', label: 'EWS attachment rate', detail: 'Approximate improvement during internship' },
    { value: '20+', label: 'Paid subscribers converted', detail: 'Research 360 live project' },
  ],
  experience: [
    {
      period: 'May – June 2026',
      duration: '2 months',
      organization: 'Vijay Sales Pvt Ltd',
      location: 'Mumbai',
      title: 'Summer Internship Project',
      summary:
        'Worked directly with retail customers to understand purchase requirements, demonstrate products and recommend suitable solutions.',
      outcomes: [
        'Generated ₹30 lakh+ in sales while engaging 200+ customers.',
        'Improved the EWS attachment rate from approximately 42% to 62% through value-based selling, cross-selling and upselling.',
        'Analysed preferences, price sensitivity and competitor comparisons to support sales conversations and conversion opportunities.',
      ],
    },
    {
      period: 'December 2021 – January 2022',
      duration: 'Industrial training',
      organization: 'Hindustan Antibiotics Ltd',
      location: 'Pune',
      title: 'Industrial training',
      summary:
        'Completed industrial training across seven pharmaceutical operations areas and learned how quality standards and documentation shape manufacturing work.',
      outcomes: [
        'Observed production, quality assurance, quality control, packaging, parenteral preparation, dry powder inhaler and large volume parenteral operations.',
        'Developed process observation and analytical skills through exposure to manufacturing workflows and quality procedures.',
      ],
    },
  ],
  projects: [
    {
      number: '01',
      tag: 'Customer research · Growth',
      title: 'Research 360',
      organization: 'Motilal Oswal Financial Services',
      description:
        'Conducted primary research into investor needs, product expectations and platform adoption, then used those conversations to communicate the product’s value.',
      outcomes: ['65+ customer insights gathered', '20+ consumers converted into paid subscribers'],
    },
    {
      number: '02',
      tag: 'Brand strategy · Market analysis',
      title: 'CavinKare strategic analysis',
      organization: 'Summer Internship Research Project',
      description:
        'Evaluated CavinKare’s brand portfolio using the BCG Matrix and competitor benchmarking against HUL, Godrej Consumer Products, Dabur and Patanjali.',
      outcomes: [
        'Identified opportunities in premiumisation, e-commerce and underpenetrated markets',
        'Assessed a 60,000-dealer network and approximately 60% personal care revenue concentration',
      ],
    },
    {
      number: '03',
      tag: 'Consumer insights · Product concept',
      title: 'Redesigning the school backpack',
      organization: 'Global Citizen Leadership',
      description:
        'Researched the daily experience of students and translated pain points around comfort, storage and ventilation into an ergonomic, smart and eco-friendly prototype.',
      outcomes: ['Primary research with 50+ students', '1st rank in the GCL competition'],
    },
  ],
  education: [
    {
      degree: 'Master of Management Studies, Marketing',
      school: 'WeSchool',
      location: 'Mumbai',
      period: '2025 – 2027',
      result: 'First-year CGPA: 8.74',
    },
    {
      degree: 'Bachelor of Pharmacy',
      school: 'SIOP',
      location: 'Pune',
      period: 'Completed 2023',
      result: 'CGPA: 8.076 / 10',
    },
    {
      degree: 'Higher Secondary Certificate',
      school: 'Vasundhara College of Arts, Science & Commerce',
      location: '',
      period: '2018',
      result: '66.15%',
    },
    {
      degree: 'Secondary School Certificate',
      school: 'Shri Keshavraj Vidyalaya',
      location: 'Latur',
      period: '2016',
      result: '87.80%',
    },
  ],
  skills: {
    'Research & strategy': ['Market research', 'Business analytics', 'Stakeholder management'],
    'Commercial execution': ['Relationship management', 'Cross-selling & upselling', 'Customer engagement'],
    'Tools': ['Microsoft Excel', 'Power BI'],
  },
  certifications: [
    'Google Analytics',
    'Microsoft Excel (VBA)',
    'Harvard Management – Negotiating',
    'Inbound Marketing (HubSpot)',
    'Marketing Strategy (Coursera)',
  ],
  leadership: [
    {
      title: 'College volleyball captain',
      period: '2019 – 2022',
      description: 'Led team activities and represented the college in competitions.',
    },
    {
      title: 'Forza 2022 organizing committee',
      period: '2022',
      description: 'Organized seven games, coordinating schedules, logistics and on-ground execution.',
    },
  ],
  languages: ['English', 'Hindi', 'Marathi'],
  interests: ['Trekking', 'Volleyball'],
} as const;
