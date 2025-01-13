"use client"

import React, { useState } from 'react';

// Define a type for policies
type Policy = {
  id: string;
  title: string;
  content: string;
};

// Mock data for policies (based on the uploaded document)
const policies: Policy[] = [
  {
    id: 'corporate_policy',
    title: 'Corporate Policy and Strategic Objectives',
    content: `It is the policy of A-DOPT INTER’L SERVICES NIG. LTD to conduct its operations ethically and responsibly, ensuring sustainable development, safety, and quality while meeting international standards. Strategic objectives include zero fatalities, quality services, innovation, and compliance with safety and environmental policies.`
  },
  {
    id: 'hse_policy',
    title: 'Health, Safety & Environment (HSE) Policy',
    content: `A-DOPT ensures high standards for health, safety, and environmental practices, with proactive training and measures to safeguard personnel, equipment, and the environment.`
  },
  {
    id: 'environmental_policy',
    title: 'Environmental Policy',
    content: `Commitment to environmentally friendly and sustainable operations, with a focus on waste management, environmental preservation, and compliance with best practices.`
  },
  {
    id: 'cashes_policy',
    title: 'CASHES Policy',
    content: `Emphasizes safety, health, environmental conservation, security, and sensitivity to community needs in all operations.`
  },
  {
    id: 'drug_alcohol_policy',
    title: 'Drug and Alcohol Policy',
    content: `Prohibits the influence of drugs and alcohol in the workplace, encourages rehabilitation, and reserves the right to enforce disciplinary measures.`
  },
  // Add other policies similarly
];

const PoliciesComponent: React.FC = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-[200px]">
      <h1 className="text-2xl font-bold mb-4">Company Policies</h1>
      <p className="text-gray-700 mb-6">Below are the key policies of A-DOPT INTERNATIONAL SERVICES (NIG) LTD:</p>
      <div>
        {policies.map((policy) => (
          <div key={policy.id} className="mb-4">
            <button
              onClick={() => togglePolicy(policy.id)}
              className="w-full text-left bg-gray-100 hover:bg-gray-200 transition-colors p-4 rounded-lg border border-gray-300"
            >
              <span className="text-lg font-medium">{policy.title}</span>
            </button>
            {expandedPolicy === policy.id && (
              <div className="mt-2 p-4 bg-white rounded-lg border border-gray-200 shadow">
                <p className="text-gray-800">{policy.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliciesComponent;
