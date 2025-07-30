import React, { useState } from 'react';
import register from "../assets/register.jpg"

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    mobile: '',
    email: '',
    website: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("You must agree to the privacy policy.");
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Registration successful!');
        setFormData({
          firstName: '', lastName: '', jobTitle: '', company: '',
          mobile: '', email: '', website: '', agreement: false
        });
      } else {
        alert(data.message || 'Error occurred');
      }
    }catch (error) {
  console.error("Server error:", error);
  alert('Server error. Please try again later.');
}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white p-6">
    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row items-center justify-center">
      

<div className="hidden md:block md:w-1/2 p-4 text-center">
  <h2 className="text-3xl font-bold mb-2 text-pink-400">Register Now</h2>
  <p className="mb-4 text-gray-300">Join us for an unforgettable experience!</p>
  <img
    src={register}
    alt="Event"
    className="rounded-xl shadow-lg mx-auto"
  />
</div>


      {/* Right Side Form */}
      <form onSubmit={handleSubmit} className="md:w-1/2 w-full px-4">
        {['firstName', 'lastName', 'jobTitle', 'company', 'mobile', 'email', 'website'].map((field, idx) => (
          <input
            key={idx}
            type="text"
            name={field}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            value={formData[field]}
            onChange={handleChange}
            className="w-full mb-4 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none"
            required
          />
        ))}

        <div className="flex items-start mb-4">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mt-1 mr-2"
          />
          <p className="text-sm text-gray-300">
            By filling out the registration form to attend our event, you agree and consent to&nbsp;
            <a href="#" className="text-pink-400 underline">Cogent Solutions Privacy Policy</a>.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  );
};

export default Register;
