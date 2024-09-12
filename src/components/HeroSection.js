'use client'
import Image from "next/image";
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function HeroSection() {
  const [videoSrc, setVideoSrc] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
    }
  };

  return (
    <section className="text-center py-10 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-yellow-400">MASTER 174 FORMULAS, MACROS & EXCEL REPORTS</span>
          <br />IN <span className="text-yellow-400">MS EXCEL</span> USING <span className="text-yellow-400">CHATGPT & AI</span>
        </h1>
        <h2 className="text-2xl mb-4">
          TO <span className="text-yellow-400">SAVE 4 HOURS</span> OF TIME DAILY AND
          <br />GROW YOUR <span className="text-yellow-400">SALARY UPTO 3X, GUARANTEED!</span>
        </h2>
        <p className="text-lg mb-6">(WITHOUT ANY PRIOR AI, CODING OR MS EXCEL KNOWLEDGE)</p>
        <div className="bg-gray-800 p-4 mb-6 rounded-lg inline-block">
          <h3 className="text-xl font-bold mb-2">BECOME AN ADVANCED EXCEL & AI EXPERT IN ₹99/-</h3>
          <div className="relative w-full max-w-2xl mx-auto h-64 bg-gray-700 rounded-lg overflow-hidden">
            {videoSrc ? (
              <>
                <video src={videoSrc} controls className="w-full h-full object-cover" />
                <button 
                  onClick={() => setVideoSrc(null)} 
                  className="absolute top-2 right-2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition duration-300"
                >
                  <FaTrash size={20} />
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <label htmlFor="videoUpload" className="cursor-pointer bg-yellow-400 text-black py-3 px-6 rounded-lg flex items-center transition duration-300 hover:bg-yellow-500">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Upload Video
                </label>
                <input
                  id="videoUpload"
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={handleVideoUpload}
                />
              </div>
            )}
          </div>
          <p className="text-xl font-bold mt-2">DO NOT USE MICROSOFT EXCEL</p>
          <p className="text-xl font-bold">WITHOUT WATCHING</p>
        </div>
        <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg mb-8">
          » Become a Certified MS Excel with ChatGPT & AI Expert Now!
        </button>
        <p className="text-sm mb-8">(Offer Valid Only For Today)</p>
        
        <div className="grid grid-cols-2 gap-4 text-left mb-8">
          <div className="flex items-center">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            <span>Use <span className="text-yellow-400">174 Excel formulas with AI</span> without memorising any of them</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            <span>Integrate ChatGPT & AI in MS Excel to <span className="text-yellow-400">analyse all your data in 10 seconds</span></span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            <span>Get <span className="text-yellow-400">97 Excel automation templates</span> to create your entire Excel Report in 60 seconds</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            <span>Avoid being laid off in 2023 & become AI Proof to get a <span className="text-yellow-400">3 times better salary appraisal</span></span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            <span><span className="text-yellow-400">Automate 42 daily office tasks</span> using Excel Macros without coding knowledge</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-yellow-400 mr-2" />
            <span>Unlock hidden excel formulas & functions that <span className="text-yellow-400">only 0.01% of Excel users know</span></span>
          </div>
        </div>
        
        <div className="bg-white text-black rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="font-bold">12th Sept</p>
              <p className="text-sm">Date</p>
            </div>
            <div className="text-center">
              <p className="font-bold">7 PM Onwards</p>
              <p className="text-sm">Post Office Time</p>
            </div>
            <div className="text-center">
              <p className="font-bold">Bonuses</p>
              <p className="text-sm">Worth Rs 16,500 for FREE</p>
            </div>
            <div className="text-center">
              <p className="font-bold">4,620+</p>
              <p className="text-sm">Attended</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}