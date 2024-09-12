'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useEffect } from 'react';

const initialLearningItems = [
  {
    title: 'Integrate ChatGPT & AI inside Excel',
    description: 'Integrate Artificial Intelligence in Excel to analyse data, answer questions, generate macros, create formulas & build reports in seconds.',
    image: '/chatgpt-excel.png'
  },
  {
    title: 'Master 174 Excel Formulas + Unlock 27 Hidden Excel Formulas',
    description: 'Use 174 Excel formulas without remembering any of them to complete your work faster with AI. Plus get 27 secret custom formulas that no one in your office has.',
    image: '/excel-formulas.png'
  },
  {
    title: 'Create All Your Excel Reports In Just 60 seconds',
    description: 'Are you also fed up of creating those weekly or monthly reports? Learn to automatically create it for your boss or management in less than 60 seconds.',
    image: '/excel-reports.png'
  },
  {
    title: 'Automate 42 Daily Office Tasks Using Excel Macros Without Coding',
    description: 'No more leaving late from your office when automation can do your work in 1/10th the time for you. You will learn to automate 42 most common Indian job tasks.',
    image: '/automate-tasks.png'
  },
  {
    title: 'Get 97 Automation Templates That Makes You Work Faster Than A Robot',
    description: 'No matter what department you work in, these templates will reduce your manual work. The automation is already added, you just need to add input and get your desired output.',
    image: '/automation-templates.png'
  },
  {
    title: 'Become AI Proof, Avoid Layoffs & Work In An AI & Data Driven World',
    description: 'With AI taking over human jobs, you need to become AI proof in 2023 and not just keep your job but also grow in it. This workshop will help you do that & avoid being laid off.',
    image: '/ai-proof.png'
  }
];

export default function LearningSection() {
  const [learningItems, setLearningItems] = useState(initialLearningItems);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLearningItems();
  }, []);

  const fetchLearningItems = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/learning-items'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch learning items');
      }
      const data = await response.json();
      setLearningItems(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching learning items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size should not exceed 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const newLearningItems = [...learningItems];
        newLearningItems[index].image = e.target.result;
        setLearningItems(newLearningItems);
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        alert('Error uploading image. Please try again.');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-10 bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningItems.map((item, index) => ( 
            <div key={index} className="bg-green-700 p-6 rounded-lg">
              <div className="relative w-full h-48 mb-4 bg-green-600 rounded-lg overflow-hidden">
                {item.image ? (
                  <>
                    <Image src={item.image} alt={item.title} width={500} height={300} objectFit="cover" className="rounded-lg" />
                    <label htmlFor={`imageUpload-${index}`} className="absolute top-2 right-2 cursor-pointer bg-yellow-400 text-black py-1 px-2 rounded-lg flex items-center text-sm">
                      <FaUpload className="mr-1" />
                      Change Image
                    </label>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <label htmlFor={`imageUpload-${index}`} className="cursor-pointer bg-yellow-400 text-black py-2 px-4 rounded-lg flex items-center">
                      <FaUpload className="mr-2" />
                      Upload Image
                    </label>
                  </div>
                )}
                <input
                  id={`imageUpload-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(index, e)}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg">
            » Become a Certified MS Excel with ChatGPT & AI Expert Now!
          </button>
          <p className="mt-2 text-sm">(Offer Valid Only For Today)</p>
        </div>
        <p className="text-center mt-6">
          Register before <span className="text-yellow-400 font-bold">September 02, 2024</span> to unlock bonuses worth <span className="text-yellow-400 font-bold">₹ 16,500</span>
        </p>
        <p className="text-center mt-4 text-2xl font-bold">
          Register before midnight of 01 Sep 2024
        </p>
        <p className="text-center mt-2 text-xl text-yellow-400">
          To Unlock All High Value Bonuses worth Rs 16,500
        </p>
      </div>
    </section>
  );
}