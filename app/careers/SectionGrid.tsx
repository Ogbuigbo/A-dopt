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
      'We believe in creating a sustainable future while empowering individuals to grow and succeed. Our environment-focused initiatives offer a unique opportunity to acquire valuable skills in environmental service, project management, and sustainability practices',
  },
  {
    icon: <BuildCircle className="text-[#00205B] text-4xl" />,
    title: 'Operations',
    description:
      'Embark on a rewarding journey in laboratory services with our organization, where innovation meets opportunity. We are committed to equipping individuals with cutting-edge skills and expertise through hands-on training, mentorship, and access to state-of-the-art facilities.',
  },
  {
    icon: <AccountBox className="text-red-600 text-4xl" />,
    title: 'Key / Client Account Management',
    description:
      'At Adis limited, we are committed to empowering individuals with the skills and expertise needed to excel in the dynamic field of engineering services. Our career development programs focus on fostering technical proficiency, problem-solving capabilities, and innovative thinking to meet the demands of the ever-evolving industry..',
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
      'Build your future with us! Our construction skill acquisition in house program is designed to empower individuals with the knowledge, hands-on training, and practical skills needed to thrive in the construction industry.',
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
