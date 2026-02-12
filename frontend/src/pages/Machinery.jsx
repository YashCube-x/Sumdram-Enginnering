import ImagePlaceholder from '../components/ImagePlaceholder';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const machines = [
  {
    name: 'CNC Machines',
    desc: 'Our computer numerical control machines deliver unmatched precision for complex parts. Capable of multi-axis operations, these machines handle intricate geometries with tight tolerances.',
    specs: ['Multi-axis capability', 'High precision (±0.01mm)', 'Automated tool changing', 'Large bed capacity'],
  },
  {
    name: 'Lathe Machines',
    desc: 'Industrial-grade lathe machines for precision turning operations. From small shafts to large diameter components, our lathes handle a wide range of turning requirements.',
    specs: ['Conventional & CNC options', 'Various chuck sizes', 'Heavy-duty spindle', 'Thread cutting capability'],
  },
  {
    name: 'Drilling Machines',
    desc: 'Radial and pillar drilling machines for accurate hole-making operations. Equipped for deep hole drilling, tapping, reaming, and counter boring applications.',
    specs: ['Radial drilling up to 50mm', 'Precision spindle', 'Auto feed mechanism', 'Multi-speed gearbox'],
  },
  {
    name: 'Milling Machines',
    desc: 'Vertical and horizontal milling machines for flat surfaces, slots, pockets, and complex contours. Our milling department handles both conventional and advanced milling operations.',
    specs: ['Vertical & horizontal', 'Digital readout (DRO)', 'Power feed on all axes', 'Indexing head available'],
  },
];

export default function Machinery() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Equipment</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Our <span className="text-accent">Machinery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-dark-300 text-lg">
            State-of-the-art machines maintained to the highest standards, ensuring precision and reliability in every operation.
          </p>
        </div>
      </section>

      {/* Machines */}
      <section className="py-16 lg:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {machines.map((machine, idx) => (
              <div
                key={machine.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <ImagePlaceholder label={`${machine.name} Image`} height="h-72" />
                </div>
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl font-bold text-white mb-4">{machine.name}</h2>
                  <p className="text-dark-300 leading-relaxed mb-6">{machine.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {machine.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-sm text-dark-200">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="bg-dark-800/50 border border-dark-700 rounded-2xl p-10">
              <h2 className="text-2xl font-bold text-white mb-3">Want to See Our Workshop?</h2>
              <p className="text-dark-300 mb-6 max-w-xl mx-auto">
                Contact us to schedule a visit to our facility in Dhayri, Pune. See our machines in action.
              </p>
              <Link to="/contact" className="btn-primary gap-2">
                Schedule a Visit
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
