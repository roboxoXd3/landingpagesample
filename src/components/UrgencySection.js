import Image from 'next/image';

export default function UrgencySection() {
  return (
    <section className="py-10 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-green-600 text-white py-8 px-4 rounded-lg mb-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            URGENT: Using ChatGPT, AI & Automation to become
            <br />more efficient is the need of the hour!
          </h2>
          <p className="text-xl text-center">
            ChatGPT, AI & Automation is coming for your job sooner than you think. You will be expected to do 10
            <br />times the work you do now, which is only possible when become faster & more productive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Image src="/news-image-1.jpg" alt="Economic Times News" width={500} height={300} className="rounded-lg" />
          <Image src="/news-image-2.jpg" alt="Future of Work News" width={500} height={300} className="rounded-lg" />
          <Image src="/news-image-3.jpg" alt="Twitter Post 1" width={500} height={300} className="rounded-lg" />
          <Image src="/news-image-4.jpg" alt="Twitter Post 2" width={500} height={300} className="rounded-lg" />
        </div>
        
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          Don't worry! Join Now To Become A MS Excel with
          <br />ChatGPT & AI Expert in the workshop!
        </h3>
        
        <div className="text-center">
          <button className="bg-red-600 text-white py-3 px-8 text-xl font-bold rounded-lg mb-2">
            » Become a Certified MS Excel with ChatGPT & AI Expert Now!
          </button>
          <p className="text-sm">(Offer Valid Only For Today)</p>
        </div>
        
        <p className="text-center mt-6 text-black">
          Register before <span className="text-yellow-400 font-bold">September 02, 2024</span> to unlock bonuses worth <span className="text-yellow-400 font-bold">₹ 16,500</span>
        </p>
      </div>
    </section>
  );
}