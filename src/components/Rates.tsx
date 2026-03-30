import { Check } from 'lucide-react';

const Rates = () => {
  const plans = [
    {
      name: 'Light Jet',
      description: 'Perfect for short trips and small groups',
      price: '$4,500',
      unit: '/hour',
      features: [
        'Up to 6 passengers',
        'Range: 1,500 miles',
        'WiFi included',
        'Complimentary catering',
        'Ground transportation',
      ],
      popular: false,
    },
    {
      name: 'Midsize Jet',
      description: 'Ideal for coast-to-coast travel',
      price: '$7,200',
      unit: '/hour',
      features: [
        'Up to 8 passengers',
        'Range: 2,800 miles',
        'High-speed WiFi',
        'Premium catering',
        'Concierge service',
        'Flexible scheduling',
      ],
      popular: true,
    },
    {
      name: 'Heavy Jet',
      description: 'Ultimate luxury for long-range flights',
      price: '$12,000',
      unit: '/hour',
      features: [
        'Up to 14 passengers',
        'Range: 4,000+ miles',
        'Dedicated flight attendant',
        'Private sleeping quarters',
        'Gourmet dining',
        'VIP ground services',
      ],
      popular: false,
    },
  ];

  return (
    <section id="rates" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
            Rates
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#202A36] leading-none tracking-tighter mb-6">
            Transparent<br />
            <span className="text-gray-500">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            No hidden fees. No surprises. Just premium service at fair rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-[#202A36]' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#202A36] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-[#202A36] mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold text-[#202A36]">
                  {plan.price}
                </span>
                <span className="text-gray-600">{plan.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <Check size={18} className="text-[#202A36] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  plan.popular
                    ? 'bg-[#202A36] text-white hover:bg-[#1a2229]'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rates;
