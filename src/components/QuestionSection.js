"use client";
import { useState } from 'react';

const questions = [
  "I have been using MS Excel daily & still do most of my work manually.",
  "I find it difficult to remember Excel formulas and want AI to write them for me.",
  "I want to automate my work using AI without coding & finish hours of work in seconds.",
  "I know AI is the future & want to be the first to become an AI Expert in my office & get a promotion.",
  "I want to integrate AI & ChatGPT inside Excel to unlock it's 100% potential.",
  "I want to use AI & Automation in Excel to make 3 times more than my current salary."
];

export default function QuestionSection() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (index) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-10 bg-white text-black w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Please Check All Boxes Where Your Answer Is YES!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {questions.map((question, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg">
              <input
                type="checkbox"
                id={`question-${index}`}
                checked={checkedItems[index] || false}
                onChange={() => handleCheck(index)}
                className="mr-4 h-5 w-5"
              />
              <label htmlFor={`question-${index}`} className="text-lg">{question}</label>
            </div>
          ))}
        </div>
        <p className="text-center mb-4">
          If you checked ANY of the boxes above, then you're invited to join the <span className="text-red-600 font-bold">MCT Certified MS Excel with ChatGPT & AI Workshop.</span>
        </p>
        <div className="text-center">
          <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg mb-4">
            » Become a Certified MS Excel with ChatGPT & AI Expert Now!
          </button>
          <p className="text-sm">(Offer Valid Only For Today)</p>
        </div>
        <p className="text-center mt-4">
          Register before <span className="text-yellow-500 font-bold">September 02, 2024</span> to unlock bonuses worth <span className="text-yellow-500 font-bold">₹ 16,500</span>
        </p>
      </div>
    </section>
  );
}