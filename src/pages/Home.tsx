import Layout from "../components/Layout";
import Tag from "../components/Tag";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  tags: string[];
  posted: string;
  salary?: string;
};

const allJobs = {
  suggested: [
    {
      id: 1,
      title: "Frontend Designer",
      company: "Info Corp",
      location: "New York",
      tags: ["Senior", "Full Time", "50k - 70k"],
      posted: "10 hours ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Pixel Studios",
      location: "San Francisco",
      tags: ["Mid Level", "Part Time", "40k - 60k"],
      posted: "1 day ago",
    },
  ],
  recommended: [
    {
      id: 3,
      title: "Python Developer",
      company: "Code INC",
      location: "Germany",
      tags: ["Senior", "Full Time", "Remote"],
      salary: "80k - 90k",
      posted: "2 days ago",
    },
    {
      id: 4,
      title: "Product Engineer",
      company: "Cube Tech",
      location: "UK",
      tags: ["Senior", "Part Time", "Remote"],
      salary: "70k - 85k",
      posted: "3 days ago",
    },
  ],
};

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

const handleJobClick = (id: number) => {
  navigate(`/job/${id}`);
};
const searchJobs = (jobs: Job[], query: string): Job[] => {
  const q = query.toLowerCase();
  return jobs.filter((job) =>
    [job.title, job.company, job.location, ...job.tags]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
};
  const filteredSuggested = searchJobs(allJobs.suggested, searchText);
  const filteredRecommended = searchJobs(allJobs.recommended, searchText);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Job by title, company, location, or tag..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-4 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Suggested Jobs */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-blue-900">Suggested for You</h2>
          </div>

          <div className="grid gap-4">
            {filteredSuggested.length > 0 ? (
              filteredSuggested.map((job) => (
                <div key={job.id} className="bg-blue-100 rounded-xl p-5 shadow" onClick={() => handleJobClick(job.id)}>
                  <h3 className="text-xl font-semibold text-blue-900">{job.title}</h3>
                  <p className="text-sm text-blue-800 mb-2">
                    {job.company} — {job.location}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm mb-2">
                    {job.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  <p className="text-xs text-right text-blue-700">{job.posted}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No matching suggested jobs found.</p>
            )}
          </div>
        </section>

        {/* Recommended Jobs */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-blue-900">Recommended for You</h2>
          </div>

          <div className="grid gap-4">
            {filteredRecommended.length > 0 ? (
              filteredRecommended.map((job) => (
                <div key={job.id} className="bg-blue-200 rounded-xl p-5 shadow" onClick={() => handleJobClick(job.id)}>
                  <h3 className="text-xl font-semibold text-blue-900">{job.title}</h3>
                  <p className="text-sm text-blue-800 mb-2">
                    {job.company} — {job.location}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm mb-2">
                    {job.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-blue-700">
                    <p>{job.salary}</p>
                    <p>{job.posted}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No matching recommended jobs found.</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
