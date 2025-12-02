import React, { useState } from 'react';
import Button from './ui/Button';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Google Apps Script Web App URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySXiDPEVXSYrfiT4PmHMpNZhclA4TSwcOl4diWqC7YeGTQajYjHn_oBueuBO9hDB8T/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Use URLSearchParams to send data as application/x-www-form-urlencoded
      // This matches the e.parameter expectation in the Google Apps Script
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('phone', formData.phone);
      params.append('message', formData.message);

      // Using mode: 'no-cors' is necessary for Google Apps Script Web Apps when called from client-side JS
      // to avoid CORS errors. Note: This means we get an opaque response and cannot read the JSON result,
      // but the request will be successfully sent to the server.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      });

      // Since we use no-cors, we assume success if no network error occurs
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full bg-aster-cream">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left: Contact Info */}
        <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-aster-black flex flex-col justify-between min-h-[500px]">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8">
              Let's <br/>
              <span className="italic text-aster-pink drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Work</span> <br/>
              Together.
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Whether you need a creative partner for your next ad campaign or an event organizer, I'm just a message away.
            </p>
          </div>
          
          <div className="mt-12 space-y-4">
             <div>
                <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Email</span>
                <a href="mailto:hello@yuting.com" className="text-xl font-medium hover:text-aster-pink transition-colors">hello@yuting.peng</a>
             </div>
             <div>
                <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Social</span>
                <a href="https://instagram.com/yutin._._" target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-aster-pink transition-colors">@yutin._._</a>
             </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-8 md:p-16 bg-white flex flex-col justify-center relative">
          
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center h-full animate-fade-in-up">
              <div className="w-16 h-16 bg-aster-pink rounded-full flex items-center justify-center mb-6 border border-aster-black">
                 <CheckCircle2 className="w-8 h-8 text-aster-black" />
              </div>
              <h3 className="font-serif text-3xl italic mb-4">Message Sent!</h3>
              <p className="text-gray-600 mb-8 max-w-xs">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <Button onClick={() => setStatus('idle')} variant="outline">
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`space-y-8 transition-opacity duration-300 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="group">
                <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500 group-focus-within:text-aster-pink transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-aster-black transition-colors disabled:cursor-not-allowed"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500 group-focus-within:text-aster-pink transition-colors">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-aster-black transition-colors disabled:cursor-not-allowed"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500 group-focus-within:text-aster-pink transition-colors">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-aster-black transition-colors resize-none disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                 <Button type="submit" className="w-full md:w-auto" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <span className="flex items-center">
                        <Loader2 className="animate-spin mr-2 w-4 h-4" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                 </Button>
                 
                 {status === 'error' && (
                    <div className="flex items-center text-red-500 text-sm mt-2">
                       <AlertCircle className="w-4 h-4 mr-2" />
                       <span>Something went wrong. Please try again or email me directly.</span>
                    </div>
                 )}
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;