import Layout from "../components/Layout";
import { allJobs } from "../data/jobs";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const jobId = parseInt(id || "");
  
  const job = [...allJobs.suggested, ...allJobs.recommended].find(
    (j) => j.id === jobId
  );

  if (!job) {
    return (
      <Layout>
        <div className="text-center text-gray-500 mt-10">Job not found.</div>
      </Layout>
    );
  }

  const handleClick = () => {
    alert('You have applied successfully for the given job')
  }
  
  return (
    <Layout>
      <div className="min-h-screen bg-blue-50 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-blue-900 mb-1">{job.title}</h1>
            <p className="text-lg text-blue-700">
              {job.company} — {job.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-6 items-center">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full border border-blue-300"
              >
                {tag}
              </span>
            ))}
            {job.salary && (
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full border border-green-300">
                💰 {job.salary}
              </span>
            )}
            <span className="ml-auto text-sm text-gray-500">{job.posted}</span>
          </div>

          <div className="mb-6 text-gray-800 text-sm leading-relaxed">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Job Description
            </h2>
            <p className="mb-2">
              We are looking for a passionate and skilled <strong>{job.title}</strong> to join our team at <strong>{job.company}</strong>. 
              This role requires creativity, collaboration, and a drive to deliver quality results.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Collaborate with designers and developers to create stunning UI/UX</li>
              <li>Write clean, maintainable, and efficient code</li>
              <li>Participate in code reviews and team meetings</li>
              <li>Remote work flexibility depending on project needs</li>
            </ul>
          </div>

          <div className="mb-6 text-gray-800 text-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Requirements
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>2+ years of experience in a similar role</li>
              <li>Proficiency in React, TypeScript, or similar stack</li>
              <li>Good understanding of responsive design and accessibility</li>
              <li>Excellent communication and teamwork skills</li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-sm shadow-md transition" onClick={() => handleClick()}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;
