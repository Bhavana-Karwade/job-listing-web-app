import Layout from "../components/Layout";
import { useState } from "react";

const Profile = () => {
  const [showEducation, setShowEducation] = useState(false);

  const toggleEducation = () => {
    setShowEducation((prev) => !prev);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-6">
        <div className="flex items-center gap-6 bg-blue-100 p-6 rounded-xl shadow">
          <img
            src='/user-profile.png'
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-900">Jane Doe</h2>
            <p className="text-sm text-blue-700">Full Stack Developer</p>
            <p className="text-xs text-blue-600 mt-1">Profile Completion: 9/10</p>
            <div className="w-full h-2 bg-blue-200 rounded-full mt-1">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: "90%" }} />
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-5 rounded-xl shadow space-y-1">
          <h3 className="font-semibold text-lg text-blue-900 mb-2">📞 Contact Info</h3>
          <p className="text-blue-800">📍 New York, United States</p>
          <p className="text-blue-800">📞 (208) 555-0112</p>
          <p className="text-blue-800">✉️ example@mail.com</p>
        </div>

        <div className="bg-blue-100 p-5 rounded-xl shadow">
          <h3 className="font-semibold text-lg text-blue-900 mb-2">🧑‍💼 About Me</h3>
          <p className="text-sm text-blue-800 whitespace-pre-line">
            Passionate full-stack developer with experience in React, Node.js, and Tailwind CSS.
            {"\n"}{"\n"}I enjoy creating elegant, user-centric web applications and continuously
            improving my skills.
          </p>
        </div>

        <div className="bg-blue-100 p-5 rounded-xl shadow">
          <h3 className="font-semibold text-lg text-blue-900 mb-2">💼 Experience</h3>
          <p className="font-medium text-blue-900 whitespace-pre-line">
            Full Stack Developer{"\n"}<span className="text-sm text-blue-700">Info Corp — New York</span>
          </p>
          <p className="text-sm text-blue-700">Dec 2020 – Present</p>
        </div>

        <div className="bg-blue-100 p-5 rounded-xl shadow"> 
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg text-blue-900">🎓 Education</h3>
            <button
              onClick={toggleEducation}
              className="text-blue-900 text-2xl font-bold px-3 hover:text-blue-600"
              title={showEducation ? "Hide Education" : "Show Education"}
            >
              {showEducation ? "−" : "+"}
            </button>
          </div>
          {showEducation && (
            <div className="text-sm text-blue-800 space-y-2">
              <div>
                <p className="font-medium">B.Tech in Computer Science</p>
                <p className="text-blue-700">MIT, Pune — 2016–2020</p>
              </div>
              <div>
                <p className="font-medium">High School</p>
                <p className="text-blue-700">Delhi Public School — 2014–2016</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
