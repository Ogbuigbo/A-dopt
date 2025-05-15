import { FC } from "react";

interface JobCardProps {
  title: string;
  description: string;
  icon: string;
  requirements?: string[]; // Added requirements as an optional prop
}

const JobCard: FC<JobCardProps> = ({ title, description, icon, requirements }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* Display requirements only if provided */}
      {requirements && requirements.length > 0 && (
        <div>
          <h4 className="text-lg font-medium mt-4">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-700">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobCard;
