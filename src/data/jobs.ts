export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  tags: string[];
  posted: string;
  salary?: string;
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
      salary: ""
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Pixel Studios",
      location: "San Francisco",
      tags: ["Mid Level", "Part Time", "40k - 60k"],
      posted: "1 day ago",
      salary: ""
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

export type Msg = {
  id: number;
  title: string;
  content: string;
  time: string;
  status: "Unread" | "Read";
  icon?: string;
};

export const messages: Msg[] = [
  {
    id: 1,
    title: "Job Invitation",
    content: "You've received an interview invite from Pixel Studios.",
    time: "2 hours ago",
    status: "Unread",
    icon: "🎉",
  },
  {
    id: 2,
    title: "New Recommendation",
    content: "A new Full Stack Developer role matches your skills.",
    time: "Today",
    status: "Unread",
    icon: "💡",
  },
  {
    id: 3,
    title: "Profile Reminder",
    content: "Complete your profile to get better job matches.",
    time: "Yesterday",
    status: "Read",
    icon: "🔔",
  },
];
