import React, { useState } from 'react'

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            name: "profile",
            tab:"Profile"

        },
        {
            name: "preference",
            tab:"Preference",
        },
        {
             name: "settings",
            tab:"Settings",
        },
        
    ]



  return (
    <div>
      {tabs.map((tab,idx) => (
        <div>
            <div key={idx}>{tab.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Tab
