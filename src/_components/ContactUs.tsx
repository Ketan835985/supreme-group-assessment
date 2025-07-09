import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="text-white">
            <h2 className="text-4xl font-light mb-2">Get in touch</h2>
            <div className="w-12 h-0.5 bg-white mb-8"></div>
            
            <div className="space-y-8">
              <div>
                <p className="text-blue-100 mb-4">For general enquiries</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-medium mb-1">Address :</h3>
                    <p className="text-blue-100">110, 16th Road, Chembur, Mumbai – 400071</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone :</h3>
                    <p className="text-blue-100">+91 22 25208422</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-1">E-mail :</h3>
                    <p className="text-blue-100">info@supremegroup.co.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-blue-400 text-white placeholder-blue-200 py-3 px-0 focus:outline-none focus:border-white transition-colors duration-200"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-blue-400 text-white placeholder-blue-200 py-3 px-0 focus:outline-none focus:border-white transition-colors duration-200"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-blue-400 text-white placeholder-blue-200 py-3 px-0 focus:outline-none focus:border-white transition-colors duration-200"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-blue-400 text-white placeholder-blue-200 py-3 px-0 focus:outline-none focus:border-white transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;