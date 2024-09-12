'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const audienceTypes = [
  'Data Analysts & Data Management',
  'IT Professionals & Software Engineers',
  'Chartered Accountants & Finance Professionals',
  'Managers',
  'Sales Professionals',
  'Marketing Professionals',
  'Any Type of Engineer',
  'HR & Recruiters',
  'Software Developers',
  'Students',
  'Operations & Admin',
  'Logistics Industry',
  'Supply Chain Industry',
  'Data Scientists',
  'Freelancers',
  'Frequent Excel Users',
  'Frequent PPT Users',
  'Frequent Google Sheet Users'
];

export default function TargetAudienceSection() {
  const [highlightedAudiences, setHighlightedAudiences] = useState([]);

  useEffect(() => {
    // Simulate API call by randomly selecting audiences to highlight
    const randomlyHighlighted = audienceTypes.filter(() => Math.random() > 0.5);
    setHighlightedAudiences(randomlyHighlighted);
  }, []);

  return (
    <section className="py-10 bg-white text-black font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Who is this workshop for?</h2>
        <p className="text-xl text-center mb-8">
          This workshop is for anyone who wants to maximize their productivity while using Excel. You will be learning
          how to use 174 Excel Formulas, Reports & Macros that will make you the best employee of your office. This
          workshop is for professionals including but not limited to...
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {audienceTypes.map((type, index) => (
            <div key={index} className="flex items-center">
              <Image src="/checkicon.svg" alt="Check" width={20} height={20} className="mr-2 flex-shrink-0" />
              <div className={`p-2 rounded flex-grow ${highlightedAudiences.includes(type) ? 'bg-blue-50' : ''}`}>
                <span className="text-sm">{type}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xl text-center font-bold mb-8">
          + Anyone wanting to get a promotion, salary hike or switch their job in
          <br />today's Automation & AI driven world!
        </p>
        <div className="text-center">
          <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg mb-2">
            » Become a Certified MS Excel with ChatGPT & AI Expert Now!
          </button>
          <p className="text-sm mb-6">(Offer Valid Only For Today)</p>
        </div>
        <p className="text-center">
          Register before <span className="text-orange-500 font-bold">September 02, 2024</span> to unlock bonuses worth <span className="text-orange-500 font-bold">₹ 16,500</span>
        </p>
      </div>
    </section>
  );
}