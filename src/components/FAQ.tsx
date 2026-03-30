import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How far in advance do I need to book?',
      answer:
        'We recommend booking at least 24-48 hours in advance for the best aircraft availability. However, we can arrange flights with as little as 4-6 hours notice for urgent travel needs.',
    },
    {
      question: 'What is included in the hourly rate?',
      answer:
        'Our hourly rates include the aircraft, crew, fuel, standard catering, and ground transportation at your destination. Premium catering requests and special amenities may incur additional charges.',
    },
    {
      question: 'Can I bring pets on board?',
      answer:
        'Absolutely. We welcome pets on all our flights. We simply ask that you inform us at booking so we can ensure appropriate accommodations are made for your furry companions.',
    },
    {
      question: 'What happens if my plans change?',
      answer:
        'We understand plans can shift. Our flexible booking policy allows modifications up to 24 hours before departure without penalty. Cancellations within 24 hours may incur a fee.',
    },
    {
      question: 'How do I become a member?',
      answer:
        'Becoming a SkyElite member is simple. Contact our membership team for a brief consultation, and we\'ll design a program that fits your travel frequency and preferences.',
    },
    {
      question: 'What safety certifications do you maintain?',
      answer:
        'All our operator partners hold ARGUS and Wyvern ratings—the highest safety certifications in private aviation. Every aircraft undergoes rigorous maintenance exceeding FAA requirements.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#202A36] leading-none tracking-tighter mb-6">
            Common<br />
            <span className="text-gray-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about flying with SkyElite.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-[#202A36] pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-gray-600">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-6 py-3 rounded-full bg-[#202A36] text-white font-medium hover:bg-[#1a2229] transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
