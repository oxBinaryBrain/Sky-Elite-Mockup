const Story = () => {
  return (
    <section id="story" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#202A36] leading-none tracking-tighter mb-6">
              Redefining<br />
              <span className="text-gray-500">Luxury Travel</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded with a vision to make private aviation accessible to those who 
              demand excellence, SkyElite has transformed the way discerning travelers 
              experience the skies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe that exceptional service shouldn't be reserved for the few. 
              Our curated fleet and dedicated concierge team ensure every journey 
              exceeds expectations.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-semibold text-[#202A36]">500+</p>
                <p className="text-sm text-gray-600 mt-1">Aircraft Available</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#202A36]">50K+</p>
                <p className="text-sm text-gray-600 mt-1">Flights Completed</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#202A36]">98%</p>
                <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80"
                alt="Private jet interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#202A36] text-white p-6 rounded-xl">
              <p className="text-3xl font-semibold">15+</p>
              <p className="text-sm text-gray-300">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
