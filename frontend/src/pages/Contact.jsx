import { useState } from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import api from '../api/axios';

const contactInfo = [
  {
    icon: HiLocationMarker,
    title: 'Address',
    detail: 'Dhayri, Pune, Maharashtra, India',
    sub: 'Visit our workshop',
  },
  {
    icon: HiPhone,
    title: 'Phone',
    detail: '+91 XXXXX XXXXX',
    sub: 'Mon-Sat, 9AM - 7PM',
  },
  {
    icon: HiMail,
    title: 'Email',
    detail: 'info@sundaramengineering.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: HiClock,
    title: 'Working Hours',
    detail: 'Mon - Sat: 9:00 AM - 7:00 PM',
    sub: 'Sunday: Closed',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await api.post('/contact', formData);
      setStatus({ type: 'success', message: res.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      const msg = error.response?.data?.message || 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Banner */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Reach Out</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-dark-300 text-lg">
            Have questions or need a quote? We're here to help. Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4 p-5 bg-dark-800/50 border border-dark-700 rounded-xl card-hover">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{info.title}</h3>
                    <p className="text-dark-200 text-sm">{info.detail}</p>
                    <p className="text-dark-500 text-xs mt-1">{info.sub}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/XXXXXXXXXX?text=${encodeURIComponent('Hello Sundaram Engineering, I want to enquire about machining work.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/15 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold text-sm mb-1">WhatsApp Us</h3>
                  <p className="text-dark-300 text-sm">Quick response on WhatsApp</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-dark-800/50 border border-dark-700 rounded-2xl p-8 sm:p-10">
                <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg mb-6 ${
                      status.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <HiExclamationCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or requirements..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
