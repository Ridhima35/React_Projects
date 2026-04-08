import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full flex flex-col p-6 pt-10">
      <div className="mb-8">
        <h1 className="text-[28px] leading-tight font-medium text-popx-text">
          Create your<br />PopX account
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-6">
        <TextInput
          label="Full Name"
          name="fullName"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Phone number"
          name="phone"
          placeholder="Marry Doe"
          value={formData.phone}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Email address"
          name="email"
          type="email"
          placeholder="Marry Doe"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="Marry Doe"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Company name"
          name="company"
          placeholder="Marry Doe"
          value={formData.company}
          onChange={handleChange}
        />

        <div className="mt-6">
          <label className="text-[13px] text-popx-text mb-3 block">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.isAgency === 'yes' ? 'border-popx-primary' : 'border-gray-300'}`}>
                {formData.isAgency === 'yes' && <div className="w-2.5 h-2.5 bg-popx-primary rounded-full"></div>}
              </div>
              <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === 'yes'} onChange={handleChange} className="hidden" />
              <span className="text-[15px] text-popx-text">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.isAgency === 'no' ? 'border-popx-primary' : 'border-gray-300'}`}>
                {formData.isAgency === 'no' && <div className="w-2.5 h-2.5 bg-popx-primary rounded-full"></div>}
              </div>
              <input type="radio" name="isAgency" value="no" checked={formData.isAgency === 'no'} onChange={handleChange} className="hidden" />
              <span className="text-[15px] text-popx-text">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="pt-4 pb-6 mt-auto bg-popx-bg">
        <Button variant="primary" onClick={() => navigate('/profile')}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Signup;
