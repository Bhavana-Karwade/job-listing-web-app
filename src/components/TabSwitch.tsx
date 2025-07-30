import React from "react";

type TabSwitchProps = {
  activeTab: string;
  onChange: (tab: string) => void;
  tabs: string[];
};

const TabSwitch = ({ activeTab, onChange, tabs }: TabSwitchProps) => {
  return (
    <div className="flex gap-4 border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-2 text-sm font-semibold ${
            activeTab === tab
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitch;
