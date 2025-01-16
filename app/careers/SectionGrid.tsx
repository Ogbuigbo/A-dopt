import React from 'react';
import {
  Construction,
  BuildCircle,
  AccountBox,
  Campaign,
  AttachMoney,
  Public,
} from '@mui/icons-material';

const items = [
  {
    icon: <Construction className="text-[#00205B] text-4xl" />,
    title: 'Well Construction & Engineering',
    description:
      'You are a natural multi-tasker and team motivator. Your experience in construction and the lifecycle of oil wells includes providing remedial and supplementary services throughout the energy value chain.',
  },
  {
    icon: <BuildCircle className="text-[#00205B] text-4xl" />,
    title: 'Operations',
    description:
      'You have what it takes to provide logistics support to an oil service operation safely, efficiently, and cost-effectively in line with industry standards.',
  },
  {
    icon: <AccountBox className="text-red-600 text-4xl" />,
    title: 'Key / Client Account Management',
    description:
      'You typically are a self-starter. You need little or no encouragement to hunt down new business opportunities. You have natural talent for building open, enduring customer relationships.',
  },
  {
    icon: <Campaign className="text-[#00205B] text-4xl" />,
    title: 'Sales & Marketing',
    description:
      'You are a natural choice to spearhead the broadening of sales and marketing in a highly competitive industry, meeting unique customer needs.',
  },
  {
    icon: <AttachMoney className="text-red-600 text-4xl" />,
    title: 'Finance',
    description:
      'You can interpret the business logic and market trends hidden in raw data and are familiar with Financial Accounting.',
  },
  {
    icon: <Public className="text-[#00205B] text-4xl" />,
    title: 'Corporate and Regulatory Affairs',
    description:
      'You must be well-versed in industry regulatory bodies and Community Relations. Must be articulate as a communications professional and familiar with social media management.',
  },
];

function SectionGrid() {
  return (
    <div className="py-12 px-6 bg-[#f2f4f6]">
      <h2 className="text-4xl font-bold text-center mb-8">Career Opportunities</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start gap-4"
          >
            <div className="bg-gray-100 p-4 rounded-full">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionGrid;
