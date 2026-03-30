const Hero = () => {
  return (
    <section id="start" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center -mt-20 px-4">
            {/* Label */}
            <p className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              PRIVATE JETS
            </p>

            {/* Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter">
              <span className="block text-gray-300">Premium.</span>
              <span className="block text-white" style={{ marginTop: '-12px' }}>
                Accessible.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto mt-4">
              Your dedication deserves recognition.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-colors border border-white/30">
                Discover
              </button>
              <button className="px-6 py-3 rounded-full bg-white text-[#202A36] font-medium hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
