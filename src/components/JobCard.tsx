type JobCardProps = {
  title: string;
  company: string;
  location: string;
};

const JobCard = ({ title, company, location }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{company} — {location}</p>
    </div>
  );
};

export default JobCard;
