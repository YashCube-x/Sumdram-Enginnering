import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight, HiCog, HiCube, HiLightningBolt, HiViewGrid, HiAdjustments, HiClipboardList } from 'react-icons/hi';

const servicesPreview = [
  { icon: HiCog, title: 'CNC Machining', desc: 'High-precision computer-controlled machining for complex parts and components.' },
  { icon: HiCube, title: 'Lathe Work', desc: 'Expert turning operations for cylindrical parts with tight tolerances.' },
  { icon: HiLightningBolt, title: 'Drilling Services', desc: 'Precision drilling for production runs and custom one-off projects.' },
  { icon: HiViewGrid, title: 'Milling Services', desc: 'Advanced milling capabilities for flat surfaces, slots, and contours.' },
  { icon: HiAdjustments, title: 'Custom Job Work', desc: 'Tailored machining solutions for unique and specialized requirements.' },
  { icon: HiClipboardList, title: 'Contract Work', desc: 'Reliable long-term contract manufacturing partnerships.' },
];

const machines = [
  { name: 'CNC Machines', desc: 'Computer Numerical Control precision machining', image: '/images/cnc-machining.png' },
  { name: 'Lathe Machines', desc: 'Precision turning and shaping operations', image: '/images/lathe-machine.png' },
  { name: 'Drilling Machines', desc: 'Industrial-grade drilling capabilities', image: '/images/drilling-machine.png' },
  { name: 'Milling Machines', desc: 'Multi-axis milling and contouring', image: '/images/milling-machine.png' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.png"
            alt="CNC Workshop"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-dark-950/75"></div>
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-transparent to-dark-950/90"></div>
        </div>
        {/* Subtle radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Precision Engineering in Pune
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Sundaram
              <span className="block text-accent">Engineering</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-dark-200 mb-10 leading-relaxed drop-shadow-lg">
              Precision CNC, Lathe, Drilling & Milling Services in Pune.
              Quality machining solutions for your manufacturing needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/quote" className="btn-primary text-base px-8 py-4 gap-2">
                Request a Quote
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/XXXXXXXXXX?text=${encodeURIComponent('Hello Sundaram Engineering, I want to enquire about machining work.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-4 gap-2 !border-green-500 !text-green-400 hover:!bg-green-500 hover:!text-white backdrop-blur-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '50+', label: 'Active Clients' },
              { value: '99%', label: 'Quality Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-dark-900/30 backdrop-blur-sm rounded-xl border border-dark-700/30">
                <div className="text-3xl sm:text-4xl font-black text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-dark-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 lg:py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-dark-400">
              From precision CNC machining to custom job work, we deliver quality results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPreview.map((service) => (
              <div
                key={service.title}
                className="bg-dark-800/50 border border-dark-700 rounded-xl p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline text-sm gap-2">
              View All Services
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Machinery Highlight Section */}
      <section className="py-20 lg:py-28 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Equipment</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">State-of-the-Art Machinery</h2>
            <p className="max-w-2xl mx-auto text-dark-400">
              Equipped with modern machines to handle projects of any complexity and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {machines.map((machine) => (
              <div key={machine.name} className="bg-dark-800/50 border border-dark-700 rounded-xl overflow-hidden card-hover group">
                <div className="h-44 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white mb-1">{machine.name}</h3>
                  <p className="text-dark-400 text-sm">{machine.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/machinery" className="btn-outline text-sm gap-2">
              View All Machinery
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/metal-parts.png"
            alt="Machined Parts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote for your machining requirements. We provide fast turnaround, competitive pricing, and unmatched quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote" className="btn-primary text-base px-8 py-4 gap-2">
              Get a Free Quote
              <HiArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
