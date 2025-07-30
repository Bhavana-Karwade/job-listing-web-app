export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  tags: string[];
  posted: string;
  salary?: string;
  description: string;
};

export const allJobs = {
  suggested: [
    {
      id: 1,
      title: "Frontend Designer",
      company: "Info Corp",
      location: "New York",
      tags: ["Senior", "Full Time", "50k - 70k"],
      posted: "10 hours ago",
      description:
        "We are looking for a passionate frontend designer to join our team and shape the digital experience.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Pixel Studios",
      location: "San Francisco",
      tags: ["Mid Level", "Part Time", "40k - 60k"],
      posted: "1 day ago",
      description:
        "Design intuitive interfaces and improve user experience across mobile and web platforms.",
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
      description:
        "Join a fast-paced team developing scalable backend systems using Python and Django.",
    },
    {
      id: 4,
      title: "Product Engineer",
      company: "Cube Tech",
      location: "UK",
      tags: ["Senior", "Part Time", "Remote"],
      salary: "70k - 85k",
      posted: "3 days ago",
      description:
        "Drive product development with cross-functional teams and deliver impactful software solutions.",
    },
  ],
};