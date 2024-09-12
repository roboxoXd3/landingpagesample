import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Rahul Verma",
    date: "4th July, 2023",
    reviews: 3,
    location: "IN",
    rating: 5,
    title: "Helped me get a promotion in my job last week. I am a confident Excel Automation & AI Expert now!",
    content: "I was just an employee with no AI or coding background wanting to get promoted as a manager. In this workshop, I learned how to create advanced excel formulas & reports with AI & automation integration. This helped me work literally 5x faster than my peers, my company management noticed my improved performance & last week I was offered a promotion which had a 35% salary hike too. Big thanks to Jatan sir."
  },
  {
    name: "Aisha Biswas",
    date: "12th April, 2023",
    reviews: 1,
    location: "IN",
    rating: 5,
    title: "AI-powered Excel Automation helped me to get a 41% salary hike. AI is the future, indeed!",
    content: "As a data analyst, I wanted to be more productive without learning coding. Thanks to the 97 automation templates and 27 hidden Excel formulas I learned in this workshop, my work efficiency skyrocketed! It became so easy to work with data. My hard work was recognized with a well-deserved salary hike, and I feel more confident to take on any AI-driven challenge in my career!"
  },
  {
    name: "Manish Jha",
    date: "20th July, 2023",
    reviews: 3,
    location: "IN",
    rating: 5,
    title: "I am no longer scared of AI or Automation now. Feels so good when people call me the expert of the office.",
    content: "I was determined to stand out in my new job. Joining the MS Excel Automation with AI Workshop was the best decision I have made. From constantly being worried of not knowing how to use AI or Automation to now performing most of my excel work with it, I have seen an insane growth in my efficiency. My colleagues were impressed by my automation skills and they started taking my advice for automating their tasks too!"
  },
  {
    name: "Siddharth Nair",
    date: "7th July, 2023",
    reviews: 1,
    location: "IN",
    rating: 5,
    title: "Now I do not have to remember any excel formula & can create all my reports in a minute. It's so amazing!",
    content: "You NEED to be a part of the MS Excel Automation with AI Workshop! I used to spend hours creating Excel reports manually, but this workshop changed everything. With AI generated Excel formulas and Excel automation, I automated my daily office tasks, created reports & started saving 3 hours every day working on Excel. Now I can focus on important tasks and deliver impressive results to my seniors."
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          See how working professionals just like you have
        </h2>
        <h2 className="text-3xl font-bold text-center mb-2">
          become <span className="text-orange-500">10x faster using ChatGPT, AI & Automation.</span>
        </h2>
        <p className="text-xl text-center mb-8">
          You will be next when you attend the workshop...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image src={`/avatar-${index + 1}.png`} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{testimonial.reviews} reviews</span>
                    <span className="mx-2">•</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <div className="ml-auto text-gray-600">{testimonial.date}</div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-green-500" />
                ))}
              </div>
              <h4 className="font-bold mb-2">{testimonial.title}</h4>
              <p className="text-sm">{testimonial.content}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-3xl" />
            ))}
          </div>
          <p className="text-2xl font-bold mb-2">4.8 Out of 5</p>
          <p className="text-gray-400">(4,620+ Verified Reviews)</p>
        </div>
        <div className="text-center mt-8">
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