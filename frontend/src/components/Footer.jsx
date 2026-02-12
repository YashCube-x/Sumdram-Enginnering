import { Link } from 'react-router-dom';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Machinery', path: '/machinery' },
  { name: 'Request Quote', path: '/quote' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  { name: 'CNC Machining', path: '/services' },
  { name: 'Lathe Machine Work', path: '/services' },
  { name: 'Drilling Services', path: '/services' },
  { name: 'Milling Services', path: '/services' },
  { name: 'Custom Job Work', path: '/services' },
  { name: 'Contract Based Work', path: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-dark-950 text-lg transition-transform duration-300 group-hover:scale-110">
                SE
              </div>
              <div>
                <span className="text-lg font-bold text-white">Sundaram</span>
                <span className="text-lg font-bold text-accent ml-1">Engineering</span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              Precision machining and job-work services in Pune. CNC, Lathe, Drilling & Milling — delivering quality since day one.
            </p>
            <div className="flex flex-col gap-2 text-sm text-dark-400">
              <div className="flex items-center gap-2">
                <HiLocationMarker className="text-accent flex-shrink-0" />
                <span>Dhayri, Pune, India</span>
              </div>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-accent transition-colors">
                <HiPhone className="text-accent flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </a>
              <a href="mailto:info@sundaramengineering.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <HiMail className="text-accent flex-shrink-0" />
                <span>info@sundaramengineering.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-dark-400 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-dark-400 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h3>
            <p className="text-dark-400 text-sm mb-4">
              Have a project in mind? Request a quote today and let us bring your designs to life.
            </p>
            <Link to="/quote" className="btn-primary text-sm">
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sundaram Engineering. All rights reserved.
          </p>
          <p className="text-dark-600 text-xs">
            Precision • Quality • Reliability
          </p>
        </div>
      </div>
    </footer>
  );
}
