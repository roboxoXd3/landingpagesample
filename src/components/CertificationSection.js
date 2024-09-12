'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

export default function CertificationSection() {
  const [certificateImage, setCertificateImage] = useState('/certificate-image.png');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size should not exceed 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setCertificateImage(e.target.result);
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        alert('Error uploading image. Please try again.');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Become a MCT Certified MS Excel with ChatGPT & AI Expert !
        </h2>
        <p className="text-xl mb-8">
          Yes! You will be certified by a <span className="text-yellow-400">Microsoft Certified Trainer</span> which brings a lot of credibility to your certificate & your resume.
        </p>
        <div className="mb-8 relative">
          <Image src={certificateImage} alt="Skill Nation Certificate" width={600} height={400} className="mx-auto" />
          <label htmlFor="certificateUpload" className="absolute top-2 right-2 cursor-pointer bg-yellow-400 text-black py-1 px-2 rounded-lg flex items-center text-sm">
            <FaUpload className="mr-1" />
            {certificateImage === '/certificate-image.png' ? 'Upload Certificate' : 'Change Certificate'}
          </label>
          <input
            id="certificateUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg mb-2">
          » Become a Certified MS Excel with ChatGPT & AI Expert Now!
        </button>
        <p className="text-sm mb-6">(Offer Valid Only For Today)</p>
        <p className="text-lg">
          Register before <span className="text-yellow-400 font-bold">September 02, 2024</span> to unlock bonuses worth <span className="text-yellow-400 font-bold">₹ 16,500</span>
        </p>
      </div>
    </section>
  );
}