'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function MentorIntroductionSection() {
  const [mentorImage, setMentorImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setMentorImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-10 bg-black text-white font-poppins">
      <div className="max-w-6xl mx-auto px-4">
 
         <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative">
            <div className="aspect-w-1 aspect-h-1 bg-gray-800 rounded-lg overflow-hidden">
              {mentorImage ? (
                <Image src={mentorImage} alt="Mentor" layout="fill" objectFit="cover" className="rounded-lg" />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <label htmlFor="imageUpload" className="cursor-pointer bg-yellow-400 text-black py-2 px-4 rounded-lg">
                    Add Image
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Know your mentor</h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <FaCheckCircle className="text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Microsoft Certified Trainer & Microsoft Certified Expert</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Co-Founder & CEO, Skill Nation</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>116,294 Students Trained in MS Office & AI</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>112,493+ Followers across platforms</span>
              </li>
            </ul>
            <p className="mb-4">
              Hi, I'm Jatan Shah, a <span className="text-yellow-400">Microsoft Certified Trainer & a Microsoft Certified Expert</span>.
            </p>
            <p className="mb-4">
              I help professionals and students like you unlock the <span className="text-yellow-400">Power of MS Office by learning AI Tools</span> that help you 
              <span className="text-yellow-400">automate your work & save upto 2 hours daily</span>.
            </p>
            <p className="mb-4">
              Besides training over 1,16,000 students in MS Office & AI, I am also the <span className="text-yellow-400">CEO of Skill Nation</span>.
            </p>
            <p className="mb-4">
              With <span className="text-yellow-400">5+ years of industry experience</span>, I have been the 
              <span className="text-yellow-400">Highest Endorsed Trainer in the world</span> (on LinkedIn) with over 900 endorsements. I have worked with some of the 
              best brands, empowered their teams, and helped them become more efficient.
            </p>
            <p>
              In this workshop, I look forward to making you an <span className="text-yellow-400">MS Excel with ChatGPT & AI PRO</span> and helping you save hours 
              of time and effort while working on MS Office Applications.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg mb-2">
            » Become a Certified MS Excel with ChatGPT & AI Expert Now!
          </button>
          <p className="text-sm">(Offer Valid Only For Today)</p>
        </div>
        <p className="text-center mt-4">
          Register before <span className="text-yellow-400 font-bold">September 02, 2024</span> to unlock bonuses worth <span className="text-yellow-400 font-bold">Rs 16,500</span>
        </p>
      </div>
    </section>
  );
}