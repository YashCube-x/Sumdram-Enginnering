import { HiCog, HiCube, HiLightningBolt, HiViewGrid, HiAdjustments, HiClipboardList, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: HiCog,
    title: 'CNC Machining',
    desc: 'High-precision computer numerical control machining for complex geometries. Our CNC machines deliver parts with exceptional accuracy and repeatability for both prototyping and production.',
    features: ['Tight tolerances up to ±0.01mm', 'Multi-axis machining', 'Complex geometries', 'High repeatability'],
  },
  {
    icon: HiCube,
    title: 'Lathe Machine Work',
    desc: 'Expert turning operations on conventional and CNC lathes. We handle everything from simple shafts to complex turned components with multiple diameters and threading.',
    features: ['OD & ID Turning', 'Threading & Grooving', 'Taper turning', 'Facing & Boring'],
  },
  {
    icon: HiLightningBolt,
    title: 'Drilling Services',
    desc: 'Precision drilling services using radial drilling machines and CNC equipped drills. We handle both single-hole and multi-hole patterns with accurate positioning.',
    features: ['Deep hole drilling', 'Multi-hole patterns', 'Reaming & Tapping', 'Counter boring'],
  },
  {
    icon: HiViewGrid,
    title: 'Milling Services',
    desc: 'Advanced milling capabilities for producing flat surfaces, slots, pockets, and complex contours. Our milling department handles both conventional and climb milling operations.',
    features: ['Face milling', 'Slot & Pocket milling', 'Profile milling', 'Step milling'],
  },
  {
    icon: HiAdjustments,
    title: 'Custom Job Work',
    desc: 'Tailored machining solutions for unique and specialized requirements. Whether you need a single prototype or a small batch of custom parts, we deliver precision results.',
    features: ['One-off prototypes', 'Small batch runs', 'Reverse engineering', 'Design assistance'],
  },
  {
    icon: HiClipboardList,
    title: 'Contract Based Work',
    desc: 'Reliable long-term contract manufacturing partnerships. We offer competitive rates for ongoing production requirements with guaranteed quality and delivery schedules.',
    features: ['Long-term agreements', 'Scheduled deliveries', 'Volume pricing', 'Quality assurance'],
  },
];

export default function Services() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Expertise</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Machining <span className="text-accent">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-dark-300 text-lg">
            Comprehensive machining solutions tailored to meet your manufacturing needs with precision, quality, and reliability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-dark-800/50 border border-dark-700 rounded-xl p-8 card-hover group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-dark-300">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-white mb-3">Need a Custom Solution?</h2>
            <p className="text-dark-300 mb-6 max-w-xl mx-auto">
              Get in touch with our team to discuss your specific machining requirements. We'll provide a detailed quote within 24 hours.
            </p>
            <Link to="/quote" className="btn-primary gap-2">
              Request a Quote
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
