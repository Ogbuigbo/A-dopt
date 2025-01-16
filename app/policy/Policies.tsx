"use client";

import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

// Define a type for policies
type Policy = {
  id: string;
  title: string;
  content: string;
  url: string;
};

// Mock data for policies
const policies: Policy[] = [
  {
    id: "corporate_policy",
    title: "Corporate Policy and Strategic Objectives",
    content: `It is the policy of A-DOPT INTER’L SERVICES NIG. LTD to conduct its operations ethically and responsibly, ensuring sustainable development, safety, and quality while meeting international standards.`,
    url: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736997436/Screenshot_2025-01-16_at_04.16.32_abw1zl.png"
  },
  {
    id: "hse_policy",
    title: "Health, Safety & Environment (HSE) Policy",
    content: `A-DOPT ensures high standards for health, safety, and environmental practices, with proactive training and measures to safeguard personnel, equipment, and the environment.`,
     url: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736997705/Screenshot_2025-01-16_at_04.21.10_wbf6xk.png"
  },
  {
    id: "environmental_policy",
    title: "Environmental Policy",
    content: `Commitment to environmentally friendly and sustainable operations, with a focus on waste management, environmental preservation, and compliance with best practices.`,
     url: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736997783/Screenshot_2025-01-16_at_04.22.42_effmwg.png"
  },
  {
    id: "cashes_policy",
    title: "CASHES Policy",
    content: `Emphasizes safety, health, environmental conservation, security, and sensitivity to community needs in all operations.`,
     url: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736997826/Screenshot_2025-01-16_at_04.23.32_fp2hgu.png"
  },
  {
    id: "drug_alcohol_policy",
    title: "Drug and Alcohol Policy",
    content: `Prohibits the influence of drugs and alcohol in the workplace, encourages rehabilitation, and reserves the right to enforce disciplinary measures.`,
     url: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736997890/Screenshot_2025-01-16_at_04.24.15_osec1m.png"
  },
];

const PoliciesComponent: React.FC = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-[100px]">
      <h1 className="text-4xl font-bold text-center mb-9">Company Policies</h1>
      <p className="text-gray-700 text-center mb-9">Below are the key policies of A-DOPT INTERNATIONAL SERVICES (NIG) LTD:</p>
      <div>
        {policies.map((policy) => (
          <div key={policy.id} className="mb-4">
            <button
              onClick={() => togglePolicy(policy.id)}
              className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors p-4 rounded-lg border border-gray-300"
            >
              <span className="text-lg font-medium">{policy.title}</span>
              <ExpandMoreIcon
                className={`transition-transform ${
                  expandedPolicy === policy.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {expandedPolicy === policy.id && (
              <div className="mt-2 p-4 bg-white rounded-lg border flex items-center justify-center border-gray-200 shadow">
              <Image
              src={policy.url}
              alt={policy.title}
              width={300}
              height={300}
              className="rounded-lg"
              />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliciesComponent;
