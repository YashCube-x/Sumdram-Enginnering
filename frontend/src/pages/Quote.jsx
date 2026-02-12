import { useState } from 'react';
import { HiCloudUpload, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import api from '../api/axios';

const materials = [
  'Select Material',
  'Mild Steel (MS)',
  'Stainless Steel (SS)',
  'Aluminium',
  'Brass',
  'Copper',
  'Cast Iron',
  'Plastic / Nylon',
  'Other',
];

export default function Quote() {
  const [formData, setFormData] = useState({
    partDescription: '',
    material: '',
    quantity: '',
    deliveryDate: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const data = new FormData();
      data.append('partDescription', formData.partDescription);
      data.append('material', formData.material);
      data.append('quantity', formData.quantity);
      data.append('deliveryDate', formData.deliveryDate);
      if (file) {
        data.append('drawingFile', file);
      }

      const res = await api.post('/quote', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setStatus({ type: 'success', message: res.data.message || 'Quote request submitted successfully!' });
      setFormData({ partDescription: '', material: '', quantity: '', deliveryDate: '' });
      setFile(null);
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
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Get Started</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Request a <span className="text-accent">Quote</span>
          </h1>
          <p className="max-w-2xl mx-auto text-dark-300 text-lg">
            Fill in the details below and our team will get back to you with a competitive quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-dark-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-800/50 border border-dark-700 rounded-2xl p-8 sm:p-10">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Part Description */}
              <div>
                <label htmlFor="partDescription">
                  Part Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="partDescription"
                  name="partDescription"
                  rows={4}
                  value={formData.partDescription}
                  onChange={handleChange}
                  placeholder="Describe the part or component you need machined..."
                  required
                />
              </div>

              {/* Material */}
              <div>
                <label htmlFor="material">
                  Material <span className="text-red-400">*</span>
                </label>
                <select
                  id="material"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  required
                >
                  {materials.map((m) => (
                    <option key={m} value={m === 'Select Material' ? '' : m} disabled={m === 'Select Material'}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity & Delivery Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity">
                    Quantity <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="deliveryDate">
                    Required Delivery Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label>Drawing Upload (Optional)</label>
                <div className="relative">
                  <input
                    type="file"
                    id="drawingFile"
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg,.dxf,.step,.stp"
                    className="hidden"
                  />
                  <label
                    htmlFor="drawingFile"
                    className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-dark-600 rounded-lg cursor-pointer hover:border-accent/50 hover:bg-dark-800/80 transition-all duration-200"
                  >
                    <HiCloudUpload className="w-8 h-8 text-dark-400" />
                    <div className="text-center">
                      <span className="text-dark-200 text-sm font-medium block">
                        {file ? file.name : 'Click to upload drawing'}
                      </span>
                      <span className="text-dark-500 text-xs">
                        PDF, PNG, JPG, DXF, STEP (Max 10MB)
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
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
                    Submitting...
                  </span>
                ) : (
                  'Submit Quote Request'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
