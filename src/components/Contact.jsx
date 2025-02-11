import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Submit the form
      const form = e.target;
      form.submit();
    }
  };

  return (
    <div id="contact" className='max-w-[1200px] mx-auto sm:py-py-20 p-5'>
      <div className=' mx-auto'>
        <div className="mt-6 primary-color w-[100%] rounded-md">
          <div className="p-10">
            <form action="https://getform.io/f/bwnndrla" method="POST" onSubmit={handleSubmit}>
              <div className='text-center'>
                <h2 className='pb-8 text-4xl font-bold leading-tight font-serif animate-wiggle'>Contact Me</h2>
              </div>
              <div className="grid grid-col-1 sm:grid-col-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name"
                      className="bg-gray w-full px-4 py-4 border border-black-700 rounded-md focus:outline-none focus:border-pint-600"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-white">{errors.name}</p>}
                  </div>
                </div> 

                <div>
                  <div className="mt-2.5">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email address"
                      className="bg-gray w-full px-4 py-4 border border-black-700 rounded-md focus:outline-none focus:border-pint-600"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-white">{errors.email}</p>}
                  </div>
               </div>
              </div>

              <div className="sm:col-span-2">
                  <div className="mt-2.5">
                      <textarea 
                        name="message" 
                        placeholder="Message"
                        className="bg-gray w-full px-4 py-4 border border-black-700 rounded-md focus:outline-none focus:border-pint-600"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                      >
                      </textarea>
                      {errors.message && <p className="text-white">{errors.message}</p>}
                  </div>
              </div> 

              <div className=" mt-5">
                  <button type="submit"
                        className="text-xl w-[120px] ml-[40%] bg-white border-2 border-gray-300 p-4 mt-2 rounded-lg hover:bg-gray-600 hover:text-white font-extrabold text-gray-800 transition-colors duration-200">
                          Submit
                        </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
