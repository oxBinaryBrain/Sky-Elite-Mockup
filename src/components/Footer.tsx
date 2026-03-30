import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#202A36] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-semibold">
              SkyElite
            </a>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Premium private aviation for those who demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Private Charter',
                'Group Travel',
                'Cargo Solutions',
                'Medical Evacuation',
                'Corporate Travel',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span>+1 (888) 555-JETS</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>hello@skyelite.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Teterboro, NJ 05653</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SkyElite. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
