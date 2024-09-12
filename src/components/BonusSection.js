"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const bonuses = [
  {
    title: 'Lifetime Access To 30+ AI Tools To Help You Finish Your Work Faster Than A Robot',
    worth: 'Worth Rs 5,500',
    icon: '/robot-icon.png'
  },
  {
    title: 'Automation Add In To Help You Automate Your Work in MS Office',
    worth: 'Worth Rs 4,500',
    icon: '/automation-icon.png'
  },
  {
    title: '700 Done For You PowerPoint Templates To Crease Stunning Presentations',
    worth: 'Worth Rs 3,500',
    icon: '/powerpoint-icon.png'
  },
  {
    title: 'Complete MS Excel Essential Shortcuts Guide to Work Faster In MS Excel',
    worth: 'Worth Rs 3,000',
    icon: '/excel-icon.png'
  }
];

export default function BonusSection() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 18, seconds: 52 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-yellow-400 px-4 py-1 rounded">
                Bonus {index + 1}
              </div>
              <Image src={bonus.icon} alt={`Bonus ${index + 1}`} width={50} height={50} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
              <p className="text-blue-600 font-bold border border-blue-600 inline-block px-4 py-1 rounded">
                {bonus.worth}
              </p>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-4">Time is running out. Reserve your seat now!</h2>
        
        <div className="flex justify-center mb-4">
          <div className="bg-black text-yellow-400 px-8 py-4 text-4xl font-bold mr-4">
            {timeLeft.minutes.toString().padStart(2, '0')}
            <div className="text-sm">Minutes</div>
          </div>
          <div className="bg-black text-yellow-400 px-8 py-4 text-4xl font-bold">
            {timeLeft.seconds.toString().padStart(2, '0')}
            <div className="text-sm">Seconds</div>
          </div>
        </div>
        
        <p className="text-center mb-8">
          Fee will increase to <span className="text-red-600 font-bold">Rs 2,000</span> once the timer hits <span className="text-red-600 font-bold">ZERO</span>.
        </p>
        
        <div className="text-center">
          <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg mb-2">
            » Become a Certified MS Excel with ChatGPT & AI Expert Now!
          </button>
          <p className="text-sm">(Offer Valid Only For Today)</p>
        </div>
        
        <p className="text-center mt-6">
          Register before <span className="text-orange-500 font-bold">September 02, 2024</span> to unlock bonuses worth <span className="text-orange-500 font-bold">₹ 16,500</span>
        </p>
      </div>
    </section>
  );
}