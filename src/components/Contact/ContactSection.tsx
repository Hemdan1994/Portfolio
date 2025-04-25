
import React, { useState } from 'react';
import PageTransition from '../Layout/PageTransition';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <PageTransition className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-title !text-center mx-auto after:mx-auto">
          <span className="text-highlight mr-2">05.</span>
          Contact
        </h2>
        
        <p className="text-slate-light mb-12 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        {submitStatus === 'success' ? (
          <div className="bg-highlight/10 border border-highlight text-highlight p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Thank you for your message!</h3>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-navy-light border border-slate/30 text-slate-light focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-navy-light border border-slate/30 text-slate-light focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-navy-light border border-slate/30 text-slate-light focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary inline-flex items-center gap-2 px-8 py-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-highlight border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </PageTransition>
  );
};

export default ContactSection;
