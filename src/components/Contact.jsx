import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const contactHeadingRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInLeft');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = contactHeadingRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setSubmitting(true);

    const serviceID = 'service_zfszc8e';
    const templateID = 'template_2uu0c48';
    const publicKey = 'xYxaRf_0yrxW_GecZ';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        formRef.current.reset();
        setSubmitting(false);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus('Failed to send message: ' + err.text);
        setSubmitting(false);
      });
  };

  return (
    <div id="contact" className="max-w-[1200px] mx-auto my-8 sm:py-20 p-5">
      <div className="mx-auto">
        <div className="mt-6 primary-color w-full rounded-md">
          <div className="p-10">
            <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="text-center">
                <h2 ref={contactHeadingRef} className="pb-8 text-4xl font-bold leading-tight font-serif">
                  Contact Me
                </h2>
                {status && <p className="text-white mt-2">{status}</p>}
              </div>

              <div className="grid grid-col-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    className="bg-black/40 backdrop-blur-sm w-full px-4 py-4  rounded-md focus:outline-dashed focus:border-pint-600 placeholder:text-white text-white"
                  />
                </div>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email address"
                    required
                    className="bg-black/40 backdrop-blur-sm w-full px-4 py-4  rounded-md focus:outline-dashed focus:border-pint-600 placeholder:text-white text-white"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 mt-2.5">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows="4"
                  className="bg-black/40 backdrop-blur-sm w-full px-4 py-4  rounded-md focus:outline-dashed focus:border-pint-600 placeholder:text-white text-white"
                ></textarea>
              </div>

              <div className="mt-5 flex justify-center w-full">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`text-3xl w-[140px] p-2 rounded-lg font-extrabold transition-all duration-300 
                    bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-600 text-gray-800 shadow-lg 
                    border-4 border-transparent 
                    animate-pulse 
                    focus:outline-none focus:ring-4 focus:ring-pink-400/40 
                    hover:from-yellow-400 hover:to-pink-500 
                    ${submitting ? 'opacity-60 cursor-not-allowed' : 'glow-button'}`}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Optional: Add a custom glow effect if you want even more attention
// Add this CSS to your index.css or a global stylesheet:
/*
.glow-button {
  box-shadow: 0 0 16px 4px #f472b6, 0 0 32px 8px #fde68a, 0 0 64px 16px #f472b6;
}
*/
export default Contact;
