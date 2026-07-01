import type {
  NewsArticle,
  ServiceInfo,
  BenefitProgram,
  LoanProduct,
  ContactInfo,
  BulletinAnnouncement,
  FAQ,
  Statistics,
} from "@/types";

export const statistics: Statistics = {
  members: 37000000,
  benefitsPaid: "₱580 Billion",
  branches: 150,
  years: 67,
};

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "SSS rolls out historic Pension Reform Program",
    excerpt:
      "We've heard the clamor for higher pensions loud and clear! - SSS President Robert Joseph M. De Claro",
    content:
      "The Social Security System (SSS) announced a historic 10% pension increase effective September 2025, marking one of the most significant improvements in the social security program's history.\n\nSSS President Robert Joseph M. De Claro stated, 'This pension increase reflects our commitment to ensuring that our retirees can live with dignity and security. We've listened to our members and taken action.'\n\nThe increase will benefit over 2.5 million pensioners nationwide, with the average monthly pension rising from ₱5,500 to ₱6,050. The additional funding comes from improved collection efficiency and prudent fund management.\n\nKey highlights of the reform:\n• 10% across-the-board increase for all pension recipients\n• Enhanced minimum pension guarantees\n• Additional benefits for dependent children\n• Improved disability benefit computation\n\nThe implementation will be automatic, with no need for pensioners to file additional applications. The increased amounts will be reflected in pension disbursements starting September 2025.",
    featuredImage: "",
    date: "2025-09-20",
    author: "SSS Communications",
    category: "Announcements",
    tags: ["pension", "reform", "benefits"],
    readingTime: 5,
  },
  {
    id: "2",
    title: "Updated SSS Contribution Table takes effect on January 1, 2025",
    excerpt:
      "Stay informed and ensure accurate contributions for the year ahead. Read SSS Circulars 2024-006 to 010 for the full details.",
    content:
      "The SSS announces the updated contribution table effective January 1, 2025, implementing the next phase of the contribution rate increase under Republic Act No. 11199.\n\nThe new contribution schedule increases the contribution rate from 13% to 14% of the monthly salary credit (MSC), with employees contributing 4.5% and employers contributing 9.5%.\n\nKey changes include:\n• Minimum MSC increased to ₱4,000\n• Maximum MSC increased to ₱30,000\n• New contribution brackets for better income coverage\n• Enhanced employer compliance monitoring\n\nThe adjustment ensures the sustainability of the SSS fund while maintaining comprehensive benefits for all members. Members can use the SSS contribution calculator available on the MySSS portal to compute their new monthly contributions.\n\nEmployers are reminded to implement the new rates starting with January 2025 contributions to avoid penalties and ensure uninterrupted benefit coverage for their employees.",
    featuredImage: "",
    date: "2024-12-15",
    author: "SSS Policy Team",
    category: "Updates",
    tags: ["contributions", "policy", "2025"],
    readingTime: 3,
  },
  {
    id: "3",
    title: "Message from the Chairman",
    excerpt:
      "In a heartfelt message, Finance Secretary and Social Security Commission Chairman Ralph G. Recto sends his appreciation to the DOF Family for their unwavering dedication to public service.",
    content:
      "Finance Secretary and Social Security Commission Chairman Ralph G. Recto expressed his profound gratitude to the entire SSS workforce and the Department of Finance (DOF) Family for their exceptional commitment to public service.\n\n'Your dedication goes beyond mere compliance with duty - it represents a genuine commitment to improving the lives of millions of Filipino families,' Chairman Recto stated during the year-end message.\n\nThe Chairman highlighted several key achievements:\n• Record-breaking collection efficiency of 98.5%\n• Launch of innovative digital services through MySSS\n• Expanded branch network serving remote communities\n• Improved processing times for benefit claims\n\n'As we move forward, our mission remains clear: to provide accessible, efficient, and compassionate service to every SSS member, wherever they may be,' the Chairman emphasized.\n\nThe message comes at a time when SSS has been recognized for its digital transformation efforts and improved member satisfaction ratings, reflecting the organization's commitment to modernization while maintaining the human touch in service delivery.",
    featuredImage: "",
    date: "2024-12-10",
    author: "Chairman's Office",
    category: "Messages",
    tags: ["chairman", "message", "gratitude"],
    readingTime: 4,
  },
];

export const services: ServiceInfo[] = [
  {
    id: "mysss",
    name: "Create a MySSS account or login",
    description: "Access your SSS account online 24/7",
    icon: "UserCircle",
    link: "/mysss-account",
    category: "Account Management",
    processingTime: "Instant",
  },
  {
    id: "ss-number",
    name: "Apply for an SS Number Online",
    description: "Get your Social Security number online",
    icon: "FileText",
    link: "/ss-number",
    category: "Registration",
    processingTime: "5-7 business days",
  },
  {
    id: "pension-calculator",
    name: "Check out the Pension Calculator",
    description: "Estimate your future pension benefits",
    icon: "Calculator",
    link: "/calculator",
    category: "Tools",
    processingTime: "Instant",
  },
  {
    id: "acop",
    name: "Submit ACOP Compliance",
    description: "Annual Confirmation of Pensioners compliance",
    icon: "ClipboardCheck",
    link: "/acop",
    category: "Compliance",
    processingTime: "Varies",
  },
];

export const helpCategories: ServiceInfo[] = [
  {
    id: "member",
    name: "Become an SSS Member",
    description:
      "It pays to be an SSS member. Read about the SSS coverage program and know the type of membership that's right for you.",
    icon: "Users",
    link: "/membership",
    category: "Membership",
  },
  {
    id: "filipinos-abroad",
    name: "SSS for Filipinos Abroad",
    description:
      "Your SSS membership continues even when you're residing abroad - whether you're an Overseas Filipino worker, or a permanent resident of another country.",
    icon: "Plane",
    link: "/filipinos-abroad",
    category: "OFW",
  },
  {
    id: "subsidy",
    name: "Be a Contribution Subsidy Provider",
    description:
      "Through your partnership, subsidize SSS contributions for self-employed, land-based Overseas Filipino workers and voluntary members.",
    icon: "Handshake",
    link: "/subsidy",
    category: "Partnership",
  },
  {
    id: "contributions",
    name: "Pay Contributions and Loans",
    description:
      "Regular payment of contributions is essential to qualify for SSS benefits and loans. Here's how and where you can make your SSS payments.",
    icon: "CreditCard",
    link: "/contributions",
    category: "Payments",
  },
  {
    id: "benefits",
    name: "Apply for a Benefit or Loan",
    description:
      "We're here for you and your family. Know if you're qualified for an SSS benefit or loan, the requirements you need to prepare, and how to apply, wherever you are.",
    icon: "Gift",
    link: "/benefits",
    category: "Benefits",
  },
  {
    id: "branch",
    name: "Visit an SSS Branch",
    description:
      "Check out the list of SSS branches and service offices, here and abroad, to find one near you.",
    icon: "MapPin",
    link: "/branches",
    category: "Services",
  },
];

export const benefits: BenefitProgram[] = [
  {
    id: "retirement",
    name: "Retirement Benefit",
    description: "Monthly pension for qualified members upon retirement",
    eligibility: [
      "At least 60 years old for voluntary and OFW members, 65 for employed/self-employed",
      "Has paid at least 120 monthly contributions prior to the semester of retirement",
    ],
    requirements: [
      "SSS ID or two valid IDs",
      "Birth certificate from PSA",
      "Proof of age",
    ],
    benefits: [
      "Monthly pension for life",
      "13th month pension",
      "Annual increase based on CPI",
    ],
    howToApply: "Online through My.SSS or at any SSS branch",
  },
  {
    id: "sickness",
    name: "Sickness Benefit",
    description: "Daily cash allowance for unable to work due to sickness or injury",
    eligibility: [
      "Confined for at least 4 days",
      "Has paid at least 3 monthly contributions within the 12-month period",
      "Notified the SSS within 5 calendar days from the start of confinement",
    ],
    requirements: [
      "Sickness notification form",
      "Medical certificate",
      "Proof of daily wage",
    ],
    benefits: ["90% of average daily salary credit", "Up to 120 days per year"],
    howToApply: "Submit requirements to SSS within 5 days",
  },
];

export const loans: LoanProduct[] = [
  {
    id: "salary",
    name: "Salary Loan",
    type: "Short-term loan",
    maxAmount: 50000,
    interestRate: 10,
    terms: "12 or 24 months",
    requirements: [
      "Has paid at least 36 monthly contributions",
      "At least 6 contributions in the last 12 months",
      "No existing SSS loan",
    ],
    description: "Get a salary loan online in minutes through MySSS!",
  },
  {
    id: "calamity",
    name: "Calamity Loan",
    type: "Emergency loan",
    maxAmount: 40000,
    interestRate: 10,
    terms: "24 months",
    requirements: [
      "Must be residing in an area declared under state of calamity",
      "Has paid at least 36 monthly contributions",
      "At least 6 contributions in the last 12 months",
    ],
    description: "Financial assistance during times of declared calamity",
  },
];

export const contact: ContactInfo = {
  hotlines: ["1455", "(02) 8920-6446 to 55"],
  email: "member_relations@sss.gov.ph",
  addresses: [
    {
      name: "SSS Building",
      address: "East Avenue, Diliman, Quezon City, Philippines",
      operatingHours: "Monday to Friday, 8:00 AM - 5:00 PM",
    },
  ],
};

export const bulletins: BulletinAnnouncement[] = [
  {
    id: "1",
    title: "Help Us Serve You Better!",
    content:
      "We're working to improve how we communicate SSS programs and services. Share your thoughts on our information materials, collaterals, and social media channels—your feedback matters!",
    date: "2024-12-01",
    category: "Survey",
    priority: "high",
    link: "/survey",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I register for SSS?",
    answer:
      "You can register online through the My.SSS portal or visit any SSS branch with valid IDs and birth certificate.",
    category: "Registration",
  },
  {
    id: "2",
    question: "What is the minimum monthly contribution?",
    answer:
      "The minimum monthly contribution varies based on your monthly salary credit. Please check the current contribution table for exact amounts.",
    category: "Contributions",
  },
  {
    id: "3",
    question: "How long does it take to process a loan?",
    answer:
      "Salary loans applied online can be processed within 1-3 business days if all requirements are complete.",
    category: "Loans",
  },
];
