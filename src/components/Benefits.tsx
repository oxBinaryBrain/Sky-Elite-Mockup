import { Clock, Shield, Globe, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'On Your Schedule',
      description:
        'Depart when you want. No rigid timetables. Your flight adapts to your calendar, not the other way around.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description:
        'ARGUS and Wyvern certified operators. Every aircraft exceeds FAA maintenance standards. Your safety is non-negotiable.',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description:
        'Access to 5,000+ airports worldwide. Fly closer to your destination and skip the major hub congestion.',
    },
    {
      icon: Sparkles,
      title: 'White Glove Service',
      description:
        'Dedicated concierge from booking to landing. Custom catering, ground transport, and every detail handled.',
    },
  ];

  return (
    <section id="benefits" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
            Benefits
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#202A36] leading-none tracking-tighter mb-6">
            Why Choose<br />
            <span className="text-gray-500">SkyElite</span>
          </h2>
          <p className="text-lg text-gray-600">
            Experience the difference that true dedication to service makes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-[#202A36] rounded-xl flex items-center justify-center mb-6">
                <benefit.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#202A36] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-[#202A36] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white">15min</p>
              <p className="text-sm text-gray-400 mt-2">Average Check-in</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white">24/7</p>
              <p className="text-sm text-gray-400 mt-2">Concierge Support</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white">100%</p>
              <p className="text-sm text-gray-400 mt-2">On-Time Record</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white">5,000+</p>
              <p className="text-sm text-gray-400 mt-2">Airports Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
