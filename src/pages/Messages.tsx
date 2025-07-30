import Layout from "../components/Layout";

type Msg = {
  id: number;
  title: string;
  content: string;
  time: string;
  status: "Unread" | "Read";
  icon?: string;
};

const messages: Msg[] = [
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

const Messages = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
       <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">📬 Notifications</h1>
        
        </div>

        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-blue-100 rounded-xl p-5 shadow hover:shadow-md transform hover:-translate-y-0.5 transition"
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg shrink-0">
                  <span aria-hidden>{msg.icon ?? "🔔"}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base sm:text-lg font-semibold text-blue-900">
                      {msg.title}
                    </h3>
                    <span
                      className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-full ${
                        msg.status === "Unread"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-200 text-blue-800"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </div>

                  <p className="text-sm text-blue-800 mt-1">{msg.content}</p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-blue-700">{msg.time}</span>
                    <button className="text-xs bg-white border border-blue-300 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-50">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
