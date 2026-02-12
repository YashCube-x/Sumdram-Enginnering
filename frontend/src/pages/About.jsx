import { HiCheckCircle } from 'react-icons/hi';
import ImagePlaceholder from '../components/ImagePlaceholder';

const highlights = [
  'Precision CNC machining for complex components',
  'Experienced operators with decades of expertise',
  'Custom job work and contract manufacturing',
  'Competitive pricing with fast turnarounds',
  'Strict quality control at every stage',
  'Located in Dhayri, Pune – easily accessible',
];

const values = [
  { title: 'Precision', desc: 'Every part machined to exact specifications with tight tolerances.' },
  { title: 'Quality', desc: 'Rigorous quality checks ensure every component meets the highest standards.' },
  { title: 'Reliability', desc: 'On-time delivery and consistent performance you can count on.' },
  { title: 'Partnership', desc: 'We work closely with our clients to understand and fulfill their needs.' },
];

export default function About() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              Building Precision,<br />Delivering <span className="text-accent">Excellence</span>
            </h1>
            <p className="max-w-3xl mx-auto text-dark-300 text-lg leading-relaxed">
              Sundaram Engineering is a premier machining and job-work workshop located in Dhayri, Pune, India.
              We specialize in CNC machining, lathe work, drilling, and milling services, serving both
              contract work and custom job requirements for industries across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 lg:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-6">
                Trusted Machining Partner in Pune
              </h2>
              <p className="text-dark-300 leading-relaxed mb-6">
                Founded with a vision to provide high-quality machining solutions, Sundaram Engineering
                has grown into a trusted name for precision engineering services. Our workshop is equipped
                with modern CNC machines, lathes, drilling and milling equipment, enabling us to handle
                projects of varying complexity and scale.
              </p>
              <p className="text-dark-300 leading-relaxed mb-8">
                We take pride in our ability to deliver custom parts, prototype components, and production
                runs with consistent quality and competitive turnaround times. Our experienced team
                of machinists and engineers work together to ensure every project meets the highest
                standards of precision.
              </p>

              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-dark-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <ImagePlaceholder label="Workshop Image" height="h-64" />
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder label="Team at Work" height="h-40" />
                <ImagePlaceholder label="Machine Close-up" height="h-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl font-bold text-white mt-3">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={val.title} className="bg-dark-800/50 border border-dark-700 rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-lg">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{val.title}</h3>
                <p className="text-dark-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
