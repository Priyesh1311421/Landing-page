import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [warning, setWarning] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
      setWarning('Please fill out all fields.');
      return;
    }
    // Process form submission logic here
    console.log('Form Data Submitted: ', formData);
    // Clear warning after successful submission
    setWarning('');
  };

  return (
    <div className="w-full max-w-lg my-8 bg-white">
        <div className='px-4 font-bold'>
            <h1 className='text-center text-[40px] font-bold '>
                Claim your spot at my 100% free workshop
            </h1>
        </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg">
        {warning && <p className="text-red-500 mb-4">{warning}</p>}
        <div className={`mb-4 ${warning ? 'border-red-500' : ''}`}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={`appearance-none text-[18px] border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${warning ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`mb-4 ${warning ? 'border-red-500' : ''}`}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={`appearance-none text-[18px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${warning ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`mb-4 ${warning ? 'border-red-500' : ''}`}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`appearance-none text-[18px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${warning ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`mb-4 ${warning ? 'border-red-500' : ''}`}>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`appearance-none text-[18px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${warning ? 'border-red-500' : ''}`}
          />
          <p className="text-gray-600 text-sm mt-4">NOTE: Please don't add any special characters to your phone number.</p>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default MyForm;
