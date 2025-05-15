// sections/CareerOpportunities.tsx
import JobCard from "./JobCard";

const jobs = [
  {
    title: "Web3 Developer",
    description:
      "Join our blockchain team to build decentralized applications and smart contracts.",
    requirements: [
      "Experience with Solidity and smart contracts",
      "Familiarity with Ethereum and Layer 2 solutions",
      "Proficiency in JavaScript/TypeScript",
    ],
    icon: "🌐",
  },
  {
    title: "Data Analyst",
    description:
      "Analyze complex datasets to drive business decisions and optimize performance.",
    requirements: [
      "Strong SQL and data visualization skills",
      "Experience with Python (Pandas, NumPy)",
      "Understanding of statistical analysis and machine learning",
    ],
    icon: "📊",
  },
  {
    title: "Cyber Security Specialist",
    description:
      "Protect company assets from cyber threats and implement security measures.",
    requirements: [
      "Knowledge of penetration testing and threat modeling",
      "Experience with security frameworks (NIST, ISO 27001)",
      "Strong understanding of network security and encryption",
    ],
    icon: "🔒",
  },
];

const CareerOpportunities = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Career Opportunities Available
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.title} {...job} />
        ))}
      </div>
    </section>
  );
};

export default CareerOpportunities;
