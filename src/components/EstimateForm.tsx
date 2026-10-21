import { useState } from 'react';
import { Phone, Mail, Shield, CheckCircle2, Clock, Send, AlertCircle, RefreshCw, Lock } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/data/business';

interface EstimateFormProps {
  initialService?: string;
  initialCity?: string;
  sourcePage?: string;
  className?: string;
  compact?: boolean;
}

export default function EstimateForm({ initialService = '', initialCity = 'Mission Viejo', sourcePage = 'Website', className = '', compact = false }: EstimateFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || '',
    city: initialCity || 'Mission Viejo',
    urgency: 'standard',
    preferredContact: 'phone',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');
  const [submissionError, setSubmissionError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    
    // Clean phone numbers
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for dispatch';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select the electrical service needed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError('');

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    // Simulate reliable dispatch submission
    setTimeout(() => {
      setSubmitting(false);
      const randomId = 'UGE-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationId(randomId);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setConfirmationId('');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      city: 'Mission Viejo',
      urgency: 'standard',
      preferredContact: 'phone',
      notes: '',
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl p-6 md:p-8 border-2 border-primary-500 shadow-xl ${className}`}>
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 border border-primary-200">
            Estimate Request Confirmed
          </span>
          <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">
            Thank You, {formData.name}!
          </h3>
          <p className="text-dark-600 text-sm max-w-md mx-auto mb-6">
            Your estimate request has been logged. Our licensed electrical dispatch coordinator in Mission Viejo will contact you within <strong className="text-dark-900">1 business hour</strong>.
          </p>

          <div className="bg-dark-50 rounded-xl p-4 border border-dark-200 max-w-md mx-auto mb-6 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-dark-400">Request ID:</span>
              <span className="font-mono font-bold text-dark-800">{confirmationId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Requested Service:</span>
              <span className="font-medium text-dark-800">{formData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Service Location:</span>
              <span className="font-medium text-dark-800">{formData.city}, CA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-400">Preferred Contact:</span>
              <span className="font-medium text-dark-800 capitalize">{formData.preferredContact} ({formData.phone})</span>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl max-w-md mx-auto mb-6 text-xs text-amber-900 flex items-start gap-3 text-left">
            <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold mb-0.5">Need immediate emergency assistance?</strong>
              Sparking, power loss or burning smell? Do not wait for email. Call our 24/7 hotline directly:
              <a href={`tel:${BUSINESS.phoneRaw}`} className="block mt-1 font-bold text-primary-700 hover:underline">
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-dark-500 hover:text-primary-600 text-sm font-medium transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-dark-100 overflow-hidden ${className}`}>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-dark-900 to-dark-950 p-6 text-white border-b border-primary-500/30">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-primary-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Shield className="w-3.5 h-3.5" />
              Licensed CA #999000 · Free Estimates
            </span>
            <h3 className="text-xl md:text-2xl font-display font-bold">
              Request Your Free Electrical Estimate
            </h3>
          </div>
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-xs text-dark-300">Fast Response SLA</span>
            <span className="text-xs font-bold text-primary-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Under 1 Hour
            </span>
          </div>
        </div>
        <p className="text-xs text-dark-300 mt-2">
          Serving Mission Viejo & all South Orange County communities. No hidden fees, upfront pricing guaranteed.
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
        {submissionError && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {submissionError}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-dark-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John Miller"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                errors.name ? 'border-red-400 bg-red-50/30' : 'border-dark-200 bg-dark-50/50'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-dark-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. (949) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-dark-200 bg-dark-50/50'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-dark-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
                errors.email ? 'border-red-400 bg-red-50/30' : 'border-dark-200 bg-dark-50/50'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* City / Service Location */}
          <div>
            <label className="block text-xs font-semibold text-dark-700 mb-1.5">
              Service City / ZIP Code
            </label>
            <select
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-dark-200 bg-dark-50/50 text-sm text-dark-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            >
              <option value="Mission Viejo">Mission Viejo (92691, 92692)</option>
              <option value="Irvine">Irvine (92602-92620)</option>
              <option value="Laguna Niguel">Laguna Niguel (92677)</option>
              <option value="Lake Forest">Lake Forest (92630)</option>
              <option value="Aliso Viejo">Aliso Viejo (92656)</option>
              <option value="Laguna Hills">Laguna Hills (92653)</option>
              <option value="Dana Point">Dana Point (92629)</option>
              <option value="San Juan Capistrano">San Juan Capistrano (92675)</option>
              <option value="Rancho Santa Margarita">Rancho Santa Margarita (92688)</option>
              <option value="Newport Beach">Newport Beach (92660)</option>
              <option value="Other Orange County Area">Other South Orange County City</option>
            </select>
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-xs font-semibold text-dark-700 mb-1.5">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-dark-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
              errors.service ? 'border-red-400 bg-red-50/30' : 'border-dark-200 bg-dark-50/50'
            }`}
          >
            <option value="">-- Select Required Electrical Service --</option>
            <option value="Residential Electrical">Residential Electrician / Home Rewiring</option>
            <option value="Commercial Electrical">Commercial Electrical Contracting / Tenant Buildout</option>
            <option value="Electrical Repair & Troubleshooting">Electrical Repair & Troubleshooting</option>
            <option value="24/7 Emergency Service">24/7 Emergency Electrical Repair (Urgent)</option>
            <option value="Panel Upgrade (200A/400A)">Electrical Panel Upgrade (100A to 200A/400A)</option>
            <option value="EV Charger Installation">Level 2 EV Charger Installation (Tesla, JuiceBox, etc.)</option>
            <option value="Lighting Installation & LED Retrofit">Lighting Installation & LED Retrofit</option>
            <option value="Outlet, Switch & GFCI Repair">Outlet, Switch & GFCI Repair/Installation</option>
            <option value="Ceiling Fan Installation">Ceiling Fan Installation & Box Bracing</option>
            <option value="Electrical Inspection">Electrical Safety / Real Estate Inspection</option>
            <option value="Other Electrical Work">Other Custom Electrical Project</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Urgency & Contact Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label className="block text-xs font-semibold text-dark-700 mb-1.5">
              How Soon Do You Need Service?
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'emergency', label: 'Urgent / Today' },
                { id: 'standard', label: '1 - 3 Days' },
                { id: 'flexible', label: 'Flexible' },
              ].map((u) => (
                <button
                  type="button"
                  key={u.id}
                  onClick={() => setFormData({ ...formData, urgency: u.id })}
                  className={`py-2 px-2 text-center rounded-lg border font-medium transition-all ${
                    formData.urgency === u.id
                      ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm'
                      : 'border-dark-200 bg-white text-dark-600 hover:border-dark-300'
                  }`}
                >
                  {u.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-dark-700 mb-1.5">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'phone', label: 'Phone Call' },
                { id: 'text', label: 'Text Message' },
                { id: 'email', label: 'Email' },
              ].map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setFormData({ ...formData, preferredContact: c.id })}
                  className={`py-2 px-2 text-center rounded-lg border font-medium transition-all ${
                    formData.preferredContact === c.id
                      ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm'
                      : 'border-dark-200 bg-white text-dark-600 hover:border-dark-300'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Notes */}
        <div>
          <label className="block text-xs font-semibold text-dark-700 mb-1.5">
            Brief Project Details (Optional)
          </label>
          <textarea
            rows={compact ? 2 : 3}
            placeholder="Describe your issue or project (e.g. breaker tripping, new EV charger location, panel age, etc.)..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-dark-200 bg-dark-50/50 text-sm text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
          />
        </div>

        {/* Response Expectations Box */}
        <div className="bg-primary-50/70 border border-primary-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-primary-900">
          <Clock className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Response Time Commitment:</span> We review and respond to all estimate requests within <strong>1 business hour</strong> (Mon-Fri 7AM - 5PM). For urgent electrical hazards, please call directly.
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 active:scale-[0.99] text-white rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:shadow-primary-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Transmitting to Dispatch Coordinator...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Estimate Request
            </>
          )}
        </button>

        {/* Privacy Notice */}
        <div className="pt-2 text-center">
          <p className="text-dark-400 text-[11px] leading-relaxed flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3 text-dark-400 flex-shrink-0" />
            <span>
              <strong>Privacy Notice:</strong> We respect your privacy. Your information is 100% confidential, stored securely, and only used to coordinate your electrical estimate. Never sold or shared.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
