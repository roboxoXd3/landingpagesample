'use client';
import { useState } from 'react';

const faqs = [
  { question: "How long is the course?", answer: "The course is self-paced and available for 12 months." },
  { question: "Is there a money-back guarantee?", answer: "Yes, we offer a 30-day money-back guarantee." },
  { question: "Do I need any special equipment?", answer: "Just a computer and internet connection are required." },
  { question: "How soon will I see results?", answer: "Results vary, but many see improvements within weeks." },
];

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full text-left bg-gray-800 p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="bg-gray-700 p-4">{answer}</p>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">FREQUENTLY ASKED QUESTIONS</h2>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}